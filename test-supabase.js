// 测试 Supabase 客户端和数据库连接
const { createClient } = require('@supabase/supabase-js');

// Supabase 配置
const supabaseUrl = 'https://mutpgupjpqmemsfavzqh.supabase.co';
const supabaseKey = 'sb_publishable_c6EgDoTkCSKIUY_szQmv6Q_iMUb5bD0';

// 创建 Supabase 客户端
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('测试 Supabase 客户端连接...');
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

// 测试认证
async function testAuth() {
  console.log('\n测试认证功能...');
  try {
    const { data: { session } } = await supabase.auth.getSession();
    console.log('当前会话:', session);
  } catch (error) {
    console.error('认证测试错误:', error);
  }
}

// 测试数据库连接
async function testDatabase() {
  console.log('\n测试数据库连接...');
  try {
    // 尝试获取 notes 表的信息
    console.log('尝试查询 notes 表...');
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('数据库查询错误:', error);
      console.error('错误详情:', JSON.stringify(error, null, 2));
    } else {
      console.log('数据库查询成功:', data);
    }
    
    // 尝试插入一条测试笔记
    console.log('\n尝试插入测试笔记...');
    const { error: insertError } = await supabase
      .from('notes')
      .insert([{ content: '测试笔记' }]);
    
    if (insertError) {
      console.error('数据库插入错误:', insertError);
      console.error('错误详情:', JSON.stringify(insertError, null, 2));
    } else {
      console.log('数据库插入成功');
      
      // 再次查询 notes 表，确认数据已插入
      const { data: updatedData, error: selectError } = await supabase
        .from('notes')
        .select('*');
      
      if (selectError) {
        console.error('再次查询错误:', selectError);
      } else {
        console.log('插入后的数据:', updatedData);
      }
    }
  } catch (error) {
    console.error('数据库测试异常:', error);
    console.error('异常详情:', JSON.stringify(error, null, 2));
  }
}

// 运行测试
async function runTests() {
  await testAuth();
  await testDatabase();
  console.log('\n测试完成！');
}

runTests();

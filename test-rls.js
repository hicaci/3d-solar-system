// 测试 RLS 策略配置
const { createClient } = require('@supabase/supabase-js');

// Supabase 配置
const supabaseUrl = 'https://mutpgupjpqmemsfavzqh.supabase.co';
const supabaseKey = 'sb_publishable_c6EgDoTkCSKIUY_szQmv6Q_iMUb5bD0';

// 创建 Supabase 客户端
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('测试 RLS 策略配置...');

// 检查 Supabase 客户端配置
function checkConfig() {
  console.log('\n检查 Supabase 客户端配置');
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key:', supabaseKey);
  console.log('Supabase Client:', supabase);
}

// 测试数据库表结构
async function checkTableStructure() {
  console.log('\n检查数据库表结构');
  try {
    // 尝试获取表信息
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('检查表结构错误:', error);
    } else {
      console.log('表结构检查成功，notes 表存在');
      console.log('当前数据:', data);
    }
  } catch (err) {
    console.error('检查表结构异常:', err);
  }
}

// 测试认证功能
async function testAuth() {
  console.log('\n测试认证功能');
  try {
    // 检查当前会话
    const { data: { session } } = await supabase.auth.getSession();
    console.log('当前会话:', session);
    
    // 尝试使用服务端密钥创建客户端（用于管理操作）
    console.log('\n尝试使用服务端密钥创建客户端');
    // 注意：这里应该使用服务端密钥，但为了安全起见，我们不在这里硬编码
    // const adminSupabase = createClient(supabaseUrl, 'service_role_key');
  } catch (err) {
    console.error('测试认证异常:', err);
  }
}

// 测试简单的插入操作（使用硬编码的 UUID 格式）
async function testInsert() {
  console.log('\n测试简单的插入操作');
  try {
    // 生成一个有效的 UUID 格式字符串
    const fakeUserId = '00000000-0000-0000-0000-000000000000';
    
    console.log('尝试插入测试数据，user_id:', fakeUserId);
    const { error } = await supabase
      .from('notes')
      .insert([{ content: '测试笔记', user_id: fakeUserId }]);
    
    if (error) {
      console.error('插入错误:', error);
    } else {
      console.log('插入成功');
    }
  } catch (err) {
    console.error('测试插入异常:', err);
  }
}

// 运行测试
async function runTests() {
  checkConfig();
  await checkTableStructure();
  await testAuth();
  await testInsert();
  console.log('\n测试完成！');
}

runTests();

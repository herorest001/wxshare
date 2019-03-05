// 这里应该判断是否存在签名，是否已过期
//（稍后添加）
// 公众号字段
var appID = "wxa2c416de84300ee5";
var appSecret = "bba57000821ac67cbcee3a573db85498";
// 获取access_token
var tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appID+'&secret='+appSecret;
request(tokenUrl, function (error, response, body) {
  if (response.statusCode === 200) {
    body = JSON.parse(body); 
    // 这里我缓存到了global
    global.wxshare.access_token = body.access_token;
    // 获取jsapi_ticket
    // ...
}

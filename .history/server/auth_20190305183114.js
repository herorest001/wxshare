// 这里应该判断是否存在签名，是否已过期
// ...
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
})


// 获取jsapi_ticket
var ticketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + body.access_token + '&type=jsapi';
request(ticket, function (err, response, content) {
  content = JSON.parse(content);
  if (content.errcode == 0) {
    // 这里我缓存到了global
    global.wxshare.jsapi_ticket = content.ticket;
    // 计算signature
    / 计算signature
// 先拿一个当前时间戳，这里我缓存到了global
global.wxshare.deadline = new Date().getTime();
// 通过调用计算签名方法
var signatureStr = sign(content.ticket, req.body.url);
// 当前时间戳
signatureStr.deadline = new Date().getTime();
// 缓存签名
if (signindex && signindex !== 0) {
  global.wxshare.signs(signindex, 1, signatureStr);
} else {
  global.wxshare.signs.push(signatureStr);
}
// 返回给页面
res.status(200).json(signatureStr);
  }
})


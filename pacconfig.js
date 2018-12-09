function FindProxyForURL(url, host) {
  var porxyindex = 0;
  var proxy_direct = "DIRECT;";
  var proxy_yes = [
    "SOCKS5 5.56.133.221:1080;"
    ,"SOCKS5 192.169.232.12:62194;"
    ,"SOCKS5 132.148.130.46:48684;"
    ,"SOCKS5 132.148.130.46:36939;"
    ,"SOCKS5 132.148.130.46:30900;"
    ,"SOCKS5 50.62.35.81:62871;"//5
    ,"SOCKS5 192.169.140.74:47797;"
    ,"SOCKS5 132.148.130.46:33324;"
    ,"SOCKS5 192.169.140.74:52210;"
    ,"SOCKS5 132.148.130.46:14945;"
    ,"SOCKS5 192.169.189.215:44786;"//10
    ,"SOCKS5 132.148.130.46:51404;"
    ,"SOCKS5 13.81.169.254:1080;"
    ,"SOCKS5 5.56.133.221:1080;"
    ,"SOCKS5 66.84.13.139:53238;"//rus 9m
    ,"SOCKS5 59.115.44.71:1080;"//15 tw
    
    ,"SOCKS5 166.62.59.175:37954"
  ];
  /*

    */
  var proxy_yeslist = ["45.32.164.128", "*google*", "*goo.gl*", "*gmail*", "*youtube*", "*ytimg.com*",
    "*chrome.com*", "*android.com*", "*ggpht.com*", "*blogger.com*", "*wordpress.com*", "*facebook.com*",
    "*twitter.com*", "*twimg.com*", "*ip8.com*", "*tumblr.com*", "*instagram.com*", "*blogspot.com*",
    "*blogblog.com*", "dist.github.com*", "*.tensorflow.org*", "*shadowsocks.org*"
  ];
  var proxy_directlist = [
    "*baidu.com*", "*qq.com*", "ip111.cn", "*csdn.net*", "*proxyscrape.com*",
    "*toutiao.com*", "*tianya.cn*", "*dichvusocks.us*", "*github.com*",
    "*githubusercontent*", "*cnblogs.com*","*tianyaui.com*"
    ,"*pstatp.com*","*.huanqiu.*"
  ];
  
  for (var i = 0; i <
    proxy_directlist.length; i++) {
    if (shExpMatch(host, proxy_directlist[i]))
      return proxy_direct
  }
  /*
   for (i = 0; i < proxy_yeslist.length; i++) {
       if (shExpMatch(host,
               proxy_yeslist[i]))
           return proxy_yes[2]
   }

  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var se = d.getSeconds(); 
if  ((m & 1) === 0) 
{
  porxyindex = 13;
  }
  else
  { porxyindex = 19; };
  
  */
 porxyindex = 11;
//   porxyindex = 15;
  return proxy_yes[porxyindex]
}


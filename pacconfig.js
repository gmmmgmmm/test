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
    ,"SOCKS5 35.225.214.70:9581;"//egypt 9m
    ,"SOCKS5 107.150.8.13:1080;"//15 10234k
   
    ,"SOCKS5 167.179.88.29:1080;"//jp
    ,"SOCKS5 52.192.76.155:1080;"//jp
    ,"SOCKS5 122.116.161.100:30114"//tw
    ,"SOCKS5 50.62.35.162:43185"
    ,"SOCKS5 104.238.97.230:48829"//20
    ,"SOCKS5 51.158.79.152:1080;"//fr
    ,"SOCKS5 163.172.166.20:4480;"//france
    ,"SOCKS5 59.115.62.225:1080;"//tw
    ,"SOCKS5 37.97.190.42:8080;"//nl
  ];
  /*

    */
  var proxy_yeslist = ["45.32.164.128", "*google*", "*goo.gl*", "*gmail*", "*youtube*", "*ytimg.com*",
    "*chrome.com*", "*android.com*", "*ggpht.com*", "*blogger.com*", "*wordpress.com*", "*facebook.com*",
    "*twitter.com*", "*twimg.com*", "*ip8.com*", "*tumblr.com*", "*instagram.com*", "*blogspot.com*",
    "*blogblog.com*", "dist.github.com*", "*.tensorflow.org*", "*shadowsocks.org*"
  ];
  var proxy_directlist = [
    "*baidu.com*", "*qq.com*", "ip111.cn", "*csdn.net*"
    , "*proxyscrape.com*","*toutiao.com*", "*tianya.cn*"
    , "*dichvusocks.us*","*checksocks5.com*"
    , "*github.com*",
    "*githubusercontent*", "*cnblogs.com*","*tianyaui.com*"
    ,"*pstatp.com*","*.huanqiu.*","*guancha.cn*"
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
   porxyindex = 24;
   porxyindex = 23;
  return proxy_yes[porxyindex]
}



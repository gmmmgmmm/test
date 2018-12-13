function FindProxyForURL(url, host) {
  var porxyindex = 0;
  var proxy_direct = "DIRECT;";
  var proxy_yes = ["SOCKS5 5.56.133.221:1080;"
    ,"SOCKS5 192.169.232.12:62194;"
    ,"SOCKS5 132.148.130.46:48684;SOCKS5 132.148.130.46:36939;SOCKS5 132.148.130.46:30900;"
    ,"SOCKS5 132.148.130.46:33324;SOCKS5 132.148.130.46:14945;SOCKS5 132.148.130.46:51404;"
    ,"SOCKS5 192.169.140.74:47797;192.169.140.74:52210;"
    ,"SOCKS5 50.62.35.81:62871;"//5
    
    ,"SOCKS5 107.181.174.75:55667;"
    ,"SOCKS5 192.169.189.215:44786;"
    ,"SOCKS5 13.81.169.254:1080;"
    ,"SOCKS5 138.68.60.201:8444;"
    ,"SOCKS5 35.225.214.70:9581;"//10 egypt 
    
    ,"SOCKS5 47.75.88.202:1080;47.75.183.7:1080;"// cn
    ,"SOCKS5 58.118.228.7:1080;"//rus
    ,"SOCKS5 122.116.161.100:30114"
    ,"SOCKS5 50.62.35.162:43185"
    ,"SOCKS5 104.238.97.230:48829"//15
    ,"SOCKS5 163.172.166.20:4480"
    ,"SOCKS5 35.193.51.107:9543;"
    ,"SOCKS5 163.172.166.20:4480;"//france
    ,"SOCKS5 166.62.84.121:51426;"
    ,"SOCKS5 198.12.80.4:1080;"//20
    ,"SOCKS5 12.189.124.50:9999;"//
    ,"SOCKS5 52.192.76.155:1080;"// 
    ,"SOCKS5 202.182.126.44:1080;"// jp
    ,"SOCKS5 18.214.214.141:1080;"// de
    ,"SOCKS5 91.121.226.96:1080;"//25 fr
    ,"SOCKS5 35.193.155.198:9310;"//romanina
  ,"SOCKS5 66.232.9.252:1080;SOCKS5 66.232.9.254:1080;"//hk
  ,"SOCKS5 35.193.51.107:10029;"//fr
    ,"SOCKS5 61.228.163.27:1080;61.228.168.167:1080;"
 ,"SOCKS5 59.115.46.45:1080;59.115.57.94:1080;59.115.35.213:1080;"// tw 
    ,"SOCKS5 166.62.59.175:37954"//30
    
  ];
  /*

    */
  var proxy_yeslist = ["45.32.164.128", "*google*", "*goo.gl*", "*gmail*", "*youtube*", "*ytimg.com*",
    "*chrome.com*", "*android.com*", "*ggpht.com*", "*blogger.com*", "*wordpress.com*", "*facebook.com*",
    "*twitter.com*", "*twimg.com*", "*ip8.com*", "*tumblr.com*", "*instagram.com*", "*blogspot.com*",
    "*blogblog.com*", "dist.github.com*", "*.tensorflow.org*", "*shadowsocks.org*"
  ];
  var proxy_directlist = [
    "*baidu.com*", "*qq.com*", "ip111.cn", "*csdn.net*", "*proxyscrape.com*","*jb51.net*",
    "*toutiao.com*", "*tianya.cn*", "*dichvusocks.us*", "*github.com*","*gitlab.com*",
    "*githubusercontent*", "*cnblogs.com*","*tianyaui.com*"
    ,"*pstatp.com*","*.huanqiu.*","*jianshu.com*","*jd.com*"
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
  porxyindex = 30;
  return proxy_yes[porxyindex]
}

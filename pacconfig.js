function FindProxyForURL(url, host) {
  var porxyindex = 0;
  var proxy_direct = "DIRECT;";
  var proxy_yes = [
 "SOCKS5 61.228.174.171:1080;61.228.173.46:1080;"//0tw
    ,"SOCKS5 66.232.9.253:1080;"//1 hk
    ,"SOCKS5 59.115.41.112:1080;"//2 tw
,"SOCKS5 192.169.232.12:62194;166.62.59.175:37954;"//3GoDa
    ,"SOCKS5 192.169.140.74:47797;192.169.140.74:52210;"
    ,"SOCKS5 50.62.35.81:62871;"//5
    
    ,"SOCKS5 23.238.131.250:1080;130.193.48.75:1080;"//6 Psychz 8m
    ,"SOCKS5 198.12.80.4:1080;"//7 BuffaloUS
    ,"SOCKS5 13.81.169.254:1080;"//8 nl Microsoft
    ,"SOCKS5 162.144.58.218:34654"//9 4437k
    ,"SOCKS5 35.225.214.70:9581;"//10 tor 
    
    ,"SOCKS5 149.129.102.32:1080;150.109.67.98:10050;"//11 cn
    ,"SOCKS5 159.138.23.197:1080;47.75.183.7:1080;"//12 huawei cn
    ,"SOCKS5 107.181.174.75:55667;202.5.21.160:1080;"//13 HostUS
    ,"SOCKS5 50.62.35.162:43185"//14 GoDaddy
    ,"SOCKS5 104.238.97.230:48829"//15 GoDaddy
    ,"SOCKS5 23.238.131.250:1080;"//16 PsychzUS
    ,"SOCKS5 132.148.146.65:24303;"//17 GoDaddy
    ,"SOCKS5 163.172.166.20:4480;"//18 france
    ,"SOCKS5 166.62.84.121:51426;"//19 GoDaddyUS
    ,"SOCKS5 88.198.19.210:8444;"//20 ge
    ,"SOCKS5 107.181.174.75:55667;"//21 Total US
    ,"SOCKS5 160.16.68.80:1080;"//22 jp
    ,"SOCKS5 52.192.76.155:1080;"//23 jp
    ,"SOCKS5 18.214.214.141:1080;"//24
    ,"SOCKS5 35.193.51.107:9543;35.193.155.198:9310;"//25 tor
  ,"SOCKS5 66.232.9.252:1080;47.52.133.18:1080;"//26 hk
  ,"SOCKS5 35.193.51.107:10029;"//fr
  ,"SOCKS5 149.129.106.83:1080;"//28jp
  ,"SOCKS5 182.150.28.60:1096;"//29
  
  ];
  /*

    */
  var proxy_yeslist = ["45.32.164.128", "*google*", "*goo.gl*", "*gmail*", "*youtube*", "*ytimg.com*",
    "*chrome.com*", "*android.com*", "*ggpht.com*", "*blogger.com*", "*wordpress.com*", "*facebook.com*",
    "*twitter.com*", "*twimg.com*", "*ip8.com*", "*tumblr.com*", "*instagram.com*", "*blogspot.com*",
    "*blogblog.com*", "dist.github.com*", "*.tensorflow.org*", "*shadowsocks.org*"
  ];
  var proxy_directlist = [
    "*baidu.com*", "*qq.com*", "ip111.cn", "*csdn.net*", "*proxyscrape.com*", "*jb51.net*",
    "*toutiao.com*", "*tianya.cn*", "*tianyaui.com*", "*dichvusocks.us*", "*github.com*", "*gitlab.com*",
    "*githubusercontent*", "*cnblogs.com*", "*tianyaui.com*"
    , "*pstatp.com*", "*.huanqiu.*", "*jianshu.com*", "*jd.com*"
  ];

  if (shExpMatch(host, '10.[0-9]+.[0-9]+.[0-9]+')) return proxy_direct;
  if (shExpMatch(host, '172.[0-9]+.[0-9]+.[0-9]+')) return proxy_direct;
  if (shExpMatch(host, '192.168.[0-9]+.[0-9]+')) return proxy_direct;
  if (shExpMatch(host, '127.0.0.1')) return proxy_direct;
  if (shExpMatch(host, 'localhost')) return proxy_direct;

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
  porxyindex =0;
  return proxy_yes[porxyindex]
}

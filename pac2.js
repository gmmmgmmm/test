function FindProxyForURL(url, host) {
  var porxyindex = 4;
  //var porxyindex = 23;
  //var porxyindex = 6;
  //var porxyindex = 7;
  var porxyindex = 29;
  var proxy_direct = "DIRECT;";
  var proxy_yes = [
"SOCKS5 128.199.99.165:1080;1.162.104.249:1080;59.115.38.205:1080;59.115.33.187:1080;59.115.54.135:1080;"//0 tw
 ,"SOCKS5 1.162.104.249:1080;1.169.254.151:1080;61.228.168.188:1080;61.228.174.78:1080;59.115.59.184:1080;59.115.46.146:1080;61.228.164.82:1080;"//1 tw 
  ,"SOCKS5 118.193.190.35:8088;119.28.157.111:1080;115.195.173.39:1080;103.115.44.150:1080;"//2 alicloud
,"SOCKS5 59.15.234.23:1080;220.79.87.188:1080;59.15.234.21:1080;119.28.149.37:1080;119.51.89.18:1080;59.0.122.177:1080;175.192.221.34:1080;"//3 kor
,"SOCKS5 112.98.28.106:1080;119.28.19.225:1094;118.193.190.35:8088;157.119.74.11:8080;"//4 hk
,"SOCKS5 47.93.7.198:1089;52.81.8.156:1080;13.54.202.98:1080;50.62.31.203:15469;108.61.160.130:1085;108.61.160.130:1109;"//5 jp
  ,"SOCKS5 128.199.99.165:1080;178.128.98.50:1080;128.199.99.165:1080;128.199.178.158:1080;118.139.176.242:38155;210.77.24.191:1080;172.104.161.156:1080;111.223.75.178:8888;"//6 sg
,"SOCKS5 192.169.249.80:25457;50.62.31.203:15469;192.169.140.51:29017;45.76.78.170:1080;172.246.69.205:14762;172.246.69.203:14762;14.153.53.12:1081;18.224.214.133:1081;209.74.107.3:1080;"//7 Amazon
    
  ,"SOCKS5 116.203.33.254:1080;116.196.92.155:1080;192.151.146.130:11192;159.65.180.9:9050;107.181.174.75:55667;173.82.115.11:1080;156.239.58.1:1080;54.38.195.161:56741;182.150.28.60:10010;192.110.164.108:1080;"//8 Multacom US
  ,"SOCKS5 178.62.59.71:2005;162.144.58.218:34654;18.218.247.113:1080;"//9 UK
  ,"SOCKS5 35.225.214.70:9581;80.211.211.251:1080;35.193.51.107:9251;"//10 Czechia 
    
  ,"SOCKS5 47.94.139.224:9999;47.244.116.125:1080;47.75.88.202:1080;47.74.231.43:1080;149.129.102.32:1080;150.109.126.218:1080;"//11 cn
  ,"SOCKS5 182.150.28.60:1097;47.89.247.40:1080;159.138.23.197:1080;"//12 huawei cn
    
  ,"SOCKS5 124.16.79.221:1080;38.130.225.195:1080;45.56.113.130:1080;45.63.56.100:1080;69.61.38.138:1080;"//13 Cogent US
  ,"SOCKS5 178.62.162.105:56836;107.170.42.147:16578;162.243.161.178:29861;68.183.101.198:1080;"//14 Digital us
  ,"SOCKS5 50.63.132.99:54145;192.169.140.100:24211;"//15 GoDaddy
  ,"SOCKS5 104.217.200.82:1080;45.34.66.112:1080;"//16 PsychzUS
  ,"SOCKS5 104.238.97.230:48829;"//17 GoDaddy
  ,"SOCKS5 35.178.159.50:1080;182.150.28.60:1096;"//18 Cluster US 1M
  
  ,"SOCKS5 166.62.59.175:12342;166.62.84.121:51426;"//19 GoDaddyUS
  ,"SOCKS5 207.180.242.175:1080;104.248.255.135:1080;"//20 ge
  ,"SOCKS5 107.181.174.75:55667;"//21 Total US
  ,"SOCKS5 159.203.60.38:1080;192.99.131.114:1080;167.179.82.15:1080;"//22 ca
  ,"SOCKS5 162.244.35.50:9057;54.38.81.12:37335;"//23 AT&T
  ,"SOCKS5 103.126.104.2:1080;"//24 Mongolia
  ,"SOCKS5 35.246.162.154:1080;43.254.55.82:1080;"//25 Google Cloud
  ,"SOCKS5 50.62.35.162:43185;50.62.35.81:62871;"//26 GoD
  ,"SOCKS5 37.59.8.29:28475;5.9.113.163:9000;"//27 fr
  ,"SOCKS5 89.110.44.6:1080;"//28 rus
  ,"HTTPS japan03942.cdn-aliyun.com:443"//29
  ,"HTTPS sg102932.cdn-aliyun.com:443"//29
  ,"HTTPS uksadjsafsa.cdn-aliyun.com:443"//29
  ,"HTTPS shop.cdn-aliyun.com:443"//29
  ];
  /*japan03942.cdn-aliyun.com:443
sg102932.cdn-aliyun.com:443
uksadjsafsa.cdn-aliyun.com:443
shop.cdn-aliyun.com:443
    */
  var proxy_yeslist = ["45.32.164.128", "*google*", "*goo.gl*", "*gmail*", "*youtube*", "*ytimg.com*",
    "*chrome.com*", "*android.com*", "*ggpht.com*", "*blogger.com*", "*wordpress.com*", "*facebook.com*",
    "*twitter.com*", "*twimg.com*", "*ip8.com*", "*tumblr.com*", "*instagram.com*", "*blogspot.com*",
    "*blogblog.com*", "dist.github.com*", "*.tensorflow.org*", "*shadowsocks.org*"
  ];
  var proxy_directlist = [
    "*baidu.com*", "*qq.com*","*qqmail.com*", "ip111.cn", "*csdn.net*", "*proxyscrape.com*","*jb51.net*","ifeng.com",
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
  porxyindex = 14;
  }
  else
  { porxyindex = 19; };
  
  */
 //porxyindex =29;
  return proxy_yes[porxyindex]
}

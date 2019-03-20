function FindProxyForURL(url, host) {
  var porxyindex = 32;  
  var porxyindex = 1;
  //var porxyindex = 4;
  //var porxyindex = 3+4;
  //var porxyindex = 2;
  //var porxyindex = 35; 
  
  var proxy_direct = "DIRECT;";
  var proxy_yes = [
"SOCKS5 222.208.85.119:1080;202.9.37.19:1080;162.243.210.52:21439;"//0 
 ,"SOCKS5 59.78.31.12:1080;59.110.172.224:1080;"//1 tw 
  ,"SOCKS5 58.246.166.118:8080;45.55.27.15:1080;58.68.228.234:1234;23.226.56.2:1080;47.94.244.28:3001;47.244.114.83:1080;47.93.251.207:3001;"//2 alicloud
,"SOCKS5 112.136.166.37:1080;222.112.229.91:1080;210.103.48.136:1080;"//3 kor
,"SOCKS5 121.15.134.106:1080;113.251.221.30:1080;"//4 hk
,"SOCKS5 112.17.80.142:1082;113.116.157.78:1080;114.67.92.113:1080;108.160.129.94:1080;"//5 jp
  ,"SOCKS5 119.23.63.243:1080;47.101.47.32:1080;210.26.122.247:1080;"//6 sg
,"SOCKS5 152.1.204.8:1080;39.105.90.17:3389;"//7 Amazon
    
  ,"SOCKS5 107.181.174.75:55667;24.216.74.53:1080;"//8 Multacom US
  ,"SOCKS5 178.62.59.71:2005;162.144.58.218:34654;18.218.247.113:1080;"//9 UK
  ,"SOCKS5 149.56.27.45:1080;"//10 Czechia 
    
  ,"SOCKS5 61.19.201.13:8080;"//11 Thailand
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
  ,"HTTPS losasdsfesfsffw3.cdn-aliyun.com:443"//29japan03942
  ,"HTTPS 52.liankaihon.info:443"//30sg102932
  ,"HTTPS uksadjsafsa.cdn-aliyun.com:443"//31
  ,"HTTPS shop.cdn-aliyun.com:443"//32
  ,"HTTPS jp2.tcpbbr.net:443;"//33
  ,"HTTPS jp1.tcpbbr.net:443;"//34
  ,"HTTPS gia.onhop.net:443"//35 11500k
  ,"HTTPS us.onhop.net:443;"//36
  ,"HTTPS uk.tcpbbr.net:443;"//37
  ,"HTTPS www.tcpbbr.net:443;"//38
  ,"HTTPS www.51netflix.com:1443;"//39
  ,"HTTPS ru.onhop.net:443;"//40
  ,"HTTPS wtt.21t.xyz:443;"//41
  ,"HTTPS www.pickdown.net:1443;"//42
  ,"HTTPS hgc.tcpbbr.net:443;"//43
  ,"HTTPS fr.tcpbbr.net:443;"//44
  ,"HTTPS us.tcpbbr.net:443;"//45
  ,"HTTPS hkt.21t.xyz:443;"//
  ,"HTTPS us2.tcpbbr.net:443:"//
  ,"HTTPS 54.36.117.30:3128;"// 48
  ,"HTTPS www.gunan.bid:9001"//49
  ,"HTTPS uk.jiuyoujiu999.top:4033"//50
  ,"HTTPS 1.2.169.14:46824;"//51
  
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
    "*toutiao.com*", "*tianya.cn*", "*dichvusocks.us*", "*github.com*","*gitlab.com*","*guancha.cn*"
    ,"*pangzi.ca*","*gttv.tv*",
    "*githubusercontent*", "*cnblogs.com*","*tianyaui.com*"
    ,"*pstatp.com*","*.huanqiu.*","*jianshu.com*","*jd.com*"
  ];
  
  for (var i = 0; i <
    proxy_directlist.length; i++) {
    if (shExpMatch(host, proxy_directlist[i]))
      return proxy_direct
  }
  
 //porxyindex =51;
  return proxy_yes[porxyindex]
}

function FindProxyForURL(url, host) {

    var proxy_direct = "DIRECT;";
    var proxy_yes = [
        "SOCKS5 5.56.133.221:1080;",
        "SOCKS5 107.170.42.147:56508;",
        "SOCKS5 50.62.35.81:62871;",
        "SOCKS5 192.169.140.74:47797;",
        "SOCKS5 50.62.35.225:59537;",
        "SOCKS5 13.81.169.254:1080;",
        "SOCKS5 59.115.36.182:1080;",
        "SOCKS5 47.52.133.18:1080"
    ];
    /*
    162.243.7.181:30445
107.170.42.147:56508
132.148.130.46:33324
132.148.130.46:48684
192.169.218.61:59670
104.238.97.230:48829
192.169.232.12:62194
192.169.140.74:47797
132.148.130.46:14945
132.148.130.46:30900
192.169.140.74:52210
132.148.130.46:51404
132.148.130.46:36939
192.169.188.100:12071
132.148.13.162:33752
192.169.140.74:1789
162.243.210.52:16021
192.151.146.130:49810
192.151.146.130:49484
192.151.146.130:7218
192.151.146.130:51889
192.151.146.130:51904
138.68.143.47:26927
192.151.146.130:58982
192.151.146.130:51738
138.68.143.47:17415
192.151.146.130:51532
138.68.143.47:47850
192.151.146.130:36348
192.151.146.130:26317
192.151.146.130:7100
192.151.146.130:51801
192.151.146.130:51881
192.151.146.130:51624
192.151.146.130:10200
112.218.231.43:1080
192.151.146.130:51932
192.169.182.200:55986
192.169.193.54:41255
13.81.169.254:1080
108.202.146.164:1080
192.151.146.130:12474
104.197.170.237:9400
192.151.146.130:5770
192.151.146.130:45376
192.151.146.130:45630
192.151.146.130:39884
192.151.146.130:44602
192.151.146.130:44738
192.151.146.130:44826
    */
    var proxy_yeslist = [
        "45.32.164.128", "*google*",
        "*goo.gl*", "*gmail*",
        "*youtube*", "*ytimg.com*",
        "*chrome.com*",
        "*android.com*",
        "*ggpht.com*",
        "*blogger.com*",
        "*wordpress.com*",
        "*facebook.com*",
        "*twitter.com*",
        "*twimg.com*", "*ip8.com*",
        "*tumblr.com*",
        "*instagram.com*",
        "*blogspot.com*",
        "*blogblog.com*",
        "dist.github.com*",
        "*.tensorflow.org*",
        "*shadowsocks.org*"
    ];
    var proxy_directlist = [
        "*baidu.com*", "*qq.com*",
        "ip111.cn", "*csdn.net*",
        "*proxyscrape.com*",
        "*toutiao.com*",
        "*tianya.cn*",
        "*dichvusocks.us*",
        "*github.com*",
        "*githubusercontent*"
        ,"*cnblogs.com*"
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
    
    var mt = new Date().getSeconds();
    var x = 0;
    if (mt > 50) {
        x = 5;
    } else if (mt > 40) {
        x = 4;
    } else if (mt > 30) {
        x = 3;
    } else if (mt > 20) {
        x = 2;
    } else if (mt > 10) {
        x = 1;
    } else {
        x = 0;
    };
    */
    x = 4;
    return proxy_yes[x]
}

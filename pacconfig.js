function FindProxyForURL(url, host) {

    var proxy_direct = "DIRECT;";
    var proxy_yes = [
        "SOCKS5 5.56.133.221:1080;",
        "SOCKS5 50.62.35.81:62871;",
        "SOCKS5 45.55.66.92:4725;",
        "SOCKS5 104.237.253.196:1080;",        
        "SOCKS5 13.81.169.254:1080;",
        "SOCKS5 59.115.36.182:1080;",
        "SOCKS5 59.115.43.71:1080;",//6
        "SOCKS5 59.115.37.83:1080;",
        "SOCKS5 115.71.237.179:1080;",
        "SOCKS5 107.170.42.147:56508;",
        "SOCKS5 59.115.58.143:1080;",
        //"SOCKS5 47.52.133.18:1080;",
        //"SOCKS5 107.170.42.147:56508;",
        "SOCKS5 50.62.35.225:59537;",
        "SOCKS5 192.169.140.74:47797;"
    ];
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
    x = 6;
    return proxy_yes[x]
}
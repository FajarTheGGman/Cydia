// jangan di recode yak :) 
// cape gw buat nya 
// Copyright© 2019 by Fajar Firdaus
var req = require('request');
var cmd = require('prompt');
var warna = require('colors');
var sh = require('shelljs');

console.log(warna.rainbow("Copyright© By Fajar Firdaus"));
console.log("")

console.log(warna.green('[=======CommandList=======]'));
console.log(warna.rainbow('-lacak'));
console.log(warna.rainbow('-header'));
console.log(warna.rainbow('-tcp'));
console.log(warna.rainbow('-subnet'));
console.log(warna.rainbow('-dnslook'));
console.log(warna.rainbow('-revdns'));
console.log(warna.rainbow('-who'));
console.log(warna.rainbow('-exit'));
console.log(warna.green('[=======CommandList=======]'));

cmd.get(['Cmd', 'Masukan_input'], function(error, result){
if (result.Cmd == rev){
    console.log(rev)
}else if (result.Cmd == lacak){
    console.log(lacak)
}else if (result.Cmd == header){
    console.log(header)
}else if (result.Cmd == tcp){
    console.log(tcp)
}else if (result.Cmd == subnet){
    console.log(subnet)
}else if (result.Cmd == dnslook){
    console.log(dnslook)
}else if (result.Cmd == revdns){
    console.log(revdns)
}else if (result.Cmd == who){
    console.log(who)
}

var rev = req("https://api.hackertarget.com/reverseiplookup/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var lacak = req("https://api.hackertarget.com/geoip/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var header = req("https://api.hackertarget.com/httpheaders/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var tcp = req("https://api.hackertarget.com/nmap/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var subnet = req("https://api.hackertarget.com/subnetcalc/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var dnslook = req("https://api.hackertarget.com/dnslookup/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var revdns = req("https://api.hackertarget.com/reversedns/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var who = req("https://api.hackertarget.com/whois/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body)
});

});
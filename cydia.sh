blue='\033[34;1m'
green='\033[32;1m'
purple='\033[35;1m'
cyan='\033[36;1m'
red='\033[31;1m'
white='\033[37;1m'
yellow='\033[33;1m'

toilet -f future Cydia --gay

echo $red"["$white"="$yellow"="$blue"="$green"="$purple"="$cyan"="$red"="$blue"="$green"="$white"="$yellow"="$purple"="$red"="$yellow"="$white"="$blue"="$yellow"="$purple"="$white"="$red"]"
echo $green"Author : Fajar Firdaus"
echo $green"FB : Fajar Firdaus"
echo $green"Github : FajarTheGGman"
echo $green"YT : iTech7732"
echo $red"["$white"="$yellow"="$blue"="$green"="$purple"="$cyan"="$red"="$blue"="$green"="$white"="$yellow"="$purple"="$red"="$yellow"="$white"="$blue"="$yellow"="$purple"="$white"="$red"]"
echo ""
read -p "root@Cydia-# " menu

if [ $menu = "WebExploit" ]
then
node menu/Web.js
fi

if [ $menu = "Gempa" ]
then
php menu/gempa.php
fi

 if [ $menu = "Installer" ]
then
sh menu/InstallerMyRepo.sh
fi

if [ $menu = "Github" ]
then
php menu/github.php
fi

if [ $menu = "help" ]
then
echo $green"[=======CommandHelp=======]"
echo $white"-WebExploit"
echo $white"-Gempa"
echo $white"-Installer"
echo $white"-Github"
echo $white"-help"
echo $green"[=======CommandHelp=======]"
sh fd.sh
fi

if [ $menu = "keluar" ]
then
echo $red"[!] Exit Detected "
sleep 1
echo $green"[✓] Terimakasih telah menggunakan tools gw "
sleep 1 
echo $green"[✓] Jangan Di Recode Ya !"
sleep 1
echo $blue"[!] Copyright© 2019 By Fajar Firdaus"
sleep 1
exit
fi
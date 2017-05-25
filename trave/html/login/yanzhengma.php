<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/6
 * Time: 20:02
 */

header("content-type:image/png");
$img=imagecreatetruecolor(100,50);
$word='qwertyuiopasdfghjklzxcvbnm';
function colors($img,$style='q'){
    if ($style=='q'){
        $min=130;
        $max=240;
    }
    else if($style=='s'){
        $min=10;
        $max=120;
    }
    return imagecolorallocate($img,mt_rand($min,$max),mt_rand($min,$max),mt_rand($min,$max));
}
//填充背景
imagefill($img,0,0,colors($img));
//画线
for ($i=0;$i<mt_rand(1,3);$i++){
    imageline($img,mt_rand(0,100),mt_rand(0,50),mt_rand(0,100),mt_rand(0,50),colors($img,$style='s'));
}
//画点
for ($i=0;$i<40;$i++){
    imagesetpixel($img,mt_rand(0,100),mt_rand(0,50),colors($img));
}
//写文字
$str='';
for ($i=0;$i<4;$i++){
    $ma=substr($word,mt_rand(0,strlen($word)),1);
    $ma=mt_rand(0,1)?strtoupper($ma):$ma;
    imagettftext($img,mt_rand(30,35),mt_rand(-20,20),10+$i*20,mt_rand(30,40),colors($img,$style='s'),'FRADMCN.TTF',$ma);
    $str.=$ma;
}

session_start();
$_SESSION['str']=$str;
imagepng($img);
imagedestroy($img);
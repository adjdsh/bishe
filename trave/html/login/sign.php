<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/8
 * Time: 16:17
 */
header("Content-Type:text/html;charset=utf8");
$verify=$_REQUEST['ppp'];
session_start();
$user=$_REQUEST['nickname'];
$pass=$_REQUEST['password'];
$db=new mysqli('localhost','root','','onesql');
$sql="select zhanghao,pass from peng WHERE zhanghao='$user'";
$result=$db->query($sql);
$row=$result->fetch_assoc();


if(strtoupper($_SESSION['str'])!=strtoupper($verify)){
    $sess='验证码错误';
    $src='login.htm';
    include('tiaozhuan.html');
    exit;
}
if ($row){
    if ($row['pass']==$pass){
        setcookie('user',$user);
        setcookie('password',$pass);
        $sess='登陆成功';
        $src='../index.htm';
        include "tiaozhuan.html";
    }else{
        $sess='登陆失败，密码错误';
        $src='login.htm';
        include "tiaozhuan.html";
    }
}
else{
    $sess="用户名不存在,请您立即注册";
    $src="register.htm";
    include ("tiaozhuan.html");
}

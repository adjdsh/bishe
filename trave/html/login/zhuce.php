<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/8
 * Time: 23:33
 */

header("Content-Type:text/html;charset=utf8");

$user=$_REQUEST['nickname'];
$pass=$_REQUEST['password'];
$passtwo=$_REQUEST['repassword'];
$email=$_REQUEST['email'];
$db=new mysqli('localhost','root','','onesql');
$sql="select zhanghao from peng WHERE zhanghao='$user'";
$db->query("set names utf8");
$result=$db->query($sql);
$row=$result->fetch_all(MYSQLI_ASSOC);

if ($pass!=$passtwo){
    $sess="两次密码不一致，注册失败";
    $src="register.htm";
     include ("tiaozhuan.html");
    exit;
}
if($row){
    $sess="用户名已存在，请重新注册";
    $src="register.htm";
    include ("tiaozhuan.html");
    exit;
}
$sql="insert into peng (zhanghao,pass,youxiang) VALUES ('$user','$pass','$email')";
$db->query("set names utf8");
$result=$db->query($sql);

if($result){
    $sess="注册成功,立即登录";
    $src="login.htm";
    include ("tiaozhuan.html");

}else{
    $sess="注册失败";
    $src="register.htm";
    include ("tiaozhuan.html");
}
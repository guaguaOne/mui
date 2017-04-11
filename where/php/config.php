<?php
	error_reporting(0);
	define('DB_ACCOUNT','root');
	define('DB_PASS','root');
	define('DB_NAME','a1272153207');
	mysql_connect("localhost",DB_ACCOUNT,DB_PASS) or die("连接失败"+mysql_error());
	mysql_select_db(DB_NAME,$conn) or die("数据库选择失败"+mysql_error());
?>
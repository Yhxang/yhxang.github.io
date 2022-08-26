<?php 
@session_start();
header("Content-type: text/html; charset=utf-8");
include_once("includes/init.php");
if($_POST){
	$db = new DB_sql();
	$guess=$_POST;
	$time=date("Y-m-d H:i:s");
	if($guess['data']){
		$sql="insert into `user_guess_16hss_eurocup` (`username`,`mobile`,`guess_date`,`teamA`,`teamB`,`scoreA`,`scoreB`,`type`,`addtime`)values";
		foreach($guess['data'] as $key=>$val){
			//当前时间大于今天23点，则不能再预测当前时间加一天的比赛,之后的比赛可以预测
			//$val[date]预测日期小于等于今天日期，也不记录数据库，不能再预测
			/* if((time()>strtotime(date('Y-m-d 23:00:00')) && $val['date']==date('Ymd',strtotime("+1 day"))) || $val['date']<=date('Ymd')){
				continue;
			}else{ */
				foreach($val['team'] as $k=>$v){
					if(strtotime($v['time'])<=strtotime('10 July 2016')){//用于演示
					//if(strtotime($v['time'])<=time()){  //预测时间小于当前时间不记录数据库，不能再预测					
						continue;
					}else{					
						$teamA=trim($v['teama']);
						$teamB=trim($v['teamb']);
						$scoreA=trim($v['scorea']);
						$scoreB=trim($v['scoreb']);
						$sql.="('$guess[username]','$guess[mobile]','$val[date]','$teamA','$teamB',$scoreA,$scoreB,$guess[type],'$time'),";
					}
				}
			//}
		}
		$sql=rtrim($sql,',');
		$res=$db->execute_sql($sql);
		if($res){
			exit(json_encode(array("result"=>1)));
		}
	}
	exit(json_encode(array("result"=>0)));
}

?>
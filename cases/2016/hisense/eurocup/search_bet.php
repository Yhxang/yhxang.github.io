<?php 
@session_start();
header("Content-type: text/html; charset=utf-8");
include_once("includes/init.php");
if($_POST){
	$db = new DB_sql();
	$result=array('result'=>0);
	$user=$_POST;	
	$sql="select `guess_date`,`teamA`,`teamB`,`scoreA`,`scoreB` from user_guess_16hss_eurocup t inner join (select id from user_guess_16hss_eurocup  where username='".$user['username']."' and mobile='".$user['mobile']."' order by id desc ) t2 on t.id=t2.id   group by t.teamA,t.teamB";
	//echo $sql;
	//exit;
	$db->execute_sql($sql);       
	$res=$db->fetch_result_records();
	$data=array();
	if($res){
		foreach($res as $key=>$val){	
			$team['teama']=$val['teamA'];
			$team['teamb']=$val['teamB'];
			$team['scorea']=$val['scoreA'];
			$team['scoreb']=$val['scoreB'];		
			$data[$val['guess_date']]['team'][]=$team;
		}
		$data1=$userdata=array();	
		foreach($data as $key=>$val){
			$data1['date']=$key;
			$data1['team']=$val['team'];
			$userdata[]=$data1;
		}
		if($userdata){
			$result=array('result'=>1,"username"=>$user['username'],"mobile"=>$user['mobile'],'data'=>$userdata);
		}
	}	
	exit(json_encode($result));
}
?>
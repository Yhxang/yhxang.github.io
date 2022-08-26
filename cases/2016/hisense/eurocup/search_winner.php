<?php 
@session_start();
header("Content-type: text/html; charset=utf-8");
include_once("includes/init.php");

if($_POST){
	/* $db = new DB_sql();
	$winner=$winners=array();
	foreach($score as $key=>$val){
		$guess_date=$val['date'];
		$sql="select username,mobile from user_guess ";
		$where=" where guess_date='".$guess_date."' and ";
		foreach($val['team'] as $k=>$v){
			$where .= "( teamA='".$v['teama']."' and teamB='".$v['teamb']."' and scoreA='".$v['scorea']."' and scoreB='".$v['scoreb']."' ) or ";
		}
		$where=rtrim($where,'or ');
		
		$db->execute_sql($sql.$where);
		$res=$db->fetch_result_records();
		$winner['date']=$guess_date;
		$winner['data']=$res;
		$winners[]=$winner;
	} */
	
	$score=array( 
		
		array(
			'date'=>'20160611',
			'team'=>array(
				array('teama'=>'法国','teamb'=>'罗马尼亚','scorea'=>2,'scoreb'=>1),
				array('teama'=>'阿尔巴尼亚','teamb'=>'瑞士','scorea'=>0,'scoreb'=>1),
			)
		),
		array(
			'date'=>'20160612',
			'team'=>array(
				array('teama'=>'威尔士','teamb'=>'斯洛伐克','scorea'=>2,'scoreb'=>1),
				array('teama'=>'英格兰','teamb'=>'俄罗斯','scorea'=>1,'scoreb'=>1),
				array('teama'=>'土耳其','teamb'=>'克罗地亚','scorea'=>0,'scoreb'=>1),
			)
		),		
		array(
			'date'=>'20160613',
			'team'=>array(
				array('teama'=>'波兰','teamb'=>'北爱尔兰','scorea'=>1,'scoreb'=>0),
				array('teama'=>'德国','teamb'=>'乌克兰','scorea'=>2,'scoreb'=>0),
				array('teama'=>'西班牙','teamb'=>'捷克','scorea'=>1,'scoreb'=>0),
			)
		),		
		array(
			'date'=>'20160614',
			'team'=>array(
				array('teama'=>'爱尔兰','teamb'=>'瑞典','scorea'=>1,'scoreb'=>1),
				array('teama'=>'比利时','teamb'=>'意大利','scorea'=>0,'scoreb'=>2),
			)
		),	
		array(
			'date'=>'20160615',
			'team'=>array(
				array('teama'=>'奥地利','teamb'=>'匈牙利','scorea'=>0,'scoreb'=>2),
				array('teama'=>'葡萄牙','teamb'=>'冰岛','scorea'=>1,'scoreb'=>1),
				array('teama'=>'俄罗斯','teamb'=>'斯洛伐克','scorea'=>1,'scoreb'=>2),
			)
		),
		array(
			'date'=>'20160616',
			'team'=>array(
				array('teama'=>'罗马尼亚','teamb'=>'瑞士','scorea'=>1,'scoreb'=>1),
				array('teama'=>'法国','teamb'=>'阿尔巴尼亚','scorea'=>2,'scoreb'=>0),
				array('teama'=>'英格兰','teamb'=>'威尔士','scorea'=>2,'scoreb'=>1),
			)
		),
		array(
			'date'=>'20160617',
			'team'=>array(
				array('teama'=>'乌克兰','teamb'=>'北爱尔兰','scorea'=>0,'scoreb'=>2),
				array('teama'=>'德国','teamb'=>'波兰','scorea'=>0,'scoreb'=>0),
				array('teama'=>'意大利','teamb'=>'瑞典','scorea'=>1,'scoreb'=>0),
			)
		),	
		array(
			'date'=>'20160618',
			'team'=>array(
				array('teama'=>'捷克','teamb'=>'克罗地亚','scorea'=>2,'scoreb'=>2),
				array('teama'=>'西班牙','teamb'=>'土耳其','scorea'=>3,'scoreb'=>0),
				array('teama'=>'比利时','teamb'=>'爱尔兰','scorea'=>3,'scoreb'=>0),
			)
		),		
		array(
			'date'=>'20160619',
			'team'=>array(
				array('teama'=>'冰岛','teamb'=>'匈牙利','scorea'=>1,'scoreb'=>1),
				array('teama'=>'葡萄牙','teamb'=>'奥地利','scorea'=>0,'scoreb'=>0),
			)
		),	
		array(
			'date'=>'20160620',
			'team'=>array(
				array('teama'=>'瑞士','teamb'=>'法国','scorea'=>0,'scoreb'=>0),
				array('teama'=>'罗马尼亚','teamb'=>'阿尔巴尼亚','scorea'=>0,'scoreb'=>1),
			)
		),
		array(
			'date'=>'20160621',
			'team'=>array(
				array('teama'=>'俄罗斯','teamb'=>'威尔士','scorea'=>0,'scoreb'=>3),
				array('teama'=>'斯洛伐克','teamb'=>'英格兰','scorea'=>0,'scoreb'=>0),
			)
		),		
		array(
			'date'=>'20160622',
			'team'=>array(
				array('teama'=>'乌克兰','teamb'=>'波兰','scorea'=>0,'scoreb'=>1),
				array('teama'=>'北爱尔兰','teamb'=>'德国','scorea'=>0,'scoreb'=>1),
				array('teama'=>'捷克','teamb'=>'土耳其','scorea'=>0,'scoreb'=>2),
				array('teama'=>'克罗地亚','teamb'=>'西班牙','scorea'=>2,'scoreb'=>1),
			)
		),		
		array(
			'date'=>'20160623',
			'team'=>array(
				array('teama'=>'冰岛','teamb'=>'奥地利','scorea'=>2,'scoreb'=>1),
				array('teama'=>'匈牙利','teamb'=>'葡萄牙','scorea'=>3,'scoreb'=>3),
				array('teama'=>'意大利','teamb'=>'爱尔兰','scorea'=>0,'scoreb'=>1),
				array('teama'=>'瑞典','teamb'=>'比利时','scorea'=>0,'scoreb'=>1),
			)
		),		
		array(
			'date'=>'20160625',
			'team'=>array(
				array('teama'=>'瑞士','teamb'=>'波兰','scorea'=>4,'scoreb'=>5),
			)
		),
		array(
			'date'=>'20160626',
			'team'=>array(
				array('teama'=>'威尔士','teamb'=>'北爱尔兰','scorea'=>1,'scoreb'=>0),
				array('teama'=>'克罗地亚','teamb'=>'葡萄牙','scorea'=>0,'scoreb'=>1),
				array('teama'=>'法国','teamb'=>'爱尔兰','scorea'=>2,'scoreb'=>1),
			)
		),	
		array(
			'date'=>'20160627',
			'team'=>array(
				array('teama'=>'德国','teamb'=>'斯洛伐克','scorea'=>3,'scoreb'=>0),
				array('teama'=>'匈牙利','teamb'=>'比利时','scorea'=>0,'scoreb'=>4),
			)
		),	
		array(
			'date'=>'20160628',
			'team'=>array(
				array('teama'=>'意大利','teamb'=>'西班牙','scorea'=>2,'scoreb'=>0),
				array('teama'=>'英格兰','teamb'=>'冰岛','scorea'=>1,'scoreb'=>2),
			)
		),	
		array(
			'date'=>'20160701',
			'team'=>array(
				array('teama'=>'波兰','teamb'=>'葡萄牙','scorea'=>4,'scoreb'=>6),
			)
		),	
		array(
			'date'=>'20160702',
			'team'=>array(
				array('teama'=>'威尔士','teamb'=>'比利时','scorea'=>3,'scoreb'=>1),
			)
		),	
		array(
			'date'=>'20160703',
			'team'=>array(
				array('teama'=>'德国','teamb'=>'意大利','scorea'=>7,'scoreb'=>6),
			)
		),	
		array(
			'date'=>'20160704',
			'team'=>array(
				array('teama'=>'法国','teamb'=>'冰岛','scorea'=>5,'scoreb'=>2),
			)
		),	
		array(
			'date'=>'20160707',
			'team'=>array(
				array('teama'=>'葡萄牙','teamb'=>'威尔士','scorea'=>2,'scoreb'=>0),
			)
		),	
		array(
			'date'=>'20160708',
			'team'=>array(
				array('teama'=>'德国','teamb'=>'法国','scorea'=>0,'scoreb'=>2),
			)
		)
		// ,	
		// 						array(
		// 	'date'=>'20160711',
		// 	'team'=>array(
		// 		array('teama'=>'葡萄牙','teamb'=>'法国','scorea'=>1,'scoreb'=>0),
		// 	)
		// ),	//引用为了演示
	);

	$winners=array(
		array(
			'date'=>'20160611',
			'data'=>array(
				array('username'=>'张三','mobile'=>'13211111111'),
				array('username'=>'李四','mobile'=>'13222222222'),
			)
		),
		array(
			'date'=>'20160612',
			'data'=>array(
				array('username'=>'张三','mobile'=>'13211111111'),
				array('username'=>'李四','mobile'=>'13222222222'),
			)
		)
	);
	
	$result=array('result'=>1,'date'=>date("D M j G:i:s O Y"),'winner'=>$winners,'score'=>$score);
	$result['date']="Tue Jul 11 00:00:00 +0800 2016";//用于演示
	echo json_encode($result);
	exit();	
}
?>
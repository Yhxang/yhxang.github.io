var questions=[
	[
		{sets:0, id:0, "radio":1, "spec":null, "qtxt":"新冠肺炎的潜伏期有多长？", "option":[
			{"txt":"3天","spec":null},
			{"txt":"1-7天","spec":null},
			{"txt":"2-14天","spec":null },
			{"txt":"7-15天","spec":null }
		]},
		{sets:0, id:1, "radio":1, "spec":null, "qtxt":"新冠病毒的宿主是？", "option":[
			{"txt":"家养宠物","spec":null},
			{"txt":"野生动物（蝙蝠等）","spec":null},
			{"txt":"飞禽","spec":null }
		]},
		{sets:0, id:2, "radio":1, "spec":"qlines", "qtxt":"疫情当前，以下做法中哪种是可取的？", "option":[
			{"txt":"走亲访友","spec":null},
			{"txt":"出门逛街","spec":null},
			{"txt":"开窗通风","spec":null }
		]},
		{sets:0, id:3, "radio":1, "spec":null, "qtxt":"关于口罩的使用说法正确的是？", "option":[
			{"txt":"佩戴口罩层数越多效果越好","spec":"st"},
			{"txt":"往口罩上喷洒酒精可多次重复使用","spec":"st"},
			{"txt":"合理使用口罩的前提下不必一次一换","spec":"st" }
		]},
		{sets:0, id:4, "radio":0, "spec":null, "qtxt":"下列哪种说法是错误的？", "option":[
			{"txt":"只要不吃野生动物就不会得新冠病毒肺炎","spec":"st sst"},
			{"txt":"进入公共场合必须佩戴口罩","spec":"st"},
			{"txt":"保持心情愉悦，合理膳食","spec":"st" },
			{"txt":"进食半生不熟的食物","spec":"st" }
		]},
	],
	[
		{sets:1, id:0, "radio":1, "spec":"qlines", "qtxt":"下雪可以有效杀死新冠状病毒吗？", "option":[
			{"txt":"可以","spec":null},
			{"txt":"不可以","spec":null},
			{"txt":"尚未明确","spec":null }
		]},
		{sets:1, id:1, "radio":1, "spec":null, "qtxt":"喝茶可以预防新冠状病毒吗？", "option":[
			{"txt":"可以","spec":null},
			{"txt":"不可以","spec":null}
		]},
		{sets:1, id:2, "radio":1, "spec":"qlines-1", "qtxt":"普通居民想要防御冠状病毒需要选择什么样的口罩", "option":[
			{"txt":"必须使用N95级别口罩","spec":"st"},
			{"txt":"只能是N95级别或外科医用口罩","spec":"st"},
			{"txt":"如果接触不到传染源，防雾霾以上级别的口罩也可以使用","spec":"st thick"}
		]},
		{sets:1, id:3, "radio":1, "spec":null, "qtxt":"以下哪项可以有效抵抗新冠病毒？", "option":[
			{"txt":"喝度数高的烈酒","spec":"st"},
			{"txt":"往身上喷洒消毒水","spec":"st"},
			{"txt":"保持心情愉悦、多通风勤消毒","spec":"st"}
		]},
		{sets:1, id:4, "radio":0, "spec":"column2 qlines", "qtxt":"新冠肺炎的主要症状为下面哪些？", "option":[
			{"txt":"发热","spec":null},
			{"txt":"干咳","spec":null},
			{"txt":"鼻塞","spec":null},
			{"txt":"咳痰","spec":null},
			{"txt":"乏力","spec":null},
			{"txt":"腹泻","spec":null},
			{"txt":"咽痛","spec":null},
			{"txt":"流泪","spec":null},
			{"txt":"抽搐","spec":null}
		]},
	],
	[
		{sets:2, id:0, "radio":1, "spec":"qlines", "qtxt":"多喝水多分泌粘液就可以有效防御新冠病毒吗？", "option":[
			{"txt":"是的","spec":null},
			{"txt":"不是","spec":null},
			{"txt":"不确定","spec":null }
		]},
		{sets:2, id:1, "radio":0, "spec":"qlines", "qtxt":"下面那些措施可以预防新冠病毒？", "option":[
			{"txt":"用盐水洗鼻子","spec":null},
			{"txt":"随意洗几下手","spec":null},
			{"txt":"勤洗手、多通风","spec":null},
			{"txt":"定时消毒","spec":null},
			{"txt":"不去人多密集处","spec":null},
			{"txt":"外出佩戴口罩","spec":null}
		]},
		{sets:2, id:2, "radio":1, "spec":"qlines-1", "qtxt":"隔壁邻居三个月前去过武汉，下列做法正确的是？", "option":[
			{"txt":"每次出门都向他家大门狂喷消毒液","spec":"st"},
			{"txt":"拒绝和他们交流说话","spec":"st"},
			{"txt":"按时间推算早已过了病毒潜伏期，如见面可正常打招呼","spec":"st thick" }
		]},
		{sets:2, id:3, "radio":1, "spec":"qlines-1", "qtxt":"下面是出门情况比较符合专家建议的做法是？", "option":[
			{"txt":"出门约朋友打麻将","spec":null},
			{"txt":"两天出门买一次菜","spec":null},
			{"txt":"相约参加同学聚会","spec":null}
		]},
		{sets:2, id:4, "radio":0, "spec":"column2 column2-1 opts3 qlines", "qtxt":"下列产品中可有效消灭新冠病毒的是？", "option":[
			{"txt":"75度酒精","spec":"st"},
			{"txt":"84消毒液","spec":"st"},
			{"txt":"消毒洗手液","spec":"st"},
			{"txt":"普通湿巾","spec":"st"},
			{"txt":"洗衣液","spec":"st"},
			{"txt":"柔顺剂","spec":"st"},
			{"txt":"面膜","spec":"st"}
		]},
	],
	[	
		{sets:3, id:0, "radio":1, "spec":null, "qtxt":"下列说法正确的是？", "option":[
			{"txt":"洗热水澡可以完全消灭病毒","spec":"st"},
			{"txt":"服用双黄连口服液可以有效预防<br/>新冠病毒","spec":"st thick"},
			{"txt":"坚决不参加群聚性活动","spec":"st"}
		]},
		{sets:3, id:1, "radio":1, "spec":"qlines-1", "qtxt":"截止到目前为止，是否研制出有效治疗新冠病毒肺炎的药物？", "option":[
			{"txt":"是","spec":null},
			{"txt":"否","spec":null}
		]},
		{sets:3, id:2, "radio":0, "spec":null, "qtxt":"复工后，以下做法正确的是？", "option":[
			{"txt":"中午和同事结伴吃饭","spec":"st"},
			{"txt":"上下班通勤路上佩戴口罩和护目镜","spec":"st"},
			{"txt":"随身携带免洗消毒洗手液，<br/>做好手部消毒工作","spec":"st thick"},
			{"txt":"和同事沟通工作时依旧佩戴口罩","spec":"st"}
		]},
		{sets:3, id:3, "radio":1, "spec":"qlines", "qtxt":"以下哪种人群不会成为新冠病毒传染源？", "option":[
			{"txt":"被新冠病毒感染的患者","spec":"st"},
			{"txt":"处于潜伏期无明显症状的感染者","spec":"st"},
			{"txt":"一直宅在家中从未与外界<br/>产生任何接触的小强","spec":"st thick"}
		]},
		{sets:3, id:4, "radio":0, "spec":"column2 column2-1", "qtxt":"病毒可能存在的地方有？", "option":[
			{"txt":"电梯按键","spec":"st"},
			{"txt":"快递表面","spec":"st"},
			{"txt":"自来水中","spec":"st"},
			{"txt":"垃圾桶的口罩上","spec":"st longer"},
			{"txt":"外卖包装袋表面","spec":"st longer"},
			{"txt":"衣服表面","spec":"st"},
			{"txt":"公交车把手","spec":"st"},
			{"txt":"门把手","spec":"st"}
		]}
	],
	[
		{sets:4, id:0, "radio":0, "spec":null, "qtxt":"新冠病毒的传播途径是？", "option":[
			{"txt":"飞沫传播","spec":null},
			{"txt":"血液传播","spec":null},
			{"txt":"接触传播","spec":null},
			{"txt":"花粉传播","spec":null}
		]},
		{sets:4, id:1, "radio":1, "spec":null, "qtxt":"新冠病毒的易感人群是？", "option":[
			{"txt":"儿童易感","spec":null},
			{"txt":"老人易感","spec":null},
			{"txt":"所有人群普遍易感","spec":null}
		]},
		{sets:4, id:2, "radio":1, "spec":"qlines-1", "qtxt":"1月21日，小红从武汉出发乘坐高铁来到北京，她抵达北京后正确的做法是？", "option":[
			{"txt":"去亲戚家串门","spec":"st"},
			{"txt":"去商场逛街","spec":"st"},
			{"txt":"在居住的地方自行隔离两周","spec":"st"}
		]},
		{sets:4, id:3, "radio":1, "spec":null, "qtxt":"儿童是否可以佩戴成人用的口罩？", "option":[
			{"txt":"可以","spec":null},
			{"txt":"不可以","spec":null}
		]},
		{sets:4, id:4, "radio":0, "spec":"qlines-1", "qtxt":"针对新型冠状病毒,以下哪种液体可以起到有效杀毒作用？", "option":[
			{"txt":"酒精","spec":null},
			{"txt":"含氯消毒剂","spec":null},
			{"txt":"碘类消毒剂","spec":null},
			{"txt":"过氧化物类消毒剂","spec":null},
			{"txt":"双黄连口服液","spec":null}
		]}
	]
]
var ans=[
	[[2],[1],[2],[2],[0,3]],
	[[2],[1],[2],[2],[0,1,2,3,4,5,6]],
	[[1],[2,3,4,5],[2],[1],[0,1,2]],
	[[2],[1],[1,2,3],[2],[0,1,3,4,5,6,7]],
	[[0,2],[2],[2],[1],[0,1,2,3]]
]
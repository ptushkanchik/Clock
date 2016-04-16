(function(){
	var time = new Date();
	var seconds = time.getSeconds();
	var minutes = time.getMinutes();
	var hours = time.getHours();
	(hours<=12)?(hours=hours):(hours=hours-12);
	
	$("#second").css("transform",("rotate("+seconds*6+"deg)"));
	$("#minute").css("transform",("rotate("+minutes*6+"deg)"));
	$("#hour").css("transform",("rotate("+(hours*30+minutes*0.5)+"deg)"));
	
	count = seconds+1;
	count2 = minutes+1;
	count3 = (hours*30+minutes*0.5)*2;
	
})()

var count;
var count2;
var count3;

var timeId = setInterval(runSecond,1000);

function runSecond(){
	if(count<61){
		var rotate = count*6;
		rotate = "rotate("+rotate+"deg)";
		$("#second").css("transform", rotate);
		count +=1;
	}else{
		count=1;
		var rotate = count*6;
		rotate = "rotate("+rotate+"deg)";
		$("#second").css("transform", rotate);
		count +=1;
		minute();
	}
}


function minute(){
	if(count2<61){
		var rotate = count2*6
		rotate = "rotate("+rotate+"deg)";
		$("#minute").css("transform", rotate);
		count2 +=1;
		hour();
		
	}else{
		count2=1;
		var rotate = count2*6
		rotate = "rotate("+rotate+"deg)";
		$("#minute").css("transform", rotate);
		count2 +=1;
		
	}
}

function hour(){
	if(count3!=721){
		var rotate = count3*0.5;
		rotate = "rotate("+rotate+"deg)";
		$("#hour").css("transform", rotate);
		count3 +=1;
	}else{
		count3=1;
		var rotate = count3*0.5;
		rotate = "rotate("+rotate+"deg)";
		$("#hour").css("transform", rotate);
		count3 +=1;
		
	}
}
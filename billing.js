var obj="";
var a ="";
var b ="";
var c ="";
var total="";
var list=0;
var gt="";
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"http://59dc2a0ac86a4f00124c57b4.mockapi.io/billing",
		dataType:"json",
		success:function(result){
			var text="<option>"+"select..."+"</option>"
			obj=result;
			for (var i = 0; i < result.length; i++) {
				text+="<option>"+result[i].Fooditem+"</option>";
			}
			$("#fooditem").html(text);
		}
	})
	$("#fooditem").change(function(){
     a=$("select").val();
	});


	$("button").click(function(){
     b=$("#qty").val();
	
	for (var i = 0; i < obj.length; i++) {
			if (obj[i].Fooditem===a) {
				c=obj[i].Prize;
			}
		}

	total=b*c;	
	list+=1;
	$("#tbody").append("<tr><td>"+list+"</td><td>"+a+
		"</td><td>"+b+"</td><td>"+total+"</td></tr>");	
	gt=eval(gt+total)
    $("#gtotal").html(gt)
	})
});
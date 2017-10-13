
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://59dc2a0ac86a4f00124c57b4.mockapi.io/billing",
		dataType:"json",
		success:function(result){
			var text="";
			for ( i = 0; i < result.length; i++) {
				text +="<tr><td>"+result[i].id+"</td><td>"+result[i].Fooditem
				+"</td><td>"+result[i].Prize
				+"</td></tr>"
			}
			
			$("#tbody").html(text)
		}
	});
});
	
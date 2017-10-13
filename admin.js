$(document).ready(function(){
	$("#button_admin_add").click(function(){
		var billing={
		    Fooditem:$("#fooditem").val(),
            Prize:$("#prize").val()
		}
		$.post("https://59dc2a0ac86a4f00124c57b4.mockapi.io/billing",billing)
	});
	
});
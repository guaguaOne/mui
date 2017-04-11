mui.init();
$("#register button.register").click(function(){
	var account=$("#register input.account").val();
	var pass=$("#register input.password").val();
	var nickanme=$("#register input.nickname").val();
	var face=$("#register input.face").get(0).files[0];
	var fd=new FormData();
	fd.append("account",account);
	fd.append("pass",pass);
	fd.append("nickname",nickanme);
	fd.append("face",face);
	console.log("account"+account+";pass"+pass+";nickname"+nickanme);
//	console.log(face);
//	console.log(fd);
	$.ajax({
		type:"post",
		url:"php/register.php",
		processData:false,
		contentType:false,
		data:fd,
		success:function(msg){
			console.log(msg);
		}
	});
})
$("#face").click(function(){
	$("#register input.face").click();
})
$("#register input.face").change(function(){
	$("#bg").removeClass("mui-hidden");
})

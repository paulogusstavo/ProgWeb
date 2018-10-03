$(document).ready(function(){

	$("#btSalvar").click(function() {

		if ($("#nome").val() == "") {
			$("#nome").addClass("invalido");
		}
		else {
			$("#nome").removeClass("invalido");
		}

		if ($("#sobrenome").val() == "") {
			$("#sobrenome").addClass("invalido");
		}
		else {
			$("#sobrenome").removeClass("invalido");
		}
		if ($("#email").val() == "") {
			$("#email").addClass("invalido");
		}
		else {
			$("#email").removeClass("invalido");
		}
		if ($("#matricula").val() == "") {
			$("#matricula").addClass("invalido");
		}
		else {
			$("#matricula").removeClass("invalido");
		}
		if ($("#usuario").val() == "") {
			$("#usuario").addClass("invalido");
		}
		else {
			$("#usuario").removeClass("invalido");
		}
		if ($("#senha").val() == "") {
			$("#senha").addClass("invalido");
		}
		else {
			$("#senha").removeClass("invalido");
		}
		if ($("#confirmSenha").val() == "") {
			$("#confirmSenha").addClass("invalido");
		}
		else {
			$("#confirmSenha").removeClass("invalido");
		}

		return false;
	});

});
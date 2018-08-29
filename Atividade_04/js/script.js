function printNome() {
  var nomeCompleto = document.getElementById("nome").value + " " 
  + document.getElementById("sobrenome").value;
  alert("Nome Completo:\n" + nomeCompleto);
}

function changeIcon(icon) {
	$('.operador').text(icon);
}

function operacoes () {
	var tipo = document.getElementById("operador").textContent;
	var val_1 = parseFloat(document.getElementById("val_1").value);
	var val_2 = parseFloat(document.getElementById("val_2").value);
	var result = 0;

	switch (tipo) {
		case '*':
			result = val_1 * val_2;
		break;

		case '/':
			result = val_1 / val_2;
		break;

		case '+':
			result = val_1 + val_2;
		break;

		case '-':
			result = val_1 - val_2;
		break;

		default:
			alert("Selecione uma operação.");
			result = null;
		break;
	};

	document.getElementById("result").value = result;
}
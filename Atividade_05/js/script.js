$(document).ready(function() {
          $("#pauloFormulario").validate({
          debug: true,
          errorElement: 'span',
          errorClass: 'invalid',
          validClass: 'valid',
          rules: {
              nome: {
                  required: true,
                  minlength: 3
              },
              sobrenome: {
                  required: true,
                  minlength: 5
              },
              email: {
                  required: true,
                  minlength: 10,
                  email:true
              },
              confirmEmail: {
                  required: true,
                  minlength: 10,
                  email:true,
                  equalTo: "#email"
              },
              usuario: {
                  required: true
              },
              matricula: {
                  required: true,
                  digits: true
              },
              senha: {
                  required: true,
                  minlength: 5
              },
              confirmSenha: {
                  required: true,
                  minlength: 5,
                  equalTo: "#senha"
              }
          },
          messages: {
              nome: {
                  required: "Insira seu nome",
                  minlength: "Confira seu nome",
                  minlength: "Mínimo de 3 caracteres"
              },
              sobrenome: {
                  required: "Insira seu sobrenome",
                  minlength: "Confira seu sobrenome",
                  minlength: "Mínimo de 5 caracteres"
              },
              email: {
                  required: "Insira seu email",
                  email: "Email inválido!",
                  minlength: "Mínimo de 10 caracteres"
              },
              confirmEmail: {
                  required: "Confirme seu email",
                  equalTo: "Email diferente!",
                  minlength: "Mínimo de 10 caracteres"
              },
              usuario: {
                  required: "Insira nome de usuário"
              },
              matricula: {
                  required: "Insira sua matrícula",
                  digits: "Insira apenas números!"
              },
              senha: {
                  required: "Insira uma senha",
                  minlength: "Mínimo de 5 caracteres"
              },
              confirmSenha: {
                  required: "Confirme sua senha",
                  minlength: "Mínimo de 5 caracteres",
                  equalTo: "Senhas não conferem!"
              }
          }
          });


        });


function impares () {
	var valor = document.getElementById("parada").value;

	for (i = 0; i <= valor; i++) {
			if (i%2 != 0) {
				$(".inserirNumeros").append("<p>" + i + "</p>");
			}
		}

}

function pares () {
	var valor = document.getElementById("parada").value;

		for (i = 0; i <= valor; i++) {
			if (i%2 == 0) {
				$(".inserirNumeros").append("<p>" + i + "</p>");
			}
		}	

}




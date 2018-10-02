<!DOCTYPE html>
<html>
<head>
	<title>Atividade XML</title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

	<h2>PucProdutos - Relatório de Compras</h2>

	<?php

		$loja = simplexml_load_file("files/loja.xml");

		foreach ($loja->compra as $key) {

			$totalCompra = 0;

			echo "<table width='400' cellspacing=0>";
				echo "<tr>";	
					echo "<th colspan='4'>";
						echo "Compra"." ".$key->codigo;
					echo "</th>";
				echo "</tr>";

				// HEADER TABLE.
				echo "<tr class='titulo' >";
					echo "<td>";
						echo "Código";
					echo "</td>";

					echo "<td>";
						echo "Descrição";
					echo "</td>";

					echo "<td>";
						echo "Quantidade";
					echo "</td>";

					echo "<td>";
						echo "Preço";
					echo "</td>";			
				echo "</tr>";

			foreach ($key->lista->produto as $key2) {

				echo "<tr>";
					echo "<td>";
						echo $key2->codigo;
					echo "</td>";

					echo "<td>";
						echo $key2->descricao;
					echo "</td>";

					echo "<td>";
						echo $key2->quantidade;
					echo "</td>";

					echo "<td>";
						echo $key2->preco;
						$totalCompra += (float) $key2->preco;
					echo "</td>";			
				echo "</tr>";

			}

			echo "<tr class='border' >";	
				echo "<td class='alihamento' colspan='3' >";
					echo "<b>TOTAL:</b>";
				echo "</td>";

				echo "<td>";
					echo floatval($totalCompra);
				echo "</td>";


			echo "</tr>";
			
			echo "</tbody>";
			echo "</table>";
			echo "</br>";
		}

	?>
	</body>
</html>
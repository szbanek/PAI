<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
		<h1>Cookies</h1>
		
		<?php
			require("funkcje.php");

			if(isSet($_GET["utworzCookie"])){
				setcookie("ciasteczko", "wartosc", time() + ($_GET["czas"]), "/");
				echo "Utworzono ciasteczko";
			}

		?>
		<br>
		<a href="index.php">Wstecz</a> 
			
	</body>
</html>
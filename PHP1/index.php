<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>

<body>
	<?php
	require("funkcje.php");

	if (isset($_POST["wyloguj"])) {
		$_SESSION["zalogowany"] = 0;
	}

	if (isset($_COOKIE["ciasteczko"])) {
		echo "Wartość ciasteczka: " . $_COOKIE["ciasteczko"];
	}
	?>
	<h1>Nasz system</h1>
	<fieldset>
		<legend>Logowanie:</legend>
		<form action="logowanie.php" method="post">
			Login: <input type="text" name="login"><br>
			Hasło: <input type="text" name="haslo"><br>
			<input type="submit" value="Zaloguj" name="zaloguj">
		</form>
	</fieldset>
	<br>
	<fieldset>
		<legend>Czas życia ciasteczka:</legend>
		<form action="cookie.php" method="get">
			Czas: <input type="number" name="czas"><br>
			<input type="submit" name="utworzCookie">
		</form>
	</fieldset>
</body>

</html>
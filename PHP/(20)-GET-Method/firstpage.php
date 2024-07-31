<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>First Page</title>
</head>
<body>
	<h1>Home Page</h1>

	<?php 
		$news_item = 312;
		$category  = urlencode("sports & hobbies");
		$url = "secondpage.php?news_item={$news_item}&category={$category}";
	 ?>
	<a href="<?php echo $url; ?>">Read News Item 1</a>
</body>
</html>

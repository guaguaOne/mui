<?php
	if(isset($_POST['account'])){
		var_dump($_FILES);
		$file_path=dirname( __FILE__ ) . DIRECTORY_SEPARATOR . '../face' . DIRECTORY_SEPARATOR.$_FILES['face']['name'];
		move_uploaded_file($_FILES['face']['tmp_name'], $file_path);
	}
?>
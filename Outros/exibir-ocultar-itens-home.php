	<?php 
		//Código utilizado no list.phtml
		///public_html/app/design/frontend/--template--/default/template/catalog/product
		$url = "http://".$_SERVER['SERVER_NAME'].$_SERVER ['REQUEST_URI']; ?>

		if ((Mage::getBaseUrl() == $url."index.php/") or (Mage::getBaseUrl() == $url)){
			//codigo
		}
	?>

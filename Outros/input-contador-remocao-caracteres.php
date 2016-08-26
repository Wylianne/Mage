<input id="campo" type="text" onkeyup="contarCaracteres(this.value, 40)" maxlength="40" onchange="opConfig.reloadPrice()"
id="options_<?php echo $_option->getId() ?>_text" class="input-text<?php echo $_option->getIsRequire() ? ' required-entry' : '' ?> 
<?php echo $_option->getMaxCharacters() ? ' validate-length maximum-length-'.$_option->getMaxCharacters() : '' ?> 
product-custom-option" name="options[<?php echo $_option->getId() ?>]" value="<?php echo $this->escapeHtml($this->getDefaultValue()) ?>" />

<p class="note" id="sprestante"></p>


<script> 

function contarCaracteres(box, valor){
    var str = box;
    var res = str.replace(":", "");
    res = res.replace("<", "");
    res = res.replace(";", "");
    campo.value=res;

	var cont = valor - campo.value.length;

	document.getElementById(sprestante).innerHTML = + cont + " caracteres disponiveis.</br>Este campo n"+String.fromCharCode(227)+"o aceita emoticons";
		
}
</script> 

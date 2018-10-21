$(function() {
	$('#produit1').click(function() {
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#selection1').val();
		console.log(qt);
		var result = price * qt;
		console.log(result);
		$('#art1').text(name);
		$('#price1').text(price);
    $('#tr1').removeAttr('hidden');
		$('#totalPrice1').text(result);
	})
	$('#produit2').click(function() {
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#selection2').val();
		var result = price * qt;
		console.log(qt);
		$('#art2').text(name);
		$('#price2').text(price);
		$('#tr2').removeAttr('hidden');
		$('#totalPrice2').text(result);
	})
})

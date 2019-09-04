$(document).ready(function() {
	$('.calc select').change(function() {
		$edition = $('select#card__edition').val();
		$paper = $('select#card__paper').val();
		$color = $('select#card__color').val();
		$print = $('select#card__color option:selected').attr('data-print');
		$print_file = $('select#card__color option:selected').attr('data-print-file');
		$paper_ratio = $('select#card__paper option:selected').attr('data-paper-ratio');
		$color_choice = $('select#card__color option:selected').attr('data-color');
		$division = 30;
		$final_edition = $edition / $division;
		$price = $final_edition * $paper_ratio + parseInt($print_file) + $final_edition*$print;
		$('span#final__price').text($price);
		if ($color_choice == 1) {
			$('.card__images img').hide();
			$('#card-1').show();
		}
		if ($color_choice == 2) {
			$('.card__images img').hide();
			$('#card-2').show();
		}
		if ($color_choice == 3) {
			$('.card__images img').hide();
			$('#card-3').show();
		}
		if ($color_choice == 4) {
			$('.card__images img').hide();
			$('#card-4').show();
		}
		if ($color_choice == 5) {
			$('.card__images img').hide();
			$('#card-5').show();
		}
	});
});
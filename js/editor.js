/**
 * 
 */


$(document).ready(function() {
	$('#search_box').hide();
	$('#replace_box').hide();

	$('#btn-search').click(function() {
		$('#replace_box').hide();
		$('#search_box').toggle();
	});
	$('#search-word').change(function() {
		var sword = $('#search-word').val();
		$('#maintext').highlightTextarea('setWords', sword);
		$('#maintext').highlightTextarea('enable');

	});

	$('#btn-replace').click(function() {
		$('#search_box').hide();
		$('#replace_box').toggle();
	});
	$('#replace-to').change(function() {
		var sword = $('#replace-from').val();
		var reword = $('#replace-to').val();
		var text = $('#maintext').val();

		$('#maintext').highlightTextarea('setWords', sword);
		$('#maintext').highlightTextarea('enable');

		regobj = new RegExp(sword,"ig");

		$('#maintext').val(text.replace(regobj,reword));
	});	
});
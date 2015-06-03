/**
 *
 */
$(document).ready(function() {
	$('#search_box').hide();
	$('#replace_box').hide();

	$('#btn-search').click(function() {
		$('#replace_box').hide();
		$('#search_box').toggle();

		$('#search_box').change(function() {
			var sword = $('#search-word').val();

			$('#maintext').highlightTextarea({
				words : {
					color : '#FFD400',
					words : sword,
				},
				debug : true
			});
		});
	});
	$('#btn-replace').click(function() {
		$('#search_box').hide();
		$('#replace_box').toggle();
		$('#search_box').change(function() {

			var sword = $('#search-word').val();
			var reword = $('#replace-word').val();
			var text = $('#maintext').val();

			$('#maintext').highlightTextarea({
				words : {
					color : '#FFD400',
					words : sword,
				},
			});
			$('#maintext').val(text.replace(sword, reword));
		});
	});

});
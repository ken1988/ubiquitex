/**
 *
 */
 $(document).ready(function() {
	 $('#search_box').hide();
	 $('#btn-search').click(function(){

		 $('#search_box').show();

		 var sword = $('#search-word').val();
		 var reword = $('#replace-word').val();
		 var text = $('#maintext').val();

		 if(sword.charCodeAt() == 92){
			 alert(sword.charCodeAt());
			 sword = '\n';
		 }
		 if(reword.charCodeAt() == 92){
			 reword = '\n';
		 }



		 $('#maintext').val(text.replace(sword,reword));

	 });
 });
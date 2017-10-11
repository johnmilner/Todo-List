// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through");
	$(this).toggleClass("completed");
});

//Click on trash can to delete Todo
$("ul").on("click", "span", function(event) {
	//parent refers to li
	$(this).parent().fadeOut(300, function() {
		//this refers to span
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	//if return is pressed
	if(event.which === 13) {
		//grabbing new todo from text input
		var todoText = $(this).val();
		//setting input to empty after return
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class='fa fa-trash'></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle("fast", "linear");
});
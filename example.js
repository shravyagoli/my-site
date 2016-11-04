
	function inputIsValid(cssSelector)
	{
	return ($(cssSelector).val() !== "" && !isNaN($(cssSelector).val()));
	}
	
	// For the input 
	function validateInput(cssSelector)
	{
	if (inputIsValid(cssSelector) == false)
	{
	$(cssSelector).css("background-color","red");
	return false;
	}
	else
	{
	$(cssSelector).css("background-color","white");
	return true;
	}
	}
	// if inputs are valid then it is true
	
	function allInputsAreValid()
	{
	var startX = $("#HorizonalStartTextBox").val();
	var endX = $("#HorizonalEndTextBox").val();
	var startY = $("#VerticalStartTextBox").val();
	var endY = $("#VerticalEndTextBox").val();
	
	return (inputIsValid("#HorizonalStartTextBox") &&
	inputIsValid("#HorizonalEndTextBox") &&
	inputIsValid("#VerticalStartTextBox") &&
	inputIsValid("#VerticalEndTextBox") &&
	Number(endX) >= Number(startX) &&
	Number(endY) >= Number(startY))
	}
	
	// Creates a table based on the inputs and returns the HTML as a string.
	function generateTable(startX, endX, startY, endY)
	{
	var table = "<table class='darkShadedTable'>";
	
	startX = Number(startX);
	startY = Number(startY);
	endX = Number(endX);
	endY = Number(endY);
	
	// Make the header
	
	table += "<tr><th>&nbsp;</th>";
	for (var x = startX; x <= endX; x++)
	{
	table += "<th>" + x + "</th>"
	}
	table += "</tr>";
	
	// Now do each individual row.
	for (var y = startY; y <= endY; y++)
	{
	table += "<tr><th>" + y + "</th>";
	
	for (var x = startX; x <= endX; x++)
	{
	table += "<td>" + (x * y) + "</td>";
	}
	
	table += "</tr>";
	}
	
	table += "</table>";
	
	return table;
	}
	
	// Checks if all the inputs are valid and, if so, generates the table.
	function checkAndGenerateTable()
	{
	
	var startX = $("#HorizonalStartTextBox").val();
	var endX = $("#HorizonalEndTextBox").val();
	var startY = $("#VerticalStartTextBox").val();
	var endY = $("#VerticalEndTextBox").val();
	
	
	if (allInputsAreValid())
	{
	$("#content").html(generateTable(startX, endX, startY, endY));
	$("#content").css("display","block");
	}
	}
	
	jQuery(document).ready(function()
	{
	
	// Whenever the input is changed, let the user know if their input is valid or not immediately.
	$(".LimitsTextBox").on('input', function()
	{
	validateInput("#HorizonalStartTextBox");
	validateInput("#HorizonalEndTextBox");
	validateInput("#VerticalStartTextBox");
	validateInput("#VerticalEndTextBox");
	
	
	checkAndGenerateTable();
	
	});
	
	$(".LimitsTextBox").blur(function()
	{
	// When the user moves stops inputting text into a text box, force the numbers to be "in order"
	// In other words, make sure the second valid is greater than the first for both groups.
	// Finally, after doing that, if all input is valid, then generate the table.
	
	var startX = $("#HorizonalStartTextBox").val();
	var endX = $("#HorizonalEndTextBox").val();
	var startY = $("#VerticalStartTextBox").val();
	var endY = $("#VerticalEndTextBox").val();
	
	// If both horizontal selectors are valid numbers, make sure the second is greater than the first.
	if (inputIsValid("#HorizonalStartTextBox") && inputIsValid("#HorizonalEndTextBox"))
	if (Number(endX) < Number(startX))
	$("#HorizonalEndTextBox").val(Number(startX));
	
	// Same for the vertical selectors
	if (inputIsValid("#VerticalStartTextBox") && inputIsValid("#VerticalEndTextBox"))
	if (Number(endY) < Number(startY))
	$("#VerticalEndTextBox").val(Number(startY));
	
	
	checkAndGenerateTable();
	
	});
	
	
	
	checkAndGenerateTable();
	
	});
		
	


function showInput() {
	
	var string_val = document.getElementById("user_input").value;
	console.log("The initial string value is: " + string_val);
	
	document.getElementById('display').innerHTML = string_val;
}

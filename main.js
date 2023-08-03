//HEIGHT


let height=prompt("Enter Your height in cm");

if(height<150){
	
	document.write("Dwarf");
	
}


else if(height<165){
	
	document.write("Normal Person");
	
}

else if(height<195){
	
	document.write("Tallest person");
	
}

else{
	
	document.write("Abnormal height");
	
}
var printSeries = function (){
	for(i=1;i<=100;i++){
		var val = i;
		if(i%3==0 && i%5==0)
			val = "FizzBuzz";
		else if(i%3 == 0)
			val = "Fizz";
		else if(i%5 == 0)
			val = "Buzz";
		var div = document.createElement("DIV");
		div.innerHTML = val;
		document.getElementById("mainDiv").appendChild(div);
	}
}

printSeries();
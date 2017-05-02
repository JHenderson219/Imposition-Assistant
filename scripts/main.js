/*function clearInputs(){
	$("#input-area").val("");
}

function clearOutputs(){
	$("#output-area").val("");
}

$("#clear-input").on("click", function(){
	clearInputs();
});

$("#clear-output").on("click", function(){
	clearOutputs();
});


$("#calculate").on("click", function (){
	let piecesPerSheet = $("#pieces-per-sheet").attr("value");
	let input = $("#input-area").val();
	let duplex = $("#duplex-box").prop("checked"); 
});
*/

var input = "240\n480\n240\n240\n240\n360";
var up;
var duplex;

var inputArr = input.split("\n"); //Splits input string on newline, assigns to array.

function Page(index, qty){
	this.index = index;
	this.qty = parseInt(qty,10);
}

function populatePages(arr){
	let pageArr = [];
	let len = arr.length;

	for(let i = 0;i<len;i++){
		pageArr[i] = new Page(i,arr[i]);
	}
	return pageArr;
}

function impose(pageArr, up, duplex, arr){
	let len = pageArr.length;
	let sq = 0;
	let qsq = 1;
	let factorIndex = 0;
	let shuffleRules = "";
	sq = pageArr[0].qty;
	for(let i = 1; i < len;i++){
		if (pageArr[i].qty < sq)
		sq = pageArr[i].qty;				//Find smallest quantity.
	}
	
	for(let i = 1; i < len;i++){
		if(pageArr[i].qty == sq) 								//Find quantity of smallest quantity.
			qsq++;
	}

	factors = factorize(up); 									//Assign factors of 'up' as a string to factors.
	console.log("qsq is: "+qsq);
	console.log("sq is: "+sq);
	console.log ("factors array is: "+factors);
	console.log ("up over qsq is: "+(up/qsq));
	for(let i = 0; i < factors.length; i++){ 
		if(factors[i] == (up/qsq)) 								//Find factor in factor array.
			factorIndex = i;
	}
	console.log("factor index is: "+factorIndex);
	if(factorIndex = 0){										//If up is not a factor
		//Go do something else
	}

	else{

	}

	return shuffleRules;
}

function factorize(num){
	let factors = [0];
	let j = 1;
	for(let i = 0;i < num;i++){
		if(num%i == 0){
			factors[j] = i;
			j++;
		}
	}
	return factors;
}

console.log (impose(populatePages(inputArr), 24, false, [] ));

console.log(240%12);
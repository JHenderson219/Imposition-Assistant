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

var input = "100\n100\n250\n100\n500\n100";
var up;
var duplex;

var arr = input.split("\n"); //Splits input string on newline, assigns to array.

function page(index, qty){
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
	let len = pageArr.length
	let sq = 0;
	let qsq = 0;
	let factorIndex = 0;

	sq = pageArr[0].qty;
	
	for(let i = 1; i < len;i++){
		pageArr[i].qty < sq ? sq = pageArr[i].qty : sq = sq ;				//Find smallest quantity.
	}
	
	for(let i = 1; i < len;i++){
		if(pageArr[i].qty == sq) 								//Find quantity of smallest quantity.
			qsq++;
	}

	factors = factorize(up); 									//Assign factors of 'up' as a string to factors.
	
	for(let i = 0; i < factors.length; i++){ 
		if(factors[i] == (up/qsq)) 								//Find factor in factor array.
			factorIndex = i;
	}

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
		console.log(24%4);
		if(num%i == 0){
			factors[j] = i;
			j++;
		}
	}
	return factors;
}
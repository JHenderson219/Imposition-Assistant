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

const input = "100\n100\n100\n100\n100\n100";
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
	return pageArr.sort((a,b) => a.qty > b.qty );
}


//console.log("Populate pages 0 is: "+populatePages(inputArr)[0].qty);
//console.log (impose(populatePages(inputArr), 24, false, [] ));

//console.log(240%12);

function imposeTest(pageArr, up, duplex){
	let len = pageArr.length;
	let sq = 0;
	let qsq = 0;
	let factorIndex = 0;
	let shuffleRulesString; //IS A STRING
	let factors;
	let currentFactor;
	let upPerPage;
	let shuffleRules = [];

	factors = factorize(up); 

	sq = pageArr[0].qty;
	for(let i = 1; i < len;i++){
		if (pageArr[i].qty < sq)
		sq = pageArr[i].qty;									//Find smallest quantity.
	}
	

	for(let i = 0; i < len;i++){
		if(pageArr[i].qty == sq) 								//Find quantity of smallest quantity.
			qsq++;
	}

	for(let l = qsq; l > 0; l--){
		for (let k=0; k<factors.length; k++){
				if ((up/qsq)==factors[k]){																		//If our quantity of smallest quantity goes on the page evenly...
					upPerPage = up/qsq;																			//Set our up number to up/sqs
					console.log(upPerPage);
					for(let i = 0; i<pageArr.length; i++){														//If we're still in the page array...
						if (pageArr[0].qty==sq){																//If first element is still the smallest quantity...
							let pageNumber = (pageArr.shift().index)+1;											//Assign original page number of first element and shift.
							
							for (let j = 0; j<upPerPage; j++){													//Loop "upPerPage" times to generate shuffle rules for the page.
								shuffleRulesString = generateSuffleRules(pageNumber,duplex,shuffleRules);		//Create shuffle rule for one page.
							
							}
						}
					}
				}
			}
		}

	return shuffleRulesString;
}

function generateSuffleRules(index,duplex,shuffleRules){
	if (duplex){
		shuffleRules.push((2*index)-1);
		shuffleRules.push(2*index);
	} else {
		shuffleRules.push(index);
	}

	return shuffleRules.join(" ");
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

console.log("imposeTest is: "+imposeTest(populatePages(inputArr),24,false));

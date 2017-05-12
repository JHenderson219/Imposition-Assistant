function impose(pageArr, up, duplex, arr){
	let len = pageArr.length;
	let sq = 0;
	let qsq = 0;
	let factorIndex = 0;
	let shuffleRules = "";
	let factors;
	let currentFactor;

	sq = pageArr[0].qty;

	for(let i = 1; i < len;i++){
		if (pageArr[i].qty < sq)
		sq = pageArr[i].qty;									//Find smallest quantity.
	}
	
	for(let i = 0; i < len;i++){
		if(pageArr[i].qty == sq) 								//Find quantity of smallest quantity.
			qsq++;
	}

	factors = factorize(up); 									//Assign factors of 'up' as a string to factors.
	
	console.log("qsq is: "+qsq);
	console.log("sq is: "+sq);
	console.log ("factors array is: "+factors);
	console.log ("up % qsq is: "+(up%qsq));
	console.log ("up divided by qsq is: "+(up/qsq));

	for(let i = 0; i < factors.length; i++){ 
		if(factors[i] == (up/qsq)) 								//Find factor in factor array.
			factorIndex = i;
	}
	
	console.log("factor index is: "+factorIndex);
	console.log ("factor is: "+factors[factorIndex]);
	
	if(factorIndex = 0){										//If up is not a factor
		//Go do something else
	}

	for (let i=0; i<len; i++){									//Find 
		if (pageArr[i].qty != sq){
			if ((qsq/(up-(factors[factorIndex]*qsq)))==(sq/ pageArr[i].qty)) {

			}
		}
	}

	return shuffleRules;
}

	var k = 0;
	do {
		k++;	
		for(let l = qsq; l > 0 && !((up/(qsq+1)==factors[k])); l--){
			if ((up/qsq)==factors[k]){																		//If our quantity of smallest quantity goes on the page evenly...
				upPerPage = up/qsq;																			//Set our up number to up/sqs
				for(let i = 0; i<pageArr.length; i++){														//If we're still in the page array...
					if (pageArr[0].qty==sq){																//If first element is still the smallest quantity...
						let pageNumber = (pageArr.shift().index)+1;											//Assign original page number of first element and shift.
						for (let j = 0; j<upPerPage; j++){													//Loop "upPerPage" times to generate shuffle rules for the page.
							shuffleRulesString = generateSuffleRules(pageNumber,duplex,shuffleRules);		//Create shuffle rule for one page.
						}
					}
				}
			}
			qsq--;
		}

	} while ((k<(factors.length-1)) && (qsq>0));
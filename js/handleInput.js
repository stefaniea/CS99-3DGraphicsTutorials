

// Splits string into array by semi color. e.g. abc;de;f into array {abc, de, f}
function splitBySemiColon(vals) {
	return vals.split(';');
}


// Handles form submission by counting values into map
// TODO: weighting
// TODO: quiz1 versus quiz2, etc.
function handleFormSubmit() {
	var answerMap = {};

	console.log("handling form submit");
	var allInputs = $( ":input" );
	console.log("number of inputs is " + allInputs.length);
	console.log("about to handle");
 	for (var i = 0; i < allInputs.length-1; i++) { // all but last one (button)
 		elem = allInputs[i];
 		console.log("handling elem " + elem.value);
 		if (elem.checked) {
 			console.log("element was checked");
 			var vals = elem.value;
 			var vallist = splitBySemiColon(vals);
 			for (val of vallist) {
 				if (answerMap[val] != null) {
 					answerMap[val]++;
 				} else {
 					answerMap[val] = 1;
 				}
 			}
 		}
 	}

 	return getResults(answerMap);

 	//return answerMap;
 }

 function getResults(answerMap) {
 	console.log("answer map " + answerMap);
 	console.log("length of answer map " + answerMap.length);

 	openAndScoreData(answerMap, true);
 	return true;
 }

 function sortResults(results) {
 	// sort backwards
	return results.sort(function(a, b){
	    if(a.score > b.score) return -1;
	    if(a.score < b.score) return 1;
	    return 0;
	});
 }

function displayResults(results) {
	var section = $("#results");
	var i = 0;
	for (r of results) {
		if (i==6) {
			div = document.createElement('div');
			div.innerHTML = '<h3>Other results:</h3><h6>'+r.name + '</h6><p>';
			section.append(div);
		}
		if (i > 6) {
			div = document.createElement('div');
			div.innerHTML = '<h6>'+r.name + '</h6><p>';
			section.append(div);
		} else if (i < 6) {
			div = document.createElement('div');
			div.innerHTML = '<h3>'+r.name + '</h3><p>' + r.description+'</p><p>Score: '+ r.score+'</p>';
			section.append(div);
		}
		
		i++;
	}
}

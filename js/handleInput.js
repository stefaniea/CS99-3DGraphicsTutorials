$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

// translate fields to words for results page:
var wordMap = {"studentprice" : "student price", "polygon" : "handles polygon objects", 
"rigging" : "rigging", "simulations" : "simulations such as fluid or clouds", 
"basiclight" : "basic lighting", "complexlighting" : "multiple lights", 
"scupt" : "sculpting", "textures" : "textures", "realisticmaterials" : "realistic materials such as glass and metals", 
"smooth" : "smooth (NURBS) surfaces", "tube" : "tube-like curves", "bumpmap" : "bump maps", 
"normalmap" : "normalmap", "compatiblewith" : "compatible with other software", 
"digitalpaint" : "digital painting", "pbr" : "physically based rendering", 
"easy" : "easy to learn and use", "voxeledit" : "voxel editing", 
"visualize" : "visualizing data", "heightfield" : "high field import and/or creation", 
"voxelimport" : "voxel import", "export3dprint" : "3D printing format export", 
"vectormapimport" : "vector map import", "rastermapimport" : "raster map import",
 "uvmap" : "uv mapping", "analyzetools" : "tools for analytics", 
 "geo" : "handles geographical data", "windows" : "runs on Windows", "mac" : "runs on Mac", "linux" : "runs on Linux",
 "animation" : "animation" };

// Splits string into array by semi color. e.g. abc;de;f into array {abc, de, f}
function splitBySemiColon(vals) {
	return vals.split(';');
}

function checkRelevance() {
	rel = [false, false, false];
	rel[0] = document.getElementById("modelstart").checked;
	rel[1] = document.getElementById("importstart").checked;
	rel[2] = document.getElementById("renderstart").checked;
	return rel;
}

// Handles form submission by counting values into map
// TODO: weighting
// TODO: quiz1 versus quiz2, etc.
function handleFormSubmit() {
	var answerMap = {};

	console.log("handling form submit");
	var allInputs = $( ":input:checkbox" );
	console.log("number of inputs is " + allInputs.length);
	console.log("about to handle");
 	for (var i = 0; i < allInputs.length; i++) { // all but last one (button)
 		elem = allInputs[i];
 		console.log("handling elem " + elem.value);
 		if (elem.checked) {
 			console.log("element was checked");
 			var radio = $(elem.parentElement).find('input:radio:checked');
 			console.log("radio button is" + radio);
 			var weight = 1;
 			if (radio != null) {
 				if (radio.length > 0) radio = radio[0];
	 			if (radio.value == "somewhat") weight = 1;
	 			if (radio.value == "very") weight = 2;
	 			if (radio.value == "essential") weight = 3;
 		}
 			var vals = elem.value;
 			var vallist = splitBySemiColon(vals);
 			for (val of vallist) {
 				if (answerMap[val] != null) {
 					answerMap[val]+=weight;
 				} else {
 					answerMap[val] = weight;
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

function findMaxScore(results) {
var max = .0000001;
for (r of results) {
	if (max < r.score) max = r.score;
}
return max;
}

// Get a normalized score (out of 100)
function normalizeResults(results) {
	var max = findMaxScore(results);
	for (r of results) {
		r.score = 100*r.score/max;
	}
	return results;
}

// Given an array, output a English string list of it (i.e. [a, b, c] -> a, b, and c)
function matchesToString(r_matches) {
	if (r_matches == null) {
		return "nothing :("
	}
	var matches = "";
	if (r_matches.length == 1) {
		return r_matches[0];
	} else if (r_matches.length == 2) {
		return r_matches[0] + " and " + r_matches[1];
	}

	var i = 0;
	for (m of r_matches) {
		if (i == r_matches.length - 1) {
			matches = matches + "and " + r_matches[i];
		} else {
			matches = matches + r_matches[i] + ",";
			i = i + 1;
		}
	}
	return matches;
}

// Given sorted results (including name, score, and matches) display them in order.
// Displays the first 6 in detail and the rest just names
function displayResults(results) {
	var section = $("#results");
	var i = 0;
	results = normalizeResults(results);
	for (r of results) {
		if (i==6) {
			div = document.createElement('div');
			div.innerHTML = '<h3>Other results:</h3><h6>'+ r.name + '</h6><p>';
			section.append(div);
		}
		if (i > 6) {
			div = document.createElement('div');
			div.innerHTML = '<h6>'+r.name + '</h6><p>';
			section.append(div);
		} else if (i < 6) {
			div = document.createElement('div');
			div.innerHTML = '<h3>'+r.name + '</h3><p>' + r.description+'</p><p>Score: '+ r.score +'%</p>' +
						'<div class="meter">' + '<span style="width: '+ r.score +'%"></span></div>';
			section.append(div);
		}
		if (i > 10) break;
		i++;
	}

	 $(function() {
            $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
        });
}

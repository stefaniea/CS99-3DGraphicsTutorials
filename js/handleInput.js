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
 "animation" : "animation", "large" : "handles large data sets", 
 "modelstart" : "modelling", "importstart" : "importing", "renderstart" : "rendering",
 "dimension" : "higher than 3-dimensional viewing", "pointcloud" : "point cloud import/viewing" };

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

// Handles form submission by counting values into answerMap
function handleFormSubmit() {
	var answerMap = {}; // map from property to score. e.g. {animation, 3}
	var allInputs = $( ":input:checkbox" );
 	for (var i = 0; i < allInputs.length; i++) { // for all inputs but last one (because it is a button)
 		elem = allInputs[i];
 		if (elem.checked) { // this value checked yes
 			var radio = $(elem.parentElement).find('input:radio:checked');
 			var weight = 1; // default

 			// weight 1 -> somewhat, 2 -> very, 3 -> essential
 			if (radio != null) {
 				if (radio.length > 0) radio = radio[0];
	 			if (radio.value == "somewhat") weight = 1;
	 			if (radio.value == "very") weight = 2;
	 			if (radio.value == "essential") weight = 3;
 		}

 			// add or insert to map
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

 	return openAndScoreData(answerMap, true);
 }

 	// sort function -- reverse order
 function sortResults(results) {
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
function matchesToList(r_matches) {
    var matches = "<ul class='matches'>";
	if (r_matches == null) {
		return matches + "<li>nothing :(</li></ul>";
	}

	var i = 0;
	for (m of r_matches) {
			matches = matches + '<li>' + r_matches[i] + '</li>';
			i++;
	}
	matches = matches + "</ul>";
	return matches;
}

// Given sorted results (including name, score, and matches) display them in order.
// Displays the first 6 in detail and the rest list names
// Lists at max 10 results
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
			$(div).addClass('result');
			div.innerHTML = '<h3>'+r.name + '</h3><p>' + r.description+'</p><p>Score: '+ r.score +'%</p>' +
			'<p><b>matches you on the following features: ' + matchesToList(r.matches) + '</b></p>' +
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

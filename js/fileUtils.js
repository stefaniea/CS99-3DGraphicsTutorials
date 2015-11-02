function createEntriesFromFile(filename) {
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var jsonData = JSON.parse(theTextContentOfMyFile);
                return jsonData;
            }
        }
    }
    rawFile.send(null);
}

function openAndScoreData(answerMap, local) {
//	
var results = [];
	//var file = "../json/apps.json"
	if(local) {
		var data = [
    {
        "name": "Sculptress",
        "smooth": "yes"
    },
    {
        "name": "Blender",
        "company": "Blender Foundation",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "modeling, rigging, animation, simulation, rendering, game engine",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "yes",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "yes",
        "rendering": "yes",
        "game": "yes",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "polygon": "yes",
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "visualizationtool": "yes",
        "uvmap": "yes"
    },
    {
        "name": "Houdini",
        "company": "Side Effects Software",
        "description": "sample description",
        "price": "$0-$199 (indie);$1995 commercial",
        "studentprice": "$0-$320",
        "purpose": "visual effects",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "yes",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "yes",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "polygon": "yes",
        "digitalpaint": "no",
        "easy": "no"
    },
    {
        "name": "ZBrush",
        "company": "Pixologic",
        "description": "sample description",
        "price": 795,
        "studentprice": 445,
        "purpose": "Digital sculpting and painting",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygons": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "polygon": "yes**",
        "digitalpaint": "yes"
    },
    {
        "name": "SketchUp",
        "company": "Google",
        "description": "sample description"
    },
    {
        "name": "Rhino",
        "description": "sample description",
        "price": 995,
        "studentprice": 445,
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygons": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no"
    },
    {
        "name": "Maya",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$1470/year",
        "studentprice": 0,
        "purpose": "Comprehensive 3D animation, modelling, rigging, rendering",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "yes",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "yes",
        "rendering": "yes",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "polygon": "yes",
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "uvmap": "yes"
    },
    {
        "name": "3DS Max",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$185/month",
        "studentprice": 0,
        "purpose": "3D modeling, animation, and rendering",
        "windows": "yes",
        "mac": "no",
        "linux": "no",
        "polygons": "yes",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "yes",
        "rendering": "yes",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "polygon": "yes",
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "uvmap": "yes"
    },
    {
        "name": "Mudbox",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$10/month",
        "studentprice": 0,
        "purpose": "Digital sculpting and painting",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "no",
        "rigging": "yes",
        "animation": "no",
        "simulations": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "no",
        "smooth": "yes",
        "tube": "no",
        "polygon": "no",
        "bumpmap": "no",
        "normalmap": "yes",
        "digitalpaint": "yes",
        "easy": "yes",
        "uvmap": "no",
        "retopology": "yes"
    },
    {
        "name": "AutoCAD",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$210/month",
        "studentprice": 0,
        "purpose": "Architecture and Design",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygons": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "tube": "yes",
        "polygon": "yes"
    },
    {
        "name": "AutoCADLT",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$360/year",
        "purpose": "Drafting Archiecture and Design"
    },
    {
        "name": "Building Design Suite",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$2310/year"
    },
    {
        "name": "Product Design Suite",
        "company": "Autodesk",
        "description": "sample description",
        "price": "$290/month"
    },
    {
        "name": "Factory Design Suite",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "Formit 360",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "HSMWorks",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "Inventor HSM",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "Stringray",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "Revit",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "RevitLT",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "Navisworks Simulate",
        "company": "Autodesk",
        "description": "sample description"
    },
    {
        "name": "TODO: more autodesk ones",
        "description": "sample description"
    },
    {
        "name": "ANTz",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "3D data visualization",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "visualizationtool": "yes"
    },
    {
        "name": "ScienceGL (has a bunch of products)",
        "description": "sample description",
        "purpose": "3D data visualization",
        "voxeledit": "yes",
        "visualizationtool": "yes"
    },
    {
        "description": "sample description"
    },
    {
        "name": "qubicle",
        "company": "Minddesk",
        "description": "sample description",
        "price": "$15-160",
        "studentprice": "$15-161",
        "purpose": "voxel editor",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygons": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "polygon": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualizationtool": "no",
        "heighfieldimport": "yes",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "MagicaVoxel",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "voxel editor and renderer",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygons": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "polygon": "no",
        "digitalpaint": "no",
        "pbr": "yes",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualizationtool": "no",
        "voxelimport": "yes",
        "export3dprint": "probably",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "Zoxel",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "simple voxel editor",
        "windows": "yes",
        "mac": "no",
        "linux": "no",
        "polygons": "no",
        "rigging": "no",
        "animation": "basic",
        "simulations": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "polygon": "no",
        "compatibleWith": "qubicle",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualizationtool": "no",
        "heighfieldimport": "no",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "VoxelShop",
        "company": "BlackFlux Software",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "voxel editor",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "no",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "yes",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "polygon": "no",
        "digitalpaint": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualizationtool": "no",
        "heighfieldimport": "no",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "yes",
        "rastermapimport": "yes",
        "analyzetools": "no"
    },
    {
        "name": "Grass GIS",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "geospatial technologies, 3D images and animations",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "polygon": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "visualizationtool": "yes",
        "voxelimport": "yes"
    },
    {
        "name": "3DCoat",
        "company": "Pilgway",
        "description": "sample description",
        "price": "$379-568",
        "studentprice": 99,
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "no",
        "rigging": "no",
        "animation": "?",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "no",
        "polygon": "no",
        "digitalpaint": "yes",
        "pbr": "yes",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "sort of",
        "visualizationtool": "no",
        "heighfieldimport": "no",
        "voxelimport": "no",
        "uvmap": "yes",
        "retopology": "yes",
        "analyzetools": "no"
    },
    {
        "name": "Renderers",
        "company": "easily compatible with",
        "price": "physically based lighting",
        "studentprice": "subsurface scattering",
        "purpose": "metals",
        "windows": "glass",
        "mac": "variety of materials",
        "linux": "textures",
        "polygons": "normal mapping",
        "rigging": "procedural textures",
        "animation": "Price",
        "simulations": "Student Price",
        "rendering": "Non-commercial price",
        "game": "caustics",
        "sculpt": "viewport rendering",
        "textures": "nodes"
    },
    {
        "name": "VRay",
        "company": "rhino, maya",
        "price": "yes",
        "studentprice": "yes",
        "purpose": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "yes",
        "rigging": "yes"
    },
    {
        "name": "RenderMan",
        "company": "maya, ",
        "price": "yes",
        "studentprice": "yes",
        "purpose": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygons": "yes",
        "rigging": "yes"
    },
    {
        "name": "Cycles",
        "company": "blender,",
        "price": "yes"
    },
    {
        "name": "Mitsuba",
        "company": "blender,",
        "price": "yes"
    },
    {
        "name": "Lux Renderer",
        "company": "blender,"
    },
    {
        "name": "Aqsis",
        "company": "blender,"
    },
    {
        "name": "Persistence of Vision",
        "company": "blender,"
    },
    {
        "name": "Blender Internal Renderer",
        "company": "blender,"
    },
    {
        "name": "Maya Software",
        "company": "maya, ",
        "price": "no"
    },
    {
        "name": "Mental Ray",
        "company": "maya, "
    },
    {
        "name": "Holomatix Rendition",
        "company": "maya, "
    },
    {
        "name": "FurryBall",
        "company": "maya, "
    },
    {
        "name": "Octane Render",
        "company": "maya, blender",
        "price": "yes"
    },
    {
        "name": "3Delight ",
        "company": "maya,"
    },
    {
        "name": "Maxwell",
        "company": "blender,"
    },
    {
        "name": "Simulation plugins",
        "company": "type of simulation",
        "price": "easily compatible with",
        "studentprice": "price",
        "purpose": "student price"
    },
    {
        "name": "RealFlow",
        "company": "fluid",
        "price": "maya,"
    },
    {
        "name": "Glu3d",
        "company": "fluid",
        "price": "maya,"
    },
    {
        "name": "Miarmy",
        "company": "dynamics, crowd",
        "price": "maya,"
    },
    {
        "name": "Dynamica",
        "company": "dynamics",
        "price": "maya,"
    },
    {
        "name": "Pulldownit",
        "company": "dynamics",
        "price": "maya,"
    },
    {
        "name": "Golaem Crowd",
        "company": "crowd",
        "price": "maya,"
    }
];
	results = scoreData(answerMap, data);
} else {
		var file = "http://cors.io/spreadsheets.google.com/feeds/list/MPE5pLuZzZGCiE7br7DqVn2rb0MjLo4dX8A7yml1nLI/od6/public/values?alt=json";
	$.getJSON(file, function(data) {
		results = scoreData(answerMap, data)
		// alert(data);
	});
}

	sorted = sortResults(results);
	displayResults(sorted);
}

 function scoreData(answerMap, data) {
 	console.log("scoring data");
 	apps = [];
 	var i = 0;
 	for (a of data) {
 		var os = false;
 		a.score = 0;
 		console.log("a of data " + a);
 		for (prop in answerMap) {
 			console.log("prop in answerMap" + prop);
 			if (!answerMap.hasOwnProperty(prop)) {
        	//The current property is not a direct property of p
        	continue;
        }
        else if (a[prop] != null && a[prop] == "yes") {
        	a.score = a.score + answerMap[prop];
        	if (!os && (prop == "mac" || prop == "linux" || prop == "windows")) {
        		a.score += 0; // add a large number because operating system is important
        		os = true; // do this only once though.
        	}
        }
    }
    apps[i] = a;
    i++;
}
return apps;
}
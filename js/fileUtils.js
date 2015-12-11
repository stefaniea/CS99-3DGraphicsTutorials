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
        "name": "Sculptris",
        "company": "Pixologic",
        "description": "Software for 3D sculpting and an easy alternative to ZBrush. Features include digital scultping, projection painting, materials, and automatic UV Mapping.",
        "price": 0,
        "studentprice": 0,
        "purpose": "Digital sculpting and painting",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "no",
        "polygon": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "yes",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "yes",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "no",
        "bumpmap": "yes",
        "normalmap": "yes",
        "compatibleWith": "ZBrush",
        "digitalpaint": "yes",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "no",
        "export3dprint": "no",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "yes",
        "retopology": "yes",
        "analyzetools": "no"
    },
    {
        "name": "Blender",
        "company": "Blender Foundation",
        "description": "Open source 3D graphics and animation software. Features include all of the animation pipeline -- modelling, rigging, animation, rendering, compositing, motion tracking, and game creation.",
        "price": 0,
        "studentprice": 0,
        "purpose": "modeling, rigging, animation, simulation, rendering, game engine",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "yes",
        "polygon": "yes",
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
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "pointcloud": "yes",
        "visualize": "yes",
        "uvmap": "yes"
    },
    {
        "name": "Houdini",
        "company": "Side Effects Software",
        "description": "3D animation and special effects tool.",
        "price": "$0-$199 (indie);$1995 commercial",
        "studentprice": "$0-$320",
        "purpose": "visual effects",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "yes",
        "polygon": "yes",
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
        "digitalpaint": "no",
        "easy": "no"
    },
    {
        "name": "ZBrush",
        "company": "Pixologic",
        "description": "Powerful software for 3D sculpting. Features include digital scultping, projection painting, and materials.",
        "price": 795,
        "studentprice": 445,
        "purpose": "Digital sculpting and painting",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "no",
        "polygon": "yes",
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
        "digitalpaint": "yes",
        "easy": "no",
        "retopology": "yes"
    },
    {
        "name": "SketchUp",
        "company": "Google",
        "description": "Easy to use software for 3D modeling. Ideal for architecture, construciton, engineering, etc. for when other software is overkill.",
        "price": 700,
        "studentprice": 49,
        "purpose": "modeling, architecture, floor plans, construction plans, engineering",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "no",
        "polygon": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "yes",
        "complexlight": "no",
        "game": "no",
        "sculpt": "no"
    },
    {
        "name": "Rhino",
        "description": "Software to create, edit, analyze, document, render, animate, and translate NURBS curves, surfaces, and solids, point clouds, and polygon meshes.\n",
        "price": 995,
        "studentprice": 445,
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "no",
        "polygon": "yes",
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
        "description": "3D Computer graphics software. Features include modelling, rigging, animation, UV Mapping, texturing, and compatibility with several renderers.",
        "price": 1470,
        "studentprice": 0,
        "purpose": "Comprehensive 3D animation, modelling, rigging, rendering",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "yes",
        "polygon": "yes",
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
        "bumpmap": "yes",
        "normalmap": "yes",
        "compatibleWith": "collada, mudbox, blender, mentalray, renderman, vray",
        "digitalpaint": "no",
        "pbr": "yes",
        "easy": "no",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "no",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "yes",
        "retopology": "no",
        "analyzetools": "no"
    },
    {
        "name": "3DS Max",
        "company": "Autodesk",
        "description": "3D Computer graphics software. Features include modelling, rigging, animation, UV Mapping, texturing, and compatibility with several renderers.",
        "price": 185,
        "studentprice": 0,
        "purpose": "3D modeling, animation, and rendering",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "no",
        "precise": "yes",
        "linux": "no",
        "polygon": "yes",
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
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "pbr": "yes",
        "uvmap": "yes"
    },
    {
        "name": "Mudbox",
        "company": "Autodesk",
        "description": "Easy to use software for 3D sculpting. Easily compatible with Maya.",
        "price": 10,
        "studentprice": 0,
        "purpose": "Digital sculpting and painting",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "yes",
        "polygon": "no",
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
        "bumpmap": "no",
        "normalmap": "yes",
        "compatibleWith": "yes",
        "digitalpaint": "yes",
        "pbr": "no",
        "easy": "yes",
        "uvmap": "no",
        "retopology": "yes",
        "analyzetools": "no"
    },
    {
        "name": "AutoCAD",
        "company": "Autodesk",
        "description": "Architecture, engineering, and construction professionals' 2D and 3D drawings software.",
        "price": 210,
        "studentprice": 0,
        "purpose": "Architecture and Design",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "no",
        "polygon": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "yes",
        "realisticmaterials": "yes",
        "curve": "yes",
        "tube": "yes"
    },
    {
        "name": "AutoCADLT",
        "company": "Autodesk",
        "description": "Architecture, engineering, and construction 2D and 3D drafting software.",
        "price": 360,
        "purpose": "Drafting Archiecture and Design",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "yes",
        "linux": "no"
    },
    {
        "name": "ANTz",
        "description": "sample description",
        "price": 0,
        "studentprice": 0,
        "purpose": "3D data visualization",
        "edit": "no",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "visualize": "yes"
    },
    {
        "name": "ScienceGL (has a bunch of products)",
        "description": "sample description",
        "purpose": "3D data visualization",
        "edit": "no",
        "voxeledit": "yes",
        "visualize": "yes",
        "dimension": "yes"
    },
    {
        "name": "qubicle",
        "company": "Minddesk",
        "description": "sample description",
        "price": 78,
        "studentprice": "$15-161",
        "purpose": "voxel editor",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygon": "no",
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
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "no",
        "heightfield": "yes",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "MagicaVoxel",
        "description": "Lightweight 8-bit voxel editor and path tracer.",
        "price": 0,
        "studentprice": 0,
        "purpose": "voxel editor and renderer",
        "large": "no",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "no",
        "polygon": "no",
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
        "digitalpaint": "no",
        "pbr": "yes",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "no",
        "voxelimport": "yes",
        "export3dprint": "probably",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "Zoxel",
        "description": "Voxel editor designed for small models.",
        "price": 0,
        "studentprice": 0,
        "purpose": "simple voxel editor",
        "large": "no",
        "edit": "yes",
        "windows": "yes",
        "mac": "no",
        "linux": "no",
        "polygon": "no",
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
        "compatibleWith": "qubicle",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "analyzetools": "no"
    },
    {
        "name": "VoxelShop",
        "company": "BlackFlux Software",
        "description": "Inuitive software to edit and create voxel objects. Features include editing voxels, texturing, exporting to 3D print, and skeletal animations.",
        "price": 0,
        "studentprice": 0,
        "purpose": "voxel editor",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
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
        "digitalpaint": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "yes",
        "rastermapimport": "yes",
        "analyzetools": "no"
    },
    {
        "name": "Grass GIS",
        "description": "Geographic informational system software suite for geographic analysis. Includes geospatial data management, analysis, maps production, spatial modeling, and visualization.",
        "price": 0,
        "studentprice": 0,
        "purpose": "geospatial technologies, 3D images and animations",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
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
        "digitalpaint": "no",
        "pbr": "no",
        "visualize": "yes",
        "voxelimport": "yes",
        "geo": "yes"
    },
    {
        "name": "3DCoat",
        "company": "Pilgway",
        "description": "sample description",
        "price": 568,
        "studentprice": 99,
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
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
        "digitalpaint": "yes",
        "pbr": "yes",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "sort of",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "no",
        "uvmap": "yes",
        "retopology": "yes",
        "analyzetools": "no"
    },
    {
        "name": "Matlab",
        "company": "MathWorks",
        "description": "high-level technical computing language and interactive environment for algorithm development, data visualization, data analysis",
        "price": 0,
        "studentprice": 0,
        "purpose": "computing, data visualization, analysis",
        "edit": "no",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "no",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "bumpmap": "no",
        "normalmap": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "no",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "yes",
        "heightfield": "yes",
        "voxelimport": "yes",
        "export3dprint": "no",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "no",
        "retopology": "no",
        "analyzetools": "yes",
        "geo": "yes"
    },
    {
        "name": "Aladdin4D",
        "company": "DiscreetFX LLC & A-Eon Technology Ltd",
        "description": "Software for modeling and rendering three-dimensional graphics and animations.",
        "purpose": "modeling, rendering, animation",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "yes",
        "rigging": "yes",
        "animation": "yes",
        "simulations": "yes",
        "basiclight": "yes",
        "complexlight": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "yes",
        "realisticmaterials": "no",
        "curve": "yes",
        "smooth": "no",
        "tube": "yes",
        "bumpmap": "yes",
        "normalmap": "yes",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "no",
        "export3dprint": "no",
        "vectormapimport": "no",
        "rastermapimport": "no"
    },
    {
        "name": "SolidWorks",
        "company": "SolidWorks",
        "description": "Popular CAD (computer aided design) software among companies and engineers for 3D design. SolidWorks products include 3D CAD, Visualization, and Simulation software.",
        "studentprice": 150,
        "purpose": "modeling, 3d design",
        "edit": "yes",
        "windows": "yes",
        "mac": "no",
        "linux": "no",
        "polygon": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "yes",
        "complexlight": "no",
        "rendering": "yes",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "yes",
        "curve": "yes",
        "smooth": "yes",
        "tube": "yes",
        "bumpmap": "no",
        "normalmap": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "no",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "no",
        "retopology": "no",
        "analyzetools": "no",
        "geo": "no"
    },
    {
        "name": "Mathematica",
        "company": "Wolfram",
        "description": "Technical computing software",
        "price": 300,
        "studentprice": 215,
        "purpose": "computing, importing",
        "large": "no",
        "edit": "no",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "no",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "yes",
        "smooth": "yes",
        "tube": "no",
        "bumpmap": "no",
        "normalmap": "no",
        "compatibleWith": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "no",
        "pointcloud": "no",
        "voxeledit": "no",
        "visualize": "yes",
        "heightfield": "yes",
        "voxelimport": "no",
        "export3dprint": "no",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "no",
        "retopology": "no",
        "analyzetools": "yes",
        "code": "yes",
        "geo": "no"
    },
    {
        "name": "QVox",
        "company": "Greyc",
        "description": "Volumetric data visualizer and editor",
        "purpose": "import, export, visualize",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "yes",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "no",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "bumpmap": "no",
        "normalmap": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "yes",
        "voxelimport": "yes",
        "export3dprint": "no",
        "analyzetools": "no",
        "code": "no",
        "dimension": "yes",
        "geo": "no"
    },
    {
        "name": "ArcGIS",
        "company": "esri",
        "description": "Application for creating and working with spatial data on your desktop. It provides tools to visualize, analyze, compile, and share your data, in both 2D and 3D environments.",
        "price": 1500,
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "no",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "bumpmap": "no",
        "normalmap": "no",
        "compatibleWith": "autoCAD",
        "digitalpaint": "no",
        "pbr": "no",
        "heightfield": "yes",
        "voxelimport": "no",
        "export3dprint": "no",
        "uvmap": "no",
        "retopology": "no",
        "analyzetools": "yes",
        "code": "no",
        "geo": "yes"
    },
    {
        "name": "TinkerCAD",
        "description": "Easy, web-based application for creating 3D models. Features include editing shapes, import/export geometry, and 3D printing.",
        "price": 0,
        "studentprice": 0,
        "purpose": "simple CAD",
        "large": "no",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "yes"
    },
    {
        "name": "Voxelizer",
        "description": "Easy to use software to import and strengthen voxel data and export to 3D print.",
        "price": 0,
        "studentprice": 0,
        "purpose": "voxel import, print",
        "windows": "yes",
        "mac": "yes",
        "linux": "yes",
        "polygon": "no",
        "rigging": "no",
        "animation": "no",
        "simulations": "no",
        "basiclight": "no",
        "complexlight": "no",
        "rendering": "no",
        "game": "no",
        "sculpt": "no",
        "textures": "no",
        "realisticmaterials": "no",
        "curve": "no",
        "smooth": "no",
        "tube": "no",
        "bumpmap": "no",
        "normalmap": "no",
        "compatibleWith": "no",
        "digitalpaint": "no",
        "pbr": "no",
        "easy": "yes",
        "pointcloud": "no",
        "voxeledit": "yes",
        "visualize": "no",
        "heightfield": "no",
        "voxelimport": "yes",
        "export3dprint": "yes",
        "vectormapimport": "no",
        "rastermapimport": "no",
        "uvmap": "no",
        "retopology": "no",
        "analyzetools": "no",
        "code": "no",
        "dimension": "no",
        "geo": "no"
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

    console.log("RES before sorted");
	sorted = sortResults(results);
    console.log("RES before display" + results);
	displayResults(sorted);
}

 function scoreData(answerMap, data) {
 	console.log("scoring data");
 	apps = [];
 	var i = 0;
 	for (a of data) {
        console.log("scoring " + a.name);
        a.matches = [];
 		var os = false;
 		a.score = 0;
 		for (prop in answerMap) {
 			//console.log("prop in answerMap" + prop);
 			if (!answerMap.hasOwnProperty(prop)) {
        	//The current property is not a direct property of p
        	continue;
            }
        if (a[prop] != null && a[prop] == "yes") {
            console.log("answermap["+prop+"] is " + answerMap[prop]);
            console.log("a[" + prop + "] is " + a[prop]);
        	a.score = a.score + answerMap[prop];
        	if (!os && (prop == "mac" || prop == "linux" || prop == "windows")) {
        		a.score += 10; // add a large number because operating system is important
        		os = true; // do this only once though.
                //a.matches.push("operating system");

                }
        	 else {
                var match = wordMap[prop];
                if (match == null) match = prop;
                a.matches.push(match);
                console.log("PUSHING TO MATCHES " + wordMap[prop] + " from " + prop);
            }
        }

            if (prop == "money0") {
                console.log("money0");
                if (a["price"] != null && parseInt(a["price"]) <= 0) {
                    a.score+=5;
                    a.matches.push("price is $0");
                }
            } else if (prop == "money100") {
                if (a["price"] != null && parseInt(a["price"]) <= 100) {
                    a.score+=5;
                    a.matches.push("price less than $100");
                }
            } else if (prop == "money500") {
                if (a["price"] != null && parseInt(a["price"]) <= 500) {
                    a.score+=5;
                    a.matches.push("price less than $500");
                }
            }
           
    }
    apps[i] = a;
    i++;
}
return apps;
}
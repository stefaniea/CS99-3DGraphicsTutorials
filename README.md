# CS99-3DGraphicsTutorials

# Software Selector

Input:
Currently, input is a hard-coded JSON string, which is exported from a spreadsheet. This can easily be switched to read from a file or from a url.

Here's a condensed example of what the data looks like (js/fileUtils.js openAndScoreData())
```
[
    {
        "name": "Sculptris",
        "company": "Pixologic",
        "description": "Software for 3D sculpting...",
        "price": 0,
        "studentprice": 0,
        "purpose": "Digital sculpting and painting",
        "large": "yes",
        "edit": "yes",
        "windows": "yes",
        "mac": "yes",
        "precise": "no",
        "linux": "no",
        "uvmap": "yes",
        "retopology": "yes",
        "analyzetools": "no"
    },
    {
      "name": "Blender",
    }
]
```

The values map to questions (quiz.html). For instance:
```
<div class="thumbnail">
	<img id="img3" src=
	"https://upload.wikimedia.org/wikipedia/en/b/bd/Windows_7.png">
	<div class="caption clearfix">
	    <div class="pull-left">
	        <b>I only have access to a PC (Windows
	        laptop or desktop)</b>
	    </div>
	    <div class="pull-right">
	        <input id="checkbox3" type="checkbox"
	        value="windows">
	    </div>
	</div>
</div>
```
 ...the input is labeled with value="windows".

 Most questions also give a weighting:
```
<div class="pull-right">
	<input id="checkbox1" type="checkbox" value="tube"><br>
	    <label><input name="q4" type="radio"
	    value="nice"> Not Important</label>
	    <label><input name="q4" type="radio"
	    value="somewhat">  Somewhat Important</label>
	    <label><input name="q4" type="radio"
	    value="very">  Very Important</label>
	    <label><input name="q4" type="radio"
	    value="essential"> Extremely Necessary</label>
</div>
```

Scores for each attribute are tallied in js/handleInput.js handFormSubmit()
Scores for each software are tallied in js/fileUtils.js openAndScoreData()

After software is scored, sorted, and normalized (to be out of 100%), results are displayed. See handleInput.js displayResults().

# Pixel Sampling Examples
Displays and animates 8 common sampling techniques.




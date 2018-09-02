var through = require('through2');    // npm install --save through2
var path=require('path');
module.exports = (argfirstfiles=[])=> {
	var files=[];
	var firstfiles=[];
	argfirstfiles.forEach(f=>firstfiles.push(path.resolve(f)));
	return through.obj(transform,flush);
	function transform(file, encoding, callback){
    	files.push(file);
    	callback();
	};
	function popinfiles(f){
		for(var g=0;g<files.length;g++){
			var file=files[g];
			if (file.path===f){ 
				files.splice(g,1);
				return file;
			}
		}
		return null;
	}
	function flush(callback){
    	sorted=[];
    	firstfiles.forEach(f=>{
				var file=popinfiles(f);
				if (file) sorted.push(file);
    		});
    	files.forEach(f=>sorted.push(f));
    	sorted.forEach(this.push,this);
    	callback();
    	};
  	};

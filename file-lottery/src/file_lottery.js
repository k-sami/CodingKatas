var fs = require('fs');

var fileLottery = function( directoryPath ) {

    this.init = function() {
        this.index = 0;
        if(fs.lstatSync(directoryPath).isDirectory()){
            this.fileNames = fs.readdirSync(directoryPath);
        }
        else if(fs.lstatSync(directoryPath).isFile()){
            this.fileNames =  [directoryPath];
        }else{
            console.log("Error ! Not a file or Directory");
            this.fileNames = [];
        }
    };

    this.init();
}

fileLottery.prototype = {
    reset: function() {
        this.index = 0;
    },
    next: function() {
        if(!this.hasNext()){
            this.reset();
            this.shuffle();
        }
        return this.fileNames[this.index++];
    },
    hasNext : function(){
        return this.index < this.fileNames.length;
    },
    shuffle: function() {
        for (var j, temp, i = this.fileNames.length; i; j = Math.floor(Math.random() * i)) {
            temp = this.fileNames[--i];
            this.fileNames[i] = this.fileNames[j];
            this.fileNames[j] = temp;
        }
    }
}

function run(directoryPath){
    var fL = new fileLottery(directoryPath);
    while(fL.hasNext()){
        console.log(fL.next());
    }
}

module.exports.fileLottery = fileLottery;
module.exports.run = run;

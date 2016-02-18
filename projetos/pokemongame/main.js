/*jshint multistr:true */

var text = "Lorem ipsum dolor Pedro sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Pedro dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Ana ullamco";
var myName = "Pedro";
var hits = [];

for(i = 0; i <= text.length ; i++ ){
    if (text[i] === myName[0]){
        for (j = i ; j < (myName.length + i) ; j++){
            hits.push(text[j]);
        }
    }
    
}

if (hits.length === 0) {
    console.log("Your name wasn't found in the text.")
} else {
    console.log(hits)
}


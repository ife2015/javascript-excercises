const caesar = function(phraseparameter,numberspace) {

const word = phraseparameter;
const alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const emptyArray = [];
const num = numberspace; 

for(let i=0; i<word.length; i++) {
	for(let j=0; j<alphabetList.length; j++){
   		if(word[i] === alphabetList[j]) {
        	let locateLetter = alphabetList[j]; //gives letter 
            let locateIndex = alphabetList.indexOf(locateLetter); //gives numbers
            		if((locateIndex + num) < alphabetList.length) {
                    	emptyArray.push(alphabetList[locateIndex+num]);
                     }
                     if((locateIndex + num) < 0) {
                        emptyArray.push(alphabetList[locateIndex + 26 + num]);
                     }
          			if((locateIndex + num) > (alphabetList.length-1)) {
                        emptyArray.push(alphabetList[locateIndex - 26 + num]);
                     }
  		   }          
     }     
}  

}

module.exports = caesar

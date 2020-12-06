const fibonacci = function(num) {
    const myStartArray = [1,1];
    const numberVal = +num;
    let accumulator; 
  
  if (numberVal > 0){
 	for(let i=0; i <= numberVal; i++) {
    	accumulator = myStartArray[i] + myStartArray[i+1];
        myStartArray.push(accumulator); 
    }
     return myStartArray[numberVal-1];
 } else {
 	   return "OOPS"; 
 	}
}

module.exports = fibonacci

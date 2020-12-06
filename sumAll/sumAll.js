const sumAll = function(first,last) {
    let finalsum = 0; 
    if( (first > last)){
        for(i = last; i<=first; i++){
            finalsum += i; 
        }
        return finalsum; 
    } else if ((last>first)&&(first>0)&&(typeof last !== "string")){
        for(i=first; i<=last; i++){
            finalsum += i;
        }
        return finalsum; 
    } else {
        return "ERROR";
    }
}

module.exports = sumAll

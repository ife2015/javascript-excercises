const reverseString = function(word) {
    let stringname = word; 
    let stringlen = word.length
    let index_len = stringlen - 1;  
    let filler = ""; 
    i = index_len; 
        while ( ( i >= 0) && (i <= stringlen)) {
             filler += stringname.charAt(i);
            i--;
        }
        return filler; 
}

module.exports = reverseString

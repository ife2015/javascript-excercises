const palindromes = function(word) {
    let stringname = word.toLowerCase().replace(/\s+/g,'').replace(/\./g, '').replace(/\!/g, '');; 
    let stringlen = word.length
    let index_len = stringlen - 1;  
    let filler = ""; 
    i = index_len; 
        while ( ( i >= 0) && (i <= stringlen)) {
             filler += stringname.charAt(i);
            i--;
        }

    if(stringname.charAt(0) == filler.charAt(0)){
        return true;
    }else {
        return false; 
    }

}

module.exports = palindromes

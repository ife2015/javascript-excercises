const repeatString = function(stringtext,num) {
    let container = [];

if(num<0){
    return "ERROR";
} else {
    for(i=0; i<=(num-1); i++){
    container[i] = stringtext;
}
    let comb_text = container.join("");
    return comb_text;
}
}

module.exports = repeatString

const ftoc = function(temp) {
  let cvrtoCel = (temp - 32)*(5/9); 

  if( Math.floor(cvrtoCel) !== cvrtoCel) {
    return +cvrtoCel.toFixed(1);
  } else {
      return cvrtoCel;
  }
}

const ctof = function(temp_2) {
  let cvrttoFahr = (temp_2 * (9/5)) + 32; 

  if( Math.floor(cvrttoFahr) !== cvrttoFahr) {
      return +(cvrttoFahr.toFixed(1));  	
  } else {
      return cvrttoFahr; 
  }

}

module.exports = {
  ftoc,
  ctof
}

// JavaScript Document

var ValidateZipCode = function(inZip){
  this.inZip = inZip;
};

ValidateZipCode.prototype.validateZip = function() {
  //our code goes here

  if(this.inZip === ""){
    return "Please enter a number";
  }

  if(this.inZip === "00000"){
    return "Not a valid zip code";
  }
  
   

  const numberType = parseInt(this.inZip);
  if( isNaN(numberType) ){
    return "Please enter a number";
  }
  
  if(this.inZip.length != 5){
    return "Please enter a five digit zip code";
  }

 
  
  // notes
  //regex101.com
  //https://www.youtube.com/watch?v=909NfO1St0A
  //https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
  //https://stackoverflow.com/questions/4975644/regular-expression-to-match-exactly-5-digits
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  
  // match five digits.. .note regex declaration with / to start and close and \d for digits
  const reg = /\d{5}/;

  // boolean,, if this.inZip does not match regex of five digits, return ..  (also note ! as if NOT)
  if(!reg.test(this.inZip)){
	  //console.log(reg.test('50983'));
	  //console.log(reg.test(50982));
	  //console.log(reg.test("5098a"));
	  return "Please enter a 0-9";
  }
  
  if(this.inZip < 501 || this.inZip > 99950){
	  return "Not a valid zip code";
  }

  return "Valid";
};

module.exports = ValidateZipCode;

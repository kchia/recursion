// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  result = '';
  if (Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
        result += stringifyJSON(obj[i]);
        if (i != obj.length - 1){
          result += ','
        }
      }
    return '[' + result + ']';
  } else if(typeof obj === 'number'|| typeof obj === 'boolean'){
        result += obj;
  } else if(typeof obj === 'string'){
        result += '"' + obj + '"';
  } else if(obj === null){
        result += 'null';
  } else if (Object.prototype.toString.call(obj) === "[object Object]"){
      for(var key in obj){
          if (key === 'functions' || key === 'undefined'){
            result += '';
          } else {
            result += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
          }
      }
      return '{' + result.slice(0,result.length-1) + '}';
  }
  return result;
};


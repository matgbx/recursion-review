// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  if (json[0] === '{') {
    var arr1 = json.slice(1, json.length - 1).split(',');
    var res = {};
    arr1.forEach(function(item) {
      var newArr = item.split(':');
      res[parseJSON(newArr[0])] = parseJSON(newArr[1]); 
    });
    return res;
  } else if (json[0] === '[') {
    var arr2 = json.slice(1, json.length - 1).split(',');
    console.log(arr2);
    var output1 = arr2.map(function(item) {
      return parseJSON(item);
    });
    return output1;
  // } else if (json ) {
    
  } else {
    if (json == 'number' || json == 'boolean') {
      var output = eval(json);
      return output;
    } else {
      return json;
    }
  }
};

console.log(parseJSON('{"hello":00,"idea":function(){sdf}}'));
// console.log(parseJSON('["hello",1,true]'));


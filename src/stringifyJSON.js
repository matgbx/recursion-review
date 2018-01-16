// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

// var stringifyJSON = function(obj) {
//   var leftBracket = '{';
//   var rightBracket = '}';
//   var leftBasketBracket = '[';
//   var rightBasketBracket = ']';
//   var colon = ':';
//   var dQLeft = '"';
//   var dQRight = '"';
//   var results = [];
//   var type = typeof(obj);

//   if (type === 'boolean' || type === 'number' || obj === null) {
//     return '' + obj;
//   }

//   if (type === 'string') {
//     return dQLeft + obj + dQRight;
//   }
//   if (Array.isArray(obj)) {
//     var strings = [];
//     for (var i = 0; i < obj.length; i++) {
//       strings.push(stringifyJSON(obj[i]));
//     }
//     return leftBasketBracket + strings.join(',') + rightBasketBracket;
//   }
//   if (type === 'object') {
//     var ans = [];
//     for (var key in obj) {
//       if (key === 'functions' || key === 'undefined') {
//         return '{}';
//       }
//       ans.push(stringifyJSON(key) + colon + stringifyJSON(obj[key]));
//     }
//     return leftBracket + ans.join(',') + rightBracket;
//   }
// };
// stringifyJSON(stringifiableObjects);

// var stringifyJSON = function(obj) {
//   var type = typeof(obj);

//   if (type === 'boolean' || type === 'number' || obj === null) {
//     return '' + obj;
//   }

//   if (type === 'string') {
//     return '"' + obj + '"';
//   }
//   if (Array.isArray(obj)) {
//     var strings = obj.map(function(item) {
//       return stringifyJSON(item);
//     });
//     return '[' + strings.join(',') + ']';
//   }
//   if (type === 'object') {
//     var ans = [];
//     for (var key in obj) {
//       if (key === 'functions' || key === 'undefined') {
//         return '{}';
//       }
//       ans.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
//     }
//     return '{' + ans.join(',') + '}';
//   }
// };
// stringifyJSON(stringifiableObjects);


var stringifyJSON = function(obj) {
  var leftBasket = '[';
  var rightBasket = ']';
  var semiColin = ':';
  var leftBracket = '{';
  var rightBracket = '}';

  var result = [];
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return leftBasket + result.join(',') + rightBasket;
  }
  if (obj && typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result.push(stringifyJSON(key) + semiColin + stringifyJSON(obj[key]));
    }
    return leftBracket + result.join(',') + rightBracket;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};





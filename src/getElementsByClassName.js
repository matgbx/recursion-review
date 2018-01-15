// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, type) {
  var results = [];
  var parent = type ? type : document.body;

  if (parent.classList) {
    parent.classList.forEach(function(item) {
      if (item === className) {
        results.push(parent);
      }
    });
  }
  var child = parent.childNodes;
  if (child) {
    child.forEach(function(item) {
      results = results.concat(getElementsByClassName(className, item));
    });
  } return results;
};

// var getElementsByClassName = function(className) {
//   var nodes = [];
//   var domTraverse = function(node) {
//     if (node.classList && node.classList.contains(className)) {
//       nodes.push(node);
//     }
//     for (var i = 0; i < node.childNodes.length; i++) {
//       domTraverse(node.childNodes[i]);
//     }   
//   };
//   domTraverse(document.body);
//   return nodes;
// };
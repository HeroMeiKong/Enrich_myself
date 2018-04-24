function getAllSiblings(node){
  var allChildren = node.parentNode.children;
  var array = {
    length:0
  }
  var length = allChildren.length;
  for(let i=0;i < length;i++){
    if(allChildren[i] !== node)
    {
      array[array.length] = allChildren[i];
      array.length += 1
    }
  }
  return array;
}
//getAllSiblings(items3)
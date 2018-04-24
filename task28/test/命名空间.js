//将两个操作同类型的函数封装在一个环境下
window.ykdom = {}
ykdom.addClass = function (node,classes){
  for(let key in classes){
    var value = classes[key];
    var methodName = value ? 'add' : 'remove';
    node.classList[methodName](key)
  }
};
ykdom.getAllSiblings = function (node){
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
};

ykdom.addClass(items,{class1:true,class1:false,class1:true});
ykdom.getAllSiblings(items3);
function addClass(node,classes){
  for(let key in classes){
    var value = classes[key];
    var methodName = value ? 'add' : 'remove';
    node.classList[methodName](key)
  }
}
//addClass(items,{class1:true,class1:false,class1:true})
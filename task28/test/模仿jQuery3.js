window.jquery = function(nodeOrSelector){
	let node;
	if(typeof nodeOrSelector === 'string'){
		node = document.querySelector(nodeOrSelector);
	}else{
		node = nodeOrSelector;
	}
	return {
		getAllSiblings: function(){
			var allChildren = node.parentNode.children;
			var array = {
				length:0
			}
			var length = allChildren.length;
			for(let i=0;i < length;i++){
				if(allChildren[i] !== node){
			      array[array.length] = allChildren[i];
			      array.length += 1
			    }
			}
			return array;
		},
		addClass: function(classes){
			for(let key in classes){
			    var value = classes[key];
			    var methodName = value ? 'add' : 'remove';
			    node.classList[methodName](key)
			}
		}
	}
}

var node2 = jquery(item3);
console.log(node2.getAllSiblings());
node2.addClass({a:true,b:false,c:true});

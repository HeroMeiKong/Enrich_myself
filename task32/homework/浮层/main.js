let switchs = 0;
switchPopover.addEventListener('click',function(e){
	var look = document.getElementById('popover');
	if(switchs === 0){
		popover.style.display = 'block';
		switchs = 1
	}else{
		popover.style.display = 'none';
		switchs = 0
	}
	console.log('popover');
})
father.addEventListener('click',function(e){
	e.stopPropagation()
})
document.addEventListener('click',function(e){
	popover.style.display = 'none';
	switchs = 0;
})
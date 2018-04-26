var allButtons = $('#menu li div img')
for (let i = allButtons.length - 1; i >= 0; i--) {
	$(allButtons[i]).on('click',function(x){
		var index = $(x.currentTarget).index();
		var p = index * -200;
		console.log(p)
		$('#images').css({
			transform: 'translateX('+ p + 'px)'
		})
		n = index;
	})
}

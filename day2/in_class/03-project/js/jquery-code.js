$(function() {
	let myCoolEarth = document.querySelector('.earth')
	myCoolEarth.addEventListener('click', function(){
		console.log('clicked')
	})

	$('.earth').click(function() {
		$('.sun').css('transform', 'rotate(180deg)')
	})
})
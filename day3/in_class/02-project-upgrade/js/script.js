window.addEventListener('load',function(){
	// рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let myCoolEarth = document.querySelector('.earth')
	let leftArrow = document.querySelector('.leftArrow')

	rightArrow.addEventListener('click', function(){
		myCoolEarth.style.animationPlayState = 'running'
		rightArrow.style.backgroundImage = 'url("img/pause.png")'
	})

	leftArrow.addEventListener('click', function(){
		
	})

	const homeBtn = document.querySelector('.home')
	const popUp = document.querySelector('.popUp')
	const close = document.querySelector('.close')
	homeBtn.addEventListener('click', function() {
		popUp.style.display = 'flex'
	})
	close.addEventListener('click', function(){
		popUp.style.display = 'none'
	})
})



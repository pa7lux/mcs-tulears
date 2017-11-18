window.addEventListener('load',function(){
	// рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let myCoolEarth = document.querySelector('.earth')
	let leftArrow = document.querySelector('.leftArrow')

	let animationPlayState = getComputedStyle(myCoolEarth).animationPlayState

	rightArrow.addEventListener('click', function(){
		if(animationPlayState != 'running') {
			animationPlayState = 'running'
			myCoolEarth.style.animationPlayState = animationPlayState
			myCoolEarth.classList.remove('earth-animation-reverse')
			myCoolEarth.classList.add('earth-animation')
			this.style.backgroundImage = 'url("img/pause.png")'
		} else {
			animationPlayState = 'paused'
			myCoolEarth.style.animationPlayState = animationPlayState
			this.style.backgroundImage = 'url("img/rotate_right_arrow.png")'
		}
	})

	leftArrow.addEventListener('click', function(){
		if(animationPlayState != 'running') {
			animationPlayState = 'running'
			myCoolEarth.style.animationPlayState = animationPlayState
			myCoolEarth.classList.remove('earth-animation')
			myCoolEarth.classList.add('earth-animation-reverse')
			this.style.backgroundImage = 'url("img/pause.png")'
		} else {
			animationPlayState = 'paused'
			myCoolEarth.style.animationPlayState = animationPlayState
			this.style.backgroundImage = 'url("img/rotate_left_arrow.png")'
		}
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
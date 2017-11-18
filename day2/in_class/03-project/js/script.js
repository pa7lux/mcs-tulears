window.addEventListener('load',function(){
	//код-демонстрация функций
	function logger(text){
		return text[2]
	}
	console.log(logger('Привет'))
	//alert(logger('Hola'))

	let myFunction = function(){
		return 'Cool, bro!'
	}
	console.log(myFunction())

	let $ = function(selector){
		return document.querySelector(selector);
	}
	//$('.controls').style.backgroundColor = 'red'

	// рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0
	let leftArrow = document.querySelector('.leftArrow')

	rightArrow.addEventListener('click', function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)' // 'rotate(5deg)'	
	})

	leftArrow.addEventListener('click', function(){
		Counter = Counter-5
		myCoolEarth.style.transform = 'rotate('+(Counter)+'deg)'

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



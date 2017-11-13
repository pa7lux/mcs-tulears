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

	rightArrow.addEventListener('click', function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)' // 'rotate(5deg)'	
	})

	const homeBtn = document.querySelector('.home')
	homeBtn.addEventListener('click', function() {
		window.location = 'file:///Users/mac/Desktop/tulers/index.html'
	})
})



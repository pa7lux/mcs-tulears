// HERE WILL BE THE GAME SCRIPT
//óÔÔò ʕ·͡ᴥ·ʔ óÔÔò
window.addEventListener('load', function() {
	const princess = document.querySelector('.princess')
	const samurai = document.querySelector('.samurai')
	const dragon = document.querySelector('.dragon')
	const bigImagePlayer = document.querySelector('.playerZone .bigImage')
	const bigImageComputer = document.querySelector('.computerZone .bigImage')
	const playBtn = document.querySelector('#go')
	const result = document.querySelector('#resultId')
	const scorePlayerContainer = document.querySelector('#scorePlayer')
	const scoreComputerContainer = document.querySelector('#scoreComputer')

	// счет игры
	let scorePlayer = 0
	let scoreComputer = 0

	// собираем адреса картинок
	const princessUrl = getComputedStyle(princess).backgroundImage
	const samuraiUrl = getComputedStyle(samurai).backgroundImage
	const dragonUrl = getComputedStyle(dragon).backgroundImage

	// изменяем большую картинку игрока
	princess.addEventListener('click', function() {
		bigImagePlayer.style.backgroundImage = princessUrl
	})

	samurai.addEventListener('click', function() {
		bigImagePlayer.style.backgroundImage = samuraiUrl
	})

	dragon.addEventListener('click', function() {
		bigImagePlayer.style.backgroundImage = dragonUrl
	})

	// логика компьютера
	playBtn.addEventListener('click', function() {
		let randomNumber = Math.floor(Math.random() * 3) + 1

		switch(randomNumber) {
			case 1:
				bigImageComputer.style.backgroundImage = princessUrl
				break
			case 2:
				bigImageComputer.style.backgroundImage = samuraiUrl
				break
			case 3:
				bigImageComputer.style.backgroundImage = dragonUrl
				break
			default:
				console.log('switch(randomNumber) — error!')
		}

		// сравнение результатов
		const currentPlayerImage = getComputedStyle(bigImagePlayer).backgroundImage
		const currentComputerImage = getComputedStyle(bigImageComputer).backgroundImage

		if (currentPlayerImage === currentComputerImage) {
			result.innerHTML = 'Ничья'
		} else if (currentPlayerImage === princessUrl && currentComputerImage === samuraiUrl) {
			result.innerHTML = 'Победил игрок! Принцесса соблазнила самурая. Боже.'
			scorePlayer = scorePlayer + 1
		} else if (currentPlayerImage === princessUrl && currentComputerImage === dragonUrl) {
			result.innerHTML = 'Победил компьютер. Дракон похитил принцессу! Шок!'
			scoreComputer += 1
		} else if (currentPlayerImage === samuraiUrl && currentComputerImage === princessUrl) {
			result.innerHTML = 'Победил компьютер. Принцесса соблазнила самурая. Всегда так.'
			scoreComputer++
		} else if (currentPlayerImage === samuraiUrl && currentComputerImage === dragonUrl) {
			result.innerHTML = 'Игрок победил. Самурай WIN Dragon. Hustle.'
			scorePlayer++
		} else if (currentPlayerImage === dragonUrl && currentComputerImage === samuraiUrl) {
			result.innerHTML = 'Победил компьютер. Самурай победил дракона.'
			scoreComputer++
		} else if (currentPlayerImage === dragonUrl && currentComputerImage === princessUrl) {
			result.innerHTML = 'Победил игрок. Дракон похитил принцессу. Сенсация!'
			scorePlayer++
		} else {
			result.innerHTML = 'Ты что, не умеешь играть? Выбери персонажа, мой повелитель.'
		}

		scorePlayerContainer.innerHTML = scorePlayer
		scoreComputerContainer.innerHTML = scoreComputer
	})
})
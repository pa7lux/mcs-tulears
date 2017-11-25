window.addEventListener('load', function() {
	const apiKey = '099715979800997fed902c8c415868c1'
	const method = 'GET'

	function getWeather(city, headingSelector, tempSelector, progressSelector, pressureHeading, pressureBar) {
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
		const request = new XMLHttpRequest()
		
		request.open(method, url)

		request.addEventListener('readystatechange', function() {
			if (request.status === 200 && request.readyState === 4) {
				const responseText = request.responseText
				const responseObject = JSON.parse(responseText)
				const currentCity = responseObject.name
				const tempKelvin = parseInt(responseObject.main.temp)
				const temp = tempKelvin - 273

				document.querySelector(headingSelector).innerHTML = currentCity
				document.querySelector(tempSelector).innerHTML = temp
				document.querySelector(progressSelector).style.width = 100 + temp * 10 + 'px'

				console.log(responseObject)

				// давление
				const pressure = parseInt(responseObject.main.pressure * 0.75)
				document.querySelector(pressureHeading).innerHTML = pressure + ' мм Hg'
				document.querySelector(pressureBar).style.width = (pressure - 650) * 4 + 'px'

			}
		})

		request.send()
	}

	getWeather('Moscow', '#moscowHeading', '#moscowTemp', '#moscowProgress', '#moscowPressure', '#moscowPressureBar')
	getWeather('Tokyo', '#tokyoHeading', '#tokyoTemp', '#tokyoProgress', '#tokyoPressure', '#tokyoPressureBar')
	getWeather('Denpasar', '#denpasarHeading', '#denpasarTemp', '#denpasarProgress', '#denpasarPressure', '#denpasarPressureBar')


	// magic
	const userContainer = document.querySelector('#userContainer')
	const magicBtn = document.querySelector('#magicButton')
	const magicInput = document.querySelector('#whatDoYouWant')

	magicBtn.addEventListener('click', function() {
		userContainer.style.display = 'block'
		getWeather(magicInput.value, '#userHeading', '#userTemp', '#userProgress', '#userPressure', '#userPressureBar')
	})
})
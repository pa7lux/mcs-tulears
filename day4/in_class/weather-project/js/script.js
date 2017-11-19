window.addEventListener('load', function() {
	const apiKey = '099715979800997fed902c8c415868c1'
	const method = 'GET'

	function getWeather(city, headingSelector, tempSelector, progressSelector) {
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

			} else {
				console.log('Это фиаско. Если больше двух раз)')
			}
		})

		request.send()
	}

	getWeather('Moscow', '#moscowHeading', '#moscowTemp', '#moscowProgress')
	getWeather('Tokyo', '#tokyoHeading', '#tokyoTemp', '#tokyoProgress')
	getWeather('Denpasar', '#denpasarHeading', '#denpasarTemp', '#denpasarProgress')
})
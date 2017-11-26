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

// Start P5 coding

let windowWidth = window.innerWidth
let halfWidth = windowWidth/2
let moscowJson;
let tokyoJson;
let denpasarJson;

function preload() {
	let MoscowUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=099715979800997fed902c8c415868c1'
	let TokyoUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=099715979800997fed902c8c415868c1'
	let denpasarUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denpasar&appid=099715979800997fed902c8c415868c1'
	moscowJson = loadJSON(MoscowUrl)
	tokyoJson = loadJSON(TokyoUrl)
	denpasarJson = loadJSON(denpasarUrl)
}

function setup() {
 	let canvas = createCanvas(windowWidth, 500)
 	canvas.parent('#canvasBlock')
 	background(0,255,0)
}

function draw() {
	let MoscowTemp = moscowJson.main.temp
	let MoscowTempVisual = (MoscowTemp-273) * 10 + 100
	let TokyoTemp = tokyoJson.main.temp
	let TokyoTempVisual = (TokyoTemp-273) * 10 + 100
	let DenpasarTemp = denpasarJson.main.temp
	let DenpasarTempVisual = (DenpasarTemp-273) * 10 + 100
	noStroke()
	fill('gold')
	ellipse(halfWidth-200, height/2, MoscowTempVisual)
	fill(color('rgba(40, 40, 100, 0.3)'))
	ellipse(halfWidth, height/2, TokyoTempVisual)
	fill(color('rgba(150, 150, 0, 0.3)'))
	ellipse(halfWidth+200, height/2, DenpasarTempVisual)
	fill('white')
	textSize(30)
	text("Moscow", halfWidth-250, height/2);
	text(Math.round(MoscowTemp-273), halfWidth-220, height/2+50);
	text("Tokyo", halfWidth-35, height/2);
	text(Math.round(TokyoTemp-273), halfWidth-20, height/2+50);
	text("Denpasar", halfWidth+140, height/2);
	text(Math.round(DenpasarTemp-273), halfWidth+180, height/2+50);
}
console.log('I am alive!')

const myName = prompt('Как твоё имя, человек?')
const myNameContainer = document.getElementById('visitorName')

myNameContainer.innerHTML = myName

// console.log(myName, myNameContainer, myNameContainer.innerHtml)
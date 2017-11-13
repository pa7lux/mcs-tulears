console.log("I'm also here!")

const allDivs = document.getElementsByTagName('div')
const allThisClass = document.getElementsByClassName('mainHeader')
const theId = document.getElementById('dom')
const newWay = document.querySelectorAll('.mainFooter')
const newWaySingle = document.querySelector('main')

console.log(allDivs)
console.log(allThisClass)
console.log(theId)
console.log(newWay)
console.log(newWaySingle)

const hero = document.querySelector('.hero')
hero.style.backgroundColor = 'purple'

const paragraph = document.getElementById('paragraph')
paragraph.style.letterSpacing = '10px'


// const theColor = prompt('Введите цвет')
// console.log(typeof(theColor));
// hero.style.backgroundColor = theColor
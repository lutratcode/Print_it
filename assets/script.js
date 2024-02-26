const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector("#banner .arrow_right")
// console.log(arrowRight)
const arrowLeft = document.querySelector("#banner .arrow_left")
const img = document.querySelector(".banner-img")
const p = document.querySelector('#banner p')

let newDots = document.createElement('div')
let dots = document.querySelector('.dots')
dots.appendChild(newDots)
newDots.classList.add('dot')

for (let j = 0; j < slides.length - 1; j++) {
	const element = slides[j]
	// console.log(element)
	newDots[j] = document.createElement('div')
	dots = document.querySelector('.dots')
	dots.appendChild(newDots[j])
	newDots[j].classList.add('dot')
}

newDots.classList.add('dot_selected')

let i = 0
arrowRight.addEventListener('click', function () {
	i++
	if (i >= slides.length) {
		i = 0
	}
	toggle()
})

arrowLeft.addEventListener('click', function () {
	i--
	if (i < 0) {
		i = slides.length - 1
	}
	toggle()
})

function toggle() {
	img.src = `./assets/images/slideshow/${slides[i].image}`
	p.innerHTML = slides[i].tagLine
	document.querySelector('.dot_selected').classList.remove('dot_selected')
	document.querySelector(`.dots div:nth-child(${i + 1})`).classList.add("dot_selected")
}

let timer = setInterval(function () {
	arrowRight.click()
}, 1000)

const banner = document.querySelector('#banner')
banner.addEventListener('mouseenter', function () {
	clearInterval(timer)
})

banner.addEventListener('mouseleave', function () {
	timer = setInterval(function () {
		arrowRight.click()
	}, 1000)
})
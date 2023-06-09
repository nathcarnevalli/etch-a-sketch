const DEFAULT_COLOR = '#ff0000'
const DEFAULT_SIZE = 16

let currentPaletteColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE
let drawSquare = false

function getPaletteColor(e) {
  currentPaletteColor = e.target.value
}

function paintMode() {
  currentPaletteColor = document.querySelector('.color-picker').value
}

function pencilMode() {
  currentPaletteColor = 'black'
}

function eraserMode() {
  currentPaletteColor = 'white'
}

function draw(e) {
  if (drawSquare) {
    const square = e.target
    square.style.backgroundColor = currentPaletteColor
  }
}

function canDraw() {
  return drawSquare ? (drawSquare = false) : (drawSquare = true)
}

function clearSketch() {
  window.location.reload()
}

function getSliderSize(e) {
  const currentSize = e.target.value
  const sliderSize = document.getElementById('sketchSize')
  sliderSize.innerText = `${currentSize} x ${currentSize}`
  clearGrid()
  createGrid(currentSize)
}

function createGrid(n) {
  const container = document.querySelector('.container')

  container.style.gridTemplateColumns = `repeat(${n},  minmax(0, 1fr))`
  container.style.gridTemplateRows = `repeat(${n}, minmax(0, 1fr)`

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const square = document.createElement('div')

      square.className = 'square'
      container.appendChild(square)
      square.addEventListener('click', canDraw)
      square.addEventListener('mouseover', draw)
    }
  }
}

function clearGrid() {
  const container = document.querySelector('.container')
  container.innerHTML = ''
}

createGrid(currentSize)

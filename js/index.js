function createGrid(n, m) {
  const container = document.querySelector('.container')

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const square = document.createElement('div')
      square.className = 'square'
      container.appendChild(square)

      square.addEventListener('click', draw)
    }
  }
}

function draw(e) {
  const square = e.target
  square.style.backgroundColor = 'blue'
}

function eraseAll() {
  window.location.reload()
}

createGrid(16, 16)

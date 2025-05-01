/** const button = document.getElementById('addButton')
button.addEventListener('click', function () {
  // Create and add a paragraph
  const paragraph = document.createElement('p')
  const text = document.createTextNode('This is a student')
  paragraph.appendChild(text)
  document.body.appendChild(paragraph)

  // Create and add a level two heading
  const heading2 = document.createElement('h2')
  heading2.textContent = 'Welcome to the EIE Department!'
  document.body.appendChild(heading2)

  // Create and add a hyperlink
  const link = document.createElement('a')
  link.href = 'https://witseie.github.io/software-dev-3/'
  link.textContent = 'Visit School of Software Development 3'
  link.target = '_blank' // Open in new tab
  document.body.appendChild(link)
}, false)**/

const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const headerElement = document.getElementById('heading')
  headerElement.innerHTML = 'Software Development 3'
}, false)

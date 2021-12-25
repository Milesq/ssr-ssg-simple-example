const app = document.getElementById('app')
app.innerHTML = `
  <h1>Hello!</h1>
`

if (location.pathname !== '/') {
  app.innerHTML = location.pathname
}

app.addEventListener('click', () => {
  app.innerHTML = 'clicked!'
})

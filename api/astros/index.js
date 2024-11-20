
const API_KEY = 'ub6UXxk8wNQUoXcIdO8jliMXP6pM766Q2y2QAdpD'

async function getJokesApi() {
  const response  = await fetch('https://official-joke-api.appspot.com/jokes/random')
  const joke = await response.json()

  const setupParagraph =  document.getElementById('setup')
  setupParagraph.innerText = joke.setup

  const punchlineParagraph = document.getElementById('punchline')
  punchlineParagraph.innerText = joke.punchline
}


async function getAsteroidsApi() {
  const response  = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-11-20&api_key=${API_KEY}`)
  const data = await response.json()
  const nearEathObjects = data.near_earth_objects

  const asteroids = nearEathObjects['2024-11-20']

  const asteroidsDiv = document.getElementById('asteroids')

  asteroids.forEach(asteroid => {
    const divAsteroid = document.createElement('div')    
    divAsteroid.id = asteroid.id
    
    const nameP = document.createElement('p')
    nameP.innerText = `nome do asteroide: ${asteroid.name}`

    const isDangerP = document.createElement('p')
    isDangerP.innerText = `É um perigo? ${asteroid.is_potentially_hazardous_asteroid ? 'sim' : 'falso'}`

    divAsteroid.appendChild(nameP)
    divAsteroid.appendChild(isDangerP)

    asteroidsDiv.appendChild(divAsteroid)
  })
}

getJokesApi()
getAsteroidsApi()

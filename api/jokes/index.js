

async function getJokesApi() {
  const response  = await fetch('https://official-joke-api.appspot.com/jokes/random')
  const joke = await response.json()

  const setupParagraph =  document.getElementById('setup')
  setupParagraph.innerText = joke.setup

  const punchlineParagraph = document.getElementById('punchline')
  punchlineParagraph.innerText = joke.punchline
}


getJokesApi()

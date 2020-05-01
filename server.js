const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('./views', { express: app, noCache: true })

app.get('/', (req, res) => {
  return res.render('home', { recipes: data })
})

app.get('/about', (req, res) => {
  return res.render('about')
})

app.get('/recipes', (req, res) => {
  return res.render('recipes', { recipes: data })
})

app.get('/recipes/:index', (req, res) => {
  const recipes = data
  const recipeIndex = req.params.index

  return res.render('recipe', { recipe: recipes[recipeIndex] })
})

const PORT = process.env.PORT || 3000
app.listen(PORT)


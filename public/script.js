const recipes = document.querySelectorAll('.recipes .recipe')
const hideButtons = document.querySelectorAll('.wrapper-hide span')


// Add EventListener to each recipe
for (let recipe of recipes) {
  recipe.addEventListener('click', () => {
    const id = recipe.id
    location.href = `/recipes/${id}`
  })
}

// Add EventListener to each hide button
for (let hideButton of hideButtons) {
  hideButton.addEventListener('click', (e) => {
    // Select the next element with the class hide-element
    const hideElement = hideButton.parentElement.parentElement.querySelector('.hide-element')

    // Shows the element
    if (hideElement.classList.contains('hide')) {
      hideElement.classList.remove('hide')
      hideButton.textContent = 'ESCONDER'
    }
    // Hides the element
    else {  
      hideElement.classList.add('hide')
      hideButton.textContent = 'MOSTRAR'
    }
  })
}
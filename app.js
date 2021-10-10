var Input = document.querySelector('input')
var Button = document.querySelector('button')
const parent = document.querySelector('div.grid')

const getData = async (item) => {
    console.log(item)
    let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    const res = await fetch(url)
    const data = await res.json()
    const recipies = data.hits
    // console.log(recipies)
    recipies.forEach(item => {
        const { recipe } = item
        // console.log(recipe)
        const { label, image, source, calories } = recipe
        // console.log(label,image,source,calories)
        const template = `<article class="card">
        <img class="card__image" src="${image}" />
        <div class="card__data">
          <div class="card__info">
            <h2>${label}</h2>
            <p>From ${source}</p>
            <h3 class="card__price"> Cal = ${calories.toFixed(0)}</h3>
            <button class="card__add">+</button>
          </div>
        </div>
      </article>`
        // parent.appendChild(card)
        const newcard = document.createElement('article')
        newcard.setAttribute('class', 'card')
        newcard.setAttribute('style', 'margin-bottom: 50px')
        newcard.innerHTML = template
        parent.appendChild(newcard)
    })
}

Button.addEventListener('click', (e) => { getData(Input.value) })


// var Input = document.querySelector('input')
// var Button = document.querySelector('button')
// const parent = document.querySelector('div.grid')

// const getData = async (item) => {
//     console.log(item)
//     let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
//     const res = await fetch(url)
//     const data = await res.json()
//     const recipies = data.hits
//     // console.log(recipies)
//     recipies.forEach(item => {
//         console.log(item.recipe)
//         const template = `<article class="card">
//         <img class="card__image" src="https://i.ibb.co/RT0bjJq/food1.png" />
//         <div class="card__data">
//           <div class="card__info">
//             <h2>Nombre Comida</h2>
//             <p>Descripcion de la comida, con ingredientes</p>
//           </div>
//           <h3 class="card__price">$7.50</h3>
//           <button class="card__add">+</button>
//         </div>
//       </article>`
//         // parent.appendChild(card)
//         const newcard = document.createElement('article')
//         newcard.setAttribute('class', 'card')
//         newcard.setAttribute('style','margin-bottom: 20px')
//         newcard.innerHTML = template
//         parent.appendChild(newcard)
//     })
// }

// Button.addEventListener('click', (e) => { getData(Input.value) })







//destructuring

const person = ({
    name: "Prem",
    age: 19,
    country: "India"
})

const { age, name, country } = person

console.log(name, age, country)

// here we can access the name attribute in the object person without accessing it by writing person.name 

// console.log(`Hi ${name} you are ${age}`) 

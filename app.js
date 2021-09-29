var Heading = document.getElementById("heading")
var Para = document.getElementsByClassName("para")
var tags = document.getElementsByTagName("a")
var query = document.querySelector('#heading')
var query1 = document.querySelectorAll('.para')
var Body = document.querySelector("body")
// as id is unique so getElementById returns only single thing
// but class are not unique so getElementsByClassName so returns all the things which uses the class "para"

// Heading.innerHTML = "hello pooja"
// innerHTML is a method provided by the DOM api and is used to replace the content provided with the actual content

console.log(Heading)
console.log(Para.length)
console.log(Para[0])
console.log(Para[1])
console.log(Para)
console.log(tags)
console.log(query)
console.log(query1)

// Para.push("pooja")

Heading.innerHTML="hello"
Heading.style = "color:red ; font-size:4rem;"

Heading.classList.add("five")
Heading.classList.remove("one")

console.log(Heading.classList)

Body.classList.add("dark")
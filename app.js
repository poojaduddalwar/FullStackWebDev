// console.log(React , ReactDOM)

const container = document.getElementById("app")
// console.log(container)

//it is a react method and it allows to create element inside the virtual dom
//in this first is the name of the element , then the object and the 3rd is the item
// const content = React.createElement('h2',{},'This is the heading')

// const content = React.createElement('div',{},[
//     React.createElement('h1',{},'This is the haeding'),
//     React.createElement('p',{},'this is the paragraph')
// ])

const content = React.createElement('div',{},[
    React.createElement('h1',{},'This is the haeding'),
    React.createElement('p',{},
        React.createElement('h3',{},'this is heading 3 inside the paragraph'))
])

//react dom's render method is used to display
ReactDOM.render(content,container)
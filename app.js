const container = document.getElementById("app")

//1. To create multiple children of main div pass an array[].

const content = React.createElement('ul',{},[
    React.createElement('li',{},'This is the heading'),
    React.createElement('li',{},'This is the heading'),
    React.createElement('ul',{},[
        React.createElement('li',{},'content'),
        React.createElement('li',{},'content'),
        React.createElement('li',{},'content'),
        React.createElement('li',{},'content'),
    ]),
]
)

ReactDOM.render(content,container)
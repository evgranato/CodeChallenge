const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const nameInput = document.querySelector("#personName")
const locationInput = document.querySelector("#personTravel")

const data = 
    {
        name: null,
        location: null
    }



button1.addEventListener('click', () => {
    button1.classList.add("highlight")
})

nameInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
        console.log(e)
    } else {
        data.name = nameInput.value
        console.log(data)
    }
})
locationInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
        console.log(e)
    } else {
        data.location = locationInput.value
        console.log(data)
    }
})
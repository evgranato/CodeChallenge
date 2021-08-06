const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button4 = document.querySelector(".button4")
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
        data.name = nameInput.value;
        locationInput.style.visibility = "visible"
        button1.classList.add("highlight")
        
    }
})
locationInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
        console.log(e)
    } else {
        data.location = locationInput.value
        button2.classList.add("highlight")
        button4.style.visibity = "visible"
        console.log(data)
    }
})
//test

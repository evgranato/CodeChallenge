const button2 = document.querySelector(".button2")
const button1 = document.querySelector(".button1")
const buttonGroup = document.querySelector(".buttons")
const nameInput = document.querySelector("#personName")
const nameLabel = document.querySelector(".personName")
const locationInput = document.querySelector("#personTravel")
const nameGroup = document.querySelector('.nameGroup')
const locationGroup = document.querySelector('.locationGroup')
const travelLabelSelect = document.querySelector('.myLabel')

const data = 
    {
        name: null,
        location: null
    }

nameInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
    } else {
        data.name = nameInput.value;
        nameGroup.remove()
        locationGroup.style.display = ""
        button1.classList.add("highlight")
    }
})
locationInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
    } else {
        data.location = locationInput.value
        button2.classList.add("highlight")
        const subButton = document.createElement('button');
        const classes = ["subButton","btn","btn-primary","rounded-circle","m-3"]
        subButton.classList.add(...classes)
        subButton.innerText = "Submit"
        buttonGroup.append(subButton)
        const theGoogleButton = document.querySelector('.subButton')
        theGoogleButton.addEventListener('click', () => {
            window.open(`https://google.com/search?q=${data.location}`);
            theGoogleButton.classList.add("highlight")
        })
    }
})


const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
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



button1.addEventListener('click', () => {
    button1.classList.add("highlight")
})

nameInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
        console.log(e)
    } else {
        data.name = nameInput.value;
        nameLabel.remove()
        nameInput.remove()
        
        const travelLabel = document.createElement("label");
        travelLabel.for = 'personTravel';
        travelLabel.innerText = 'Where would you like to travel?';
        travelLabelSelect.append(travelLabel)
        // const travelInput = document.createElement('input')
        // travelInput.setAttribute("aria-describedby", "personTravel");
        // travelInput.classList.add("form-control");
        // travelInput.id = "personTravel";
        // travelInput.type = "text";
        // locationGroup.append(travelInput)
        locationGroup.style.visibility = "visible"
        button1.classList.add("highlight")
        const travelLabel2 = document.createElement("small");
        const classes2 = ["form-text", "text-muted"]
        travelLabel2.id = 'personTravel';
        travelLabel2.innerText = 'If you could travel ANYWHERE you wanted...';
        travelLabel2.classList.add(...classes2)
        locationGroup.append(travelLabel2)
    }
})

locationInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
        console.log(e)
    } else {
        data.location = locationInput.value
        button2.classList.add("highlight")
        const subButton = document.createElement('button');
        const classes = ["subButton","btn","btn-primary","rounded-circle","m-3"]
        subButton.classList.add(...classes)
        subButton.innerText = "Submit"
        buttonGroup.append(subButton)
        console.log(data)
        const theGoogleButton = document.querySelector('.subButton')
        theGoogleButton.addEventListener('click', () => {
            window.open(`https://google.com/search?q=${data.location}`)
        })
    }
})

const button3 = document.querySelector(".button3")
 button2 = document.querySelector(".button2")
 button1 = document.querySelector(".button1")
 buttonGroup = document.querySelector(".buttons")
 nameInput = document.querySelector("#personName")
 nameLabel = document.querySelector(".personName")
 locationInput = document.querySelector("#personTravel")
 hobbyInput = document.querySelector("#personHobby")
 nameGroup = document.querySelector('.nameGroup')
 locationGroup = document.querySelector('.locationGroup')
 hobbyGroup = document.querySelector('.hobbyGroup')
 travelLabelSelect = document.querySelector('.myLabel')

const data = 
    {
        name: null,
        hobby: null,
        location: null
    }

nameInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
    } else {
        data.name = nameInput.value;
        nameGroup.style.display = "none"
        hobbyGroup.style.display = ""
        button1.classList.add("highlight")
        const nameTitle = document.createElement('h2')
        nameTitle.innerText = `Hello, ${data.name}`
        document.querySelector('h1').append(nameTitle)
    }
})
hobbyInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
    } else {
        data.hobby = hobbyInput.value
        hobbyGroup.style.display = "none"
        locationGroup.style.display = ""
        button2.classList.add("highlight")
    }
})
locationInput.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter'){
    } else {
        data.location = locationInput.value
        button3.classList.add("highlight")
        const submitTitle = document.createElement('h2')
        submitTitle.innerText = `Is The Information Correct?: ${data.hobby} in ${data.location}`
        submitTitle.classList.add("confirmation")
        document.querySelector('h2').append(submitTitle)
        const subButton = document.createElement('button');
        const classes = ["subButton","btn","btn-primary","rounded-circle","m-3"]
        subButton.classList.add(...classes)
        subButton.innerText = "Submit"
        document.querySelector('h2').append(subButton)
        const theGoogleButton = document.querySelector('.subButton')
        theGoogleButton.addEventListener('click', () => {
            window.open(`https://google.com/search?q=${data.location}+${data.hobby}`);
            theGoogleButton.classList.add("highlight")
        })
    }
})

button1.addEventListener('click', () => {
    edit('name')
})

button3.addEventListener('click', () => {
    edit('location')
})
button2.addEventListener('click', () => {
    edit('hobby')
})

const edit = function (group) {
    if (group === 'name') {
        locationGroup.style.display = "none";
        hobbyGroup.style.display = "none"
        nameGroup.style.display = ""
        button1.classList.remove("highlight")
    } else if(group === 'location') {
        nameGroup.style.display = "none";
        hobbyGroup.style.display = "none"
        locationGroup.style.display = ""
        button3.classList.remove("highlight")
    } 
    else if(group === 'hobby') {
        locationGroup.style.display = "none";
        nameGroup.style.display = "none"
        hobbyGroup.style.display = ""
        button2.classList.remove("highlight")
    }else {
        console.log('ERROR')
    }
}
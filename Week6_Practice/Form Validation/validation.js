const displayError = (fieldId, errorMessage) => {
    const errorBox = document.querySelector("#" + fieldId + '-error')
    errorBox.innerText = errorMessage
        }
    
        const largerThanTen = (value) => {
    return value > 10
        }
        const lessThanMinus10 = (value) => {
    return value < -10
        }
    
    const maxLengthElement = document.querySelector("#maxLength")
     maxLengthElement.addEventListener("keyup", (event) => {
    if (largerThanTen(maxLengthElement.value.length)) {
        displayError(event.target.id, "Can't be more than 10 characters!!")
    } else {
        displayError(event.target.id, "")
    }
    })
    
      const range = document.querySelector("#range")
      range.addEventListener("keyup", (event) => {
    if (isNaN(Number(range.value)) || largerThanTen(range.value) || lessThanMinus10(range.value)) {
        displayError(event.target.id, "Must be between ten and minus ten")
    } else {
        displayError(event.target.id, "")
    }
    })
    
    const noT = document.querySelector("#no-t")
    noT.addEventListener("keydown", (event) => {
    if (event.key === 't' || event.key === 'T') {
        event.preventDefault()
    }
    })
    
    /*
    Exercise 2: Add an optional field that requires these characters:
    at least one number: 0-9
    at least one uppercase letter: A-Z
    at least one lowercase letter: a-z
    at least one exclamation mark: !
    */
    
    const password = document.querySelector("#password")
    password.addEventListener("keyup", (event) => {
    if (password.value === '') {
        displayError('password', "")
        return
    }
    if (password.value.match(/[0-9]/g) === null) {
        displayError('password', "Must contain at least one number")
    } else if (password.value.match(/[A-Z]/g) === null) {
        displayError('password', "Must contain at least one uppercase letter")
    } else if (password.value.match(/[a-z]/g) === null) {
        displayError('password', "Must contain at least one lowercase letter")
    } else if (password.value.match(/!/g) === null) {
        displayError('password', "Must contain at least one exclamation mark")
    } else {
        displayError('password', "")
    }
    })
    
    const checkbox2 = document.querySelector("#checkbox2")
    const checkText = document.querySelector("#check-text")
    checkbox2.addEventListener("change", (event) => {
    if (checkbox2.checked === true) {
        checkText.classList.add("required")
    } else {
        checkText.classList.remove("required")
    }
    })
    
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
    // check required fields
    const requiredFields = document.querySelectorAll(".required")
    requiredFields.forEach(element => {
        if (element.type === "checkbox") {
            if (element.checked === false) {
                displayError(element.id, "This field is required")
            }
        } else if (element.value === "") {
            displayError(element.id, "This field is required")
        } else {
            displayError(element.id, "")
        }
    })
    event.preventDefault()
    })
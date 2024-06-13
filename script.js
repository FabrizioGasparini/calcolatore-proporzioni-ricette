let shape = document.getElementById("shape")
let finalShape = document.getElementById("finalShape")

let lengthInput = document.getElementById("lengthInput")
let lengthLabel = lengthInput.querySelector('label')

let finalLengthInput = document.getElementById("finalLengthInput")
let finalLengthLabel = finalLengthInput.querySelector('label')

let heightInput = document.getElementById("heightInput")
let finalHeightInput = document.getElementById("finalHeightInput")


shape.addEventListener("change", () => {
    changeShape(true)
})

function changeShape(propagate) {
    lengthInput.hidden = shape.value == 1
    heightInput.hidden = shape.value == 1

    shape.parentElement.classList.remove('mb-4', 'mb-2')
    shape.parentElement.classList.add((shape.value == 1 ? 'mb-4' : 'mb-2'))

    lengthLabel.innerText = (shape.value == 2) ? 'Diametro' : 'Lato'

    if (propagate) {
        if (shape.value == 1) {
            finalShape.value = 1
            changeFinalShape(false)
        } else {
            if (finalShape.value == 1) {
                finalShape.value = shape.value
                changeFinalShape(false)
            }
        }
    }
}

finalShape.addEventListener("change", () => {
    changeFinalShape(true)
})

function changeFinalShape(propagate) {
    finalLengthInput.hidden = finalShape.value == 1
    finalHeightInput.hidden = finalShape.value == 1

    finalShape.parentElement.classList.remove('mb-4', 'mb-2')
    finalShape.parentElement.classList.add((finalShape.value == 1 ? 'mb-4' : 'mb-2'))

    finalLengthLabel.innerText = (finalShape.value == 2) ? 'Diametro' : 'Lato'

    if (propagate) {
        if (finalShape.value == 1) {
            shape.value = 1
            changeShape(false)
        } else {
            if (shape.value == 1) {
                shape.value = finalShape.value
                changeShape(false)
            }
        }
    }
}

let type = document.getElementById('type')
let finalType = document.getElementById('finalType')

let countInput = document.getElementById('countInput')
let countLabel = countInput.querySelector('label')
let countUnit = countInput.querySelector('span')

let resultInput = document.getElementById('resultInput')
let resultLabel = resultInput.querySelector('label')
let resultUnit = resultInput.querySelector('span')



type.addEventListener("change", () => {
    countLabel.innerText = (type.value == 1) ? 'Peso' : 'Quantità'
    countUnit.innerText = (type.value == 1) ? 'gr' : 'qt'
    
    resultLabel.innerText = (type.value == 1) ? 'Peso' : 'Quantità'
    resultUnit.innerText = (type.value == 1) ? 'gr' : 'qt'
    
    finalType.value = type.value
})


let result = document.getElementById('result')
let count = document.getElementById('count')

function setResult(value)
{
    console.log(value)
    result.value = value
}

let people = document.getElementById('people')
let finalPeople = document.getElementById('finalPeople')

let height = document.getElementById("height")

let finalHeight = document.getElementById("finalHeight")

let calculate = document.getElementById('calculate')
calculate.addEventListener("click", () => {
    let recipeShape = shape.value
    let recipeCount = count.value

    let recipeLength = document.getElementById("length").value
    let recipeHeight = document.getElementById("height").value
    let recipeFinalLength = document.getElementById("finalLength").value
    let recipeFinalHeight = document.getElementById("finalHeight").value
    
    let recipePeople = people.value
    let recipeFinalPeople = finalPeople.value

    let result = 0
    console.log(recipeShape)
    switch (recipeShape) {
        case "1":
            result = recipeCount / recipePeople * recipeFinalPeople
            break;
            
        case "2":
            let volumeCylinder = Math.pow(recipeLength / 2, 2) * Math.PI * recipeHeight 
            let finalVolumeCylinder = Math.pow(recipeFinalLength / 2, 2) * Math.PI * recipeFinalHeight
            
            result = (recipeCount / recipePeople * recipeFinalPeople) / volumeCylinder * finalVolumeCylinder
            break
                
        case "3":
            let volumeCube = Math.pow(recipeLength, 2) * recipeHeight 
            let finalVolumeCube = Math.pow(recipeFinalLength, 2) * recipeFinalHeight

            result = (recipeCount / recipePeople * recipeFinalPeople) / volumeCube * finalVolumeCube
            break;
    }
    result = Math.round(result * 100) / 100
    setResult(result)
})

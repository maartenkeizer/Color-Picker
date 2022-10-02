const submitForm = document.getElementById("submit-form")
const colorSelected = document.getElementById("color-selected")
const colorScheme = document.getElementById("color-scheme")
const colorContainer = document.getElementById("color-container")
const rangeSlider = document.getElementById("range-slider")

function updateTextInput() {
    document.getElementById('textOutput').value = rangeSlider.value
}

submitForm.addEventListener("submit", function(event){
    event.preventDefault()
    let seedColor = colorSelected.value.slice(1)
    let colorSchemeSelection = colorScheme.value
    let colorsAmount = rangeSlider.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorSchemeSelection}&count=${colorsAmount}`)
    .then(response => response.json())
    .then(data => {
            let colorHtml = ""
            data.colors.map(color => {
                colorHtml += 
                    `<div class="color-wrapper">
                        <div class="color-div" style="background-color: ${color.hex.value}"></div>
                        <div class="color-hex"><p>${color.hex.value}</p></div>
                    </div>
                    ` 
            }).join("")
        colorContainer.innerHTML = colorHtml
    })
})


// todo: set innerHTML of div id="color-pallete" to divs with background colors of the
// array of returned colors (in separate function?)
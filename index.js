const getSchemeBtn = document.getElementById("getSchemeBtn")
let colorSection = document.getElementById("colorSection")
const colorBar = document.getElementById("colorBar")

getSchemeBtn.addEventListener("click", getColor)

function getColor() {
    let color = document.getElementById("colorInput").value.substr(1)
    let mode = document.getElementById("mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then((data) => {
            colorSection.innerHTML = " "
            for(let color of data.colors){
                colorSection.innerHTML += `
                    <div id="colorBar" style="background-color: ${color.hex.value}">
                        <p id="color-name">${color.name.value}</p>
                        <p id="color-hex">${color.hex.value}</p>
                    </div>
                `
            }
        })
}

window.onload(getColor())
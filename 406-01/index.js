const numberOfCountries = document.getElementById("numberOfCountries")
numberOfCountries.innerText = `Total Number of countries are ${countries.length}`



function StSearchFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    //const inputElement = document.getElementById("countryNameInput")
    //inputElement.setAttribute("onkeyup", "startingSearchFunction()")

    const input = document.getElementById("countryNameInput").value

    const matchedCountries = []

    countries.map((ele) => {
        const hello = ele.toLowerCase().startsWith(input.toLowerCase())
        // console.log(hello);
        if (input == "") {   
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } 
        else {
            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
                <div class="card">
                    <p>${ele}</p>
                </div>
                `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }
    })
}

function StAnyWdFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""

    const input = document.getElementById("countryNameInput").value
    const matchedCountries = []

    countries.map((ele) => {
        const ans = input.toLowerCase();
        const hello = ele.toLowerCase().includes(ans)
        // console.log(hello);
        if (input == "") {
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {
            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
            <div class="card" style="background-image:url('countries.jpg')">
                <p>${ele}</p>
            </div>
            `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }

    })
}

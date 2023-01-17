const heading = document.getElementById("para");
heading.innerHTML = `currently we have ${countries_data.length} countries`;
console.log(heading);
const sortedData = countries_data.sort(function(a, b) {
  return b.population - a.population
})
let totalPopulation = 0
for (let i = 0; i < countries_data.length; i++) {
  totalPopulation += countries_data[i].population
}
const clear = document.getElementById("show_data_container")

function population_data() {
  clear.innerHTML = " "
  title.innerText = "10 most populated countries in world"
  for (let i = 0; i < 10; i++) {
    const firstdiv = document.createElement("div");
    firstdiv.style.display = "flex";
    firstdiv.style.height = "fit-content";
    firstdiv.style.alignItems = "center";
    firstdiv.style.justifyContent = "center";
    firstdiv.style.backgroundColor = "#f2f2f2";

    //countryname
    const countryname = document.createElement("p");
    countryname.style.width = "30%";
    countryname.innerHTML = countries_data[i].name;
    firstdiv.appendChild(countryname);
    //countrypopulation

    const pdiv = document.createElement("div");
    const percentagediv = document.createElement("div");
    const percent = (sortedData[i].population / totalPopulation) * 100;
    percentagediv.style.width = `${percent}%`;
    percentagediv.style.backgroundColor = "orange";
    percentagediv.style.border = "none";
    percentagediv.style.height = "38px";
    percentagediv.style.margin = "5px";
    percentagediv.innerHTML = `${percent.toFixed(2)}%`;
    percentagediv.innerText = "";
    pdiv.appendChild(percentagediv);
    pdiv.style.width = "30%";
    firstdiv.appendChild(pdiv);

    const poplaution_div = document.createElement("div");
    poplaution_div.innerHTML = sortedData[i].population;
    firstdiv.appendChild(poplaution_div);
    const data = document.getElementById("show_data_container");
    data.appendChild(firstdiv);
    console.log(firstdiv);
  }
}
function language_data() {
  clear.innerHTML = " "
  title.innerText = "10 most populated languages in world"

  const languagesArray = []

  for (let i = 0; i < countries_data.length; i++) {
    languagesArray.push(countries_data[i].languages)
  }

  const flattedLanguagesArray = languagesArray.flat()

  const languageCount = {}

  flattedLanguagesArray.map((ele) => {
    languageCount[ele] = (languageCount[ele] || 0) + 1
  })

  const objArr = Object.entries(languageCount)
  console.log(objArr);
  const sortedArray = objArr.sort((a, b) => {
    return b[1] - a[1]
  })


  for (let i = 0; i < 10; i++) {

    const topTenValuesFronSortedArray = sortedArray[i]

    const oneDiv = document.createElement("div")
    oneDiv.style.display = "flex"
    oneDiv.style.height = "fit-content"
    oneDiv.style.alignItems = "center"
    oneDiv.style.justifyContent = "center"
    oneDiv.style.backgroundColor = "#f2f2f2";

    const countryName = document.createElement("p")
    countryName.innerText = topTenValuesFronSortedArray[0]
    countryName.style.width = "20%"
    oneDiv.appendChild(countryName)

    const percentDiv = document.createElement("div")
    const percentageDiv = document.createElement("div")
    const percentage = (topTenValuesFronSortedArray[1] / sortedArray.length) * 100
    percentageDiv.style.width = `${percentage}%`
    percentageDiv.style.backgroundColor = "orange"
    percentageDiv.style.height = "fit-content"

    percentageDiv.innerText = `${percentage.toFixed(2)}%`

    percentDiv.appendChild(percentageDiv)
    percentDiv.style.width = "30%"
    oneDiv.appendChild(percentDiv)

    const populationDiv = document.createElement("div")
    populationDiv.innerText = topTenValuesFronSortedArray[1]
    oneDiv.appendChild(populationDiv)

    const graphDiv = document.getElementById("show_data_container")
    graphDiv.appendChild(oneDiv)

    console.log(topTenValuesFronSortedArray);
  }
}

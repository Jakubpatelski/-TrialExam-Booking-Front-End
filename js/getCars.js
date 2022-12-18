const urlApi = "http://localhost:8080/cars"
let placeholder = document.querySelector("#data-output");

async function getCars() {
    const response = await fetch(urlApi)
    const data = await response.json();
    console.log(data)

    data.forEach(car => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")


        td1.innerHTML = car.brand
        td2.innerHTML = car.model
        td3.innerHTML = car.pricePerDay
        td4.innerHTML = car.bestDiscount

        tr.append(td1, td2, td3,td4)
        placeholder.append(tr)

    })
}

getCars()
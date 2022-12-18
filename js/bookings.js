const urlApi = "http://localhost:8080/bookings"
let placeholder = document.querySelector("#data-output");

async function getBookings() {
    const response = await fetch(urlApi)
    const data = await response.json();
    console.log(data)

    data.forEach(booking => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")




        td1.innerHTML = booking.date
        td2.innerHTML = booking.car.brand
        td3.innerHTML = booking.car.model
        td4.innerHTML = booking.car.pricePerDay
        td5.innerHTML = booking.member.lastName
        td6.innerHTML = "<a href=" + "manageBooking.html?id=" + booking.id + "><button class='btn-edit'>Manage</button></td>"


        tr.append(td1, td2, td3,td4,td5, td6)
        placeholder.append(tr)

    })
}

getBookings()
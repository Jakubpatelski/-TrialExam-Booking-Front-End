
const apiUrl = "http://localhost:8080/bookings"
const apiUrlCar = "http://localhost:8080/cars"
const apiUrlMember = "http://localhost:8080/members"
const date = document.getElementById("date")
const bookingForm = document.getElementById("add-booking")



const carSelect = document.getElementById("car")
const memberSelect = document.getElementById("member")


let car = {"id" : ""}
let member = {"id" : ""}


carSelect.addEventListener("change", (event) => {
    car.id = event.target.value;
    console.log(car)
});

memberSelect.addEventListener("change", (event) => {
    member.id = event.target.value;
    console.log(member)
});



async function getCars() {
    const response =  await fetch(apiUrlCar)
    const data = await response.json()


    console.log(data)
    data.forEach(car => {
        const option = document.createElement("option")
        option.setAttribute("value", car.id)
        option.innerText = car.brand + " " + car.model
        carSelect.append(option)
    })
}

async function getMembers() {
    const response =  await fetch(apiUrlMember)
    const data = await response.json()


    console.log(data)
    data.forEach(member => {
        const option = document.createElement("option")
        option.setAttribute("value", member.id)
        option.innerText = member.firstName + " " + member.lastName
        memberSelect.append(option)
    })
}
//calling methods to get cars and members
getMembers()
getCars()



function addBooking() {
    fetch(apiUrl, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            date: date.value,
            car:car,
            member: member
        }),
    })
        .then(response => response.json())
        .then((response) =>{
            if (response.status === 400 || response.status === 500 ) {
                alert("Booking not added error " + response.status);
                console.log(response.status);

            } else   {
                alert("Booking successfully added");
                window.location.href = "bookings.html";
            }
        })
}

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addBooking()
})

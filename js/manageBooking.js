const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const apiUrl = "http://localhost:8080/bookings/" + urlId;

const date = document.getElementById("date")
const car = document.getElementById("car")
const member = document.getElementById("member")
const deleteBtn = document.getElementById("delete")
const bookingForm = document.getElementById("edit-booking")

async function getBooking(){
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log((data))
    date.value = data.date
    car.value = data.car.brand + " " + data.car.model
    member.value = data.member.firstName + " " + data.member.lastName
}

getBooking()


async function deleteBooking(){
    console.log(apiUrl)
    fetch(apiUrl,{
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'

        },
    })

        .then((response) =>{
            if (response.status === 400 || response.status === 500) {
                alert("Booking not deleted error " + response.status);
                console.log(response.status);

            }else   {
                alert( "Booking successfully deleted");
                window.location.href = "bookings.html";
            }
        })

}
deleteBtn.addEventListener("click", deleteBooking)




async function editBooking(){
    fetch(apiUrl,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'

        },
        body:JSON.stringify({
            // id: urlId,
            date: date.value



        }),
    })
        // .then(response => response.json())
        // .then((response) =>{
        //     if (response.status === 400 || response.status === 500 ) {
        //         alert("Booking not added error " + response.status);
        //         console.log(response.status);
        //
        //     } else   {
        //         alert("Booking successfully added");
        //         window.location.href = "bookings.html";
        //     }
        // })



}
bookingForm.addEventListener('submit', (e) => {


    e.preventDefault();
    editBooking()
    window.location.href = "bookings.html";

})


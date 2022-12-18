const apiUrl = "http://localhost:8080/members"
const memberForm = document.getElementById("add-member")

const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const  street = document.getElementById("street")
const  city = document.getElementById("city")
const zip = document.getElementById("zip")
const approved = document.getElementById("approved")
const ranking = document.getElementById("ranking")

function postIt(){
    console.log("form submitted")
    console.log(fname.value);

    fetch(apiUrl, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'

        },
        body:JSON.stringify({
            firstName: fname.value,
            lastName: lname.value,
            street: street.value,
            city: city.value,
            zip: zip.value,
            approved: approved.value,
            ranking: ranking.value,


        }),

    })
        .then(response => response.json())
        .then((response) =>{
            if (response.status === 400) {
                alert("Member not added error " + response.status);
                console.log(response.status);

            } else   {
                alert("Member successfully added");
                window.location.href = "members.html";
            }
        })
}





memberForm.addEventListener('submit', (e) => {

    e.preventDefault();
    postIt();


})
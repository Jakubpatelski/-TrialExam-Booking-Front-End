const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const apiUrl = "http://localhost:8080/members/" + urlId;

const memberForm = document.getElementById("add-member")
const deleteBtn = document.getElementById("delete")


const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const  street = document.getElementById("street")
const  city = document.getElementById("city")
const zip = document.getElementById("zip")
const approved = document.getElementById("approved")
const ranking = document.getElementById("ranking")

async function getMember(){
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log((data))

    fname.value = data.firstName
    lname.value = data.lastName
    street.value = data.street
    city.value = data.city
    zip.value = data.zip
    approved.value = data.approved
    ranking.value = data.ranking
}

getMember()


async function editMember(){
    fetch(apiUrl,{
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'

        },
        body:JSON.stringify({
            id: urlId,
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
                alert("Member not edited error " + response.status);
                console.log(response.status);

            }else   {
                alert("Member successfully edited");
                window.location.href = "members.html";
            }
        })
}
memberForm.addEventListener('submit', (e) => {

    e.preventDefault();
    editMember()

})



async function deleteMember(){
    console.log(apiUrl)
    fetch(apiUrl,{
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'

        },
    })

        .then((response) =>{
            if (response.status === 400 || response.status === 500) {
                alert("Member not deleted error " + response.status);
                console.log(response.status);

            }else   {
                alert( "Member successfully deleted");
                window.location.href = "members.html";
            }
        })

}
deleteBtn.addEventListener("click", deleteMember)

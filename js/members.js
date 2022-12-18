const urlApi = "http://localhost:8080/members"
let placeholder = document.querySelector("#data-output");

async function getMembers() {
    const response = await fetch(urlApi)
    const data = await response.json();
    console.log(data)

    data.forEach(member => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")


        td1.innerHTML = member.firstName
        td2.innerHTML = member.lastName
        td3.innerHTML = member.street
        td4.innerHTML = member.city
        td5.innerHTML = member.zip
        td6.innerHTML = member.approved
        td7.innerHTML = member.ranking
        td8.innerHTML = "<a href=" + "manageMember.html?id=" + member.id + "><button class='btn-edit'>Manage</button></td>"


        tr.append(td1, td2, td3,td4, td5,td6,td7, td8)
        placeholder.append(tr)

    })
}

getMembers()

async function addMember(){

}
let mylead = []
let inputel = document.getElementById("input_el")
const inputbtn = document.getElementById("input_btn")
const ulel = document.getElementById("ul_l")

const localstorageelement = JSON.parse(localStorage.getItem("mylead"))

// let save_arr=[{url:"www.chrome.com"}]

const save = document.getElementById("save")

save.addEventListener("click", function () {
    // console.log(save_arr[0].url)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        mylead.push(tabs[0].url)
        localStorage.setItem("mylead", JSON.stringify(mylead))
        render(mylead)

    })
})
if (localstorageelement) {
    mylead = localstorageelement
    render(mylead)
}

function render(lead) {
    let listitems = ""
    for (let i = 0; i < lead.length; i++) {
        // listitems += "<li><a target='_blank' href='"+lead[i]+"'>" + lead[i] + "</a></li>"
        listitems += `
        <li>
        <a target='_blank' href="${lead[i]}">
        ${lead[i]}
        </a>
        </li>
        `

        // const l=document.createElement("li")
        // l.textContent=mylead[i]
        // ulel.append(l)
    }
    ulel.innerHTML = listitems
}

const delete_btn = document.getElementById("delete_el")

delete_btn.addEventListener("dblclick", function () {
    localStorage.clear()
    mylead = []
    render(mylead)//clearing out DOM
})

inputbtn.addEventListener("click", function () {
    mylead.push(inputel.value)
    inputel.value = ""
    localStorage.setItem("mylead", JSON.stringify(mylead))
    render(mylead)
})

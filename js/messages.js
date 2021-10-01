import getData from "./main.js";
const API_URL = "";
async function messajesLoaded() {

    let data = await getData(API_URL);
    generateHeadFromJson(data.items, "tableMessages");
    generateRowsFromJson(data.items, "tableMessages");
}

function generateHeadFromJson(json, tableId) {
    let html = "";
    let thead = document.getElementById(tableId).tBodies[0];

    if (thead == undefined) {
        thead = document.createElement("thead");
        document.getElementById(tableId).appendChild(thead);
    }

    html += "<tr>";
    Object.keys(json[0]).forEach(value => html += `<th class="col">${value}</th>`);
    html += "</tr>";
    thead.innerHTML = html;
}

function generateRowsFromJson(json, tableId) {
    let html = "";
    let tbody = document.getElementById(tableId).tBodies[0];

    if (tbody == undefined) {
        tbody = document.createElement("tbody");
        document.getElementById(tableId).appendChild(tbody);
    }

    json.forEach(entry => {
        html += "<tr>"
        Object.values(entry).forEach(value => html += `<td>${value}</td>`)
        html += `<td><button class="btn btn-success" onclick="editMessage(${entry.id})">Editar</button></td>`
        html += `<td><button class="btn btn-danger" onclick="deleteMessage(${entry.id})">Eliminar</button></td>`
        html += "</tr>"

    });

    tbody.innerHTML = html;
}

function deleteMessage(id) {
    let data = { id: id };
    const response = await fetch(API_URL, {
        method: 'DELETE',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response;
}

function editMessage(id) {
    //TODO
}



window.addEventListener("load", e => messajesLoaded());
const API_URL = ""
async function editCostume(clientJson) {
    const response = await fetch(API_URL, {
        method: 'PUT',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(clientJson)
    });
    return response;
}
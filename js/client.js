const API_URL = ""
async function deleteCLient(id) {
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
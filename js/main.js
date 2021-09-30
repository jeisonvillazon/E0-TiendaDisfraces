export default async function getData(url) {

    let data = await fetch(url).then(r => r.json())
    return data;
}
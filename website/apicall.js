async function api()
{
    try{
        const response = await fetch('https://66e527625cc7f9b6273c701a.mockapi.io/endpoint/register')
        // const response = await fetch('')
        const data = await response.json()
        return data
    }
    catch(error)
    {
        console.log(error)
    }
}
api()

// function apica(){
//     const apidata = await api()
//     console.log(apidata)
//     // const structuredatamap = apidata.map(data) => { console.log(data)}
// }
// apica() 
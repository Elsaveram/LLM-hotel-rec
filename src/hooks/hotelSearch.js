import { API } from 'aws-amplify';

export async function callHotelSearch(messages, country) {
    var c = null
    if (country !== "ANY") {
        c = country
    }
    console.log(c)
    const requestData = {
        body: {
            message: messages[messages.length-1],
            country: c
        }
    }

    const data = await API.post(
        'hotelSearchAppApi',
        '/hotel-rec',
        requestData)
    return JSON.parse(data["body"])
}

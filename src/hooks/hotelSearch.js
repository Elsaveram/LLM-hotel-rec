import { API } from 'aws-amplify';

export async function callHotelSearch(messages) {
    const requestData = {
        body: {
            message: messages[messages.length-1],
            country: null
        }
    }

    const data = await API.post(
        'hotelSearchAppApi',
        '/v1/hotel_search',
        requestData)

    return data
}

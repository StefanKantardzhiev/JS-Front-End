import * as request from './requester'

const baseUrl = 'http://127.0.0.1:3030/jsonstore/comments/'

export const create = async (data) => {
    const result = await request.post(baseUrl, data)
    console.log(result)

    return result

}
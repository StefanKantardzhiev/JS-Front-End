import * as request from './requester'

import baseUrl from './gameService'

export const create = async (gameId, data) => {
    const result = await request.post(baseUrl, data)
    console.log(result)

    return result

}
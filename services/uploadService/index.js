import { httpClient } from '../../util/Api'

export async function uploadContent(data, config) {
    try {
        await httpClient.post('/upload/content', data, config)
    } catch (error) {
        throw new Error(error)
    }
}
export async function uploadCollaborative(data, explicit, config) {
    try {
        await httpClient.post(`/upload/collaborative/${explicit}`, data, config)
    } catch (error) {
        throw new Error(error)
    }
}
export async function uploadSequence(data, config) {
    try {
        await httpClient.post(`/upload/sequence`, data, config)
    } catch (error) {
        throw new Error(error)
    }
}
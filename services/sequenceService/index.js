import { httpClient } from "../../util/Api";

export async function getSequence(data, config) {
  try {
    const { skip, limit } = data
    const query = `?skip=${skip}&limit=${limit}`
    return await httpClient.get(`sequences${query}`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function deleteSequence(data, config) {
  try {
    const { id } = data
    return await httpClient.delete(`/sequences/${id}`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateSequence(data, config) {
  try {
    const { _id } = data
    return await httpClient.put(`/sequences/${_id}`, data, config);
  } catch (error) {
    throw new Error(error);
  }
}
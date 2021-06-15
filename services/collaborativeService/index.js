import { httpClient } from "../../util/Api";

export async function getCollaborative(data, config) {
  try {
    const { skip, limit } = data
    const query = `?skip=${skip}&limit=${limit}`
    return await httpClient.get(`/collaboratives${query}`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function countByItemId(data, config) {
  try {
    return await httpClient.get(`collaboratives/count-by-itemid`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCollaborative(data, config) {
  try {
    const { id } = data
    return await httpClient.delete(`/collaboratives/${id}`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function updateCollaborative(data, config) {
  try {
    const { _id } = data
    return await httpClient.put(`/collaboratives/${_id}`, data, config);
  } catch (error) {
    throw new Error(error);
  }
}
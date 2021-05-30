import { httpClient } from "../../util/Api";

export async function getContents(data, config) {
  try {
    const { skip, limit } = data
    const query = `?skip=${skip}&limit=${limit}`
    return await httpClient.get(`/contents${query}`, {}, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteContent(data, config) {
    try {
      const { id } = data
      return await httpClient.delete(`/contents/${id}`, {}, config);
    } catch (error) {
      throw new Error(error);
    }
}

export async function updateContent(data, config) {
    try {
      const { _id } = data
      return await httpClient.put(`/contents/${_id}`, data, config);
    } catch (error) {
      throw new Error(error);
    }
}
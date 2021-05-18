import { httpClient } from "../../util/Api";

export async function getCollaborative(data, config) {
  try {
    return await httpClient.get("/collaboratives", data, config);
  } catch (error) {
    throw new Error(error);
  }
}
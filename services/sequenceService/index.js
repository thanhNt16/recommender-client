import { httpClient } from "../../util/Api";

export async function getSequence(data, config) {
  try {
    return await httpClient.get("/sequences", data, config);
  } catch (error) {
    throw new Error(error);
  }
}

import { httpClient } from "../../util/Api";

export async function createScenario(data, config) {
  try {
    await httpClient.post("/scenario/create", data, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function getScenario(data, config) {
  try {
    return await httpClient.get("/scenario", data, config);
  } catch (error) {
    throw new Error(error);
  }
}

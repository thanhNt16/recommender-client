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
export async function getScenarioSample(data, config) {
  try {
    return await httpClient.get("/scenario/sample", data, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getScenarioById(data, config) {
  try {
    return await httpClient.get(`/scenario/${data.id}`, data, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteScenario(data, config) {
  try {
    return await httpClient.delete(`/scenario/${data.id}`, data, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function updateScenario(data, config) {
  try {
    return await httpClient.put(`/scenario/${data.id}`, data, config);
  } catch (error) {
    throw new Error(error);
  }
}
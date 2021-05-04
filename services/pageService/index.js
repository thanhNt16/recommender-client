import { httpClient } from "../../util/Api";

export async function createPage(input, config) {
  try {
    await httpClient.post("/page/create", input, config);
  } catch (error) {
    throw new Error(error);
  }
}
export async function getPage(input, config) {
  try {
    const data = await httpClient.get("/page", input, config);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getPageById(input, config) {
  try {
    const data = await httpClient.get(`/page/${input.id}`, input, config);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

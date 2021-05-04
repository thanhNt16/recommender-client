import axios from "axios";

export async function popularRecommendation({ customer_id, user_id, top }) {
  try {
    const res = await axios.get(
      `https://app.recengine.games/popular?customer_id=${customer_id}&user_id=${user_id}&top=${top}`,
      {
        // withCredentials: true,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function contentRecommendation({ customer_id, item_id, top }) {
  try {
    const res = await axios.get(
      `https://app.recengine.games/content?customer_id=${customer_id}&item_id=${item_id}&top=${top}`,
      {
        // withCredentials: true,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function collaborativeRecommendation({ customer_id, user_id, top }) {
  try {
    const res = await axios.get(
      `https://app.recengine.games/collaborative_implicit?customer_id=${customer_id}&user_id=${user_id}&top=${top}`,
      {
        // withCredentials: true,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function sequenceRecommendation({ customer_id, user_id, top }) {
  try {
    const res = await axios.get(
      `https://app.recengine.games/sequence?customer_id=${customer_id}&user_id=${user_id}&top=${top}`,
      {
        // withCredentials: true,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}
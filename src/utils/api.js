/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:2121";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function getItem(item_id, signal) {
  // const url = "http://localhost:2121/menu";
  const url = new URL(`${API_BASE_URL}/menu`);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();

  // const url = new URL(`${API_BASE_URL}/items/${item_id}`);
  // return await fetchJson(url, { headers, signal }, [])
  //   .then(formatItemDate)
  //   .then(formatItemTime);
}

// POST Request
export async function createMenuItem(data) {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({data}),
  };
  fetch("http://localhost:2121/menu/add", requestOptions)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));
}

export async function updateItem(item, item_id, signal) {
  let url = new URL(`${API_BASE_URL}/items/${item_id}`);
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: item }),
    signal,
  };

  // return await fetchJson(url, options, []);
  return null;
}

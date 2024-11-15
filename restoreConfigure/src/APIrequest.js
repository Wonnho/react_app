import axios from "axios";

axios;
async function fetchData(params) {
  const url =
    "https://jsonplaceholder.typicode.com/todos/1?key=value&key=value";
  const response = await fetch(rul);
  const jsonData = await response.json();
  console.log(jsonData);
}

fetchData();

async function fetchDatawithAxios() {
  const url =
    "https://jsonplaceholder.typicode.com/todos/1?key=value&key=value";

  const response = axios({
    url: url,
  });
  console.log(response.data);
}
fetchDatawithAxios();

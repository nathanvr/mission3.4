import "./App.css";
import axios from "axios";

function App() {
  // GET multiples
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("Getting mulples results", res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ended process");
    });

  // GET one
  axios
    .get("https://jsonplaceholder.typicode.com/posts/33")
    .then((res) => {
      console.log("Getting one result", res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ended process");
    });

  //POST
  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "pruebas en espaniol",
        body: "este es el cuerpo del body ",
        userId: 2,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log("Post response", res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ended process");
    });

  //PUT
  axios
    .put(
      "https://jsonplaceholder.typicode.com/posts/1",
      { id: 1, title: "foo", body: "bar", userId: 1 },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log("Put response", res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ended process");
    });

  //Delete
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      console.log("delete", res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ended process");
    });

  return <div className="App"></div>;
}

export default App;

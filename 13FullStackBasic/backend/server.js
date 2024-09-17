import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another Joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A 3rd Joke",
      content: "This is a 3 rd joke",
    },
    {
      id: 4,
      title: "A 4th Joke",
      content: "This is a 4th joke",
    },
    {
      id: 5,
      title: "A 5th Joke",
      content: "This is a 5th joke",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port} `);
});

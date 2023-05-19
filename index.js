// @ts-nocheck
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// "mongodb+srv://simplenodeserver:psJYJwmhthW3lZGG@cluster0.dyugevw.mongodb.net/?retryWrites=true&w=majority";

const uri =
  "mongodb+srv://dataBase1:SBZekjXWkAF5PUmm@cluster0.dyugevw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("nodeCollection").collection("users");
    const user = { name: "nahiya", email: "nahiya@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("simple node server running");
});
const users = [
  { id: 1, name: "ismail", email: "ismail@gmail.com" },
  { id: 2, name: "ahammed", email: "ahammed@gmail.com" },
  { id: 3, name: "roman", email: "roman@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const filtered = users.filter(
      (usr) => usr.name.toLowerCase().indexOf(search) > 0
    );
    res.send(filtered);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});
app.listen(port, () => {
  console.log(`simple node server running on port${port}`);
});

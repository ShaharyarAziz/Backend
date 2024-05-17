import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

let item_id = 1;
let cricket_item = [];

app.post("/cricket", (req, res) => {
  const { item, price } = req.body;
  const new_cricket = { id: item_id++, item, price };
  cricket_item.push(new_cricket);
  res.status(201).send(cricket_item);
});
app.get("/cricket", (req, res) => {
  res.status(200).send(cricket_item);
});
//Find by id
app.get("/cricket/:id", (req, res) => {
  const result = cricket_item.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (!result) {
    return res.status(404).send("Item Not found");
  }
  res.status(200).send(result);
});
//Update
app.put("/cricket/:id", (req, res) => {
  const result = cricket_item.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (!result) {
    return res.status(404).send("Item Not found");
  }
  const { item, price } = req.body;
  result.item = item;
  result.price = price;
  res.status(200).send(result);
});
//Delete
app.delete("/cricket/:id", (req, res) => {
  const n = cricket_item.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (n === -1) {
    return res.status(404).send("Item not found");
  }
  cricket_item.splice(n, 1);
  return res.status(204).send("Item Deleted Successfully"); // Status 204 should not send a response body
});
app.listen(port, () => {
  console.log(`Server is runnning on port:${port}`);
});

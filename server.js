import app from "./src/app.js";

const port = 3001;

app.listen(port, () => {
  console.log(`servidor rodando no endereço http://localhost:${port}`);
});

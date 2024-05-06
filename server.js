import app from "./src/app.js";

import conexao from "./infra/conexao.js";

const port = 3001;

conexao.connect((error) =>{
  if(error){
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`servidor rodando no endereço http://localhost:${port}`);
    });
  }
})


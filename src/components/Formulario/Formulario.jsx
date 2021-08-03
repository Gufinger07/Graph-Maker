import React, { useState } from "react";
import { TextField, Container, Button } from "@material-ui/core";
import { Chart } from "react-google-charts";
import "./estilo.css";

function Formulario() {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [quantidade1, setQuantidade1] = useState("");
  const [quantidade2, setQuantidade2] = useState("");
  const [quantidade3, setQuantidade3] = useState("");
  const [options, setOptions] = useState({
    title: "Gráfico de Pizza",
  });
  const [data, setData] = useState([
    ["Linguagens", "Quantidade"],
    ["Item 1", 10],
    ["Item 2", 10],
    ["Item 3", 10],
  ]);

  return (
    <Container className="container-formula" maxWidth="xs">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setData([
            ["Linguagens", "Quantidade"],
            [item1, parseInt(quantidade1)],
            [item2, parseInt(quantidade2)],
            [item3, parseInt(quantidade3)],
          ]);
          console.log("dddd");
        }}
        className="formulario"
      >
        <TextField
            name="titulo"
            onChange={(event) => {
              setOptions({ title: event.target.value})
            }}
            id="outlined-basic"
            label="Título do Gráfico"
            variant="outlined"
            margin="normal"
            type="text"
          />
        <div className="input-formulario">
          <TextField
            name="item1"
            value={item1}
            onChange={(event) => {
              setItem1(event.target.value);
            }}
            id="outlined-basic"
            label="Item 1"
            variant="outlined"
            margin="normal"
            type="text"
          />
          <TextField
            name="quantidade1"
            value={quantidade1}
            onChange={(event) => {
              setQuantidade1(event.target.value);
            }}
            id="outlined-basic"
            label="Quantidade"
            variant="outlined"
            margin="normal"
            type="number"
          />
        </div>
        <div className="input-formulario">
          <TextField
            name="item2"
            value={item2}
            onChange={(event) => {
              setItem2(event.target.value);
              console.log(item2);
            }}
            id="outlined-basic"
            label="Item 2"
            variant="outlined"
            margin="normal"
            type="text"
          />
          <TextField
            name="quantidade2"
            value={quantidade2}
            onChange={(event) => {
              setQuantidade2(event.target.value);
            }}
            id="outlined-basic"
            label="Quantidade"
            variant="outlined"
            margin="normal"
            type="number"
          />
        </div>
        <div className="input-formulario">
          <TextField
            name="item3"
            value={item3}
            onChange={(event) => {
              setItem3(event.target.value);
            }}
            id="outlined-basic"
            label="Item 3"
            variant="outlined"
            margin="normal"
            type="text"
          />
          <TextField
            name="quantidade3"
            value={quantidade3}
            onChange={(event) => {
              setQuantidade3(event.target.value);
            }}
            id="outlined-basic"
            label="Quantidade"
            variant="outlined"
            margin="normal"
            type="number"
          />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Criar Gráfico
        </Button>
      </form>
      <div>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    </Container>
  );
}

export default Formulario;

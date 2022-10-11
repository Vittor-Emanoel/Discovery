import Card from "../../components/Card/Index";
import "./styles.css";

export function Home() {
  return (
    <div className="container ">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome.." />
      <button type="button">Adicionar</button>

      <Card />
      <Card />
      <Card />
    </div>
  );
}
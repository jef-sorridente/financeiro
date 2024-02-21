import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contas, setContas] = useState([
    {
      id: uuidv4(),
      valor: 10.59,
      descricao: "Mercado",
      parcelas: 1,
    },
    {
      id: uuidv4(),
      valor: 15.01,
      descricao: "Padaria",
      parcelas: 1,
    },
    {
      id: uuidv4(),
      valor: 5.38,
      descricao: "Marcadinho",
      parcelas: 1,
    },
  ]);

  const [salario, setSalario] = useState([
    {
      id: uuidv4(),
      nome: "Jeferson",
      valor: 100,
    },
    {
      id: uuidv4(),
      nome: "Vitoria",
      valor: 100,
    },
  ]);

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [parcela, setParcela] = useState("");

  function novaConta(e) {
    e.preventDefault();

    const novaConta = {
      id: uuidv4(),
      valor: parseFloat(valor),
      descricao: descricao,
      parcela: parseFloat(parcela),
    };

    setContas((contasAntigas) => [...contasAntigas, novaConta]);

    setValor("");
    setDescricao("");
    setParcela("");
  }

  const totalContas = contas.reduce((valor, conta) => valor + conta.valor, 0);
  const totalSalario = salario.reduce(
    (valor, salario) => valor + salario.valor,
    0
  );

  const soma = totalSalario - totalContas;
  const sobra = parseFloat(soma.toFixed(2));

  return (
    <div className="fin">
      <div className="container-card">
        <div className="card-saldos">
          <h3>Total Contas</h3>
          <p>R$ {totalContas}</p>
        </div>
        <div className="card-saldos">
          <h3>Total Salario</h3>
          <p>R$ {totalSalario}</p>
        </div>
        <div className="card-saldos">
          <h3>Resto</h3>
          <p>R$ {sobra}</p>
        </div>
        <div className="container-botoes">
          <div className="botoes">
            <p>Contas</p>
          </div>
          <div className="botoes">
            <p>Carteira</p>
          </div>
          <div className="botoes">
            <p>Cartões</p>
          </div>
        </div>
      </div>
      <form onSubmit={novaConta}>
        <label>Descrição</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <label>Valor</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <label>Parcela</label>
        <input
          type="number"
          value={parcela}
          onChange={(e) => setParcela(e.target.value)}
          required
        />
        <button>Adicionar</button>
      </form>
      <h2>Janeiro</h2>
      <h3>Nubank</h3>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Parcelas</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((conta) => (
            <tr key={conta.id}>
              <td>{conta.descricao}</td>
              <td>{conta.parcelas}</td>
              <td>{conta.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

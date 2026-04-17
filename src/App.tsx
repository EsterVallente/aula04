import { CardAtivo } from "./Components/CardAtivo";
import { Heading } from "./Components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <div className="container">
      
      <Heading>💰 Meu Portfólio 2026</Heading>

      <div className="grid">

        <CardAtivo titulo="Bitcoin (BTC) 🚀">
          <p>R$ 350.000,00</p>
          <span style={{ color: "var(--alta)", fontWeight: "bold" }}>
            +5.2% hoje
          </span>
        </CardAtivo>

        <CardAtivo titulo="FII (HGLG11) 🏢">
          <p>R$ 1,10</p>
          <span style={{ color: "var(--alta)", fontWeight: "bold" }}>
            Rendimento estável
          </span>
        </CardAtivo>

        <CardAtivo titulo="VALE3 📉">
          <p>R$ 65,20</p>
          <span style={{ color: "var(--baixa)", fontWeight: "bold" }}>
            -1.8% hoje
          </span>
        </CardAtivo>

      </div>
    </div>
  );
}
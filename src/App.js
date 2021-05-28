
import "./App.css";
import { Grid } from "@material-ui/core";
import Produto from "./components/Produto";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto numero 1"
          descricao="Descricao props numero 1"
          preco={500}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto com nome diferente"
          descricao="Descricao diferente"
          preco={120}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto com nome diferente"
          descricao="Descricao diferente"
          preco={120}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto com nome diferente"
          descricao="Descricao diferente"
          preco={120}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto com nome diferente"
          descricao="Descricao diferente"
          preco={120}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
      <Grid item xs={12} xl={3} sm={4} md={6}>
        <Produto
          nome="Produto com nome diferente"
          descricao="Descricao diferente"
          preco={120}
          img="https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg"
        />
      </Grid>
    </Grid>
  );
}

export default App;

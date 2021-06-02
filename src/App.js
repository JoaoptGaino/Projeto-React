import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Produto from "./components/Produto";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import CategoriaForm from "./components/CategoriaForm";
import ProdutoForm from "./components/ProdutoForm";
import api from "./services/api";
const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  main: {
    paddingLeft: 200,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function App() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };
  async function getCategorias() {
    const response = await api.get('categorias');
    setCategorias(response.data);
  }
  async function getProdutos(categoriaId) {
    const query = categoriaId ? `?categoriaId=${categoriaId}` : ''
    console.log(query)
    const response = await api.get(`products${query}`);
    setProdutos(response.data);
  }
  useEffect(() => {
    getCategorias();
    getProdutos();
  }, []);

  const handleCategoriaClick = (id) => {
    getProdutos(id)
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Produtos" />
          <Tab label="Cadastro de Produto" />
          <Tab label="Cadastro de Categoria" />
        </Tabs>
      </AppBar>
      <Drawer variant="permanent" style={{ width: 240 }}>
        <Toolbar />
        <List>
          {categorias.map((categoria, index) => (
            <ListItem button key={index} onClick={() => handleCategoriaClick(categoria.id)}>
              <ListItemText>{categoria.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      <main className={classes.main}>
        <TabPanel value={tabValue} index={0}>
          <Grid container>
            {produtos.map((produto, i) => (
              <Grid item xs={12} xl={3} sm={4} md={6} key={i}>
                <Produto
                  nome={produto.nome}
                  descricao={produto.descricao}
                  preco={produto.preco}
                  img={produto.img}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ProdutoForm />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <CategoriaForm />
        </TabPanel>
      </main>
    </div>
  );
}

export default App;

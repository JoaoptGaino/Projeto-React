import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import Produto from "./components/Produto";
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import CategoriaForm from './components/CategoriaForm'

const useStyles = makeStyles(theme => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  main: {
    paddingLeft: 200
  }
}))

const TabPanel = props => {
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
}

function App() {

  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (_, newValue) => {
    setTabValue(newValue)
  }

  return (
    <div>
      <AppBar position='fixed' className={classes.appbar}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label='Produtos' />
          <Tab label='Cadastro de Produto' />
          <Tab label='Cadastro de Categoria' />
        </Tabs>
      </AppBar>
      <Drawer 
        variant='permanent'
        style={{width: 240}}>
        <Toolbar />
        <List>
          {
            ["Eletrodomésticos", "Eletrônicos", "Sala", "Cozinha"].map((categoria, index) =>
              (<ListItem button key={index}>
                <ListItemText>{categoria}</ListItemText>
              </ListItem>))
          }
        </List>
      </Drawer>
      <Toolbar />
      <main className={classes.main}>
        <TabPanel value={tabValue} index={0}>
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
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          formulário de produtos
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <CategoriaForm />
        </TabPanel>
      </main>
      
    </div>
  );
}

export default App;

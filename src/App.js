import { createBrowserRouter } from "react-router-dom";
import { Conheca } from "./pages/Conheca";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Servicos } from "./pages/Servicos";
import { Customizacoes } from "./pages/Customizacoes";
import { Parceria } from "./pages/Parceria";
import { Blog } from "./pages/Blog";


export const Router = createBrowserRouter([

    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/conheca',
      element:<Conheca/>
    },
    {
      path:'/produtos',
      element:<Produtos/>
    },
    {
      path:'/servicos',
      element:<Servicos/>
    },
    {
      path:'/customizacoes',
      element:<Customizacoes/>
    },
    {
      path:'/parceria',
      element:<Parceria/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },

])
  

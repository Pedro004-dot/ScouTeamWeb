import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout"
import ProfileLayout from "../layouts/ProfileLayout";
import Erro from "../Pages/Erro";
import Perfil from "../Pages/commom-pages/perfil";
import Region from "../Pages/commom-pages/Region";
import RegionState from "../Pages/commom-pages/RegionState";
import PositionAtleta from "../Pages/commom-pages/Atleta/PositionAtleta";
import CategoryClube from  "../Pages/commom-pages/Clube/CategoryClube"
import CurrentClub from "../Pages/commom-pages/CurrentClub";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>,
    },{
      path: "/registro",
      element:<Register/>,
      
    },{
      path: "/home",
      element : <HomeLayout/>
    },{
      path: "/profile",
      element : <ProfileLayout/>
    },{
      path: "/registro/escolhaPerfil",
      element: <Perfil/>
    },{
      path: "/registro/atleta/posicao",
      element: <PositionAtleta/>
    },
    {
      path: "/registro/atleta/clube",
      element: <CurrentClub/>
    },
    {
      path: "/registro/atleta/estado",
      element: <RegionState/>
    },{
      path: "registro/clube/estado",
      element: <RegionState/>
    },{
      path: "registro/clube/categoria",
      element: <CategoryClube/>
    },{
      path: "/registro/competicao/regiao",
      element: <Region/>
    },{
      path: "/registro/empresario/region",
      element: <Region/>
    },
    {
      path: "/registro/treinador/clube",
      element: <CurrentClub/>
    },{
      path: "/registro/treinador/estado",
      element: <RegionState/>
    },


    {
      path: "*",
      element: <Erro/>
    }
  ]);

  //Treiandor, empresario e clube
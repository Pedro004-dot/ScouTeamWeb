import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout"
import ProfileLayout from "../layouts/ProfileLayout";
import Erro from "../Pages/Erro";
import Region from "../Pages/commom-pages/Profile/Region";
import RegionState from "../Pages/commom-pages/Profile/RegionState";
import PositionAtleta from "../Pages/commom-pages/Profile/PositionAtleta";
import CategoryClube from  "../Pages/commom-pages/Profile/CategoryClube"
import CurrentClub from "../Pages/commom-pages/Profile/CurrentClub";
import Perfil from "../Pages/commom-pages/Profile/perfil";
import SaveProfile from "../Pages/commom-pages/Profile/saveProfile";
import ConnectionsLayout from "../layouts/ConnectionsLayout"
import ChampionshipLayout from "../layouts/ChampionshipLayout";
import CreateChampionship from "../Pages/commom-pages/Championship/CreateChampionship";
import InformationChamionship from "../Pages/commom-pages/Championship/InformationChampionship";
import DateBirthOrFundation from "../Pages/commom-pages/Profile/DateBirthOrFundantion";

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
      path: "/competicoes",
      element: <ChampionshipLayout/>
    },{
      path: "/registro/escolhaPerfil",
      element: <Perfil/>
    },{
      path:"/registro/dateBirthOrFundation",
      element: <DateBirthOrFundation/>
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
      path: "/registro/empresario/regiao",
      element: <Region/>
    },
    {
      path: "/registro/treinador/clube",
      element: <CurrentClub/>
    },{
      path: "/registro/treinador/estado",
      element: <RegionState/>
    },{
      path: "/registro/salvarInformacoes",
      element: <SaveProfile/>
    },{
      path: "/conexoes",
      element: <ConnectionsLayout/>
    },
    {
      path: "/criarcampeonato",
      element: <CreateChampionship/>
    },{
      path: "/criarcampeonato/informacoescampeonato",
      element: <InformationChamionship/>
    },
    


    {
      path: "*",
      element: <Erro/>
    }
  ]);

  //Treiandor, empresario e clube
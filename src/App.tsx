import {Navbar} from "@/scenes/navbar";
//import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";



function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); // 

useEffect(()=>{
    const handleScroll = ()=>{
        // si le scrollY de la page est === 0 => position du scroll sur la page 
        if(window.scrollY === 0){
            setIsTopOfPage(true) // maj du state 
            setSelectedPage(SelectedPage.Home) // maj du state 
        }
        if(window.scrollY !== 0){
            setIsTopOfPage(false)
        }
        //cette partie du code permet d'ecouter l'event au scroll et on lui passe la fonction handleScroll
        window.addEventListener("scroll", handleScroll); 
        return ()=> window.removeEventListener("scroll", handleScroll); 
    }}, []); // tableau de dépendances 

  return <div className="app bg-gray-20">
    <Navbar  
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}/>

    {/* <Home setSelectedPage = {setSelectedPage}/> */}
  </div>;

}

export default App;


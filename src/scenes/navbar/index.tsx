import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import { tailwindClasses } from "@/shared/classesTailwind"
import ActionButton from "@/shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage : (value : SelectedPage ) => void;
}

export const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between" // je stock une partie du tailwind dans une constante mais je peux aussi la stocker dans un fichier a part 
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") // ici je pass dans la fonction la string 
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);  // state qui met a true ou false quand on click sur le burger
    // la couleur du bg change quand on va scroller vers le bas de la page 
    // si isTopOfPage === true => vide sinon le background sera rose
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"  

  return (
    <nav className="shadow-sm">
        <div className={`${navbarBackground} ${tailwindClasses.flexBetween} fixed top-0 z-3 w-full py-6`}>
            <div className={`${tailwindClasses.flexBetween} mx-auto w-5/6`}>
                <div className={`${tailwindClasses.flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo}/>

                    {/*Right side */}
                    
                    {isAboveMediumScreens ?
                        (
                        <div className={`${tailwindClasses.flexBetween} w-full`}>
                            <div className={`${tailwindClasses.flexBetween} gap-8 text-sm`}>
                                <Link page = "Home"  selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Benefits" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Our classes" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Contact Us" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <ActionButton setSelectedPage = {setSelectedPage}>Become a member</ActionButton>
                            </div>
                    </div> 
                    ) : (
                    
                        <button 
                        className="rounded-full bg-secondary-500 p-2" 
                        onClick= {()=> setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className={tailwindClasses.burgerMenu}/>
                        </button> // mobile button
                    )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL :
         condition if screen === true and isMenuToggle === true */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-10 border-2 border-rose-500 ">
                     <XMarkIcon className="h-6 w-6" onClick={()=>setIsMenuToggled(!isMenuToggled)}/>
                </div>
                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link page = "Home"  selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Benefits" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Our classes" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                                <Link page = "Contact Us" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                </div>

            </div>
        )}
    </nav>
  )
}
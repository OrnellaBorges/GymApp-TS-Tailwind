import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import { tailwindClasses } from "@/shared/classesTailwind"
import {ActionButton} from "@/shared/ActionButton"


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage : (value : SelectedPage ) => void;
}

export const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between" // je stock une partie du tailwind dans une constante mais je peux aussi la stocker dans un fichier a part 
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);



  return (
    <nav className="shadow-sm">
        <div className={`${tailwindClasses.flexBetween} fixed top-0 z-3 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img alt="logo" src={Logo}/>

                {/*Right side */}
                
                {isAboveMediumScreens ?
                 (<div className={`${tailwindClasses.flexBetween} w-full`}>
                    <div className={`${tailwindClasses.flexBetween} gap-8 text-sm`}>
                        <Link page = "Home"  selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page = "Benefits" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page = "Our classes" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                        <Link page = "Contact Us" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign in</p>
                        <ActionButton selectedPage = {selectedPage}>Become a member</ActionButton>
                    </div>
            </div> )
            : 
            (<button 
            className="rounded-full bg-secondary-500 p-2" 
            onClick= {()=> setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className={tailwindClasses.burgerMenu}> </Bars3Icon>
                 </button> )}
        </div>

        </div>
        
        </div>
    </nav>
  )
}
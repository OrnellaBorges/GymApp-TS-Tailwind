import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page : string;
    selectedPage: SelectedPage;
    setSelectedPage : (value : SelectedPage ) => void;
}


const Link = ({page, selectedPage, setSelectedPage }: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage // on remplace la valeur de page recu en props  converti en minuscule 


    return (
        <AnchorLink 
        href ={`#${lowerCasePage}`} 
        className ={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500  hover:text-primary-500`} 
        onclick ={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

export default Link
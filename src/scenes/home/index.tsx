
import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from "react-anchor-link-smooth-scroll"

// image de la home page 
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"


type Props = {
 setSelectedPage : (value : SelectedPage) => void // un type qui ne renvoie aucune valeur
}

const Home = ({ setSelectedPage }: Props) => {
    //hook perso
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

    // state

  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image and Main header */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" >
            {/* Main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <div className= "md:-mt-20">
                    <div className = "relative">
                        <div className='before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                            <img alt='home-page-text' src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm"> {/*margin-top:8px text-sm */}
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-8 md:justify-start">
                    {/*composant bouton   */}
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink 
                    className= "text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick= {()=> setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    > 
                    </AnchorLink>
                </div>
            </div>
            {/* Image */}
            <div className='flex basis-3/5 ustify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </div>

        {/*Sponsors */}
        {isAboveMediumScreen && (
            <div className='h-[150px] w-full bg-primany-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="redbull-sponsor" />
                        <img src={SponsorFortune} alt="redbull-sponsor" />
                    </div>
                </div>
            </div>
            )}
    </section>
  )
}

export default Home
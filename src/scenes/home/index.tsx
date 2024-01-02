import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton
import HomepageText  from "@/assets/HomePageText.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <div className='border-2 border-rose-500'>Home</div>
  )
}

export default Home;
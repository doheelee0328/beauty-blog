import NavBar from './Navbar'
import Logo from './Logo'
import MiddlePart from './Middlepart'
import { TopBarScrollWrapper } from './Topbar.styled'
const Topbar = () => {
  return (
    <>
      <TopBarScrollWrapper>
        <Logo></Logo>
        <NavBar></NavBar>
      </TopBarScrollWrapper>
      <MiddlePart></MiddlePart>
    </>
  )
}

export default Topbar

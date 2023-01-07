import colorLogo from '../images/colorLogo.png'
import WhiteLogo from '../images/WhiteLogo.png'

const Nav = ({minimal, authToken, setShowModel, showModel,setIsSignUp}) =>{
    
 const handleClick = () =>{
    setShowModel(true)
    setIsSignUp(false)
 }

    return (
        
        <nav>
        <div className="logo-container">
            <img className="logo" src={minimal? colorLogo : WhiteLogo} alt="Loding" />
        </div>

        {!authToken && !minimal && <button
         className="nav-button"
         onClick={handleClick}
         disabled={showModel}
         >Log in</button>}
        </nav>
    )

}

export default Nav
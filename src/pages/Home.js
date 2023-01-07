import Nav from "../components/Nav";
import { useState } from "react";
import AuthModel from "../components/AuthModel";

const Home = () => {
  const [showModel , setShowModel] = useState(false)
  const[isSignUp, setIsSignUp] = useState(true)
  const authToken = false

  const handleClick = () => {
    console.log('clicked')
    setShowModel(true)
    setIsSignUp(true)
  }
  return (
    <div className="Overlay">
      
      <Nav minimal={false}
       authToken={authToken} 
       setShowModel={setShowModel} 
       showModel={showModel}
       setIsSignUp={setIsSignUp}
       />

      <div className="Home">
        <h1 className="primary-title">Let's find a perfect match for you</h1>
        <button className="primary_button" onClick={handleClick}>
          {authToken ? 'Signout' : 'Create Account'}
        </button>

        {showModel&& (
        <AuthModel setShowModel={setShowModel} isSignUp={isSignUp}/>
        )}
      </div>
    </div>
  );
}

export default Home;

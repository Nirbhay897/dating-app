import { useState } from "react"

const AuthModel =({setShowModel , isSignUp}) =>{

    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState(null)
    const [confirmPassword , setConfirmPassword] = useState(null)
    const [error , setError] = useState(null)

const handleClick = () =>{
    setShowModel(false)
}

const handleSubmit = (e) => {
    e.preventDefault()
    try{
        if(isSignUp && (password !== confirmPassword)){
            setError("password needs to match")
        }
        console.log('make a post request to our database')
    } catch(error) {
        console.log(error)
    }
}

    return (
        <div className="auth-model">
            <div className="close-icon" onClick={handleClick}>x</div>
            <h2>{isSignUp?'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>by clicking log in u agree to our terms</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="email"
                id ="email"
                name="email"
                placeholder="email"
                required ={true}
                onChange={(e)=> setEmail(e.target.value)} />

                <input 
                type="password"
                id ="password"
                name="password"
                placeholder="password"
                required ={true}
                onChange={(e)=> setPassword(e.target.value)} />

                {isSignUp&&<input 
                type="password-check"
                id ="password-check"
                name="password-check"
                placeholder="Confirm password"
                required ={true}
                onChange={(e)=> setConfirmPassword(e.target.value)} />}

                <input className="secondary-button" type="submit" />
                <p>{error}</p>
                
                <hr />
                <p>GET THE APP</p>
            </form>
        </div>
    )
}
export default AuthModel
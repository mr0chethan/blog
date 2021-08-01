import {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { auth, signInWithGoogle } from './firebase'


let Signin = (props)=>{

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                let {displayName, email, uid} =user
                props.handleUser({displayName, email, uid})
            }
            else{
                props.handleUser(user)
            }
        })
    },[])

    return(
        <div>
            {props.user ? <Redirect to="/user"/> : ""}
            <button onClick={signInWithGoogle} type="submit">
            Sign in with Google
            </button>
        </div>
        
    )
}

export default Signin
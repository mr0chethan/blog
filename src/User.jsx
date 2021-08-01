import {Redirect} from "react-router-dom"
import {auth} from "./firebase"
import Blogs from "./Blogs"

let User = (props)=>{
    let signOutHandler = ()=>{
        auth.signOut()
    }

    return(
        <div>
            {props.user ? (<div>{props.user.email}<button onClick={signOutHandler}>Sign out</button>
            <Blogs user={props.user}/>
            </div>) : (<Redirect to="/"/>)}
        </div>
    )
}

















export default User
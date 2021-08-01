import {useState, useEffect} from "react"
import {firestore} from "./firebase";


function Blogs(props){
    let [blogs, setBlogs] = useState([])

    useEffect(()=>{
        let fun = async() =>{
            let blogsArray = []
            await firestore.collection("blogs").get()
            .then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    blogsArray.push({blogText: doc.data().blog})
                })
            })
            setBlogs(blogsArray)
            // console.log(blogsArray)
        }
        fun()
    },[])

    


    let keyPressHandler =(event)=>{
        if(event.key === "Enter"){
            let blogText = event.target.value
            console.log(blogText)
            firestore.collection("blogs").add({blog : blogText});
        }
    }
//map modify
    return(
        <div>
            <ul>
                {blogs.map((el,index)=><li key={index}>{el.blogText.toString()}</li>)}
            </ul>
            <input 
            placeholder="type your blog here" 
            type="text" 
            onKeyPress={(event)=>keyPressHandler(event)}>
            </input>
        </div>
    )
}

export default Blogs
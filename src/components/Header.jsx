import React, {useState,useContext} from "react"
import ThemeContext from "../context/ThemeContext"


const Header=()=>{
    const [darkMode,setDarkMode]=useState(false)
    const color=useContext(ThemeContext)
      

    const handleClick=()=>{
        setDarkMode(!darkMode)
    }


    return (
        <div className="Header">
            <h1 style={{color}}> ReactHooks</h1>
            <button type="button" onClick={handleClick}>
                {darkMode?"Dark Mode":"Ligh Mode"}</button>
            <button type="button2" onClick={()=>setDarkMode(!darkMode)}>
                {darkMode?"Dark Mode2":"Ligh Mode2"}</button>
        </div>
    )
}

export default Header
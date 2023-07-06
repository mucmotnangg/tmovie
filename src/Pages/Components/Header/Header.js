import { useEffect, useState } from "react"
import MenuPopUp from "../MenuPopUp/MenuPopUp"
import "../Header/Header.css"
import {category,movieType,tvType} from "../../../api/tmdbApi"

function Header () {
    const [isShow,setShow]=useState(false)
    const [input,setInput]=useState("")

    const transitionHeader = () =>{
        window.scrollY > 100 ? setShow(true):setShow(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionHeader)
        //clean up
        return () =>{window.removeEventListener("scroll",transitionHeader)}
    },[])

    const handleInput = (e)=>{
        setInput(e.target.value)
    }
    return (
        <div className={`header ${isShow && "header_show"}`}>
            <div className="header_content">
            <div className="header_content-right">
            <a href="/">
                <img  className="header_logo" src="/logo.png" alt="logo_tphim" />
                </a>
                <ul className="header_menu">
                    {Object.entries(category).map(([key, value]) => {
                        const cates = {
                            movie: movieType,
                            tv: tvType
                        }[value];
                        return (
                        <MenuPopUp key={key} dad={value} cates={cates}>
                            <li className="header_menu-item">
                                <span className="header_menu-span">{value}</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                        </MenuPopUp>
                        );
                    })}
                </ul>
            </div>
            <div className="header_content-left">
                <div className="hearder_seach">
                <input className="header_search-input" onChange={handleInput} value={input}  for="search"/>
                <a href={`/searching/${input}`}><i class="fa-solid fa-magnifying-glass header_search-i"/></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
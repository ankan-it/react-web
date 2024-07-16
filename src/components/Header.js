import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    let navigate = useNavigate();
    let location = useLocation();

    let openNav = () => {
        document.getElementById("myNav").classList.toggle("menu_width");
        document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
    }

    let changeRoute = (e, path) => {
        openNav()
        e.preventDefault();
        navigate(path);
    }

    useEffect(() => {
        console.log(location, 'location')
    }, [])

    return (
        <>
            <header class={`header_section ${(location.pathname != '/' ? 'innerpage_header' : '')}`}>
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                Healet
                            </span>
                        </a>
                        <div class="" id="">

                            <div class="custom_menu-btn">
                                <button onClick={() => openNav()}>
                                    <span class="s-1"> </span>
                                    <span class="s-2"> </span>
                                    <span class="s-3"> </span>
                                </button>
                                <div id="myNav" class="overlay">
                                    <div class="overlay-content">
                                        <a href="index.html" onClick={(e) => changeRoute(e, '/')}>Home</a>
                                        <a href="about.html" onClick={(e) => changeRoute(e, '/about')}>About</a>
                                        <a href="shop.html" onClick={(e) => changeRoute(e, '/shop')}>Shop</a>
                                        <a href="blog.html" onClick={(e) => changeRoute(e, '/blog')}>Blog</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>


        </>
    )
}
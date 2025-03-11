// javascript/Header.jsx
import React from 'react';
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const mobileMenu = document.querySelector(".mobile-menu");
        const dropdownMenu = document.getElementById("dropdownMenu");

        if (mobileMenu && dropdownMenu) {
            const toggleMenu = () => {
                dropdownMenu.classList.toggle("active");
            };

            const closeMenu = (event) => {
                if (!mobileMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove("active");
                }
            };

            mobileMenu.addEventListener("click", toggleMenu);
            document.addEventListener("click", closeMenu);

            // Очистка обработчиков при размонтировании
            return () => {
                mobileMenu.removeEventListener("click", toggleMenu);
                document.removeEventListener("click", closeMenu);
            };
        }
    }, []);

    return (
        <header className="header"><a href="index.html" className="logo">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.51263" y="1.5127" width="34.7899" height="34.7899" rx="2.72269" fill="#24262B"></rect>
                <circle cx="23.7728" cy="18.7926" r="7.43051" transform="rotate(22.4444 23.7728 18.7926)" fill="white"
                        stroke="white" stroke-width="1.17324"></circle>
                <circle cx="14.0001" cy="19.0858" r="7.43051" transform="rotate(22.4444 14.0001 19.0858)" fill="#24262B"
                        stroke="white" stroke-width="1.17324"></circle>
                <path d="M18.4155 13.7933C16.8988 15.4039 14.2976 19.9813 18.9393 24.7328" stroke="white"
                      stroke-width="1.17324"
                      stroke-dasharray="1.96 1.96"></path>
            </svg>
        </a>
            <div className="rightBlock">
                <nav className="menu">
                    <ul>
                        <li><a href="/catalog.html">Статьи</a></li>
                        <li><a href="/alphabet.html">Глоссарий</a></li>
                        <li><a href="/testsList.html">Тесты</a></li>
                    </ul>
                </nav>
                <div className="search">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.4517 3.41467C17.8169 6.77992 17.4539 12.4552 13.3679 15.3253C10.7675 17.1505 7.13521 17.1505 4.53479 15.3253C0.446196 12.4578 0.085819 6.77992 3.45107 3.41467C6.48965 0.376098 11.4157 0.376098 14.4517 3.41467"
                            stroke="#323232" stroke-width="1.51261" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M19.3223 19.2843L14.4481 14.4102" stroke="#323232" stroke-width="1.51261"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <input type="text" placeholder="Найдите термин..."/></div>

                <svg className="mobile-menu" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.23083 7.53464C5.23083 7.20674 5.49665 6.94092 5.82456 6.94092H17.2749C17.6028 6.94092 17.8687 7.20674 17.8687 7.53464C17.8687 7.86255 17.6028 8.12837 17.2749 8.12837H5.82456C5.49665 8.12837 5.23083 7.86255 5.23083 7.53464Z"
                        fill="#29333D"/>
                    <path
                        d="M5.23083 12.3056C5.23083 11.9777 5.49665 11.7119 5.82456 11.7119H17.2749C17.6028 11.7119 17.8687 11.9777 17.8687 12.3056C17.8687 12.6335 17.6028 12.8994 17.2749 12.8994H5.82456C5.49665 12.8994 5.23083 12.6335 5.23083 12.3056Z"
                        fill="#29333D"/>
                    <path
                        d="M5.82456 16.4829C5.49665 16.4829 5.23083 16.7487 5.23083 17.0766C5.23083 17.4045 5.49665 17.6704 5.82456 17.6704H17.2749C17.6028 17.6704 17.8687 17.4045 17.8687 17.0766C17.8687 16.7487 17.6028 16.4829 17.2749 16.4829H5.82456Z"
                        fill="#29333D"/>
                </svg>

                <div className="dropdown-menu" id="dropdownMenu">
                    <ul>
                        <li><a href="/catalog.html">Статьи</a></li>
                        <li><a href="/alphabet.html">Глоссарий</a></li>
                        <li><a href="/testsList.html">Тесты</a></li>
                    </ul>
                </div>
            </div>
        </header>
);
};

export default Header;

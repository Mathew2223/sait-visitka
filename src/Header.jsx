import { useState } from 'react';
import './Header.css';
import logo from './assets/logo_header.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className='container'>
                <div className="menu_row">
                    <img className='logotype' src={logo} alt="logo" />
                    
                    <button 
                        className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav-links ${isMenuOpen ? 'nav-links--active' : ''}`}>
                        <a className='menu-link' href="#program" onClick={() => setIsMenuOpen(false)}>Программа курса</a>
                        <a className='menu-link' href="#price" onClick={() => setIsMenuOpen(false)}>Стоимость обучения</a>
                        <a className='menu-link' href="#reviews" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
                        <a className='menu-link' href="#contacts" onClick={() => setIsMenuOpen(false)}>Контакты</a>
                    </nav>

                    {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
                </div>
            </div>
        </header>
    )
}
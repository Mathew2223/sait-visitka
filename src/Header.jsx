import './Header.css'
import logo from './assets/logo_header.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className="menu_row">
                    <img className='logotype' src={logo} alt="logo" />
                    <nav className='nav-links'>
                        <a className='menu-link' href="#program">Программа курса</a>
                        <a className='menu-link' href="#price">Стоимость обучения</a>
                        <a className='menu-link' href="#reviews">Отзывы</a>
                        <a className='menu-link' href="#contacts">Контакты</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
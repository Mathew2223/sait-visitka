import './Footer.css'
import logo_tg from './assets/telegram_logo.png'
import logo_vk from './assets/vk_logo.png'

export default function Footer() {
    return (
        <footer id="contacts" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Начни создавать сайты уже сегодня</h3>
                        <p>Обучение с нуля до первых заработков</p>
                    </div>
                    
                    <div className="footer-contacts">
                        <h4>Контакты</h4>
                        <div className="contact-links">
                            <a href="https://t.me/Iytreq" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <img style={{width: '20px'}} src={logo_tg} alt='telegram logo'></img>
                                @Iytreq
                            </a>
                            <a href="https://vk.com/matveiysitnikov" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <img style={{width: '20px'}} src={logo_vk} alt='telegram logo'></img>
                                Матвей Ситников
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>© 2025 Курс по созданию сайтов. Все права конечно защищены.</p>
                </div>
            </div>
        </footer>
    )
}
import './Price.css'

export default function Price() {
    return (
        <section id="price" className="price-section">
            <div className="container">
                <h2 className="section-title">Стоимость обучения</h2>
                <div className="pricing-cards">
                    <div className="price-card">
                        <div className="price-header">
                            <h3>Половина курса</h3>
                            <div className="price-amount">
                                <span className="amount">7 000 ₽</span>
                                <span className="period">за 5 занятий</span>
                            </div>
                        </div>
                        <ul className="price-features">
                            <li>✓ 1 модуля обучения</li>
                            <li>✓ Практика на Tilda</li>
                            <li>✓ Реальный проект для портфолио</li>
                            <li>✓ Чат с участниками курса</li>
                        </ul>
                        <button className="price-button">Записаться на курс</button>
                    </div>
                    
                    <div className="price-card popular">
                        <div className="popular-badge">Выгодно</div>
                        <div className="price-header">
                            <h3>Полный курс</h3>
                            <div className="price-amount">
                                <span className="amount">9999 ₽</span>
                                <span className="period">за 10 занятий</span>
                            </div>
                        </div>
                        <ul className="price-features">
                            <li>✓ 2 модуля обучения</li>
                            <li>✓ Помощь в составлении коммерческого предложения</li>
                            <li>✓ Гарантия первого заказа</li>
                            <li>✓ Разбор ваших первых заказов</li>
                            <li>✓ Пожизненный доступ к обновлениям</li>
                        </ul>
                        <button className="price-button primary">Выбрать этот тариф</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
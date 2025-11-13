import './Program.css'

export default function Program() {
    return (
        <section id='program' className='program-section'>
            <div className='container'>
                <h1 className='program-title'>Программа курса</h1>
                <p className='program-subtitle'>От основ до первых заработков за 10 занятий</p>
                
                <div className='modules-grid'>
                    {/* Модуль 1 */}
                    <div className='module-card'>
                        <div className='module-header'>
                            <span className='module-badge'>Модуль 1</span>
                            <h2 className='module-title'>Создание сайтов на конструкторах</h2>
                            <p className='module-duration'>5 занятий • Практика на Tilda</p>
                        </div>
                        <div className='lessons-list'>
                            <div className='lesson-item'>
                                <span className='lesson-number'>01</span>
                                <div className='lesson-content'>
                                    <h3>Знакомство с конструкторами сайтов</h3>
                                    <p>Обзор популярных платформ, выбор ниши, основы UI/UX</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>02</span>
                                <div className='lesson-content'>
                                    <h3>Глубокое погружение в Tilda</h3>
                                    <p>Блоки, анимации, формы, подключение домена</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>03</span>
                                <div className='lesson-content'>
                                    <h3>Практика: Создание лендинга</h3>
                                    <p>Первый реальный проект</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>04</span>
                                <div className='lesson-content'>
                                    <h3>Адаптивная верстка и SEO</h3>
                                    <p>Мобильная версия, базовое продвижение сайта</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>05</span>
                                <div className='lesson-content'>
                                    <h3>Презентация своего первого сайта</h3>
                                    <p>Презентация своего проекта и подготовка к первому заработку</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Модуль 2 */}
                    <div className='module-card'>
                        <div className='module-header'>
                            <span className='module-badge'>Модуль 2</span>
                            <h2 className='module-title'>Монетизация и развитие</h2>
                            <p className='module-duration'>5 занятий • Первые заказы</p>
                        </div>
                        <div className='lessons-list'>
                            <div className='lesson-item'>
                                <span className='lesson-number'>06</span>
                                <div className='lesson-content'>
                                    <h3>Поиск первых клиентов</h3>
                                    <p>Где искать заказы, составление предложения, переговоры</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>07</span>
                                <div className='lesson-content'>
                                    <h3>Ценообразование и упаковка</h3>
                                    <p>Сколько брать за сайт, создание портфолио, отзывы</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>08</span>
                                <div className='lesson-content'>
                                    <h3>Практика: Реальный заказ</h3>
                                    <p>Работа с реальным заказчиком под руководством ментора</p>
                                </div>
                            </div>
                            <div className='lesson-item'>
                                <span className='lesson-number'>09</span>
                                <div className='lesson-content'>
                                    <h3>Масштабирование услуг</h3>
                                    <p>Дополнительные услуги: SEO, реклама</p>
                                </div>
                            </div>
                            <div className='lesson-item highlight-lesson'>
                                <span className='lesson-number'>10</span>
                                <div className='lesson-content'>
                                    <h3>Переход на код</h3>
                                    <p>Как писать сайты на HTML/CSS и увеличить свой заработок</p>
                                    <div className='upsell-badge'>
                                        <span>Следующий уровень</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
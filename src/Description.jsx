import './Description.css'

export default function Description() {
    return (
        <section className = 'hero-section'>
            <div className = 'hero-content'>
                <div className='text-block'>
                    <h1 className='hero-title'>Научись писать сайты с полного нуля</h1>
                    <p className='hero-subtitle'>Освой один из самых актуальных навыков в IT и начни зарабатывать</p>
                    <button className='cta-button primary'>Изучить программу курса</button>
                </div>
                <div className="form-block">
                    <form id='enrollment-form' className='enrollment-form'> {/* action="/submit-form" method='post' */}
                        <h2 className='form-title'>Запись на курс</h2>
                        <div className='input-group'>
                            <label htmlFor="username">Имя</label>
                            <input type="text" id='username' name='username' placeholder="Имя"/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="lastname">Фамилия</label>
                            <input type="text" id='lastname' name='lastname' placeholder='Фамилия'/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="tel">Телефон</label>
                            <input type="tel" id='phone' name='tel' placeholder='Телефон'/>
                        </div>
                        <button type='submit' className='cta-button secondary'>Записаться на курс</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
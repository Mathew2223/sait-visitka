import './Reviews.css'

export default function Reviews() {
    const reviews = [
        {
            name: "Анна",
            age: 18,
            project: "Сайт для цветочного магазина",
            text: "После курса сделала первый сайт за 15 000₽! Tilda как оказывается очень простая. Хочу отметить, что поддержка преподавателя бесценна.",
            rating: 5
        },
        {
            name: "Дмитрий",
            age: 16,
            project: "Сайт об игре Dota 2", 
            text: "Никогда не думал, что смогу создавать сайты. Создал свой сайт по доте. Спасибо за структурированную программу!",
            rating: 4
        },
        {
            name: "Menson Kriss",
            age: 17,
            project: "Сайт музыканта",
            text: "Чувак это реально было жестко, создал сайт для колледжа и продал информатику за 100$. Еще я пишу реп и создал сайт для себя. Челы начали заходить и теперь делаю деньги еще и на музыке, спасибо!",
            rating: 5
        }
    ];

    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <h2 className="section-title">Отзывы учеников</h2>
                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <span>{review.age} лет</span>
                                </div>
                                <div className="review-rating">
                                    {'⭐'.repeat(review.rating)}
                                </div>
                            </div>
                            <div className="review-project">
                                <strong>Проект:</strong> {review.project}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
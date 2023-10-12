import React from 'react';

export default function Services(props) {
    // You can fully customize this implementation
    // including changing the JSX, CSS and React hooks
    return (        
        <div class="container px-4 py-5" id="price">

            <h1 class="mb-4" style={{'text-align': 'center'}}>Услуги и цены</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        {/* <div class="mb-3 fs-4 d-flex">
                            <div class="">Бесплатная online консультация (15-20 минут)</div>
                            <div class="ml-auto">0 ₽</div>
                        </div> */}
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Диагностика ребёнка от 4 до 10 лет - 2000 ₽</div>
                        </h3>
                        <div>
                        Психологическая диагностика ребенка включает в себя ряд методов и инструментов, которые помогают оценить психологическое состояние и развитие ребенка.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Оnline консультация (1 час) - 4000 ₽</div>
                        </h3>
                        <div>
                        Консультация будет полезна для родителей, которые ищут помощь и поддержку в воспитании и развитии своего ребенка.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Консультация в кабинете (1 час) - 4000 ₽</div>
                        </h3>
                        <div>
                        На консультации мы разберём результаты диагностики, причины возникновения проблемы. Вы получите конкретные рекомендации по решению трудностей.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Сеанс песочной терапии (1 час) - 3000 ₽</div>
                        </h3>
                        <div>
                        Сказочная песочная терапия - это уникальный метод психотерапии, который позволяет ребенку выразить свои эмоции и переживания через символический язык песка и миниатюрных фигурок.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
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
                            <div>Бесплатная online консультация (15-20 минут) 0 ₽</div>
                        </h3>
                        <div>
                       Короткая консультация подразумевает наше знакомство, обозначение запроса и определение вектора дальнейшей работы. Я работаю исключительно с родителями, поскольку, как показывает практика 80% проблем можно решить через родителей, и лишь 20% проблем требует непосредственного присутствия ребёнка.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Оnline консультация (1 час) 1500 ₽</div>
                        </h3>
                        <div>
                        На консультации мы разберём причины возникновения проблемы, я дам Вам конкретные рекомендации, которые помогут в её решении, отвечу на все интересующие Вас вопросы.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Расширенная online консультация (1 час + PDF файл) 2000 ₽</div>
                        </h3>
                        <div>
                        Расширенная online консультация включает в себя как саму консультацию, так и PDF файл, составленный на основе нашей с Вами сессии. Он будет включать в себя конкретные рекомендации, специально подобранные игры, терапевтические сказки, дополнительную литературу для самостоятельного изучения, и при необходимости контакты проверенных узких специалистов, которые помогут Вам в решении Вашей проблемы.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Групповая консультация 5000 ₽</div>
                        </h3>
                        <div>
                        Консультация для небольшой подгруппы родителей (до 5 человек), объединённая общей тематикой/проблематикой (Как помочь ребенку адаптироваться к детскому саду? Как подготовить ребенка к школе? Финансовое воспитание детей. Особенности в воспитании мальчиков и девочек. Как в ребёнке сформировать положительную самооценку, чтобы он начал верить в себя и в свои силы? Как убрать в ребёнке потребительское поведение по отношению к родителям?).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
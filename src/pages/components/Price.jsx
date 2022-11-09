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
                            <div>Бесплатная online консультация (15-20 минут)</div>
                            <div>0 ₽</div>
                        </h3>
                        <div>
                            Бесплатная консультация подразумевает наше знакомство, обозначение запроса и определение вектора дальнейшей консультации.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Повторная online консультация</div>
                            <div>1000 ₽</div>
                        </h3>
                        <div>
                            На повторной консультации мы разберем, какие именно рекомендации Вам удалось применить на практике, 
                            что получилось, что не получилось, подберем новые способы решения проблемы
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Первичная online консультация</div>
                            <div>1500 ₽</div>
                        </h3>
                        <div>
                            На первичной online консультации я дам Вам конкретные рекомендации, которые помогут в решении возникшей проблемы.  
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Групповая консультация</div>
                            <div>3000 ₽</div>
                        </h3>
                        <div>
                            Консультация для небольшой подгруппы родителей (до 5 человек), объединённая общей тематикой/проблематикой 
                            (как помочь ребенку адаптироваться к детскому саду, как подготовить ребенка к школе, финансовое воспитание детей, 
                            особенности в воспитании мальчиков и девочек и т.п. темы).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
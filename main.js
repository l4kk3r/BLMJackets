const sewing_types_data = {
    'Костюм': ['Бизнес', 'Свадебный', 'Вечерний', 'Повседневный'],
    'Пиджак': ['Бизнес', 'Тренди', 'Повседневный'],
    'Пальто': ['Бизнес', 'Тренди', 'Повседневное'],
    'Поло': ['C длинным рукавом', 'C коротким рукавом'],
    'Джинсы': ['Зауженного кроя', 'Прямого кроя'],
    'Сорочка': ['Бизнес', 'Повседневная', 'С принтом']
}

const sewing_types_height = {
    'Костюм': '475px',
    'Пиджак': '500px',
    'Пальто': '500px',
    'Поло': '350px',
    'Джинсы': '475px',
    'Сорочка': '355px'
}

const result_products = {
    "Костюм_вечерний_1":"98 000__74 000__vbc__Смокинг сшитый по вашим меркам<br>по технологии half canvas черного цвета из тканиVitale Barberis Canonico мериносовой шерсти",
    "Костюм_вечерний_2":"109 000__82 000__vbc__Смокинг сшитый по вашим меркам<br>по технологии half canvas черно-синего цвета из ткани Vitale Barberis CanonicoАвстралийской мериносовой шерсти",
    "Костюм_вечерний_3":"98 000__89 000__vbc__Смокинг сшитый по вашим меркам<br>по технологии half canvas черно-синего цвета из ткани Vitale Barberis Canonico Новозеланской мериносовой шерсти",
    "Костюм_бизнес_1":"104 000__78 000__lpf__Костюм сшитый по вашим меркам<br>по технологии half canvas темно-синего цвета в тонкую полоску из ткани Loro Piana S’150 легкой Тасманской шерсти",
    "Костюм_бизнес_2":"119 000__89 000__lpf__Костюм сшитый по вашим меркам<br>по технологии half canvas темно-корричневогоцвета из ткани Loro Piana S’150 Тасманской шерсти",
    "Костюм_бизнес_3":"98 000__74 000__reda__Костюм сшитый по вашим меркам<br>по технологии half canvas темно-серого цвета из ткани Reda S’130идеально подходящий для работы",
    "Костюм_свадебный_1":"98 000__74 000__vbc__Костюм сшитый по вашим меркам<br>по технологии half canvas ярко-синего цвета из ткани Vitale Barberis Canonico 84% шерсть 16% мохер",
    "Костюм_свадебный_2":"88 000__70 000__vbc__Костюм сшитый по вашим меркам<br>по технологии half canvas черного цвета из ткани Vitale Barberis Canonico 84% шерсть 16% мохер",
    "Костюм_свадебный_3":"110 000__82 000__vbc__Костюм сшитый по вашим меркам<br>по технологии half canvas черного цвета из ткани Vitale Barberis Canonico 84% шерсть 16% мохер",
    "Костюм_повседневный_1":"104 000__78 000__ferla__Костюм сшитый по вашим меркам<br>по технологии half canvas в светло-коричневого цвета в тонкую полоску из ткани Ferlaв состав которого входит шерсть альпаки и лен",
    "Костюм_повседневный_2":"112 000__84 000__lpf__Костюм сшитый по вашим меркам<br>по технологии half canvas коричневого цвета в голубую клетку из ткани Loro Piana Summer Time71%шерсть 15%шелк 14%лен",
    "Костюм_повседневный_3":"91 000__71 000__lpf__Костюм сшитый по вашим меркам<br>по технологии half canvas кремового цвета из ткани Subalpino 97%хлопок 3%эласан",
    "Пиджак_бизнес_1":"76 000__57 000__piacenza__Пиджак сшитый по вашим меркам<br>по технологии half canvas светло-серого цвета из ткани Piachenza S’140 ",
    "Пиджак_бизнес_2":"72 000__54 000__piacenza__Пиджак сшитый по вашим меркам<br>по технологии half canvas черно-синего цвета из ткани Angelico S’140 100% Новозеланской мериносовой шерсти",
    "Пиджак_бизнес_3":"85 000__64 000__lpf__Пиджак сшитый по вашим меркам<br>по технологии half canvas коричневого цвета в голубую клетку \"Гленчек\" из ткани Paulo Oliveira Новозеланской мериносовой шерсти",
    "Пиджак_повседневный_1":"85 000__64 000__lpf__Пиджак сшитый по вашим меркам<br>по технологии half canvas коричневого цвета в гусиную лапку из ткани Loro Piana 98%шерсть 2%шелк",
    "Пиджак_повседневный_2":"72 000__54 000__angelico__Пиджак сшитый по вашим меркам<br>по технологии half canvas светло-бежевого цвета из ткани Angelico 100% легкой Тасманской шерсти",
    "Пиджак_повседневный_3":"79 000__59 000__lpf__Пиджак сшитый по вашим меркам<br>по технологии half canvas зеленого цвета в гусиную лапку из ткани Drago 68%шерсть 18%шелк 14%лен",
    "Пиджак_тренди_1":"79 000__59 000__lpf__Пиджак сшитый по вашим меркам<br>по технологии half canvas зеленого цвета в голубую клетку из ткани Loro Piana 49%шерсть 30%шелк 21%лен",
    "Пиджак_тренди_2":"7 0000__52 000__ferla__Пиджак сшитый по вашим меркам<br>по технологии half canvas желтого цвета в елочку из ткани Ferla в состав которого входит шелк, лен и хлопок ",
    "Пиджак_тренди_3":"79 000__59 000__lpf__Пиджак сшитый по вашим меркам<br>по технологии half canvas голубого цвета из ткани Loro Piana Summer Time 67%шерсть 20%шелк 13%лен",
    "Пальто_бизнес_1":"127 000__95 000__lpf__Пальто сшитое по вашим меркам<br>черного цвета из благородного кашемира Loro Piana ",
    "Пальто_бизнес_2":"117 000__88 000__nesti__Пальто сшитое по вашим меркам<br>синего цвета из благородного кашемира Nesti Onelio ",
    "Пальто_бизнес_3":"117 000__88 000__lpf__Пальто сшитое по вашим меркам<br>Черного цвета из ткани Nesti Onelioнатуральной плотной шерсти с добавлениемшелковых нитей",
    "Пальто_повседневное_1":"91 000__68 000__ferla__Пальто сшитое по вашим меркам<br>серого цвета в елочку из ткани Ferla в состав которой входит альпака придающая ворсистый эффект изделиюи шерсть",
    "Пальто_повседневное_2":"117 000__88 000__nesti__Пальто сшитое по вашим меркам<br>светло-коричневого цвета из благородного кашемира Nesti Onelio ",
    "Пальто_повседневное_3":"91 000__68 000__ferla__Пальто сшитое по вашим меркам<br>светло-серого цвета в мелкую клетку из ткани Ferla в состав которой входит альпака придающаяворсистый эффект изделию и шерсть",
    "Пальто_тренди_1":"97 000__88 000__ferla__Пальто сшитое по вашим меркам<br>коричневого цвета в мелкую клетку из ткани Ferla в состав которой входит альпака придающаяворсистый эффект изделию и шерсть",
    "Пальто_тренди_2":"91 000__68 000__ferla__Пальто сшитое по вашим меркам<br>коричневого цвета в мелкую клетку из ткани Ferla 20%альпака 65%шерсть 15% полиамид",
    "Пальто_тренди_3":"117 000__88 000__nesti__Пальто сшитое по вашим меркам<br>светло-коричневого цвета из благородного кашемира Nesti Onelio ",
    "Поло_c_коротким_рукавом_1":"16 000__12 000__tmg__Поло сшитое по вашим меркам<br>с коротким рукавом темно-синего цвета из ткани TMG 100% хлопок",
    "Поло_c_коротким_рукавом_2":"14 500__10 500__tmg__Поло сшитое по вашим меркам<br>с коротким рукавом желтого цвета из ткани TMG 100% хлопок",
    "Поло_c_коротким_рукавом_3":"14 500__10 500__tmg__Поло сшитое по вашим меркам<br>с коротким рукавом темно-серого цвета из ткани TMG 100% хлопок",
    "Поло_c_длинным_рукавом_1":"16 000__12 000__tmg__Поло сшитое по вашим меркам<br>с длинным рукавом светло-серого цвета из ткани TMG 100% хлопок",
    "Поло_c_длинным_рукавом_2":"16 000__12 000__tmg__Поло сшитое по вашим меркам<br>с длинным рукавом карамельного цвета из ткани TMG 100% хлопок",
    "Поло_c_длинным_рукавом_3":"14 500__10 500__tmg__Поло сшитое по вашим меркам<br>с длинным рукавом карамельного цвета из ткани TMG 100% хлопок",
    "Джинсы_прямого_кроя_1":"26 000__19 500__candiani__Джинсы сшитые по вашим меркам<br>прямого кроя темно-синего цвета из сырого денима salvedge ткани Candiani 92% хлопок 6% волокно Lycra 2% эластан",
    "Джинсы_прямого_кроя_2":"29 000__22 000__candiani__Джинсы сшитые по вашим меркам<br>прямого кроя светло-синего цвета из ткани Candiani 98% 2% эластан ",
    "Джинсы_прямого_кроя_3":"26 000__19 500__candiani__Джинсы сшитые по вашим меркам<br>прямого кроя светло-синего цвета из ткани Candiani 98% 2% эластан ",
    "Джинсы_зауженного_кроя_1":"24 000__18 000__candiani__Джинсы сшитые по вашим меркам<br>зауженного кроя темно-синего цвета из стираного денима ткани Candiani 98% 2% эластан ",
    "Джинсы_зауженного_кроя_2":"28 000__21 000__candiani__Джинсы сшитые по вашим меркам<br>зауженного кроя светло-голубого цвета из стираного дениматкани Candiani 98% 2% эластан ",
    "Джинсы_зауженного_кроя_3":"24 000__18 000__candiani__Джинсы сшитые по вашим меркам<br>зауженного кроя серого цвета из стираного денима ткани Candiani 98% 2% эластан",
    "Сорочка_с_принтом_1":"13 000__9 700__albiate__Сорочка сшитая по вашим меркам<br>темно-бирюзового цвета с принтом из ткани Albiate 100% хлопок",
    "Сорочка_с_принтом_2":"16 000__12 000__albiate__Сорочка сшитая по вашим меркам<br>белого цвета с принтом из ткани Albiate 100% хлопок",
    "Сорочка_с_принтом_3":"13 000__9 700__albini__Сорочка сшитая по вашим меркам<br>синего цвета с  принтом из ткани Albini Group 100% хлопок",
    "Сорочка_бизнес_1":"13 000__9 700__weba__Сорочка сшитая по вашим меркам<br>голубого цвета из ткани Weba 100% хлопок",
    "Сорочка_бизнес_2":"16 000__12 000__weba__Сорочка сшитая по вашим меркам<br>голубого цвета из ткани Weba 100% хлопок",
    "Сорочка_бизнес_3":"13 000__9 700__weba__Сорочка сшитая по вашим меркам<br>белого цвета из ткани Weba 100% хлопок",
    "Сорочка_повседневная_1":"13 000__9 700__weba__Сорочка сшитая по вашим меркам<br>белого цвета в голубую клетку из ткани Weba 100% хлопок",
    "Сорочка_повседневная_2":"16 000__12 000__weba__Сорочка сшитая по вашим меркам<br>кораллового цвета в белую полоску из ткани Weba 100% хлопок",
    "Сорочка_повседневная_3":"13 000__9 700__weba__Сорочка сшитая по вашим меркам<br>кораллового цвета в белую полоску из ткани Weba 100% хлопок",
}

const data = {}

function startQuiz () {
    const first_window = document.getElementById('first_window')
    const second_window = document.getElementById('second_window')
    first_window.style.display = 'none'
    second_window.style.display = 'flex'
    $('html,body').scrollTop(0);
}

function chooseProduct (product) {
    const second_window = document.getElementById('second_window')
    const third_window = document.getElementById('third_window')
    second_window.style.display = 'none'
    third_window.style.display = 'flex'
    const sewing_types = document.getElementById('sewing_types')
    data.product = product
    if (product === 'Костюм') {
        for (let i = 1; i < 5; i++) {
            sewing_types.insertAdjacentHTML('beforeend', `<picture style="height: ${sewing_types_height[product]}" onclick="chooseSewingType('${sewing_types_data[product][i - 1]}')" class="sewing_type">
                    <img src="./images/sewing_types/${product.toLowerCase()}_${i}.png" alt="${product}. Тип:${i}"/>
                    <p>${sewing_types_data[product][i - 1]}</p>
                </picture>`)
        }
    } else if (product === 'Пиджак' || product === 'Пальто' || product === 'Сорочка') {
        for (let i = 1; i < 4; i++) {
            sewing_types.insertAdjacentHTML('beforeend', `<picture style="height: ${sewing_types_height[product]}" onclick="chooseSewingType('${sewing_types_data[product][i - 1]}')" class="sewing_type">
                    <img src="./images/sewing_types/${product.toLowerCase()}_${i}.png" alt="${product}. Тип:${i}"/>
                    <p>${sewing_types_data[product][i - 1]}</p>
                </picture>`)
        }
    } else {
        for (let i = 1; i < 3; i++) {
            sewing_types.insertAdjacentHTML('beforeend', `<picture style="height: ${sewing_types_height[product]}" onclick="chooseSewingType('${sewing_types_data[product][i - 1]}')" class="sewing_type">
                    <img src="./images/sewing_types/${product.toLowerCase()}_${i}.png" alt="${product}. Тип:${i}"/>
                    <p>${sewing_types_data[product][i - 1]}</p>
                </picture>`)
        }
    }
    $('html,body').scrollTop(0);
}

function chooseSewingType (type) {
    const third_window = document.getElementById('third_window')
    const result_window = document.getElementById('result_window')
    third_window.style.display = 'none'
    result_window.style.display = 'block'
    data.sewing_type = type
    console.log(data)
    rw_result_wrapper = document.querySelector('.rw_result_wrapper')
    for (let i = 1; i < 4; i++) {
        needed = `${data.product.replace(' ', '_')}_${data.sewing_type.replace(' ', '_').replace(' ', '_').toLowerCase()}_${i}`
        console.log(needed)
        result_data = result_products[needed].split('__')
        console.log(result_data)
        rw_result_wrapper.insertAdjacentHTML('beforeend', 
        `<div class="rw_result">
            <div class="rw_result_left">
                <picture class="rw_product" id="${needed}}">
                    <img src="./images/results/products/${needed}.jpg" alt="Сорочка"/>
                </picture>
            </div>
            <div class="rw_result_right">
                <p>${result_data[3]}</p>
                <picture class="rw_company">
                    <img src="./images/results/companies/${result_data[2]}.png" alt="Сорочка"/>
                </picture>
                <h3 class="rw_newprice">${result_data[1]} ₽</h3>
                <span class="rw_oldprice">${result_data[0]} ₽</span>
                <h4>со скидкой (-25%)</h4>
                <button onclick="openModal('phone')" class="rw_orderbutton">Заказать</button>
            </div>
        </div>`)
    }

    rw_result_wrapper.insertAdjacentHTML('beforeend', 
        `<div class="rw_result">
             <div class="rw_result_left">
                            <picture class="rw_product" id="Любой">
                                <img src="./images/results/products/Любой.png" alt="Сорочка"/>
                            </picture>
                        </div>
                        <div class="rw_result_right">
                            <p>А так же:<br><br><ul style="text-align: left"><li>Более 1000 премиальных тканей из Италии и Англии</li><li>Более 100 дизайн опций</li><li>Персональная монограмма</li></ul></p>
                            <h4>со скидкой (-25%)</h4>
                            <button onclick="openModal('phone')" class="rw_orderbutton">Заказать</button>
                        </div>
                    </div> `)
    $('.rw_result_wrapper').slick({
        infinite: false,
        prevArrow:"<button type='button' class='move_arrow_prev slick-prev'><i class='arrow left'></i></i></button>",
        nextArrow:"<button type='button' class='move_arrow_next slick-next'><i class='arrow right'></i></i></button>"
    });
    $('html,body').scrollTop(0);
}

function addContact (contact_type) {
    const result_window = document.getElementById('result_window')
    const fourth_window = document.getElementById('fourth_window')
    result_window.style.display = 'none'
    fourth_window.style.display = 'flex'
    data.contact_type = contact_type
    $('html,body').scrollTop(0);
}

function choosePlace (place) {
    const fourth_window = document.getElementById('fourth_window')
    const thanks_window = document.getElementById('thanks_window')
    fourth_window.style.display = 'none'
    thanks_window.style.display = 'flex'
    $('html,body').scrollTop(0);
}

function goBackFromThird () {
    const second_window = document.getElementById('second_window')
    const third_window = document.getElementById('third_window')
    second_window.style.display = 'flex'
    third_window.style.display = 'none'
    const sewing_types = document.getElementById('sewing_types')
    sewing_types.innerHTML = ''
    $('html,body').scrollTop(0);
}

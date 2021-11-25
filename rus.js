function changeToRusLang(){
    //КТ
    document.getElementById('buttonCT').textContent="КТ";
    document.getElementById('buttonMRT').textContent="МРТ";
    //
    document.getElementById('firstName').placeholder="Фамилия пациента";
    document.getElementById('secondName').placeholder="Имя пациента";
    document.getElementById('lastnameName').placeholder="Отчество пациента";
    //
    document.getElementById('BirthOfDateDay').placeholder="День";
    document.getElementById('lastnameNameMonth').placeholder="Месяц";
    document.getElementById('lastnameNameYear').placeholder="Год";
    //
    document.getElementById('IIN').placeholder="ИИН пациента";
    document.getElementById('PatWeight').placeholder="Вес:";
    //
    document.getElementById('jhalobyText').textContent="Исследование";
    //
    document.getElementById('OptionHead').textContent="Головной мозг";
    document.getElementById('OptionNous').textContent="Пазухи носа";
    document.getElementById('OptionTkan').textContent="Мягкие ткани, шеи";
    document.getElementById('OptionBoobs').textContent="Грудная клетка";
    document.getElementById('OptionOBP').textContent="Органы брюшной полости";
    document.getElementById('OptionOMT').textContent="Органы малого таза";
    document.getElementById('OptionHrebet').textContent="Позвоночник";
    document.getElementById('OptionSustav').textContent="Суставы";
    //
    document.getElementById('OpekunText').textContent="Опекун";
    document.getElementById('SomeText').textContent="Самостоятельно";
    //
    document.getElementById('ContastTextR').textContent="С контрастным препаратом";
    document.getElementById('ContrastTextYes').textContent="ДА";
    document.getElementById('ContrastTextNo').textContent="НЕТ";
    //
    document.getElementById('firstNameOpek').placeholder="Фамилия опекуна";
    document.getElementById('secondNameOpek').placeholder="Имя опекуна";
    document.getElementById('lastNameNameOpek').placeholder="Отчество опекуна";
    //
    document.getElementById('savePatDataButton').textContent="Сохранить";
    //
    document.getElementById('final_text').textContent="Данные успешно сохранены";
    //
    document.getElementById('headerText1').textContent="ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ";
    document.getElementById('headerText2').textContent="НА ПРОВЕДЕНИЕ РЕНТГЕН И КОМПЬЮТЕРНОЙ ТОМОГРАФИИ";
    document.getElementById('headerText3').textContent="в диагностическом центре «Health city»";
    document.getElementById('headerText4').textContent="(заполняется пациентом старше 15 лет или законным представителем пациента)";
    //
    document.getElementById('firstText').textContent="Обязательное соглашение";
    document.getElementById('Text1').textContent="Сообщите персоналу о наличии у вас беременности, аллергии на лекарственные препараты, аллергию на йод или йодсодержащие препараты, имплантатов.";
    //
    document.getElementById('PatInfo').textContent="Информация о пациенте:";
    document.getElementById('FIO').textContent="Ф.И.О. (пациента):";
    document.getElementById('EnteredFamilyNameText').textContent="Ф.И.О. (родителя/опекуна):";
    document.getElementById('BirthOfDatePat').textContent="Дата рождения(пациента):";
    document.getElementById('PatIIN').textContent="ИИН(пациента):";
    //
    document.getElementById('jalText').textContent="Жалобы:";
    document.getElementById('opt1').textContent="Боль";
    document.getElementById('opt1_1').textContent="Головокружение";
    document.getElementById('opt1_2').textContent="Травма";
    document.getElementById('opt1_3').textContent="Другое";

    document.getElementById('opt2').textContent="Боль";
    document.getElementById('opt2_1').textContent="Выделения";
    document.getElementById('opt2_2').textContent="Искривление носовой перегородки";
    document.getElementById('opt2_3').textContent="Другое";

    document.getElementById('opt3').textContent="Боль";
    document.getElementById('opt3_1').textContent="Першение";
    document.getElementById('opt3_2').textContent="«ком в горле»";
    document.getElementById('opt3_3').textContent="Образование";
    document.getElementById('opt3_4').textContent="Другое";

    document.getElementById('opt4').textContent="Боль";
    document.getElementById('opt4_1').textContent="Кашель";
    document.getElementById('opt4_2').textContent="Трудно дышать";
    document.getElementById('opt4_3').textContent="Травма";
    document.getElementById('opt4_4').textContent="Температура";
    document.getElementById('opt4_5').textContent="Одышка";
    document.getElementById('opt4_6').textContent="Образование";
    document.getElementById('opt4_7').textContent="Другое";

    document.getElementById('opt5').textContent="Боль";
    document.getElementById('opt5_1').textContent="Травма";
    document.getElementById('opt5_2').textContent="Образование";
    document.getElementById('opt5_3').textContent="Камни в почках";
    document.getElementById('opt5_4').textContent="Камни в желчном";
    document.getElementById('opt5_5').textContent="Другое";

    document.getElementById('opt6').textContent="Боль";
    document.getElementById('opt6_1').textContent="Образование";
    document.getElementById('opt6_2').textContent="Воспаление";
    document.getElementById('opt6_3').textContent="Другое";

    document.getElementById('opt7').textContent="Боль";
    document.getElementById('opt7_1').textContent="Травма";
    document.getElementById('opt7_2').textContent="Грыжа, протрузия";
    document.getElementById('opt7_3').textContent="Другое";

    document.getElementById('opt8').textContent="Боль";
    document.getElementById('opt8_1').textContent="Травма";
    document.getElementById('opt8_2').textContent="Другое";
    //
    document.getElementById('AcceptText2').textContent="Обязательное соглашение";
    document.getElementById('OznakText1').textContent="Я, ознакомлен(а) с намеченным планом моего (или моего ребенка) обследования и лечения. Мне разъяснены цель и необходимость проведения\n" +
        "                    рентгеновской компьютерной томографии, возможные последствия и осложнения в результате этого исследования. Я проинформирован(а) о принципах\n" +
        "                    данного исследования и о том, что оно сопровождается определенным рентгеновским облучением. Я информирован(а) о наличии альтернативных\n" +
        "                    нерадиационных методов диагностики, преимуществах и недостатках данного вида исследования. Я информирован(а) о возможной необходимости\n" +
        "                    проведения дополнительного исследования с внутривенным введением йодсодержащего рентгенконтрастного вещества и даю свое согласие на\n" +
        "                    его введение. Я проинформирован(а) о возможных осложнениях при введении контрастного вещества (инъекция любого препарата таит в себе\n" +
        "                    определенный риск, связанный с повреждением нерва, артерии или вены, с возникновением инфекционных осложнений или побочной реакции\n" +
        "                    на введение контрастного препарата, которые редки, чаще всего проявляются в виде тошноты, рвоты, высыпаний на коже, жара; крайне редко\n" +
        "                    могут возникнуть более серьезные реакции на контрастный препарат, степень их выраженности различна, особенно опасен анафилактических\n" +
        "                    шок и индивидуальная непереносимость конкретного рентгенконтрастного вещества, летальный исход на введение контрастного вещества по\n" +
        "                    данным мировой практики составляет 1: 175000). Я осознаю наличие анестезиологического риска во время проведения компьютерной томографии,\n" +
        "                    согласен(на) на то, что ход анестезиологического пособия может быть изменен врачами по их усмотрению. Я целиком и полностью доверяю\n" +
        "                    врачам в тактике лечения возможных осложнений, связанных с проведением компьютерной томографии, введением контрастного препарата и\n" +
        "                    оказанием анестезиологического пособия.";
    //
    document.getElementById('AcceptText3').textContent="Обязательное соглашение";
    document.getElementById('warning1').textContent="Перед началом исследования я сообщаю о себе (своем ребенке) следующую информацию: \n Наличие или отсутствие у Вас (вашего ребенка):";
    //
    document.getElementById('PregnancyTextLn').textContent="Беременность";
    document.getElementById('iodineTextLn').textContent="Непереносимости препаратов йода";
    document.getElementById('AllergyTextLn').textContent="Аллергических реакций";
    document.getElementById('PathologyTextLn').textContent="Патологии почек";
    document.getElementById('glandsTextLn').textContent="Заболевания щитовидной железы";
    document.getElementById('diabetesTextLn').textContent="Сахарного диабета";
    document.getElementById('contrastingTextLn').textContent="Обследовались ли Вы ранее с использованием контрастных препаратов";
    //
    document.getElementById('AcceptText4').textContent="Обязательное соглашение";
    document.getElementById('Text4').textContent="Я подтверждаю, что сообщил(а) достоверную информацию, связанную со здоровьем, физическим и психическим состоянием моего ребенка,\n" +
        "                    а также перенесенными ранее заболеваниями и аллергическими реакциями. Я подтверждаю своей подписью, что прочитал(а) вышеизложенную\n" +
        "                    информацию, информация и используемая медицинская терминология мне понятны, и я осознанно даю добровольное согласие на проведение рентгеновской компьютерной\n" +
        "                    томографии и анестезиологическое пособие.";
    //
    document.getElementById('AcceptText5').textContent="Ознакомление с конрастом";
    document.getElementById('Text5').textContent="Вам назначено исследование, которое требует внутривенного введения специального медицинского препарата,\n" +
        "                    называемого контрастным веществом. Как Вы, наверное, знаете, лучевые методы исследования позволяют получить\n" +
        "                    изображения Ваших внутренних органов и тканей. Контрастное вещество усиливает изображение и помогает врачам\n" +
        "                    выявить различные заболевания. Отказ от применения контрастного вещества может привести к ошибкам в постановке\n" +
        "                    диагноза. Контрастные вещества считаются достаточно безопасными. Однако, при инъекции может быть тошнота, рвота,\n" +
        "                    чихание, сыпь на коже (достоверных методов выявления аллергических и аллергоподобных реакций на контрастирующие\n" +
        "                    препараты МРТ и КТ на сегодняшний день не существует).\n" +
        "                    У некоторых пациентов риск появления подобных осложнений значительно выше. К ним относятся:\n" +
        "                    1.Люди, которые ранее имели подобные осложнения от введения контрастного вещества;\n" +
        "                    2.Люди с аллергическими заболеваниями и, особенно, астмой; \n" +
        "                    3.Пациенты с тяжелыми заболеваниями сердца; \n" +
        "                    4.Пациенты с миеломной болезнью, заболеваниями крови, полицитемией и феохромоцитомой; \n" +
        "                    5.Пациенты с заболеваниями почек.\n" +
        "                    Если Вы считаете, что относитесь к вышеуказанной группе пациентов, обязательно дайте знать об этом врачу!";

    document.getElementById('AcceptText6').textContent="Обязательное соглашение";
    document.getElementById('AcceptCT').textContent="Прошу вас провести исследование КТ.";
    document.getElementById('AcceptContestText').textContent="Я согласен (сна) на введение контрастного вещества";
    document.getElementById('SignText').textContent="Подпись:";
    document.getElementById('rep2').value = "Очистить";
    document.getElementById('rep1').value = "Сохранить";
    
}
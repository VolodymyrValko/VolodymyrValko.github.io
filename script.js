document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
    });

    const translations = {
        "ua": {
            "pageTitle": "Ukrainian Hacker School - Дитяча школа робототехніки",
            "metaDescription": "Ukrainian Hacker School: Створюємо майбутніх інженерів вже сьогодні! Захопливі курси з робототехніки та програмування для дітей від 6 до 16 років.",

            "navAbout": "Про нас",
            "navCourses": "Курси",
            "navGallery": "Галерея",
            "navReviews": "Відгуки",
            "navContact": "Контакти",
            "btnTrialLesson": "Записатись на пробний урок",

            "heroTitle": "Ukrainian Hacker School: Створюємо майбутніх інженерів вже сьогодні!",
            "heroSubtitle": "Запрошуємо дітей віком від 6 до 16 років на захопливі курси з робототехніки та програмування.",
            "btnLearnMore": "Дізнатись більше",

            "aboutTitle": "Чому обирають Ukrainian Hacker School?",
            "aboutMission": "Наша місія та цінності",
            "aboutText": "Ми в Ukrainian Hacker School віримо, що кожна дитина має потенціал стати винахідником. Наша місія — надати дітям знання та навички в галузі STEM (наука, технології, інженерія, математика) через гру та творчість. Ми розвиваємо логічне мислення, креативність та вміння працювати в команді.",
            "aboutPoint1": "Досвідчені та енергійні викладачі-практики.",
            "aboutPoint2": "Унікальна методика навчання \"від простого до складного\".",
            "aboutPoint3": "Сучасне обладнання та навчальні класи.",
            "aboutPoint4": "Дружня та надихаюча атмосфера.",

            "coursesTitle": "Програми навчання",

            "course1Title": "Основи робототехніки Lego WeDo",
            "course1Age": "Вік: 6-8 років",
            "course1Desc": "Діти збирають та програмують перших роботів, вивчаючи основи механіки та логіки у ігровій формі.",
            "course1Details": "Розклад: СБ 10:00-11:30 | Вартість: 40 EUR/Monat.",
            
            "course2Title": "Робототехніка Lego Mindstorms",
            "course2Age": "Вік: 9-12 років",
            "course2Desc": "Створення складніших роботів, знайомство з датчиками, моторами та візуальним програмуванням.",
            "course2Details": "Розклад: СБ 12:00-14:00 | Вартість: 50 EUR/Monat.",

            "course3Title": "Програмування на Python",
            "course3Age": "Вік: 12-16 років",
            "course3Desc": "Вивчення популярної мови програмування Python для створення ігор та автоматизації завдань.",
            "course3Details": "Розклад: НД 15:00-17:00 | Вартість: 60 EUR/Monat.",

            "galleryTitle": "Як проходять наші заняття",

            "reviewsTitle": "Що кажуть батьки та учні",

            "reviews11Title": "Син просто в захваті! Раніше не відривався від ігор, а тепер просить купити набори Lego, щоб збирати щось нове вдома. Дякую Ukrainian Hacker School!",
            "reviews12Title": "Анна К.",
            "reviews13Title": "Мама учня",

            "reviews21Title": "Найкраща інвестиція в розвиток дитини. Бачу, як у доньки розвивається логіка та вміння вирішувати складні завдання. Викладачі - справжні професіонали.",
            "reviews22Title": "Іван П.",
            "reviews23Title": "Батько учениці",

            "reviews31Title": "Тут дуже круто! Ми збирали робота, який може їздити по чорній лінії. Це було складно, але дуже цікаво. Я знайшов тут нових друзів.",
            "reviews32Title": "Олег",
            "reviews33Title": "Учень, 11 років",

            "faqTitle": "Відповіді на запитання",

            "faq1Title": "Що потрібно для першого заняття?",
            "faq2Title": "Для першого пробного заняття нічого спеціального не потрібно! Лише гарний настрій та бажання творити. Всіма необхідними матеріалами, ноутбуками та наборами робототехніки ми забезпечуємо.",

            "faq3Title": "Моя дитина ніколи не займалася програмуванням. Їй підійдуть ваші курси?",
            "faq4Title": "Так, звісно! Наші курси розраховані на дітей з різним рівнем підготовки, включаючи абсолютних новачків. Ми починаємо з азів і поступово ускладнюємо завдання, щоб кожній дитині було комфортно та цікаво.",

            "faq5Title": "Чи можна повернути кошти, якщо дитині не сподобається?",
            "faq6Title": "Ми пропонуємо пробне заняття, щоб ви могли зрозуміти, чи підходить дитині наш формат. Якщо після оплати абонементу ви вирішите припинити заняття, ми зможемо повернути кошти за невикористані уроки згідно з умовами нашого договору.",

            "contactTitle": "Запишіться до нас!",
            "formChildName": "Ім'я дитини",
            "formChildAge": "Вік дитини",
            "formParentName": "Ім'я одного з батьків",
            "formPhone": "Телефон",
            "formEmail": "E-mail",
            "formSubmitBtn": "Надіслати заявку",
            "addressLabel": "Адреса:",
            "phoneLabel": "Телефон:",
            "emailLabel": "E-Mail:",

            "footerRights": "Всі права захищено."
        },
        "de": {

            "pageTitle": "Ukrainian Hacker School - Robotikschule für Kinder",
            "metaDescription": "Ukrainian Hacker School: Wir schaffen die Ingenieure von morgen, schon heute! Spannende Kurse in Robotik und Programmierung für Kinder von 6 bis 16 Jahren.",

            "navAbout": "Über uns",
            "navCourses": "Kurse",
            "navGallery": "Galerie",
            "navReviews": "Bewertungen",
            "navContact": "Kontakt",
            "btnTrialLesson": "Für eine Probestunde anmelden",

            "heroTitle": "Ukrainian Hacker School: Wir schaffen die Ingenieure von morgen, schon heute!",
            "heroSubtitle": "Wir laden Kinder von 6 bis 16 Jahren zu spannenden Kursen in Robotik und Programmierung ein.",
            "btnLearnMore": "Mehr erfahren",

            "aboutTitle": "Warum Ukrainian Hacker School wählen?",
            "aboutMission": "Unsere Mission und Werte",
            "aboutText": "Wir bei Ukrainian Hacker School glauben, dass jedes Kind das Potenzial hat, ein Erfinder zu werden. Unsere Mission ist es, Kindern Wissen und Fähigkeiten im MINT-Bereich (Mathematik, Informatik, Naturwissenschaft, Technik) durch Spiel und Kreativität zu vermitteln. Wir fördern logisches Denken, Kreativität und Teamfähigkeit.",
            "aboutPoint1": "Erfahrene und tatkräftige Lehrkräfte aus der Praxis.",
            "aboutPoint2": "Einzigartige Lehrmethode \"vom Einfachen zum Komplexen\".",
            "aboutPoint3": "Moderne Ausstattung und Unterrichtsräume.",
            "aboutPoint4": "Freundliche und inspirierende Atmosphäre.",

            "coursesTitle": "Lernprogramme",

            "course1Title": "Grundlagen der Robotik mit Lego WeDo",
            "course1Age": "Alter: 6-8 Jahre",
            "course1Desc": "Kinder bauen und programmieren ihre ersten Roboter und lernen spielerisch die Grundlagen der Mechanik und Logik.",
            "course1Details": "Zeitplan: Sa 10:00-11:30 | Preis: 40 EUR/Monat.",

            "course2Title": "Lego Mindstorms Robotik",
            "course2Age": "Alter: 9-12 Jahre",
            "course2Desc": "Erstellung komplexerer Roboter, Kennenlernen von Sensoren, Motoren und visueller Programmierung.",
            "course2Details": "Zeitplan: Sa 12:00-14:00 | Preis: 50 EUR/Monat.",

            "course3Title": "Programmieren mit Python",
            "course3Age": "Alter: 12-16 Jahre",
            "course3Desc": "Erlernen der beliebten Programmiersprache Python zum Erstellen von Spielen und zur Automatisierung von Aufgaben.",
            "course3Details": "Zeitplan: So 15:00-17:00 | Preis: 60 EUR/Monat.",

            "galleryTitle": "Wie unsere Kurse ablaufen",

            "reviewsTitle": "Was Eltern und Schüler sagen",

            "reviews11Title": "Mein Sohn ist total begeistert! Früher konnte er sich kaum von seinen Spielen losreißen, jetzt bittet er mich, ihm Lego-Sets zu kaufen, damit er zu Hause etwas Neues bauen kann. Vielen Dank, Ukrainian Hacker School!",
            "reviews12Title": "Anna K.",
            "reviews13Title": "Die Mutter des Schülers",

            "reviews21Title": "Die beste Investition in die Entwicklung eines Kindes. Ich sehe, wie sich die Logik und die Fähigkeit meiner Tochter, komplexe Aufgaben zu lösen, entwickeln. Die Lehrer sind echte Profis.",
            "reviews22Title": "Ivan P.",
            "reviews23Title": "Der Vater der Schülerin",

            "reviews31Title": "Es ist sehr interessant hier! Wir haben einen Roboter gebaut, der einer schwarzen Linie folgen kann. Es war schwierig, aber sehr interessant. Ich habe hier neue Freunde gefunden.",
            "reviews32Title": "Oleg",
            "reviews33Title": "Schüler, 11 Jahre alt",

            "faqTitle": "Antworten auf Fragen",

            "faq1Title": "Was wird für die erste Unterrichtsstunde benötigt?",
            "faq2Title": "Für die erste Probestunde brauchen Sie nichts Besonderes! Nur gute Laune und Lust zum Gestalten. Alle notwendigen Materialien, Laptops und Robotik-Sets werden von uns bereitgestellt.",

            "faq3Title": "Mein Kind hat noch nie programmiert. Sind Ihre Kurse für es geeignet?",
            "faq4Title": "Ja, natürlich! Unsere Kurse sind für Kinder mit unterschiedlichen Vorkenntnissen konzipiert, einschließlich absoluter Anfänger. Wir beginnen mit den Grundlagen und steigern den Schwierigkeitsgrad schrittweise, damit jedes Kind sich wohlfühlt und Spaß daran hat.",

            "faq5Title": "Kann man das Geld zurückbekommen, wenn es dem Kind nicht gefällt?",
            "faq6Title": "Wir bieten eine Probestunde an, damit Sie sehen können, ob unser Format für Ihr Kind geeignet ist. Wenn Sie nach der Bezahlung des Abonnements beschließen, den Unterricht abzubrechen, können wir Ihnen die Kosten für die nicht in Anspruch genommenen Stunden gemäß den Bedingungen unseres Vertrags zurückerstatten.",

            "contactTitle": "Melden Sie sich bei uns an!",
            "formChildName": "Name des Kindes",
            "formChildAge": "Alter des Kindes",
            "formParentName": "Name eines Elternteils",
            "formPhone": "Telefon",
            "formEmail": "E-Mail",
            "formSubmitBtn": "Anfrage senden",
            "addressLabel": "Adresse:",
            "phoneLabel": "Telefon:",
            "emailLabel": "E-Mail:",

            "footerRights": "Alle Rechte vorbehalten."
        }
    };
    
    const langButtons = {
        ua: document.getElementById('lang-ua'),
        de: document.getElementById('lang-de')
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE' || element.tagName === 'META') {
                    element.content = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        document.documentElement.lang = lang;

        localStorage.setItem('language', lang);

        langButtons.ua.classList.toggle('active', lang === 'ua');
        langButtons.de.classList.toggle('active', lang === 'de');
    };

    langButtons.ua.addEventListener('click', () => setLanguage('ua'));
    langButtons.de.addEventListener('click', () => setLanguage('de'));

    const savedLang = localStorage.getItem('language') || 'ua';
    setLanguage(savedLang);

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    const modalImage = document.getElementById('modalImage');
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); 
            const imageSrc = item.getAttribute('href');
            modalImage.setAttribute('src', imageSrc);
            galleryModal.show();
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Дякуємо за вашу заявку! Ми зв\'яжемося з вами найближчим часом.');
            contactForm.reset();
        });
    }

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navCollapse = document.querySelector('.navbar-collapse.collapse');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });
});

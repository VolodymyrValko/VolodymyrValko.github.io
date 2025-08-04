document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
    });

    const translations = {
        "ua": {
            "pageTitle": "IT Kinderschule - Дитяча школа робототехніки",
            "metaDescription": "IT Kinderschule: Створюємо майбутніх інженерів вже сьогодні! Захопливі курси з робототехніки та програмування для дітей від 6 до 16 років.",

            "navAbout": "Про нас",
            "navCourses": "Курси",
            "navGallery": "Галерея",
            "navReviews": "Відгуки",
            "navContact": "Контакти",
            "btnTrialLesson": "Надіслати заявку",

            "heroTitle": "IT Kinderschule: Програмуємо майбутнє!",
            "heroSubtitle": "Запрошуємо дітей віком від 7 до 18 років на захопливі курси з робототехніки та програмування.",
            "btnLearnMore": "Дізнатись більше",

            "aboutTitle": "Чому обирають IT Kinderschule?",
            "aboutMission": "Наша місія та цінності",
            "aboutText": "Ми в IT Kinderschule віримо, що кожна дитина має потенціал стати винахідником. Наша місія — надати дітям знання та навички в галузі STEM (наука, технології, інженерія, математика) через гру та творчість. Ми розвиваємо логічне мислення, креативність та вміння працювати в команді.",
            "aboutPoint1": "Досвідчені та енергійні викладачі-практики.",
            "aboutPoint2": "Унікальна методика навчання \"від простого до складного\".",
            "aboutPoint3": "Сучасне обладнання та навчальні класи.",
            "aboutPoint4": "Дружня та надихаюча атмосфера.",

            "coursesTitle": "Програми навчання",

            "course1Title": "BBC micro:bit",
            "course1Age": "Вік: 10-14 років",
            "course1Desc": "Діти створюють справжні розумні пристрої, використовуючи плату BBC micro:bit — сучасний інструмент для навчання робототехніки та програмування.",
            "course1Details": "Розклад: СБ 16:30-19:00",
            
            "course2Title": "Arduino",
            "course2Age": "Вік: 12-18 років",
            "course2Desc": "Вивчення програмування і створення роботів на базі мікроконтроллера Arduino – ці заняття розраховані на дітей, які цікавляться електронікою, електричними схемами та програмуванням.",
            "course2Details": "Розклад: СБ 16:30-19:00",

            "course3Title": "Штучний інтелект",
            "course3Age": "Вік: 12-18 років",
            "course3Desc": "На цих заняттях ми будемо створювати чи використовувати вже створені роботизовані пристрої, які працюють на базі штучного інтелекту (АІ).",
            "course3Details": "Розклад: СБ 16:30-19:00",

            "course4Title": "Scratch",
            "course4Age": "Вік: 7-12 років",
            "course4Desc": "На цих заняттях діти розвивають логіку, креативність і вміння працювати в команді.",
            "course4Details": "Розклад: СБ 16:30-19:00",

            "course5Title": "HTML+CSS+JS",
            "course5Age": "Вік: 12-18 років",
            "course5Desc": "Навички веброзробки — це не лише цікаве хобі, а й основа для майбутньої професії у сфері ІТ.",
            "course5Details": "Розклад: СБ 16:30-19:00",

            "galleryTitle": "Як проходять наші заняття",

            "reviewsTitle": "Що кажуть батьки та учні",

            "reviews11Title": "Син просто в захваті! Раніше не відривався від ігор, а тепер просить купити micro:bit, щоб збирати щось нове вдома. Дякую IT Kinderschule!",
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

            "faq5Title": "Як мені отримувати новини?",
            "faq6Title": "Ви можете залишити контакт і підписатись на розсилку нижче у наданій формі. Ми надішлемо вам потрібну інформацію на пошту яку ви вкажете.",

            "contactTitle": "Запишіться до нас!",
            "formChildName": "Ім'я дитини",
            "formChildAge": "Вік дитини",
            "formParentName": "Ім'я одного з батьків",
            "formPhone": "Номер телефону",
            "formEmail": "E-mail",
            "formSubmitBtn": "Надіслати заявку",
            "addressLabel": "Адреса:",
            "phoneLabel": "Запис на заняття:",
            "emailLabel": "E-Mail:",

            "footerRights": "Всі права захищено."
        },
        "de": {

            "pageTitle": "IT Kinderschule - Robotikschule für Kinder",
            "metaDescription": "IT Kinderschule: Wir schaffen die Ingenieure von morgen, schon heute! Spannende Kurse in Robotik und Programmierung für Kinder von 6 bis 16 Jahren.",

            "navAbout": "Über uns",
            "navCourses": "Kurse",
            "navGallery": "Galerie",
            "navReviews": "Bewertungen",
            "navContact": "Kontakt",
            "btnTrialLesson": "Bewerbung senden",

            "heroTitle": "IT Kinderschule:Code for future!",
            "heroSubtitle": "Wir laden Kinder von 7 bis 18 Jahren zu spannenden Kursen in Robotik und Programmierung ein.",
            "btnLearnMore": "Mehr erfahren",

            "aboutTitle": "Warum IT Kinderschule wählen?",
            "aboutMission": "Unsere Mission und Werte",
            "aboutText": "Wir bei IT Kinderschule glauben, dass jedes Kind das Potenzial hat, ein Erfinder zu werden. Unsere Mission ist es, Kindern Wissen und Fähigkeiten im MINT-Bereich (Mathematik, Informatik, Naturwissenschaft, Technik) durch Spiel und Kreativität zu vermitteln. Wir fördern logisches Denken, Kreativität und Teamfähigkeit.",
            "aboutPoint1": "Erfahrene und tatkräftige Lehrkräfte aus der Praxis.",
            "aboutPoint2": "Einzigartige Lehrmethode \"vom Einfachen zum Komplexen\".",
            "aboutPoint3": "Moderne Ausstattung und Unterrichtsräume.",
            "aboutPoint4": "Freundliche und inspirierende Atmosphäre.",

            "coursesTitle": "Lernprogramme",

            "course1Title": "BBC micro:bit",
            "course1Age": "Alter: 10-14 Jahre",
            "course1Desc": "Kinder entwickeln echte intelligente Geräte mit Hilfe der BBC micro:bit-Platine – einem modernen Werkzeug zum Erlernen von Robotik und Programmierung.",
            "course1Details": "Zeitplan: Sa 16:30-19:00",
            
            "course2Title": "Arduino",
            "course2Age": "Alter: 12-18 Jahre",
            "course2Desc": "Lernen von Programmierung und Bau von Robotern auf Basis des Mikrocontrollers Arduino – diese Kurse richten sich an Kinder, die sich für Elektronik, elektrische Schaltungen und Programmierung interessieren.",
            "course2Details": "Zeitplan: Sa 16:30-19:00",

            "course3Title": "Штучний інтелект",
            "course3Age": "Alter: 12-18 Jahre",
            "course3Desc": "In diesen Kursen werden wir robotergesteuerte Geräte entwickeln oder bereits vorhandene nutzen, die auf künstlicher Intelligenz (KI) basieren.",
            "course3Details": "Zeitplan: Sa 16:30-19:00",

            "course4Title": "Scratch",
            "course4Age": "Alter: 7-12 Jahre",
            "course4Desc": "In diesen Kursen entwickeln Kinder ihre Logik, Kreativität und Teamfähigkeit.",
            "course4Details": "Zeitplan: Sa 16:30-19:00",

            "course5Title": "HTML+CSS+JS",
            "course5Age": "Alter: 12-18 Jahre",
            "course5Desc": "Webentwicklungsfähigkeiten sind nicht nur ein interessantes Hobby, sondern auch die Grundlage für einen zukünftigen Beruf im IT-Bereich.",
            "course5Details": "Zeitplan: Sa 16:30-19:00",

            "galleryTitle": "Wie unsere Kurse ablaufen",

            "reviewsTitle": "Was Eltern und Schüler sagen",

            "reviews11Title": "Mein Sohn ist total begeistert! Früher konnte er sich kaum von seinen Spielen losreißen, jetzt bittet er mich, ihm micro:bit zu kaufen, damit er zu Hause etwas Neues bauen kann. Vielen Dank, IT Kinderschule!",
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

            "faq5Title": "Wie erhalte ich Neuigkeiten?",
            "faq6Title": "Sie können Ihre Kontaktdaten hinterlassen und sich unten im Formular für den Newsletter anmelden. Wir senden Ihnen die gewünschten Informationen an die von Ihnen angegebene E-Mail-Adresse.",

            "contactTitle": "Melden Sie sich bei uns an!",
            "formChildName": "Name des Kindes",
            "formChildAge": "Alter des Kindes",
            "formParentName": "Name eines Elternteils",
            "formPhone": "Telefonnummer",
            "formEmail": "E-Mail",
            "formSubmitBtn": "Anfrage senden",
            "addressLabel": "Adresse:",
            "phoneLabel": "Anmeldung zum Unterricht:",
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

            const formData = new FormData(contactForm);

            fetch('submit_application.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    contactForm.reset();
                } else {
                    alert('Помилка: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Помилка:', error);
                alert('Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
            });
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

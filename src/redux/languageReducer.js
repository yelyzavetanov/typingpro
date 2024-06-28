const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

let initialState = {
    currentLanguage: localStorage.getItem("language")
        ? localStorage.getItem("language")
        : localStorage.setItem("language", "English"),

    languages: ["English", "Ukrainian"],
    textElements: {
        header: {
            home: {
                "English": "Home",
                "Ukrainian": "Головна",
            },
            settings: {
                "English": "Settings",
                "Ukrainian": "Налаштування",
            },
            language: {
                "English": "Language: ",
                "Ukrainian": "Мова: ",
            },
            layout: {
                "English": "Layout: ",
                "Ukrainian": "Розкладка: ",
            },
            levels: {
              "English": "Levels",
              "Ukrainian": "Рівні"
            },
            menu: {
              "English": "Menu",
              "Ukrainian": "Меню"
            },
        },
        homePage: {
            mainBanner: {
                header: {
                    "English": "TOUCH TYPING",
                    "Ukrainian": "Сліпий друк",
                },
                information: {
                    "English": "Touch typing is all about the idea that each finger has its own area on " +
                        "the keyboard. Thanks to that fact you can type without looking at the keys. " +
                        "Practice regularly and your fingers will learn their location on the keyboard " +
                        "through muscle memory.",
                    "Ukrainian": "Сліпи́й метод набору або ж десятипальцевий метод друку — набір тексту " +
                        "«наосліп», тобто не дивлячись на клавіші друкарської машинки або ж клавіші " +
                        "комп'ютерної клавіатури. При цьому використовуються усі десять пальців рук.",
                },
                learnMore: {
                    "English": "Learn more",
                    "Ukrainian": "Дізнатись більше",
                },
                startNow: {
                    "English": "Start typing now",
                    "Ukrainian": "Почати друкувати зараз",
                },
            },
            layoutsMenu: {
                altText: {
                    "English": "select your layout",
                    "Ukrainian": "оберіть свою розкладку",
                },

                selectKeyboardLayoutText: {
                    "English": "Please, select your keyboard layout to start typing:",
                    "Ukrainian": "Оберіть розкладку клавіатури, щоб почати друкувати:",
                },
            },
            articles: {
                article1Header: {
                    "English": "How to learn it",
                    "Ukrainian": "Як цьому навчитися",
                },
                article2Header: {
                    "English": "Benefits of touch typing",
                    "Ukrainian": "Переваги сенсорного введення",
                },
                article1Fragments: [
                    {
                        header: {
                            "English": "Learn how to touch type",
                            "Ukrainian": "Навчіться друкувати наосліп",
                        },
                        text: {
                            "English": ["Touch typing is all about the idea that each finger has its own area on " +
                            "the keyboard. Thanks to that fact you can type without looking at the keys. " +
                            "Practice regularly and your fingers will learn their location on the keyboard " +
                            "through muscle memory."],
                            "Ukrainian": ["Сліпий метод набору заснован на ідеї, що у кожного пальця є своя область " +
                            "на клавіатурі. Завдяки цьому ви можете друкувати, не Дивлячись на клавіші. " +
                            "Регулярно практикуйтеся, і ваші пальці запам'ятають своє положення на клавіатурі " +
                            "завдяки м'язовій пам'яті."],
                        }
                    },
                    {
                        header: {
                            "English": "Sitting posture for typing",
                            "Ukrainian": "Правильна поза для набору тексту",
                        },
                        points: {
                            "English": [
                                "Sit straight and remember to keep your back straight.",
                                "Keep your elbows bent at the right angle.",
                                "Face the screen with your head slightly tilted forward.",
                                "Keep at least 45 - 70 cm of distance between your eyes and the screen.",
                                "Еxpose the shoulder, arm, and wrist muscles to the least possible strain. " +
                                "The wrists can touch the tabletop in front of the keyboard. Never shift your " +
                                "body weight to the wrists by resting on them.",
                            ],
                            "Ukrainian": [
                                "Сядьте прямо і не забувайте тримати спину прямо.",
                                "Зігніть лікті під прямим кутом.",
                                "Поверніть обличчя до екрана, трохи нахиливши голову вперед.",
                                "Відстань між очима та екраном має бути не менше 45-70 см.",
                                "Піддавайте м'язи плеча, руки та зап'ястя найменшій можливій " +
                                "напрузі. Зап'ясті можуть доторкатися поверхні столу перед " +
                                "клавіатурою. Ніколи не переносіть вагу тіла на зап'ястя, спираючись на них.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Home row position",
                            "Ukrainian": "Вихідна позиція",
                        },
                        text: {
                            "English": ["Curve your fingers a little and put them on the ASDF and JKL; " +
                            "keys which are located in the middle row of the letter keys. This row is " +
                            "called HOME ROW because you always start from these keys and always return to them. ",
                                "F and J keys under your index fingers should have a raised line on them to aide " +
                                "in finding these keys without looking."],
                            "Ukrainian": ["Трохи зігніть пальці та покладіть їх на ФІВА та ОЛДЖ - клавіші, розташовані " +
                            "в середньому ряду літерних клавіш. Цей ряд називається ВИХІДНИМ РЯДОМ, тому що ви " +
                            "завжди починаєте з цих клавіш і завжди до них повертаєтеся. ",
                                "На клавішах А і О під вашими вказівними пальцями повинна бути опукла лінія, " +
                                "потрібна для того, щоб їх було легко знайти, не дивлячись."],
                        },
                        isImg1: true,
                    },
                    {
                        header: {
                            "English": "Keyboard scheme",
                            "Ukrainian": "Схема клавіатури",
                        },
                        text: {
                            "English": ["The color-coded keyboard under lesson input field will " +
                            "help you to understand which finger should press each key."],
                            "Ukrainian": ["Клавіатура з колірним кодуванням під полем введення допоможе зрозуміти, " +
                            "який палець повинен натискати кожну клавішу."],
                        },
                        points: {
                            "English": [
                                "Hit keys only with the fingers for which they have been reserved.",
                                "Always return to the starting position of the fingers \"ASDF – JKL;\".",
                                "When typing, imagine the location of the symbol on the keyboard.",
                                "Establish and maintain a rhythm while typing. Your keystrokes should come " +
                                "at equal intervals.",
                                "The SHIFT key is always pressed by the pinky finger opposite to the one" +
                                " hitting the other key.",
                                "Use the thumb of whichever hand is more convenient for you to press the Space bar.",
                            ],
                            "Ukrainian": [
                                "Натискайте клавіші лише тими пальцями, для яких вони призначені.",
                                "Завжди повертайтеся у вихідне положення пальців ФІВА - ОЛДЖ (\"ASDF - JKL;\").",
                                "Уявляйте розположення символів на клавиатурі, коли друкуєте.",
                                "Встановіть та підтримуйте ритм під час набору тексту. Ваші " +
                                "натискання клавіш повинні відбуватися через рівні проміжки часу.",
                                "Клавіша SHIFT завжди натискається мізинцем руки, протилежної " +
                                "до тієї, яка натискає на іншу клавішу.",
                                "Великим пальцем тієї руки, якою вам зручніше, натискайте на пробіл.",
                            ],
                        },
                        text2: {
                            "English": ["This method may seem inconvenient at first, but do not stop, " +
                            "eventually, you'll find out that you are typing quickly, easily, and " +
                            "conveniently. To achieve the maximum result, choose a touch typing course" +
                            " for your keyboard layout and in the desired language."],
                            "Ukrainian": ["Цей спосіб спочатку може здатися незручним, але не зупиняйтеся, " +
                            "з часом ви виявите, що друкуєте швидко, легко та зручно. Для досягнення " +
                            "максимального результату оберіть курс сліпого друку для вашої розкладки " +
                            "клавіатури потрібною мовою."],
                        },
                        isImg2: true,
                    },
                    {
                        header: {
                            "English": "Fingers motion",
                            "Ukrainian": "Рух пальців",
                        },
                        text: {
                            "English": ["Don't look at the keys when you type. Just slide your fingers around until" +
                            " they find the home row marking. ",
                                "Limit your hand and finger movement only " +
                                "to what is necessary to press a specific key. Keep your hands and " +
                                "fingers close to the base position. This improves typing speed " +
                                "and reduces stress on the hands. ",
                                "Pay attention to ring fingers and" +
                                " little fingers, since they are considerably underdeveloped."],
                            "Ukrainian": ["Не дивіться на клавіші, коли друкуєте. Просто рухайте пальцями, " +
                            "доки вони не знайдуть позначку домашнього ряду. ",
                                "Обмежте рухи рук і пальців " +
                                "лише тим, що потрібно для натискання певної клавіші. Тримайте руки та " +
                                "пальці близько до вихідного положення. Це підвищує швидкість набору " +
                                "тексту та знижує навантаження на руки. ",
                                "Зверніть увагу на безіменні " +
                                "пальці та мізинці, оскільки вони значно недорозвинені."],
                        }
                    },
                    {
                        header: {
                            "English": "Typing speed",
                            "Ukrainian": "Швидкість друку",
                        },
                        points: {
                            "English": [
                                "Do not rush when you just started learning. Speed up only when your fingers " +
                                "hit the right keys out of habit.",
                                "Take your time when typing to avoid mistakes. The speed will pick up as you progress.",
                                "Always scan the text a word or two in advance.",
                                "Pass all typing lessons. It will help you to get above the average typing speed.",
                            ],
                            "Ukrainian": [
                                "Не поспішайте, якщо ви почали вчитися. Прискорюйтесь лише тоді, " +
                                "коли ваші пальці за звичкою натискають на потрібні клавіші.",
                                "Не поспішайте при наборі тексту, щоб уникнути помилок. Швидкість" +
                                " зростатиме в міру вашого просування.",
                                "Завжди скануйте текст на слово або два заздалегідь.",
                                "Пройдіть усі уроки друку. Це допоможе перевищити середню швидкість набору тексту.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Take care of yourself",
                            "Ukrainian": "Бережіть себе",
                        },
                        text: {
                            "English": ["Take a break if you feel that you get distracted easily and are " +
                            "making a lot of mistakes. It is more productive to come back when you feel refreshed."],
                            "Ukrainian": ["Зробіть перерву, якщо відчуваєте, що легко відволікаєтесь і " +
                            "робите багато помилок. Поверніться, коли ви відчуєте себе відпочившим."],
                        }
                    },
                ],
                article2Fragments: [
                    {
                        header: {
                            "English": "Save time",
                            "Ukrainian": "Заощаджуйте час",
                        },
                        text: {
                            "English": [
                                "Typing is something most of us will have to do a lot of in our jobs. Whether " +
                                "you work in an office or not, you will probably end up having to type " +
                                "on a computer keyboard on a weekly or even daily basis.",
                                "It stands to reason that the faster you can type, the more time you will save.",
                                "When you are tasked with typing up a report, or even when you have to " +
                                "send an email, if you can do so quickly while remaining accurate, " +
                                "you could end up saving a lot of time.",
                            ],
                            "Ukrainian": [
                                "Набір тексту – це те, що більшість із нас змушені робити на своїй роботі. " +
                                "Незалежно від того, працюєте ви в офісі чи ні, вам, ймовірно, " +
                                "доведеться вводити текст на клавіатурі комп’ютера щотижня або навіть щоденно.",
                                "Очевидно, що чим швидше ви введете текст, тим більше часу ви заощадите.",
                                "Якщо вам доручено надрукувати звіт або навіть надіслати електронний лист, " +
                                "якщо ви зможете зробити це швидко, залишаючись точним, ви можете заощадити багато часу.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Be more productive",
                            "Ukrainian": "Будьте більш продуктивними",
                        },
                        text: {
                            "English": [
                                "Everyone is looking for ways to be more productive both in the workplace " +
                                "and at home, and typing faster is a simple way to get more done.",
                                "If you learn to double the speed you type, you can essentially get " +
                                "twice as much done in the same space of time.",
                            ],
                            "Ukrainian": [
                                "Кожен шукає способи бути більш продуктивним як на робочому місці, так і " +
                                "вдома, а швидше вводити текст – це простий спосіб зробити більше.",
                                "Якщо ви подвоїте швидкість, з якої ви друкуєте, ви зможете " +
                                "зробити вдвічі більше за той самий проміжок часу.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Improve your posture",
                            "Ukrainian": "Покращуйте поставу",
                        },
                        text: {
                            "English": [
                                "Posture may not be the first thing you think about when you " +
                                "decide to increase your typing speed, but it can certainly benefit.",
                                "No matter whether you can touch type or not, you will still spend a " +
                                "lot of your time typing in almost any office-based role. Everyone knows" +
                                " that sitting down at your desk for long periods of time without a break " +
                                "is bad for your posture, so it makes sense to reduce the " +
                                "amount of time you sit down.",
                                "If a lot of your time sitting at your desk is spent typing, you " +
                                "might be able to improve your posture and your health by increasing" +
                                " your typing speed. This will mean less time spent typing at your desk.",
                                "When you learn to touch type, you will also learn about correct typing posture.",
                            ],
                            "Ukrainian": [
                                "Постава може бути не першим, про що ви думаєте, коли вирішуєте " +
                                "збільшити швидкість друку, але це, безумовно, може принести користь.",
                                "Незалежно від того, чи вмієте ви набирати текст чи ні, ви все" +
                                " одно витрачатимете багато часу на введення тексту майже в будь-якій" +
                                " офісній ролі. Усі знають, що сидіти за столом протягом тривалого" +
                                " часу без перерви шкідливо для вашої постави, тому має сенс скоротити" +
                                " кількість часу, коли ви сидите",
                                "Якщо багато часу, сидячи за столом, витрачається на введення тексту, " +
                                "можливо, ви зможете покращити поставу та здоров’я, збільшивши швидкість друку. " +
                                "Це означатиме менше часу, що витрачається на набір тексту за столом.",
                                "Коли ви навчитеся набирати текст на дотик, ви також дізнаєтеся" +
                                " про правильну позу введення тексту.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Improve your focus",
                            "Ukrainian": "Покращуйте свою зосередженість",
                        },
                        text: {
                            "English": [
                                "Another benefit of learning to type faster is that you will not have to" +
                                " look at the keyboard and think about where your fingers are going. Once " +
                                "you are typing fast, you will be able to look directly at the screen, and " +
                                "your fingers will type without you even thinking about the movements.",
                                "This means that you will be able to improve your focus. Every time you look down " +
                                "and try to find a key, you are losing concentration, so you will be " +
                                "able to focus more on what you are trying to say than the actual letters" +
                                " that you are typing.",
                            ],
                            "Ukrainian": [
                                "Ще одна перевага навчання швидкого друку полягає в тому, що вам не " +
                                "доведеться дивитися на клавіатуру і думати про те, куди йдуть ваші пальці. " +
                                "Коли ви швидко вводите текст, ви зможете дивитися прямо на екран, а ваші " +
                                "пальці будуть друкувати, навіть не замислюючись про рухи.",
                                "Це означає, що ви зможете покращити свою концентрацію. Щоразу, коли ви дивитеся вниз" +
                                " і намагаєтеся знайти ключ, ви втрачаєте концентрацію, тому зможете більше зосередитися" +
                                " на тому, що намагаєтеся сказати, ніж на фактичних літерах, які ви вводите.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Better accuracy",
                            "Ukrainian": "Краща точність",
                        },
                        text: {
                            "English": [
                                "Learning to touch type is not just about learning how to type faster: " +
                                "It's also about learning how to type with greater accuracy.",
                                "That means you will spend less time checking for mistakes in your writing " +
                                "and correcting them, saving you yet more time and making less work for you.",
                            ],
                            "Ukrainian": [
                                "Навчитися вводити дотиком – це не лише навчитися писати швидше: " +
                                "це також навчитися друкувати з більшою точністю.",
                                "Це означає, що ви витрачатимете менше часу на перевірку помилок у своєму" +
                                " написанні та їх виправлення, заощаджуючи ще більше часу та виконуючи менше роботи.",
                            ],
                        }
                    },
                    {
                        header: {
                            "English": "Find more opportunities",
                            "Ukrainian": "Знайдіть більше можливостей",
                        },
                        text: {
                            "English": [
                                "Finally, because touch-typing is such a useful skill that boosts " +
                                "productivity in the workplace, it can help you to find more and better" +
                                " opportunities when it comes to getting a job.",
                                "When applying for a job, being able to type fast" +
                                " and accurately is going to put you at a big advantage. " +
                                "Employers like to know that their employees can type properly " +
                                "because it will make them more productive and improve the accuracy of their work.",
                            ],
                            "Ukrainian": [
                                "Нарешті, оскільки введення дотиком є корисною навичкою, яка підвищує " +
                                "продуктивність на робочому місці, вона може допомогти вам знайти більші " +
                                "та кращі можливості, коли справа доходить до роботи.",
                                "Під час подачі заявки на роботу, можливість швидко й " +
                                "точно друкувати дасть вам велику перевагу. Роботодавцям " +
                                "подобається знати, що їхні працівники вміють правильно друкувати, " +
                                "оскільки це зробить їх продуктивнішими та підвищить точність їхньої роботи.",
                            ],
                        }
                    },
                ],
            },
            altText: {
                "English": "some content",
                "Ukrainian": "якийсь контент",
            },
        },
        settings: {
            altText: {
                "English": "some settings",
                "Ukrainian": "якісь налаштування",
            },
            viewSettings: {
                header: {
                    "English": "View: ",
                    "Ukrainian": "Вигляд: ",
                },
                theme: {
                    "English": "Theme: ",
                    "Ukrainian": "Тема: ",
                },
            },
        },
        layout: {
            sidebar: {
                level: {
                    "English": "Level",
                    "Ukrainian": "Рівень",
                },
                exercise: {
                    "English": "Exercise",
                    "Ukrainian": "Вправа",
                },
                typingTest: {
                    "English": "Typing test",
                    "Ukrainian": "Тест набору тексту",
                },
            },
            layoutInfo: {
                values: {
                    level: {
                        "English": "Level",
                        "Ukrainian": "Рівень",
                    },
                    exercise: {
                        "English": "Exercise",
                        "Ukrainian": "Вправа",
                    },
                    progress: {
                        "English": "Progress",
                        "Ukrainian": "Прогрес",
                    },
                    mistakes: {
                        "English": "Mistakes",
                        "Ukrainian": "Помилки",
                    },
                },
                fingers: {
                    fingersColors: {
                        "English": "Fingers colors:",
                        "Ukrainian": "Кольори пальців:",
                    },
                    pinkyFinger: {
                        "English": "Pinky finger",
                        "Ukrainian": "Мізинець",
                    },
                    ringFinger: {
                        "English": "Ring finger",
                        "Ukrainian": "Безіменний палець",
                    },
                    middleFinger: {
                        "English": "Middle finger",
                        "Ukrainian": "Середній палець",
                    },
                    leftIndexFinger: {
                        "English": "Left index finger",
                        "Ukrainian": "Лівий вказівний палець",
                    },
                    rightIndexFinger: {
                        "English": "Right index finger",
                        "Ukrainian": "Правий вказівний палець",
                    },
                    thumb: {
                        "English": "Thumb",
                        "Ukrainian": "Великий палець",
                    },
                },
            },
            finalWindow: {
                completedExercise: {
                    "English": "You have completed the exercise",
                    "Ukrainian": "Ви завершили виконання вправи",
                },
                level: {
                    "English": "Level: ",
                    "Ukrainian": "Рівень: ",
                },
                exercise: {
                    "English": "Exercise: ",
                    "Ukrainian": "Вправа: ",
                },
                time: {
                    "English": "Time: ",
                    "Ukrainian": "Час: ",
                },
                textLength: {
                    "English": "Text length: ",
                    "Ukrainian": "Довжина тексту: ",
                },
                typingSpeed: {
                    "English": "Typing speed: ",
                    "Ukrainian": "Швидкість набору тексту: ",
                },
                mistakes: {
                    "English": "Mistakes: ",
                    "Ukrainian": "Помилки: ",
                },
                symbols: {
                    "English": "symbols",
                    "Ukrainian": "символів",
                },
                symbolsPerMinute: {
                    "English": "symbols per minute",
                    "Ukrainian": "символів за хвилину",
                },
                repeat: {
                    "English": "Repeat",
                    "Ukrainian": "Повторити",
                },
                nextExercise: {
                    "English": "Next exercise",
                    "Ukrainian": "Наступна вправа",
                },
            },
            layoutDescription: {
                getStarted: {
                    "English": "Once you're able to touch type, you won't have to look at the " +
                        "keyboard to find the letters you want to type, and you'll be able to type at a " +
                        "much faster speed too! Get started right now!",
                    "Ukrainian": "Коли ви зможете друкувати дотиком, вам не доведеться дивитися на клавіатуру, " +
                        "щоб знайти літери, які ви хочете ввести, і ви також зможете друкувати значно швидше!" +
                        " Почніть прямо зараз!",
                },
            },
            keyboardAltText: {
                altText: {
                    "English": "Open this site on a device with a wider screen to see the keyboard.",
                    "Ukrainian": "Відкрийте цей сайт на пристрої з ширшим екраном, щоб побачити клавіатуру.",
                },
            },
            keyboardImages: {
                fingersPosition: {
                    "English": "Fingers position: ",
                    "Ukrainian": "Позиція пальців: ",
                },
            },
            typingTest: {
                customText: {
                    "English": "Custom text",
                    "Ukrainian": "Свій текст",
                },
                myTexts: {
                    "English": "My texts",
                    "Ukrainian": "Мої тексти",
                },
            },
            customText: {
                textTitle: {
                    "English": "Give your text a title: ",
                    "Ukrainian": "Дайте назву своєму тексту: ",
                },
                textTitlePlaceholder: {
                    "English": "Your text title",
                    "Ukrainian": "Назва вашого тексту",
                },
                yourText: {
                    "English": "Place your text here: ",
                    "Ukrainian": "Розмістіть тут свій текст: ",
                },
                yourTextPlaceholder: {
                    "English": "Your text",
                    "Ukrainian": "Ваш текст",
                },
                submit: {
                    "English": "Submit",
                    "Ukrainian": "Підтвердити",
                },
                back: {
                    "English": "Back",
                    "Ukrainian": "Повернутися",
                },
                error01: {
                    "English": "Give your text a title.",
                    "Ukrainian": "Дайте назву своєму тексту.",
                },
                error02: {
                    "English": "Your text is too short.",
                    "Ukrainian": "Ваш текст занадто короткий.",
                },
                error03: {
                    "English": "Your title contains unwanted characters: ",
                    "Ukrainian": "Ваша назва містить небажані символи: ",
                },
                error04: {
                    "English": "Your text contains unwanted characters: ",
                    "Ukrainian": "Ваш текст містить небажані символи: ",
                },
            },
            myTexts: {
                select: {
                    "English": "Select",
                    "Ukrainian": "Обрати",
                },
                delete: {
                    "English": "Delete",
                    "Ukrainian": "Видалити",
                },
                back: {
                    "English": "Back",
                    "Ukrainian": "Повернутися",
                },
                deleteText: {
                    "English": "This text will be deleted.",
                    "Ukrainian": "Цей текст буде видалено.",
                },
            },
        },
        footer: {
            siteLinks: {
                "English": "Links: ",
                "Ukrainian": "Посилання: ",
            },
            home: {
                "English": "Home",
                "Ukrainian": "Головна",
            },
            settings: {
                "English": "Settings",
                "Ukrainian": "Налаштування",
            },
            goUp: {
                "English": "Go up",
                "Ukrainian": "На початок",
            },
        },
    },
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: {
            localStorage.setItem("language", action.language);
            return {...state, currentLanguage: action.language};
        }
        default:
            return state;
    }
}

export const setNewLanguage = (language) => ({type: CHANGE_LANGUAGE, language});

export default languageReducer;
const CHANGE_EXERCISE = "CHANGE_EXERCISE";
const ADD_CUSTOM_TEXT = "ADD-CUSTOM-TEXT";
const DELETE_CUSTOM_TEXT = "DELETE-CUSTOM-TEXT";


let initialState = {
    currentLevelEN:
        localStorage.getItem("currentLevelEN")
            ? parseInt(localStorage.getItem("currentLevelEN"))
            : localStorage.setItem("currentLevelEN", "16"),
    currentExerciseEN:
        localStorage.getItem("currentExerciseEN")
            ? parseInt(localStorage.getItem("currentExerciseEN"))
            : localStorage.setItem("currentExerciseEN", "4"),

    currentLevelUA:
        localStorage.getItem("currentLevelUA")
            ? parseInt(localStorage.getItem("currentLevelUA"))
            : localStorage.setItem("currentLevelUA", "0"),
    currentExerciseUA:
        localStorage.getItem("currentExerciseUA")
            ? parseInt(localStorage.getItem("currentExerciseUA"))
            : localStorage.setItem("currentExerciseUA", "0"),

    layouts: [
        {name: "English (QWERTY)", path: "layout_en", code: "englishQWERTY"},
        {name: "Ukrainian", path: "layout_ua", code: "ukrainianLayout"},
    ],

    keyboards: {
        englishQWERTY: {
            rows: [
                [
                    {
                        key: "`",
                        code: "Backquote",
                        onShift: "~",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "1",
                        code: "Digit1",
                        onShift: "!",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "2",
                        code: "Digit2",
                        onShift: "@",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "3",
                        code: "Digit3",
                        onShift: "#",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "4",
                        code: "Digit4",
                        onShift: "$",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "5",
                        code: "Digit5",
                        onShift: "%",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "6",
                        code: "Digit6",
                        onShift: "^",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "7",
                        code: "Digit7",
                        onShift: "&",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "8",
                        code: "Digit8",
                        onShift: "*",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "9",
                        code: "Digit9",
                        onShift: "(",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "0",
                        code: "Digit0",
                        onShift: ")",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "-",
                        code: "Minus",
                        onShift: "_",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "=",
                        code: "Equal",
                        onShift: "+",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "Back",
                        code: "Backspace",
                        isTyping: true,
                        className: "whiteKey",
                        isLong: true,
                    },
                ],
                [
                    {
                        key: "Tab",
                        code: "Tab",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "q",
                        code: "KeyQ",
                        onShift: "Q",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "w",
                        code: "KeyW",
                        onShift: "W",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "e",
                        code: "KeyE",
                        onShift: "E",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "r",
                        code: "KeyR",
                        onShift: "R",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "t",
                        code: "KeyT",
                        onShift: "T",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "y",
                        code: "KeyY",
                        onShift: "Y",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "u",
                        code: "KeyU",
                        onShift: "U",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "i",
                        code: "KeyI",
                        onShift: "I",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "o",
                        code: "KeyO",
                        onShift: "O",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "p",
                        code: "KeyP",
                        onShift: "P",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "[",
                        code: "BracketLeft",
                        onShift: "{",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "]",
                        code: "BracketRight",
                        onShift: "}",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "\\",
                        code: "Backslash",
                        onShift: "|",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                ],
                [
                    {
                        key: "Caps",
                        code: "CapsLock",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "a",
                        code: "KeyA",
                        onShift: "A",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "s",
                        code: "KeyS",
                        onShift: "S",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "d",
                        code: "KeyD",
                        onShift: "D",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "f",
                        text: "_",
                        code: "KeyF",
                        onShift: "F",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "g",
                        code: "KeyG",
                        onShift: "G",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "h",
                        code: "KeyH",
                        onShift: "H",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "j",
                        text: "_",
                        code: "KeyJ",
                        onShift: "J",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "k",
                        code: "KeyK",
                        onShift: "K",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "l",
                        code: "KeyL",
                        onShift: "L",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: ";",
                        code: "Semicolon",
                        onShift: ":",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "'",
                        code: "Quote",
                        onShift: '"',
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "Enter",
                        code: "Enter",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                ],
                [
                    {
                        key: "Shift",
                        code: "ShiftLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                        shift: "left"
                    },
                    {
                        key: "z",
                        code: "KeyZ",
                        onShift: "Z",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "x",
                        code: "KeyX",
                        onShift: "X",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "c",
                        code: "KeyC",
                        onShift: "C",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "v",
                        code: "KeyV",
                        onShift: "V",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "b",
                        code: "KeyB",
                        onShift: "B",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                        shift: "right",
                    },
                    {
                        key: "n",
                        code: "KeyN",
                        onShift: "N",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: "m",
                        code: "KeyM",
                        onShift: "M",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: ",",
                        code: "Comma",
                        onShift: "<",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                        shift: "left",
                    },
                    {
                        key: ".",
                        code: "Period",
                        onShift: ">",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "/",
                        code: "Slash",
                        onShift: "?",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "Shift",
                        code: "ShiftRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                        shift: "right"
                    },
                ],
                [
                    {
                        key: "Ctrl",
                        code: "ControlLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "...",
                        code: "whiteKeyLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "Alt",
                        code: "AltLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                    {
                        key: " ",
                        code: "Space",
                        isTyping: true,
                        className: "thumb",
                        isLong: true,
                    },
                    {
                        key: "Alt",
                        code: "AltRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                    {
                        key: "...",
                        code: "whiteKeyRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "Ctrl",
                        code: "ControlRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                ],
            ],
            texts: [
                // [
                //     {name: "text ex 1", text: "hello"},
                //     {name: "text ex 2", text: "this is some text"},
                //     {name: "text ex 3", text: "another text"},
                //     {name: "text ex 4", text: "space"},
                //     {name: "text ex 5", text: "This is a text."},
                //     {name: "text ex 6", text: "Hello."},
                // ],
                [
                    {
                        name: "Exercise 1",
                        text: "aa ss dd ff jj kk ll ;; ;; ll kk jj ff dd ss aa asdf jkl; " +
                            "asdf jkl; fdsa ;lkj fdsa ;lkd as as ;l ;l kj df jk fd " +
                            "fdjk dskl dfkj ;las ;las dsds klkl jkjk fdfd ;l;l asas sasa l;l;",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "asdf jkl; a; a; ;a ;a ls kd jf fj jkfd ll;j jdk; " +
                            "jfdl saas sdfk fdjj kjdf kdkd jfkd ;als sldk aaaj kjdd jjkk kll; " +
                            "kdjf ;asl ;asl dkjf lskd dksl dkjf lska lkds dddj llss lddj jjaa ff;; " +
                            "llff sjsj ;f;f dksl jfjd skls",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "dkjf lala jlfd kjlf ;jla kjfd lska jfls kdjf lksa " +
                            "jflk sajf sdaf dsfj ksda fsda fsda lkjl kdkf djkj fksl sdls " +
                            "kdls jfdj fd;; ;;ll ksfd kjfk jkdj flkj flja",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "da as sa al la ak ka ad fa dal asl lad " +
                            "sak alf das lak sal alk fad las sla ask kaf sad dak kaj saj " +
                            "salk slad dalk flak lask skal flask",
                        number: 3,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "ee ii ee ii ie ie ei ei ee ii ee ii ijij efef fefe " +
                            "jiji dede kiki lili sese ;i;i aeae i;i; eaea ilil eses ikik " +
                            "eded fefe jiji ei ei ie ie iiee eeii eiei ieie ee ii ee ii",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "eeii iiee ieei ieie ijkl efda edfd ijkl lilk " +
                            "ikj; esas efds esfd ijkl i;i; ;i;l aedf ile; efds ffed ddef ssde " +
                            "ikjl esds ilkl llii ssee ffee llli jjli ssea aeaa iljl ijll essf aeae lijk kkik",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "eifj slie lsei jfdk ieei eiei slei eifj isis elke iaia elje isjl " +
                            "lsjf iesd eilj kjei leji edki dlee jfii eifj " +
                            "dkfj eijf eijf lsie lsie ;aei ;a;a eiei jfje jfid ssii aaii ldii kkee ekle ljle lssi laid ;als",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "si la ea fe is fi ai de es di if li sid kil lea " +
                            "lid saj lek kef ila fad eld aes ali ail alk fae skil " +
                            "silk flea kaid lasi lied lise sail life fils idea feis " +
                            "fail jade false flies skeif fiesld desleaf",
                        number: 3,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "rr uu rr uu ru ru ur ur ruru urur rruu uurr " +
                            "rfrf ujuj rdrd ukuk ulul rsrs uiui rere eerr uuii ilil rsrs lili sese " +
                            "arar u;u; ;;uu aarr redf iujk iujk redf read ijlu ruru urur ru ur",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "ijlu uijl uij; reds resa ijl; ujil resa iujk ujij " +
                            "ull; rrds arl; rrrf uuku ulul ulki erde erer iuiu ijll refd uijl " +
                            "ijul resa ssdr ljlu ljuj rsef uuru ukli resd area u;ij iujl resa redf eeii lsju afdr rfsf uujk",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "jruj rukf lsur rufj lsjf lksj flkj fruu ruru rjfk duru ruru " +
                            "ruls fjur jfdk jfru jfkd jflk surj flks jfur jfdj " +
                            "fkdr uuru ruii euri eurk jdie efjd kdei uriu rdjf dljf eiur ijfk" +
                            " lljs lieu rijf kdjd urri els; a;a; aslj fieu",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "ai ar di ea er eu fu if is ju lu re ud ur us raj " +
                            "rel ras ria ruk uri urd urs ure urf rad rik ler lar kru jur " +
                            "aru usar sura suji surd used urde suer surf udal rusa rude jule " +
                            "deul duel duke fula urled ursal ukdase urial",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "lurid lukas julid julia jurel alure duali radek " +
                            "kauri kedar lidar redia rifle fraid fedia farse fiard drisk" +
                            "surfle udaler feudal earful audile arilus direful julidae failure refusal alfred residual",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "ww oo ww oo wo wo ow ow were were " +
                            "oiui oiui werf werf oiuj oiuj uiok oiuk werd erde wawa wsws wdwd wfwf o;o; olol " +
                            "okok ojoj wewe wrwr ouou oioi lolo swsw",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "weds wdsf werd werd oujl oijl ojij fesd " +
                            "rdws oijk oklk essd rews ewde uoiu were ouii rewd feaa sssw ooli ijlj refd " +
                            "sadr efdf dser ersf sdds wwww fdwe kjui okjl ;iiu ojll ;;lk jlkj iuuu jooo olko",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "rueo iwwo wa;w losa odwk ;jfo oies orue iour " +
                            "oiew wowo wojf slfj woow ierj kfjl sjfo weir jfow owoe jflk lsdj owoe " +
                            "ruiu rujf djfo weif owie jrue iowd jlla woei woie rjfl skjf a;;a dfow slss",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "we wa wi wo wod wur wis wid wad sow saw row owk lwo lew " +
                            "jow jew kwa iwo wolf weir wale walk wase wife wade weka wore " +
                            "soul soda sora sori sore woke work lifo lord loud lois kola koil foul flow dose fold rous oder",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "rosel sofia sower roads owser julio idola foder josie flour " +
                            "wolfe korea lower rowed sawed frowl wilde lowder swaler " +
                            "redowa oswald dowlas wildes deloid selfward walkside lifework " +
                            "aflower aliferous swordlike jalousied fieldwork",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "cc nn cc nn cn cn nc nc cfcf cdcd " +
                            "cscs caca crcr cece cwcw njnj nknk nlnl n;n; nunu nini nono fcfc dcdc scsc " +
                            "acac rcrc ecec wcwc jnjn knkn lnln ;n;n unun inin onon",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "ccnn nncc cncn ncnc cddf cddf efds efds " +
                            "wcsd wcsd ccsa ccsa ;inj ;inj ojnk ojnk inl; inl; ujnk ujnk ccdd ccdd " +
                            "nnkk nnkk ;lkj oiun asdf werc werc oiun oujn oujn asec asec nncc cncn ncnc",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "ncnc dlfj drsl lu;; cjfs sscn lfjc naac ljsn " +
                            "ckj; aknd jfnd aaia ruce oinw ar;e oanw jncc ncnc njof wirn cnls " +
                            "fjjf jfnc jdjf njcn sfjc js;a a;;a lsjf lcna ;sll sjfs irjf jdkf jdsn cccn",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "acor acer acid acis acle alco cali nike " +
                            "aden asin alen andi oken acne winer wisen widen unled unold sudan" +
                            "sodic uncle scald sacro recon elfic disco " +
                            "danic cader caird canel carol cadus cords colan could caner",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "wounds unweld unsold unlock unfair wincer " +
                            "unself silken uncork uncoif roland ransel orlean orcein recoin scarid " +
                            "closer uncased uncloak carousel unlocked uncoifed censorial coresidual unscrawled forensical",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "vv mm vv mm vm vm mv mv nmnm mjmj mkmk mlml " +
                            "m;m; mumu mimi momo vcvc vfvf vdvd vsvs vava vrvr veve vwvw rvrv evev " +
                            "evev wvwv fvfv dvdv svsv avav umum imim omom jmjm kmkm lmlm ;m;m",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "vvmm vmvm mvmv fvdv fvdv vsdd vsdd vrew " +
                            "vrew asve asve acsv lnju lnju jmkn jmkn lmlu lmlu ;onm ;onm umkl umkl " +
                            "onmj onmj ;lki ;lki omui dfes dfes jmlk jmlk fwer fwer vvas vvas lljm lljm",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "aaju fain wuvj vuvu sifd juuu esui wcam uemj fmcn ivew ndav imsv " +
                            "aeud mvnc unsi ecvj idfv iuru euie sond ivme " +
                            "cuan icku svsj dfsj ajv; a;ac mcmc mvnd fjdv fjjf jsvm nsjf " +
                            "lsmc ccdv fjls dkaj fcmm",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "romask remand remail remin normal nomial medusa mulder " +
                            "unmoral surname unarmed unfamed surfman viseman volumed " +
                            "unvoice unrived vacuome overwin overing revisal declaim " +
                            "crimson feminal declaim crimean alodium",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "veliform wailsome vowmaker wildsome velarium unformal " +
                            "unformed unsmiled mousekin formalin dreamful amelcorn " +
                            "versional unfavored semivocal inwolucked unflavored unmiracled manifolder cadmiferous",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "tt yy tt yy ty ty yt yt trtr tete twtw tftf tdtd tsts " +
                            "tata tctc tvtv yuyu yiyi yoyo yjyj ykyk ylyl y;y; unun " +
                            "umum rtrt etet wtwt ftft dtdt stst atat ctct vtvt uyuy iyiy oyoy jyjy kyky lyly ;y;y nyny mymy",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "trfs trfs yjuo yjuo ijyu ijyu only only wfst " +
                            "wfst wetf wetr cfsv cfsv cvtr wedt wedt asst asst tsad tsad ljny " +
                            "ljny l;yk l;yk youi youi nmmy mmkn myij myij mjky nioy klly kjyl ;lki",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "oiyc w;vr ooyu euif jolk sawa ijct vyey otkc fasv tows " +
                            "s;;e siny kcmj fyei tawo kvov rjf; envc atck cnwd jyfo " +
                            "elac tovk owes ajio cflk tnvc owil akao ;tci ay;w lsdt javw asfg stds swca cyty yatw",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "isolate instead eranist dustman dotlike ductie drawcut " +
                            "rutland trevino acetoin nuytsia ardency anolyte yodelist " +
                            "velocity urolytic unverity urostyle syconium steadily syconate tunicary syndical toymaker",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "vulcanist voluntary unrealist simulator vestrical " +
                            "revictual costumery autoecism melanotis autolysin customary " +
                            "cytamine crayonist lectionary vestrywoman customarily " +
                            "veraciously woluntaryism semivoluntary",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "gg hh gg hh gh gh hg hg hyhu hiho hjhk hlh; " +
                            "hmhm gtgr gegw gfgd gsga gvgc vgcg fgdg sgag wgeg rgtg mhnj jhkh " +
                            "lh;h yhuh ihoh hggh ghhg",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "ghgh hghg hjuk hjuk holk holk hnmk hnmk ;lhn " +
                            ";lhn oiyh oiyh ihlk ihlk ohnm gedt gedt evvd evvd gvdt gvdt sasg " +
                            "sasg edcw edcw tfdc tfdc gsar gsar rdsg rdsg were were",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "ghgn chjc mmcy rurt uruo wuwo ieur twoe irug " +
                            "hjfk s;ak s;;a ssnv gvch mcmh gjnv hmcg hnnv bgmc jdlk fjhg hghg " +
                            "urhg ksjl kfjl khfl hgnj lsjf keiu slji aljf lkna saio dslk vnmc ghjd hgkj grhd",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "gair gaut give gone goat gain egma crag ango agon ahir " +
                            "chug agni young vogue vegan ungot youth unhit touch throu " +
                            "thuan thram thung their rough hange grith chang hotel unhero raught hunger nather",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "margin morgan maying mathing ingate inote gaiter " +
                            "gainer goetic throne enough crying coming cogman caught argent " +
                            "changer chainer another grothine antihero achroite antechoir athrogenic eurygnathic",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "qq pp qq pp qp qp pq pq qwqe qrqt qaqs " +
                            "qdqf qcqv qgqg popi pupy p;pl pkpj pnpm phph wqeq rqtq aqsq dqfq " +
                            "cqvq gqgq opip upyp ;plp kpjp npmp hphp qq pp pq pq qp qp",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "qppq qppq pqqp pqqp rfsq rfsq tasq tasq qsds " +
                            "qsds qcve qsds adsq adsq dqdg dqdg ggdq ggdq gsfe gsfe " +
                            "ujop ujop nhjn nhjn oypp oypp mhjy mhjy on;p on;p hjpi hjpi hnup hnup ujlk ujlk jyml jyml",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "jfpj qfpl ksdh qjpf kjhs dqpc npqp ppa; " +
                            "qjfl jpqf cmjn cqmp pdfn jcqa mjdf pjsq liru pjaq ncpm iqeo opwk " +
                            "qjas aqps aqso knbv pqpq pqpq iepa pdqh ghas ncmq jpsh ghqp",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "qopt tareq miqra qiang quintar pontacq poem " +
                            "copy copt chip cope apio atip atop chop atop topic thorp toper remap " +
                            "pheon phyma penta paver power pyche proem egypt coper creply epact arpen amper paine",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "topeng topman tarpon typing vipery parent " +
                            "phonic pomace opiner hamper genipa hapten tamping ropeman protein " +
                            "privacy primate repaint compare cheaping hypnoetic acetopyrin pathogermic pyromagnetic",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "xx bb xx bb xb xb bx bx xcxv xaxs xdxf xgxq " +
                            "xwxe xexr xtxb bnbm bybu bibo bpby bkbl b;bh " +
                            "xx bb xx bb xb xb bx bx cxvx axsx dxfx gxqx wxex exrx txbx bnbm ybub ibob pbyb kblb ;bhb",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "xbxb xbxb bxbx bxbx xbbx xbbx bxxb bxxb " +
                            "rxfg rxfg awex awex dfxa dfxa xdfe xdfe rtxa rtxa aerd aerd " +
                            "ujbj  aerd byhl byhl ihnb ihnb iobl iobl blup blup ppbh ppbh hnhb hnhb klbb klbb ;;bm ;;bm inmb inmb",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "xbvx bjbd vuur hbhx ghie bxov wpxq ab;q pxpa lbxs " +
                            "vljf xbkx lbnn xblv sddb jxf; nbcm cvxv bvcx mxvb cvnx xxmc " +
                            "xnbv jlkx sxbd jxfs dfxj ;a;x abls jkbf pwie boru oqkb blwb rksj dsja",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "ex ox xy pox pyx rox yex vex rex oxy hox vext oxen roxy " +
                            "obex next myxo onyx eryx ceyx coxy boxy exon crex pyrex " +
                            "ortyx rebox oxter prexy embox boxer boxen bery boxty epoxy " +
                            "export cortex oxygen extropy",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "ob be by bo rob reb orb pob nob beg bot ber " +
                            "boy bye bet geb theb tomb toby verb herb bent bony born both " +
                            "throb tomle ebony brent byron benchy brecht benorht embryon cynebot botchery",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "zz ,, .. z, z. ,. ., ,z .z zazd " +
                            "zxzc zvzf zgzq zwze zrzt zbzy zhzh znzm zmz, z.zu zizo zpzj zkzl z;z; " +
                            ",a,s ,d,f ,g,h z,x, c,v, q,w, e,r, t,y, b,n, u,i, o,o, p,j, k,l, ;,;, a.z. g.c. r.e. j.k. n.m. u.i. o.p." +
                            "q.p. y.t. n.m. c.v. z.b; x.x.",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "z,.z z.,z zadf zadf zaed zaed erfz erfz " +
                            "dfzg dfzg qzed qzed fdzd fdzd erzd erzd ewrt ewrt tezx tezx xzxz " +
                            "xzxz xzxz .,ju .,ju j,mo j,mo oun, oun, .uj, .uj, ,l;;  ,l;; o..,  o.., llu. llu. l,,h l,,h njm, njm, " +
                            "yu.h yu.h yb,. yb,.",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: ",zjf .xl, gks. urez yi,p .ble jz,f " +
                            "hxn. qifv ,nz. tlkp bgmd ,z.j flkk saj. qzyh bxnn .,fc ztia g.jf l,zs bx.d " +
                            "jhuz ,.ri igeq bp.z pq,w .boh uezr i,nm cnzx xbxb",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "pentzia, paynize, oxazine. phiroze, natchez, " +
                            "mestizo. maiaotze, gernitz, fitzroy. genizah, epizoan, czarism. " +
                            "caizey, czarist, cabezon. baptize, azotine, " +
                            "azoxime. zetacism, romanize, pyrazine.",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "prizeman, orangize, feazings. geospiza, " +
                            "fancize, geospiza. baronize, aphorize, chemnitz. profanize, schizaxon, " +
                            "terazosin. zygomatic, hypnotize, zenography. prezygomatic.",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "AA SS DD FF JJ KK LL QQ WW EE RR TT " +
                            "GG HH UU II OO PP ZZ XX CC VV BB NN MM ASAs JuJU ecZB XXNN NMmn PQWm " +
                            "thTH rhuK OJNg WNYt KLDS JFUR IOKL IOKL irow eiDL IJKd",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "SEFs SEFs dfcs dfcs egDE egDE " +
                            "WeED WeED FGed FGed sDFG SXXV sDFG eXfV eXfV XbBX XbBX SEtW SEtW " +
                            "hUKJ hUKJ LimL LimL KnJL KnJL KMyh KMyh lKLJ lKLJ nYop nYop hopI hopI OINN OINN kjlk kjlk HgHH",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "Hrhg dFky eUYI HaAA YGHe GFGB AAJH UKTU YRfj " +
                            "hhuH TDhg UIUt utfd GBJK JOIU YRjh lkhI UTHT FDJH LIUi utyt " +
                            "dJHL Kuyi ruyg JHKJ KLJH DFBC QWEP IIMN ;BVX",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "BE ZU XY MO TU PE RE YOT YOU WUR YET WRY " +
                            "VEX VOW WOW REX OBI NOW IWO IOU NOX WICE WISE VOTE WYNE WITE WORE " +
                            "PIZE PIEN ONCE IXEN OVER NUMB NICE BION TYME",
                        number: 3,
                    },
                    {
                        name: "Exercise 5",
                        text: "BONY BENT CUTE CUBE COVE COZY TECON " +
                            "TONIC TRINE ROMIC QUERY TWICE ROXIE INTER ENTRY INCUT NIMBY BOXER " +
                            "VICTOR MENTOR ICEBOX BIOMETRY EMBRYONIC QUINOMETRY",
                        number: 4,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "'' " + '"" ' + ":: l'k: d's' 'jfn '::' cskj ::f' " +
                            "eruo e:'n :fca 'c'' m:al ''kj d:'f l:jf n:'w :'oq " +
                            'd":" "jfl :s"k aj"f l:ii "eui :"ru eiwo :"fj ls"d :"cJ KD"J FNS: ure" oi:w o"qp',
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "'a'l 'a'l d'fj d'fj 'nc' 'nc' ::hj ::hj 'f:: ljs' " +
                            ":d:h gh'r uyi: 'ecn ,'.z x:n' lal' ei:r" +
                            'sla" :kj" f::c m.", mdli "u:f o:qq peo" r.:, .,aq :y"p w"oi e""p :ori ::we "ivz ""nb ::;;',
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "Cabrit: 'brique', 'boreus'. Bouser: 'camber', " +
                            "'amotus'. Absent: 'twiscar', 'uncream'. Toxemic: " +
                            "'scriven', 'seminar'. Poverty: 'prunase', 'ravicon'.",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: 'Puranic: "recant", "outbeam". Onymize: ' +
                            '"newsboy", "narcism". Nocuity: "osmetic", "obviate". ' +
                            'Xeranic: "upstream", "syntrope". Monstera: "naometry", "beauvoir".',
                        number: 3,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "<< >> <> ?? // {{ }} {} [[ ]] [] {}{> ?>[< ?<>< ?/// ]/,/ " +
                            "??<> <MM< ]M>N JUH} {OP{ O{P{ }{}] [][p p[][ pp][ " +
                            "]<>, []./ ,??; ?[/' ;';. [,<> /<?? [[>< }P/{ '}]P }/'] {}{] }/{] ]/}' }}{{ [>::",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "<<[? a;k> {}Fl GG<; sdq] /{>> {<u? ?/?o ir;; po[t ?[<[ JF// " +
                            "EV>C bng? h<x{ ,]z/ JYIz ,/m} cl<A >kd] ?hjV DK]< " +
                            "fDho S>D] iw<} iuu>",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "{aerocyst} [aporetic] <overmast> /overspan/ " +
                            "?sermonic? {souvenir} [racemous] {pyrazine} [quatorze] " +
                            "<rutinose> ?zirconate? /subpatron/ {scombrine} [recaption] <subcantor> ?obscurant? /neurocity/",
                        number: 2,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "11 22 33 44 55 66 77 88 99 00 -- == 1234 4567 890- ==== -098 7655 4321 1346 8097 8097 6547 890- =-09 " +
                            "1234 4321 5678 8765 890- -098 ====",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "1235 1235 8974 8974 3895 3895 6109 6109 1740 1740 -1-= -1-= 0=-- 0=-- =959 =959 2-05 2-05 8091 8091 " +
                            "7896 7896 0987 0987 =392 =392 1785 1785 5456 5456",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "08-= 7325 6487 4=26 5897 3--4 65=9 8270 9=-= -=4- 2=-4 9=18 5092 37-= 5873 " +
                            "2569 19=- =-87 2981 6853 1=61 " +
                            "=--= 40-2 0=48 0932 7409 0937 4894 3570 3243 4637 6654 7653",
                        number: 2,
                    },
                    {
                        name: "Exercise 4",
                        text: "10247- 983-26 7542-6 158736 298472 304809 2-3848 932374 93-872 687474 " +
                            "98=328 947598 734658 73465= -=0059 " +
                            "093475 896257 798346 593426 876559",
                        number: 3,
                    },
                ],
                [
                    {
                        name: "Exercise 1",
                        text: "~~ `` !! @@ ## $$ %% ^^ && ** (( )) " +
                            "__ ++ ~!@# $%^& *()_ _+_+ +_+_ )(*& ^%$# @!~` ~!@# $%^& &*() +_)( " +
                            "*&^% %$#@ @!~~ ~@!# $^%& ^*&(  *)(_  )_+_",
                        number: 0,
                    },
                    {
                        name: "Exercise 2",
                        text: "~!@# ~!@# %^+_ %^+_ )+() )+() **%& **%& %$^! " +
                            "%$^! ~~@% ~~@% $^^& $^^& &&*( &&*( *&)_ *&)_ *_&( *_&(" +
                            " _*^%  _*^% %$#$ %$#$ #@~! #@~! $%^~ $%^~",
                        number: 1,
                    },
                    {
                        name: "Exercise 3",
                        text: "~!@# `%$^ *_+) *&(^ &$^! ~!~! `~~! @%#$ %^$& ^()( _`)_ " +
                            "&^*^ %$#@ ~!## ~$`~ !#!@ %$^* !~~^ *^$# @``@ !$#& $@$% " +
                            "&%#$ %$^` *(&) ^*)$ #!#~ ~~~$ !%!# $^&* *^^& @$$% $^*) &^()",
                        number: 2,
                    },
                ],

                localStorage.getItem("typingTextsenglishQWERTY")
                    ? JSON.parse(localStorage.getItem("typingTextsenglishQWERTY"))
                    : localStorage.setItem("typingTextsenglishQWERTY", JSON.stringify([
                        {
                            name: "Alice's Adventures in Wonderland (fragment #1)", number: "0",
                            text: "Alice was beginning to get very tired of sitting by her sister on the bank, " +
                                "and of having nothing to do: once or twice she had peeped into the book her sister " +
                                "was reading, but it had no pictures or conversations in it, \"and what is the use of a book,\" " +
                                "thought Alice \"without pictures or conversations?\" So she was considering in her own mind " +
                                "(as well as she could, for the hot day made her feel very sleepy and stupid), whether the " +
                                "pleasure of making a daisy-chain would be worth the trouble of getting up and picking the " +
                                "daisies, when suddenly a White Rabbit with pink eyes ran close by her."
                        },
                        {
                            name: "Alice's Adventures in Wonderland (fragment #2)", number: "1",
                            text: "There was nothing so very remarkable in that; nor did Alice think it so very much " +
                                "out of the way to hear the Rabbit say to itself, \"Oh dear! Oh dear! I shall be late!\" " +
                                "(when she thought it over afterwards, it occurred to her that she ought to have wondered " +
                                "at this, but at the time it all seemed quite natural); but when the Rabbit actually took " +
                                "a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started " +
                                "to her feet, for it flashed across her mind that she had never before seen a rabbit with " +
                                "either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she " +
                                "ran across the field after it, and fortunately was just in time to see it pop down a large " +
                                "rabbit-hole under the hedge."
                        },
                        {
                            name: "Alice's Adventures in Wonderland (fragment #3)", number: "2",
                            text: "In another moment down went Alice after it, never once considering how in the world she was " +
                                "to get out again. The rabbit-hole went straight on like a tunnel for some way, and then dipped " +
                                "suddenly down, so suddenly that Alice had not a moment to think about stopping herself before " +
                                "she found herself falling down a very deep well."
                        },
                        {
                            name: "Alice's Adventures in Wonderland (fragment #4)", number: "3",
                            text: "Either the well was very deep, or she fell very slowly, for she had plenty of time as she " +
                                "went down to look about her and to wonder what was going to happen next. First, she tried to look " +
                                "down and make out what she was coming to, but it was too dark to see anything; then she looked at " +
                                "the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and " +
                                "there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as " +
                                "she passed; it was labelled \"ORANGE MARMALADE\", but to her great disappointment it was empty: " +
                                "she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into " +
                                "one of the cupboards as she fell past it."
                        },
                        {
                            name: "Alice's Adventures in Wonderland (fragment #5)", number: "4",
                            text: "\"Well\" thought Alice to herself, \"after such a fall as this, I shall think nothing of " +
                                "tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, " +
                                "even if I fell off the top of the house!\" (Which was very likely true.) Down, down, down. " +
                                "Would the fall never come to an end? \"I wonder how many miles I've fallen by this time?\" " +
                                "she said aloud. \"I must be getting somewhere near the centre of the earth. Let me see: that " +
                                "would be four thousand miles down, I think-\" (for, you see, Alice had learnt several " +
                                "things of this sort in her lessons in the schoolroom, and though this was not a very good " +
                                "opportunity for showing off her knowledge, as there was no one to listen to her, still it was " +
                                "good practice to say it over) \"-yes, that's about the right distance - but then I wonder " +
                                "what Latitude or Longitude I've got to?\" (Alice had no idea what Latitude was, or Longitude " +
                                "either, but thought they were nice grand words to say.)"
                        },
                        /*{
                            name: "last ex", number: "5",
                            text: "last ex"
                        },*/
                    ])),

                // [
                //     {
                //         name: "Alice's Adventures in Wonderland (fragment #1)", number: "0",
                //         text: "Alice was beginning to get very tired of sitting by her sister on the bank, " +
                //             "and of having nothing to do: once or twice she had peeped into the book her sister " +
                //             "was reading, but it had no pictures or conversations in it, \"and what is the use of a book,\" " +
                //             "thought Alice \"without pictures or conversations?\" So she was considering in her own mind " +
                //             "(as well as she could, for the hot day made her feel very sleepy and stupid), whether the " +
                //             "pleasure of making a daisy-chain would be worth the trouble of getting up and picking the " +
                //             "daisies, when suddenly a White Rabbit with pink eyes ran close by her."
                //     },
                //     {
                //         name: "Alice's Adventures in Wonderland (fragment #2)", number: "1",
                //         text: "There was nothing so very remarkable in that; nor did Alice think it so very much " +
                //             "out of the way to hear the Rabbit say to itself, \"Oh dear! Oh dear! I shall be late!\" " +
                //             "(when she thought it over afterwards, it occurred to her that she ought to have wondered " +
                //             "at this, but at the time it all seemed quite natural); but when the Rabbit actually took " +
                //             "a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started " +
                //             "to her feet, for it flashed across her mind that she had never before seen a rabbit with " +
                //             "either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she " +
                //             "ran across the field after it, and fortunately was just in time to see it pop down a large " +
                //             "rabbit-hole under the hedge."
                //     },
                //     {
                //         name: "Alice's Adventures in Wonderland (fragment #3)", number: "2",
                //         text: "In another moment down went Alice after it, never once considering how in the world she was " +
                //             "to get out again. The rabbit-hole went straight on like a tunnel for some way, and then dipped " +
                //             "suddenly down, so suddenly that Alice had not a moment to think about stopping herself before " +
                //             "she found herself falling down a very deep well."
                //     },
                //     {
                //         name: "Alice's Adventures in Wonderland (fragment #4)", number: "3",
                //         text: "Either the well was very deep, or she fell very slowly, for she had plenty of time as she " +
                //             "went down to look about her and to wonder what was going to happen next. First, she tried to look " +
                //             "down and make out what she was coming to, but it was too dark to see anything; then she looked at " +
                //             "the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and " +
                //             "there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as " +
                //             "she passed; it was labelled \"ORANGE MARMALADE\", but to her great disappointment it was empty: " +
                //             "she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into " +
                //             "one of the cupboards as she fell past it."
                //     },
                //     {
                //         name: "Alice's Adventures in Wonderland (fragment #5)", number: "4",
                //         text: "\"Well\" thought Alice to herself, \"after such a fall as this, I shall think nothing of " +
                //             "tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, " +
                //             "even if I fell off the top of the house!\" (Which was very likely true.) Down, down, down. " +
                //             "Would the fall never come to an end? \"I wonder how many miles I've fallen by this time?\" " +
                //             "she said aloud. \"I must be getting somewhere near the centre of the earth. Let me see: that " +
                //             "would be four thousand miles down, I think-\" (for, you see, Alice had learnt several " +
                //             "things of this sort in her lessons in the schoolroom, and though this was not a very good " +
                //             "opportunity for showing off her knowledge, as there was no one to listen to her, still it was " +
                //             "good practice to say it over) \"-yes, that's about the right distance - but then I wonder " +
                //             "what Latitude or Longitude I've got to?\" (Alice had no idea what Latitude was, or Longitude " +
                //             "either, but thought they were nice grand words to say.)"
                //     },
                //     /*{
                //         name: "last ex", number: "5",
                //         text: "last ex"
                //     },*/
                // ],
            ],
            notTypingKeys: [
                "Backspace", "Insert", "Delete", "PageUp", "PageDown", "Tab", "Control", "Alt", "Shift",
                "CapsLock", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Escape",
                "Enter", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Meta"
            ],
        },
        ukrainianLayout: {
            rows: [
                [
                    {
                        key: "'",
                        code: "Backquote",
                        onShift: "₴",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "1",
                        code: "Digit1",
                        onShift: "!",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "2",
                        code: "Digit2",
                        onShift: '"',
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "3",
                        code: "Digit3",
                        onShift: "№",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "4",
                        code: "Digit4",
                        onShift: ";",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "5",
                        code: "Digit5",
                        onShift: "%",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "6",
                        code: "Digit6",
                        onShift: ":",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "7",
                        code: "Digit7",
                        onShift: "?",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "8",
                        code: "Digit8",
                        onShift: "*",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "9",
                        code: "Digit9",
                        onShift: "(",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "0",
                        code: "Digit0",
                        onShift: ")",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "-",
                        code: "Minus",
                        onShift: "_",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "=",
                        code: "Equal",
                        onShift: "+",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "Back",
                        code: "Backspace",
                        isTyping: true,
                        className: "whiteKey",
                        isLong: true,
                    },
                ],
                [
                    {
                        key: "Tab",
                        code: "Tab",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "й",
                        code: "KeyQ",
                        onShift: "Й",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "ц",
                        code: "KeyW",
                        onShift: "Ц",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "у",
                        code: "KeyE",
                        onShift: "У",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "к",
                        code: "KeyR",
                        onShift: "К",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "е",
                        code: "KeyT",
                        onShift: "Е",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "н",
                        code: "KeyY",
                        onShift: "Н",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "г",
                        code: "KeyU",
                        onShift: "Г",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "ш",
                        code: "KeyI",
                        onShift: "Ш",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "щ",
                        code: "KeyO",
                        onShift: "Щ",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "з",
                        code: "KeyP",
                        onShift: "З",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "х",
                        code: "BracketLeft",
                        onShift: "Х",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "ї",
                        code: "BracketRight",
                        onShift: "Ї",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "\\",
                        code: "Backslash",
                        onShift: "/",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                ],
                [
                    {
                        key: "Caps",
                        code: "CapsLock",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "ф",
                        code: "KeyA",
                        onShift: "Ф",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "і",
                        code: "KeyS",
                        onShift: "І",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "в",
                        code: "KeyD",
                        onShift: "В",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "а",
                        text: "_",
                        code: "KeyF",
                        onShift: "А",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "п",
                        code: "KeyG",
                        onShift: "П",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "р",
                        code: "KeyH",
                        onShift: "Р",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "о",
                        text: "_",
                        code: "KeyJ",
                        onShift: "О",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "л",
                        code: "KeyK",
                        onShift: "Л",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "д",
                        code: "KeyL",
                        onShift: "Д",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "ж",
                        code: "Semicolon",
                        onShift: "Ж",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "є",
                        code: "Quote",
                        onShift: 'Є',
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "Enter",
                        code: "Enter",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                ],
                [
                    {
                        key: "Shift",
                        code: "ShiftLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "я",
                        code: "KeyZ",
                        onShift: "Я",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "ч",
                        code: "KeyX",
                        onShift: "Ч",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: "с",
                        code: "KeyC",
                        onShift: "С",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "м",
                        code: "KeyV",
                        onShift: "М",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "и",
                        code: "KeyB",
                        onShift: "И",
                        isTyping: true,
                        className: "leftIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "т",
                        code: "KeyN",
                        onShift: "Т",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "ь",
                        code: "KeyM",
                        onShift: "Ь",
                        isTyping: true,
                        className: "rightIndexFinger",
                        isLong: false,
                    },
                    {
                        key: "б",
                        code: "Comma",
                        onShift: "Б",
                        isTyping: true,
                        className: "middleFinger",
                        isLong: false,
                    },
                    {
                        key: "ю",
                        code: "Period",
                        onShift: "Ю",
                        isTyping: true,
                        className: "ringFinger",
                        isLong: false,
                    },
                    {
                        key: ".",
                        code: "Slash",
                        onShift: ",",
                        isTyping: true,
                        className: "pinkyFinger",
                        isLong: false,
                    },
                    {
                        key: "Shift",
                        code: "ShiftRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                ],
                [
                    {
                        key: "Ctrl",
                        code: "ControlLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "...",
                        code: "whiteKeyLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "Alt",
                        code: "AltLeft",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                    {
                        key: " ",
                        code: "Space",
                        isTyping: true,
                        className: "thumb",
                        isLong: true,
                    },
                    {
                        key: "Alt",
                        code: "AltRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                    {
                        key: "...",
                        code: "whiteKeyRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: true,
                    },
                    {
                        key: "Ctrl",
                        code: "ControlRight",
                        isTyping: false,
                        className: "whiteKey",
                        isLong: false,
                    },
                ],
            ],
            texts: [
                /*[
                    {name: "text ex 1", text: "привіт"},
                    {name: "text ex 2", text: "це текст"},
                    {name: "text ex 3", text: "інший текст"},
                    {name: "text ex 4", text: "пробіл"},
                    {name: "text ex 5", text: "Це текст."},
                    {name: "text ex 6", text: "Привіт."},
                ],*/
                [
                    {
                        name: "Вправа №1",
                        text: "фф іі вв аа оо лл дд жж жж дд лл оо аа вв іі фф фіва олдж " +
                            "фіва олдж авіф ждло авіф ждлв фі фі жд жд ло ва ол ав " +
                            "авол вілд вало ждфі ждфі віві лдлд олол авав жджд фіфі іфіф дждж",
                        number: 0,
                    },
                    {
                        name: "Вправа №2",
                        text: "фіва олдж фж фж жф жф ді лв оа ао олав дджо овлж " +
                            "оавд іффі івал авоо лова лвлв оалв жфді ідвл фффо ловв оолл лддж " +
                            "лвоа жфід жфід влоа ділв влід влоа ділф длві ввво ддіі двво оофф аажж " +
                            "ддаа іоіо жажа влід оаов ілді",
                        number: 1,
                    },
                    {
                        name: "Вправа №3",
                        text: "влоа дфдф одав лода жодф лоав ділф оаді лвоа дліф " +
                            "оадл іфоа івфа віао лівф аівф аівф длод лвла воло алід івді " +
                            "лвді оаво авжж жждд ліав лоал олво адло адоф",
                        number: 2,
                    },
                    {
                        name: "Вправа №4",
                        text: "аа ава авва авіа ада ададжо адажіо аж ажіо алафа " +
                            "алі алідада алло аллод алод в ваал вава вад вада ваді " +
                            "вал валі валіа валідол вві ввід вдало вдова вдовж",
                        number: 3,
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "уу шш уу шш шу шу уш уш уу шш уу шш шошо уауа ауау ошош вуву лшлш дшдш іуіу жшжш фуфу" +
                            " шжшж уфуф шдшд уіуі шлшл увув ауау ошош уш уш шу шу шшуу уушш ушуш шушу уу шш уу шш",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "уушш шшуу шууш шушу шолд уавф ував шолд дшдл шлож уіфі уаві уіав шолд шжшж жшжд" +
                            " фува шдуж уаві ааув ввуа ііву шлод уіві шдлд ддшш ііуу аауу дддш оодш ііуф фуфф" +
                            " шдод шодд уііа фуфу дшол ллшл",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "ушао ідшу діуш оавл шууш ушуш ідуш ушао шіші удлу шфшф удоу шіод діоа шуів ушдо " +
                            "лоуш дуош увлш вдуу оашш ушао влао ушоа ушоа дішу дішу жфуш жфжф ушуш оаоу оашв іішш " +
                            "ффшш двшш ллуу улду доду дііш дфшв жфді",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "у ш ув уд уж ша вуд вуж дуо душ уві удж уфо ушу фіш шал шво шві шов шоу воша віші дуда " +
                            "дужо дуло душа улад улов фліш шафа шафл шліф шула вошва вудод вужів дуала дувал лаваш " +
                            "удало удова уліво ушула валуша вудвуд вішало шалава шолуді одудові удавові",
                        number: 3
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "кк гг кк гг кг кг гк гк кгкг гкгк ккгг ггкк кака гого квкв глгл гдгд кікі гшгш " +
                            "куку уукк ггшш шдшд кікі дшдш іуіу фкфк гжгж жжгг ффкк кува шгол шгол кува куфв " +
                            "шодг кгкг гкгк кг гк",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "шодг гшод гшож куві куіф шодж гошд куіф шгол гошо гддж ккві фкдж ккка гглг " +
                            "гдгд гдлш укву укук шгшг шодд куав гшод шогд куіф іівк додг дого кіуа ггкг глдш " +
                            "куів фкуф гжшо шгод куіф кува уушш діог фавк каіа ггол",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "окго кгла дігк кгао діоа дліо адло акгг кгкг коал вгкг кгкг кгді аогк оавл оакг " +
                            "оалв оадл ігко адлі оагк оаво алвк ггкг кгшш угкш угкл овшу уаов лвуш гкшг " +
                            "квоа вдоа ушгк шоал ддоі дшуг кшоа лвов гккш удіж фжфж фідо ашуг",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "га ага гав гад док кло кіш угу ігл іго агов агуш гавк гага дока кава клад кліо" +
                            " кліф кіло лого угав іглу ігіл агава агуша вужак гавал гадка гадів кавал кавід " +
                            "кагал кагла клака кліка кілок кішка логво",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "логік угода волока вужака відгал відгук відгул гавіал гагаку глушка глушко " +
                            "доклад докола докука кагала клавіш кладка кліваж логіка агакало агогіка відгада " +
                            "гаджуга кавалок клавіша волокуша відгадка докладка волошково",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "цц щщ цц щщ цщ цщ щц щц цуку цуку щшгш щшгш цука цука щшго щшго гшщл щшгл " +
                            "цукв укву цфцф ціці цвцв цаца щжщж щдщд щлщл щощо цуцу цкцк щгщг щшщш дщдщ іціц",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "цуві цвіа цукв цукв щгод щшод щошо ауів квці щшол щлдл уіів куці уцву гщшг" +
                            " цуку щгшш куцв ауфф іііц щщдш шодо куав іфвк уава віук укіа івві цццц авцу логш " +
                            "щлод жшшг щодд жждл одло шггг ощщщ щдлщ",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "кгущ шццщ цфжц дщіф щвцл жоащ щшуі щкгу шщгк щшуц цщцщ цщоа ідао цщщц шуко" +
                            " лаод іоащ цушк оащц щцщу оадл діво щцщу кгшг кгоа воащ цуша щцшу окгу шщцв оддф " +
                            "цщуш цщшу коад ілоа фжжф ващц ідіі",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "що щі вуц гоц гущ дощ кущ цок цуг цуц цід воща гуща дащо кліщ куцо куща овощ цвак" +
                            " цуга ціва швіц шкіц шліц щава щодо щока щука гоцак гуцул гущак кліщі куцак " +
                            "лущак ощада цуглі цівка цілка цілко щадок",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "щогла щувак щілка щілко гущава жалощі кліщак коліща ощадок цікаво щодалі" +
                            " ігліца голощак голощік гуцулка гуцулок дощівка цалівка цуголка цілушка " +
                            "дощувалка двіцалівка",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "сс тт сс тт ст ст тс тс саса свсв сісі сфсф скск сусу сцсц тото тлтл " +
                            "тдтд тжтж тгтг тштш тщтщ асас всвс ісіс фсфс кскс усус цсцс отот лтлт дтдт " +
                            "жтжт гтгт штшт щтщт",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "сстт ттсс стст тстс свва свва уаві уаві цсів цсів ссіф ссіф жшто жшто щотл" +
                            " щотл штдж штдж готл готл ссвв ссвв ттлл ттлл ждло щшгт фіва цукс цукс щшгт щгот щгот" +
                            " фіус фіус ттсс стст тстс",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "тстс вдао вкід дгжж соаі ііст даос тффс доіт слож флтв оатв ффшф кгсу щштц" +
                            " фкжу щфтц отсс тстс тоща цшкт стді аооа оатс овоа тост іаос оіжф фжжф діоа дстф " +
                            "жідд іоаі шкоа овла овіт ссст",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "ас аск асо асс лут літ тут туф туц туш асса каса літа літо тута туті туша штаг" +
                            " штат шток штос штоф штуф штуц авлос аксіс астат васаг васал каска каско " +
                            "каста луста лутка луток луцак лісок літак тутак тутка туфлі туфіт тушка шталт " +
                            "штола штука авіста",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "відсік каскад лускіт літота літфак шостак автошас аксакал асфоділ відскок відскік відслід " +
                            "кастоді лутовка літавка літошок шостака штатула автофакс васкуліт відслуга відсоток " +
                            "відстава лісосіка туфолава відставка відсталоі лісосклад лісотаска відсотково",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "мм ьь мм ьь мь мь ьм ьм тьть ьоьо ьльл ьдьд ьжьж ьгьг ьшьш ьщьщ мсмс мама мвмв" +
                            " мімі мфмф мкмк муму мцмц кмкм умум умум цмцм амам вмвм імім фмфм гьгь шьшь щьщь оьоь " +
                            "льль дьдь жьжь",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "ммьь мьмь ьмьм амвм амвм мівв мівв мкуц мкуц фіму фіму фсім дтог дтог оьлт " +
                            "оьлт дьдг дьдг жщть жщть гьлд гьлд щтьо щтьо ждлш ждлш щьгш вауі вауі оьдл оьдл ацук " +
                            "ацук ммфі ммфі ддоь ддоь",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "ффог афшт цгмо мгмг ішав оггг уігш цсфь гуьо аьст шмуц твфм шьім фугв ьмтс " +
                            "гтіш усмо швам шгкг угшу іщтв шмьу сгфт шслг іміо ваіо фомж фжфс ьсьс ьмтв аовм " +
                            "аооа оімь тіоа діьс ссвм аоді влфо асьь",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "амі адам амок аміл голь гума гумі жаль кіль ільм агама агамі аміак вагом гольф" +
                            " гумка гумук гумус гуміт кльоц кльош іготь ільма адамів амідол вагомо голька гольці" +
                            " жалько калька коваль кілька кілько агамові відмага відмова гумофос адамашок відмалку",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "відмашка відмітка кальвіль ковкість амальгама вагомість відмастка двоокість кальвадос " +
                            "кількасот кількість двостволка ковальство гумоасфальт двосмугість агальматоліт " +
                            "жовтощокість жовтуватість кашкуватість двосмуговість двотактовість двостулковість",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "ее нн ее нн ен ен не не екек еуеу ецец еаеа евев еіеі ефеф есес емем нгнг ншнш " +
                            "нщнщ ноно нлнл нднд нжнж гтгт гьгь кеке уеуе цеце аеае веве іеіе фефе сесе меме гнгн " +
                            "шншн щнщн онон лнлн дндн жнжн тнтн ьньн",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "екаі екаі ногщ ногщ шонг шонг щтдн щтдн цаіе цаіе цуеа цуек саім саім смек " +
                            "цуве цуве фііе фііе еіфв еіфв дотн дотн джнл джнл нщгш нщгш тььн ььлт ьншо ьншо " +
                            "ьолн тшщн лддн лонд ждлш",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "щшнс цжмк щщнг угша ощдл іфцф шосе мнун щелс афім ещці іжжу іштн лсьо ануш " +
                            "ефцщ лмщм коаж утмс фесл стцв онащ удфс ещмл щцуі фошщ садл етмс щцшд флфщ жесш " +
                            "фнжц діве офмц фіап іеві іцсф снен нфец",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "джон аденд відео геном давно жовна жовно аденум аденін аденіт генсек генсле давніш" +
                            " джонва джонка економ адендум аденома віденці давніше еквісон жованка жовенце аденоміт" +
                            " аденотом відельга відеофон генонема генофонд давність джонатан екаутант",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "індіанець індіаніст аденоміома відеоканал відеокодек відеосалон відеофільм еквівалент" +
                            " відеокасета гентгельвін давнісінько економність економістка індіаністка адекватність" +
                            " аденоакантома аденофлегмона генконсульство відеомагнітофон еквівалентність",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "пп рр пп рр пр пр рп рп рнрг ршрщ рорл рдрж рьрь пепк пупц папв піпф пмпс мпсп апвп іпфп " +
                            "цпуп кпеп ьрто орлр држр нргр шрщр рппр пррп",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "прпр рпрп рогл рогл рщдл рщдл ртьл ртьл ждрт ждрт щшнр щшнр шрдл шрдл щрть пуве " +
                            "пуве уммв уммв пмве пмве іфіп іфіп увсц увсц еавс еавс піфк піфк квіп квіп цуку цуку",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "прпт срос ььсн кгке гкгщ цгцщ шугк ецщу шкгп роал іжфл іжжф іітм пмср ьсьр потм " +
                            "рьсп рттм ипьс овдл аорп рпрп гкрп ліод лаод лрад рпто діоа лушг ідош фдоа длтф іфшщ " +
                            "відл мтьс пров рпло пкрв",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "увар гепік турма турне увера гепард гептан гептен гептод туркус туркут турмак " +
                            "турман уверед туркмен аванпорт аванпост ватерпас гепатома гептагон гептаедр " +
                            "туркофіл турмалін уваровіт фторотан ватерполо ватерпруф ваторопка ваторопко " +
                            "гептаметр депенденс",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "депендент туркменка фторокорт фторостанат фторофосфат фторопарафін фторополімер " +
                            "фторорганіка автомотоспорт ватерполістка туркофільство фторотанталат автомототранспорт" +
                            " гептафторотанталат гептафлуоротанталат векторелектрокардіоскоп",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "йй зз йй зз йз йз зй зй йцйу йкйе йфйі йвйа йсйм йпйп зщзш згзн зжзд злзо зтзь " +
                            "зрзр цйуй кйей фйій вйай сймй пйпй щзшз гзнз жздз лзоз тзьз рзрз йй зз зй зй йз йз",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "йззй йззй зййз зййз каій каій ефій ефій йіві йіві йсму йіві фвій фвій вйвп " +
                            "вйвп ппвй ппвй піау піау гощз гощз трот трот щнзз щнзз ьрон ьрон щтжз щтжз розш " +
                            "розш ртгз ртгз годл годл оньд оньд",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "оазо йазд лівр йоза лорі вйзс тзйз ззфж йоад озйа сьот сйьз зват осйф ьова зоій" +
                            " дшкг зофй тсзь шйущ щзцл йофі фйзі фйіщ лтим зйзй зйзй шузф звйр прфі тсьй озір прйз",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "уз уза узад відай узанс узвар узвіз заптій узайві узаміт віварій грейдер грейзен " +
                            "грейфер запайка зграйка зграйно узавтра узагалі узапліш узгірок цукроза аварійка " +
                            "аварійно весінній граційно елегійно узаперті узварець австрійка австрійці грейпфрут",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "грейтоніт формалізм вермільйон зграйність цукрозавод аварійність граційність " +
                            "елегійність узагальнено автодорожній узаконеність узгідненість узагальненість " +
                            "формалізовність електронейрограф формалізованість тонкорозмеленість тонкорозпорошеність",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "чч ии чч ии чи чи ич ич чсчм чфчі чвча чпчй чцчу чучк чечи итиь иниг ишищ изин " +
                            "илид ижир чч ии чч ии чи чи ич ич счмч фчіч вчач пчйч цчуч учкч ечич итиь ниги " +
                            "шищи зини лиди жири",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "чичи чичи ичич ичич чиич чиич иччи иччи кчап кчап фцуч фцуч вачф вачф чвау чвау " +
                            "кечф кечф фукв фукв гоио  фукв инрд инрд шрти шрти шщид шщид идгз идгз ззир ззир" +
                            " ртри ртри лдии лдии жжиь жжиь штьи штьи",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "чимч иоив мггк рирч пршу ичщм цзчй фижй зчзф дичі мдоа чилч дитт чидм івви очаж " +
                            "тись смчм имсч ьчми смтч ччьс чтим одлч ічив очаі вачо жфжч фиді олиа зцшу ищкг" +
                            " щйли идци кліо віоф",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "гик гимн гивер гирун жучок ввезти ввести гиково гинкий гинути гирити жучище звично" +
                            " звучно ввергти гикнути звичний звучний комічно конечне ввезений ввернути " +
                            "ввертіти гиготіти звичніше комічний конечний ввергнути вверчений ексцентрично",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "емпіричність ексцентричний мікроскопічно ізоосмотичний великосімейний" +
                            " ексцентриковий ексцентриситет мікроскопічний ексцентричність ізоосмотичність " +
                            "великосерійність мікроскопічність ізопериметричний",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "яя бб юю яб яю бю юб бя юя яфяв ячяс ямяа япяй яцяу якяе яиян яряр ятяь яьяб яюяг " +
                            "яшящ язяо яляд яжяж бфбі бвба бпбр ябчб сбмб йбцб убкб ебнб ибтб гбшб щбщб збоб лбдб " +
                            "жбжб фюяю пюсю кюую оюлю тюью гюшю щюзюйюзю",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "ябюя яюбя яфва яфва яфув яфув укая укая ваяп ваяп йяув йяув авяв авяв укяв укяв " +
                            "уцке уцке еуяч еуяч чячя чячя чячя юбог юбог обьщ обьщ щгтб щгтб югоб югоб бджж " +
                            "бджж щююб  щююб ддгю ддгю дббр дббр тоьб тоьб нгюр",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "бяоа ючдб плію гкуя ншбз юиду ояба рчтю йшам бтяю едлз ипьв бяюо адлл іфою йянр " +
                            "ичтт юбас яешф пюоа дбяі ичюв оргя бюкш шпуй изюя зйбц юищр гуяк шбть стяч чичи",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "юз юл юн геб юка юла юно юнь геба юзом юкса юнак юнга юнка барба гебан шелюг юката" +
                            " юкола юнкер юнкор юннат юнона юніор абсент барбет барбос барбун шевлюг шелюга" +
                            " юнаків юність абсолют барбекю шевлюга юнацтво юніорка абсорбат абсорбер барбаміл",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "барботаж барботер барбітал волейбол юнгштурм абсолютно абсорбент юнкерство " +
                            "абсольвент гексаборат волейболіст волелюбство абсолютність волелюбність юнгштурмівка " +
                            "волейболістка абсорбованість гебітскомісаріат гексабромобензол",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "ФФ ІІ ВВ АА ОО ЛЛ ДД ЙЙ ЦЦ УУ КК ЕЕ ПП РР ГГ ШШ ЩЩ ЗЗ ЯЯ ЧЧ СС ММ ИИ ТТ ЬЬ ФІФі " +
                            "ОгОГ усЯИ ЧЧТТ ТЬьт ЗЙЦь ерЕР кргЛ ЩОТп ЦТНе ЛДВІ ОАГК ШЩЛД ШЩЛД шкщц ушВД ШОЛв",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "ІУАі ІУАі васі васі упВУ упВУ ЦуУВ ЦуУВ АПув АПув іВАП ІЧЧМ іВАП уЧаМ уЧаМ " +
                            "ЧиИЧ ЧиИЧ ІУеЦ ІУеЦ рГЛО рГЛО ДшьД ДшьД ЛтОД ЛтОД ЛЬнр ЛЬнр дЛДО дЛДО тНщз тНщз" +
                            " рщзШ рщзШ ЩШТТ ЩШТТ лодл лодл РпРР",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "Ркрп вАлн уГНШ РфФФ НПРу ПАПИ ФФОР ГЛЕГ НКао рргР ЕВрп ГШГе геав ПИОЛ ОЩШГ НКор " +
                            "длрШ ГЕРЕ АВОР ДШГш гене вОРД Лгнш кгнп ОРЛО ЛДОР ВАИС ЙЦУЗ ШШЬТ жИМЧ",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "ГЕ ГЕВ ГЕГ ЕВР Узи ушр фес щем щеп Ферт ГЕГЕП Гвинт Щезун узиму узимі ферум" +
                            " Фермій Фертик Щемкий вейсит венети узимки узимку щезник щеміти Векнути Гвинтик" +
                            " везучий венерик узирити щезнути Венгерці Гвинтити ЕВКСЕНІТ ЕВРИТЕРМ Узенький Уштурити",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "Щемерець гвінейці евфемізм Венгерець ГЕГЕПНУТИ ЕВЕНСЬКИЙ ЕВЕРГРІНС гвіргвіні " +
                            "ушпигнути Венеричний Уштрикнути Венгерський Гвінейський ЕВРИСТИЧНИЙ ЕВРИТЕРМНИЙ " +
                            "евтектичний Венеційський ЕВРИСТИЧНІСТЬ ЕВРИТЕРМНІСТЬ",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "хх її хх її хїхї їхїх їхїх хїхх їїїх їхїї хїхї ХЇХЇ ХЇХЇ ХХ ЇЇ ЇхХХ ЇЇхХ хйхц " +
                            "кїкї схаї Їхст Їхві ОЛОх ХХоЇ ХЇХо ЇХОЛ вЗоа хдтс оХах Їдлї ХоЇс ХдХХ ххлл " +
                            "оЇїа хдЇл їЯмх ЛхТї МїБЇ мтХЇ чбяХ ьюбХ юяХй хзущ егїЬ",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "їХмс їХмс хчяь хчяь ХхЇї ХхЇї бюжх бюжх Хїхї Хїхї дЇФЦ дЇФЦ КУЙх КУЙх фаЇі " +
                            "фаЇі їолх їолх кЩЗЇ кЩЗЇ ШГуї ШГуї хїхц хїхц ТХИМ ТХИМ Сщхз Сщхз паЯХ паЯХ Чоїд " +
                            "Чоїд хвФї хвФї ІЇлж ІЇлж іхДЛ іхДЛ їЖЩЇ їЖЩЇ хШГА хШГА",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "йкЇх їхїХ гнва їхХЇ ЛОїх їїип хорх ЇХаи хнЕш їїлр Хїях Їоил архп ЇХВї НЕхш " +
                            "гнол ПЇїх шХИщ згол рхХо лиїЇ ПВхв неХС ЧхЇї ПзСЕ лХгх шрЇї Похм СПХС хЇЇї НЕВГ" +
                            " щХшо дїхл тДЇх ХШїЛО хОїЇ лоИХ ПЇїх шХИщ згол",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "Їд Ех ЇДА ЕРХУ Ехін Фіїн верх гріх їден їдло їсти ЇДАТИ ЇСТВО Їдало Їдкий" +
                            " Їднак ВВЕРХ ВЕРХИ ЖЕНИХ їдець їдиме їстик їстки ЇДІННЯ ЇДАННЯ ЇДЕННЯ" +
                            " ЇДНАТИ ЇСТИВО ЇСТИСЯ Етерії вверху гуркхі їволга Їдження ВИХРИСТ ВИХРИТИ Верхній Гехнути",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "Гухнути Женихів вихрест їдениця їднанки ЇРОВАНИЙ Їдальний жихунець " +
                            "їднаково їстивний ЇДНЕНЬКИЙ Їднаковий ВЕРХІВЕНЬ Ввіпхнути верхівець " +
                            "ВИХРЕЩЕНИЙ ВИХРИСТИТИ Ввіпхнутий Вертихвіст Вихрестити Вихрищений Їдиначитися ЖЕНИХІВСЬКИЙ",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "'' єє '' єє єє'' єєє' ''є' 'є'є є'є' єє'' 'є'' єє'₴ Є₴ ₴₴ ЄЄ ₴₴ЄЄ Є₴Єє Є'Є' єоа' " +
                            "їовт їЄВА фівс ІПхї ЄПвв іАМ' вє'є 'Єх₴ ₴вПА РМфв ₴ї'х Єє'ї ₴ВІК Аапі х'їє 'Є₴ї " +
                            "хїОИ АПВ' є'Є₴ їх'ї ПИпо рАПє ₴'ї' є'АО РИА₴",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "₴'₴і ₴'₴і ЦУА₴ ЦУА₴ 'ВЦЙ 'ВЦЙ '₴фа '₴фа ₴еФІ ₴еФІ ₴Ч₴Ф ₴Ч₴Ф пмс₴ пмс₴ й₴ЧП й₴ЧП МП₴А " +
                            "МП₴А ₴Е'' ₴Е'' а₴ав а₴ав ₴пе₴ ₴пе₴ їОЇР їОЇР ЇЇдї ЇЇдї ошгГ ошгГ ШЬРг ШЬРг нЇор " +
                            "нЇор їиьЛ їиьЛ БОєд БОєд їЇод їЇод зххЛ зххЛ",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "₴АЄП Ва'Є ₴єИі '₴вє ЦЙЄК ₴НЕТ дф'₴ ЄАПІ ВМє₴ оЄлж 'єРО ₴ЄНЕ ук₴А Сгєц ЮЄБ₴ ЩОЇХ " +
                            "'шз₴ єЄЯЧ СЦУЙ 3₴ПС ₴хїЄ 'єхй ₴єєф 'ЄАП МСВІ ж₴іа Єєо' ₴рєи ОЄПМ мє₴' Єтчє " +
                            "ПВУ₴ КЧбЄ єЇяю 'єЄ₴ ьмСИ ₴єЄФ МАЇт Ва'Є ₴єИі '₴вє ЦЙЄК",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "Єсь єва ЄВКА ЄЩІР Євза Єгня В’яз в’юн єдин єтір Єгерь Єдваб Єхида ВИМ’Я ЄХИДНО" +
                            " Єгипет Єдеман В’ЯЗКА В’ЯЛИЙ В’юнок Об’єкт європа єщірка ЄВДОШКА Єхидний Від’їзд " +
                            "В’ЇХАТИ В’ЯЗАТИ В’юнкий об’їдки ЄВІРНИЦІ ЄДАМАШКА ЄДАМАШОК ЄХИДСТВО Єдвабний",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "Валер’ян Верхів’я В’ЯЗАНКА В’ЯЗАННЯ ОБ’ЇХАЛИ обв’язка об’єктив об’їдати Єгипетник " +
                            "Обов’язок Об’єднати обм’яклий євангеліе європеєць Об’явитися об’єднання " +
                            "об’їжджати ЄГИПЕТСЬКИЙ єдамашковий єхидкуватий європейський євангельський",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: ".. ,, .. ,, ..,, ,,.. ,,., ..,. .,., ,.,. Х.ТІ ЬФЖ, В,,Т .гуу УЕ.. звш. .,ьж ,.`ї " +
                            ",.,н ,єф. .,ще ФР.. йгй, .,ЇЬ .,рш ,иїо ,,ш, .кн. Р,,Ф ,,йо ,і`г кф,з .,ЧІ ,.ИЬ ВК.Ї" +
                            " ,,щр нц,ч у.,ї ЇЙ,. ..СП .Ф,, .,,, яї,р",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "ЬА,И ЬА,И ЄТ,, ЄТ,, бнюа бнюа дб,т дб,т еглм еглм ерчб ерчб ею.а ею.а йа.з йа.з м,ф," +
                            " м,ф, рлйє рлйє сс,. сс,. уз,ц уз,ц усім усім цчлв цчлв ш,.й ш,.й щї.л щї.л " +
                            "і,ль і,ль ь.бк ь.бк є,з, є,з, є.., є.., юдйо",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: ",,,, ,,,Л ,,,т ,,.щ ,,кі ,,ш. ,,ю. ,.,е ,..Ц ,.ел ,.ін ,.'л ,ЩС. ,ЯЧС ,бнз " +
                            ",н.л ,ув, ,щ,, .,А, .,Ю. .,ЯМ ...Д ...Т ..В, ..ч, ..їт .ЙСВ .П,Т .Щ.. .тии " +
                            ".хьк .чск .шф. .ї,ь ₴ЕЙЇ Б.АХ З.ЦФ ЗСД, ЗЦЬХ ЙЇЛЄ О.СЮ",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "де як її Під для так Всім КЛЮЧ Лист МЕЖА Млрд САМІ СИНУ Шлюб всім двір кого мрія" +
                            " поки Бігти КНИГА Пункт Стиль Стіна Точно номер папір тисяч фільм ДОДАТИ МІСТЕР" +
                            " Теорія Цікаво тренер ВЕЧІРКА ЗДАТНИЙ Кохання",
                        number: 3
                    },
                    {
                        name: "Вправа №5",
                        text: "Природи Простий Станція будинок дружина картина рішення ГОВОРИТИ ЗБЕРЕГТИ " +
                            "ОПЕРАЦІЇ Професор СЕРЕДНІЙ Ситуація подорожі століття Заповнити економіка " +
                            "слідувати Збільшувати МІЖНАРОДНИЙ організації ПРЕДСТАВЛЯЮТЬ",
                        number: 4
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "11 22 33 44 55 66 77 88 99 00 -- == 1234 4567 890- ==== -098 7655 4321 1346 8097 8097" +
                            " 6547 890- =-09 1234 4321 5678 8765 890- -098 ====",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "1235 1235 8974 8974 3895 3895 6109 6109 1740 1740 -1-= -1-= 0=-- 0=-- =959 =959 " +
                            "2-05 2-05 8091 8091 7896 7896 0987 0987 =392 =392 1785 1785 5456 5456",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "08-= 7325 6487 4=26 5897 3--4 65=9 8270 9=-= -=4- 2=-4 9=18 5092 37-= 5873 " +
                            "2569 19=- =-87 2981 6853 1=61 =--= 40-2 0=48 0932 7409 0937 4894 3570 3243 4637 6654 7653",
                        number: 2
                    },
                    {
                        name: "Вправа №4",
                        text: "10247- 983-26 7542-6 158736 298472 304809 2-3848 932374 93-872 687474 98=328 " +
                            "947598 734658 73465= -=0059 093475 896257 798346 593426 876559",
                        number: 3
                    },
                ],
                [
                    {
                        name: "Вправа №1",
                        text: "₴₴ '' !! \"\" №№ ;; %% :: ?? ** (( )) __ ++ ₴!\"№ ;%:? *()_ _+_+ +_+_ )(*? :%;№ " +
                            "\"!₴' ₴!\"№ ;%:? ?*() +_)( *?:% %;№\" \"!₴₴ ₴\"!№ ;:%? :*?(  *)(_  )_+_",
                        number: 0
                    },
                    {
                        name: "Вправа №2",
                        text: "₴!\"№ ₴!\"№ %:+_ %:+_ )+() )+() **%? **%? %;:! %;:! ₴₴\"% ₴₴\"% ;::? ;::? ??*( " +
                            "??*( *?)_ *?)_ *_?( *_?( _*:%  _*:% %;№; %;№; №\"₴! №\"₴! ;%:₴ ;%:₴",
                        number: 1
                    },
                    {
                        name: "Вправа №3",
                        text: "₴!\"№ '%;: *_+) *?(: ?;:! ₴!₴! '₴₴! \"%№; %:;? :()( _')_ ?:*: %;№\" ₴!№№ ₴;'₴ " +
                            "!№!\" %;:* !₴₴: *:;№ \"''\" !;№? ;\";% ?%№; %;:' *(?) :*); №!№₴ ₴₴₴; !%!№ ;:?* " +
                            "*::? \";;% ;:*) ?:()",
                        number: 2
                    },
                ],

                localStorage.getItem("typingTextsukrainianLayout")
                    ? JSON.parse(localStorage.getItem("typingTextsukrainianLayout"))
                    : localStorage.setItem("typingTextsukrainianLayout", JSON.stringify([
                        {
                            name: "Аліса в Країні Чудес (частина №1)", number: "0",
                            text: "Аліса тяжко занудьгувала, сидячи на березі без діла. Разів зо два зазирнула " +
                                "вона до книжки, яку читала її сестра, але не знайшла там ні малюнків, ні розмов. " +
                                "-Ет, чого варта книжка без малюнків та розмов? - " +
                                "зітхнула Аліса. Вона сиділа й думала (наскільки це можливо у спеку, коли туманіє " +
                                "голова й злипаються повіки), піти чи не піти нарвати квіток - це ж бо така втіха " +
                                "сплести собі з них віночок. Аж тут повз неї промайнув Кролик - білий, з рожевими " +
                                "очима. Диво, звісно, невелике, як не дивина було й почути, що Кролик бубонить " +
                                "собі під ніс: -Ой лишенько, лишенько, як я забарився!"
                        },
                        {
                            name: "Аліса в Країні Чудес (частина №2)", number: "1",
                            text: "(Згадуючи про це опісля, вона подумала, що мала б таки здивуватися, але тієї миті " +
                                "все видавалося цілком звичайним.) Та коли Кролик раптом добув із нагрудної кишеньки " +
                                "годинника й, зиркнувши на нього, поспішив далі, Аліса схопилася на ноги: зроду-віку " +
                                "ще не траплявся їй Кролик із нагрудною кишенькою та ще й при годиннику. " +
                                "Аж тремтячи з цікавості, вона кинулася за ним навздогін - і, на щастя, ще " +
                                "встигла помітити, як він гулькнув у велику кролячу нору під живоплотом."
                        },
                        {
                            name: "Аліса в Країні Чудес (частина №3)", number: "2",
                            text: "Аліса з розгону пірнула слідом за Кроликом, навіть не подумавши, " +
                                "як буде звідти вибиратися. " +
                                "Якусь часину кроляча нора йшла рівненько, немов тунель, а тоді зненацька " +
                                "урвалася - так зненацька, аж Аліса й не зчулась, як жухнула навсторч у " +
                                "якийсь глибоченний колодязь."
                        },
                        {
                            name: "Аліса в Країні Чудес (частина №4)", number: "3",
                            text: "Чи то колодязь був просто таки бездонний, а чи так повільно вона падала, але " +
                                "дорогою їй не бракувало часу роззирнутися і поміркувати, що ж буде далі. " +
                                "Найперше Аліса глянула вниз, щоб бачити, куди вона падає, - але там було " +
                                "темно, хоч в око стрель. Тоді вона оглянула стіни колодязя: на них була " +
                                "сила-силенна маленьких мисників та книжкових полиць; подекуди на кілочках " +
                                "висіли мапи й картини. З одного мисника вона прихопила баночку з наліпкою " +
                                "\"ПОМАРАНЧЕВЕ ВАРЕННЯ\" - та ба! - виявилося, що вона порожня. Викидати її " +
                                "було лячно (ще вб'є когось унизу), тож Аліса примудрилася тицьнути її на одну " +
                                "з поличок, повз яку пролітала."
                        },
                        {
                            name: "Аліса в Країні Чудес (частина №5)", number: "4",
                            text: "- Овва! - чудувалася Аліса. - Після такого падіння не страшно й зі сходів скотитися! " +
                                "Ото вдома дивуватимуться, яка я хоробра! Та що там сходи! Тепер я й не писнула б, якби " +
                                "впала навіть із даху! (І це, мабуть, було правдою.) " +
                                "Униз, униз, униз... От би падати так до безкінечності! " +
                                "- Цікаво, скільки миль я вже пролетіла? - міркувала Аліса вголос. Мабуть, " +
                                "уже й до центру Землі недалеко. Ану прикиньмо: по-моєму, до нього ще десь " +
                                "чотири тисячі миль. " +
                                "(Аліса, бач, просвітилася в цих питаннях на уроках у школі, і хоч зараз була не " +
                                "найкраща нагода хизуватися знаннями - слухати нікому! - а все ж попрактикуватися " +
                                "ніколи не завадить.) " +
                                "- Так, здається, саме стільки, але тоді постає питання: на якій я широті й довготі? " +
                                "(Аліса уявлення не мала, що таке \"широта\" й \"довгота\", але ці поважно-вчені слова " +
                                "неабияк тішили її вухо.) " +
                                "Трохи згодом вона знову заходилася міркувати вголос: " +
                                "- А що, як я провалюся наскрізь? Ото буде кумедно - вигулькнути серед людей, що ходять" +
                                " униз головою! Антипади, чи як їх там (вона була навіть рада, що ніхто зараз її не " +
                                "чує, бо слово пролунало якось трохи не так)."
                        },
                    ])),

                // [
                //     {
                //         name: "Аліса в Країні Чудес (частина №1)", number: "0",
                //         text: "Аліса тяжко занудьгувала, сидячи на березі без діла. Разів зо два зазирнула " +
                //             "вона до книжки, яку читала її сестра, але не знайшла там ні малюнків, ні розмов. " +
                //             "-Ет, чого варта книжка без малюнків та розмов? - " +
                //             "зітхнула Аліса. Вона сиділа й думала (наскільки це можливо у спеку, коли туманіє " +
                //             "голова й злипаються повіки), піти чи не піти нарвати квіток - це ж бо така втіха " +
                //             "сплести собі з них віночок. Аж тут повз неї промайнув Кролик - білий, з рожевими " +
                //             "очима. Диво, звісно, невелике, як не дивина було й почути, що Кролик бубонить " +
                //             "собі під ніс: -Ой лишенько, лишенько, як я забарився!"
                //     },
                //     {
                //         name: "Аліса в Країні Чудес (частина №2)", number: "1",
                //         text: "(Згадуючи про це опісля, вона подумала, що мала б таки здивуватися, але тієї миті " +
                //             "все видавалося цілком звичайним.) Та коли Кролик раптом добув із нагрудної кишеньки " +
                //             "годинника й, зиркнувши на нього, поспішив далі, Аліса схопилася на ноги: зроду-віку " +
                //             "ще не траплявся їй Кролик із нагрудною кишенькою та ще й при годиннику. " +
                //             "Аж тремтячи з цікавості, вона кинулася за ним навздогін - і, на щастя, ще " +
                //             "встигла помітити, як він гулькнув у велику кролячу нору під живоплотом."
                //     },
                //     {
                //         name: "Аліса в Країні Чудес (частина №3)", number: "2",
                //         text: "Аліса з розгону пірнула слідом за Кроликом, навіть не подумавши, " +
                //             "як буде звідти вибиратися. " +
                //             "Якусь часину кроляча нора йшла рівненько, немов тунель, а тоді зненацька " +
                //             "урвалася - так зненацька, аж Аліса й не зчулась, як жухнула навсторч у " +
                //             "якийсь глибоченний колодязь."
                //     },
                //     {
                //         name: "Аліса в Країні Чудес (частина №4)", number: "3",
                //         text: "Чи то колодязь був просто таки бездонний, а чи так повільно вона падала, але " +
                //             "дорогою їй не бракувало часу роззирнутися і поміркувати, що ж буде далі. " +
                //             "Найперше Аліса глянула вниз, щоб бачити, куди вона падає, - але там було " +
                //             "темно, хоч в око стрель. Тоді вона оглянула стіни колодязя: на них була " +
                //             "сила-силенна маленьких мисників та книжкових полиць; подекуди на кілочках " +
                //             "висіли мапи й картини. З одного мисника вона прихопила баночку з наліпкою " +
                //             "\"ПОМАРАНЧЕВЕ ВАРЕННЯ\" - та ба! - виявилося, що вона порожня. Викидати її " +
                //             "було лячно (ще вб'є когось унизу), тож Аліса примудрилася тицьнути її на одну " +
                //             "з поличок, повз яку пролітала."
                //     },
                //     {
                //         name: "Аліса в Країні Чудес (частина №5)", number: "4",
                //         text: "- Овва! - чудувалася Аліса. - Після такого падіння не страшно й зі сходів скотитися! " +
                //             "Ото вдома дивуватимуться, яка я хоробра! Та що там сходи! Тепер я й не писнула б, якби " +
                //             "впала навіть із даху! (І це, мабуть, було правдою.) " +
                //             "Униз, униз, униз... От би падати так до безкінечності! " +
                //             "- Цікаво, скільки миль я вже пролетіла? - міркувала Аліса вголос. Мабуть, " +
                //             "уже й до центру Землі недалеко. Ану прикиньмо: по-моєму, до нього ще десь " +
                //             "чотири тисячі миль. " +
                //             "(Аліса, бач, просвітилася в цих питаннях на уроках у школі, і хоч зараз була не " +
                //             "найкраща нагода хизуватися знаннями - слухати нікому! - а все ж попрактикуватися " +
                //             "ніколи не завадить.) " +
                //             "- Так, здається, саме стільки, але тоді постає питання: на якій я широті й довготі? " +
                //             "(Аліса уявлення не мала, що таке \"широта\" й \"довгота\", але ці поважно-вчені слова " +
                //             "неабияк тішили її вухо.) " +
                //             "Трохи згодом вона знову заходилася міркувати вголос: " +
                //             "- А що, як я провалюся наскрізь? Ото буде кумедно - вигулькнути серед людей, що ходять" +
                //             " униз головою! Антипади, чи як їх там (вона була навіть рада, що ніхто зараз її не " +
                //             "чує, бо слово пролунало якось трохи не так)."
                //     },
                // ],
            ],
            notTypingKeys: [
                "Backspace", "Insert", "Delete", "PageUp", "PageDown", "Tab", "Control", "Alt", "Shift",
                "CapsLock", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Escape",
                "Enter", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Meta"
            ],
        },
    },
}

const layoutsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EXERCISE: {
            const layoutLevel = "currentLevel" + action.layout;
            const layoutExercise = "currentExercise" + action.layout;

            localStorage.setItem(layoutLevel, action.level);
            localStorage.setItem(layoutExercise, action.exercise);

            return {...state, [layoutLevel]: action.level, [layoutExercise]: action.exercise}
        }
        case ADD_CUSTOM_TEXT: {
            const keyboard = action.keyboard;
            const textsName = "typingTexts" + keyboard;

            const typingTexts =  JSON.parse(localStorage.getItem(textsName));
            typingTexts.push(action.textObj);
            localStorage.setItem(textsName, JSON.stringify(typingTexts));

            const newTypingTexts = JSON.parse(localStorage.getItem(textsName));

            return {
                ...state, keyboards: {
                    ...state.keyboards, [keyboard]: {
                        ...state.keyboards[keyboard], texts: [
                            ...state.keyboards[keyboard].texts.slice(0, -1), newTypingTexts,
                        ],
                    }
                },
            }
        }
        case DELETE_CUSTOM_TEXT: {
            // console.log("hello");
            const keyboard = action.keyboard;
            const textsName = "typingTexts" + keyboard;

            const typingTexts =  JSON.parse(localStorage.getItem(textsName));
            console.log("texts: ", typingTexts);
            typingTexts.splice(action.index, 1);
            console.log("new texts: ", typingTexts, action.index);

            localStorage.setItem(textsName, JSON.stringify(typingTexts));
            const newTypingTexts = JSON.parse(localStorage.getItem(textsName));

            // console.log("new texts: ", newTypingTexts);
            // console.log("state: ", [state.keyboards[keyboard].texts[state.keyboards[keyboard].texts.length-1]]);

            return {
                // ...state
                ...state, keyboards: {
                    ...state.keyboards, [keyboard]: {
                        ...state.keyboards[keyboard], texts: [
                            ...state.keyboards[keyboard].texts.slice(0, -1), newTypingTexts,
                        ],
                    }
                },
            }
        }
        default: {
            return state;
        }
    }
}

export const setNewExercise = (level, exercise, layout) => ({type: CHANGE_EXERCISE, level, exercise, layout});
export const setNewCustomText = (keyboard, textObj) => ({type: ADD_CUSTOM_TEXT, keyboard, textObj});
export const setDeleteCustomText = (keyboard, index) => ({type: DELETE_CUSTOM_TEXT, keyboard, index});

export default layoutsReducer;
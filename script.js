const questions = [
    {
        question: "لما يكون عندك وقت فراغ، إيه أكتر حاجة تحب تعملها؟",
        answers: [
            { text: "💻 أجرب حاجة على الكمبيوتر أو أتعلم برمجة", field: "computer" },
            { text: "🎨 أرسم أو أصمم حاجة", field: "art" },
            { text: "🎵 أسمع أو أعزف موسيقى", field: "music" },
            { text: "🧸 أتعامل مع الأطفال وأساعدهم", field: "children" },
            { text: "🗣️ أحب الكلام والتواصل ومساعدة الناس", field: "speech" },
            { text: "🎭 أمثل أو أقدم حاجة قدام الناس", field: "theater" }
        ]
    },

    {
        question: "لو طلب منك تعملي مشروع في الجامعة، تختاري إيه؟",
        answers: [
            { text: "💻 موقع إلكتروني أو تطبيق", field: "computer" },
            { text: "🎨 تصميم أو لوحة فنية", field: "art" },
            { text: "🎵 عمل أو عرض موسيقي", field: "music" },
            { text: "🧸 نشاط تعليمي للأطفال", field: "children" },
            { text: "🗣️ مشروع عن التواصل ومساعدة الآخرين", field: "speech" },
            { text: "🎭 عرض مسرحي أو تمثيلي", field: "theater" }
        ]
    },

    {
        question: "إيه أكتر حاجة بتحسي إنك شاطرة فيها؟",
        answers: [
            { text: "🧠 حل المشكلات والتكنولوجيا", field: "computer" },
            { text: "✨ الإبداع والرسم والتصميم", field: "art" },
            { text: "🎶 الإيقاع والموسيقى", field: "music" },
            { text: "❤️ التعامل مع الأطفال", field: "children" },
            { text: "💬 التواصل وفهم الآخرين", field: "speech" },
            { text: "🎬 التمثيل والأداء أمام الناس", field: "theater" }
        ]
    },

    {
        question: "لو هتتعلمي مهارة جديدة، تختاري إيه؟",
        answers: [
            { text: "💻 البرمجة والتكنولوجيا", field: "computer" },
            { text: "🎨 الرسم والتصميم", field: "art" },
            { text: "🎵 العزف والغناء", field: "music" },
            { text: "🧸 طرق تعليم الأطفال", field: "children" },
            { text: "🗣️ مهارات التخاطب والتواصل", field: "speech" },
            { text: "🎭 التمثيل والمسرح", field: "theater" }
        ]
    },

    {
        question: "أي مكان تتخيلي نفسك مرتاحة فيه أكتر؟",
        answers: [
            { text: "💻 قدام الكمبيوتر", field: "computer" },
            { text: "🎨 في مكان للرسم والتصميم", field: "art" },
            { text: "🎵 في مكان متعلق بالموسيقى", field: "music" },
            { text: "🧸 في بيئة تعليمية مليانة أطفال", field: "children" },
            { text: "🗣️ في مكان أقدر أساعد فيه الناس على التواصل", field: "speech" },
            { text: "🎭 على المسرح أو وسط فريق تمثيل", field: "theater" }
        ]
    }
];

const results = {
    computer: {
        title: "💻 تكنولوجيا التعليم / الحاسب",
        text: "واضح إن التكنولوجيا وحل المشكلات والعمل على الكمبيوتر من الحاجات اللي بتشدك. ممكن تلاقي نفسك مرتاح في المجالات المرتبطة بالحاسب وتكنولوجيا التعليم."
    },

    art: {
        title: "🎨 التربية الفنية",
        text: "يبدو إن الإبداع والرسم والتصميم من الحاجات القريبة منك. المجالات الفنية والتصميم ممكن تكون مناسبة لاهتماماتك."
    },

    music: {
        title: "🎵 التربية الموسيقية",
        text: "واضح إن الموسيقى والإيقاع والأداء الموسيقي ليهم مكان خاص عندك. ممكن تستمتع بالمجالات المرتبطة بالموسيقى."
    },

    children: {
        title: "🧸 الطفولة المبكرة",
        text: "يبدو إنك بتحب التعامل مع الأطفال والتعليم ومساعدتهم. مجال الطفولة المبكرة ممكن يكون قريب من اهتماماتك."
    },

    speech: {
        title: "🗣️ التخاطب",
        text: "التواصل ومساعدة الآخرين من الحاجات اللي بتشدك. ممكن يكون مجال التخاطب قريب من اهتماماتك."
    },

    theater: {
        title: "🎭 المسرح التربوي",
        text: "واضح إنك بتحب التعبير والأداء والتواجد وسط الناس. المسرح التربوي ممكن يكون مجال ممتع بالنسبة لك."
    }
};

let currentQuestion = 0;
let scores = {
    computer: 0,
    art: 0,
    music: 0,
    children: 0,
    speech: 0,
    theater: 0
};

function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `السؤال ${currentQuestion + 1} من ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.onclick = function () {
            answerQuestion(answer.field);
        };

        answersContainer.appendChild(button);
    });

    document.getElementById("quiz-result").textContent = "";
}

function answerQuestion(field) {

    scores[field]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
}

function showResult() {

    let bestField = "computer";
    let highestScore = scores.computer;

    for (const field in scores) {

        if (scores[field] > highestScore) {

            highestScore = scores[field];
            bestField = field;
        }
    }

    const result = results[bestField];

    document.getElementById("question-number").textContent =
        "🎉 النتيجة ظهرت!";

    document.getElementById("question").textContent =
        result.title;

    document.getElementById("answers").innerHTML = `
        <div style="
            background: white;
            padding: 25px;
            border-radius: 18px;
            margin-top: 15px;
        ">
            <p>${result.text}</p>

            <p style="
                margin-top: 15px;
                color: #7255b8;
                font-weight: bold;
            ">
                النتيجة دي للتسلية واكتشاف اهتماماتك، مش اختبار رسمي لتحديد التخصص.
            </p>

            <button onclick="restartQuiz()" style="
                margin-top: 20px;
                background: #7255b8;
                color: white;
            ">
                🔄 جرب الاختبار مرة تانية
            </button>
        </div>
    `;

    document.getElementById("quiz-result").textContent = "";
}

function restartQuiz() {

    currentQuestion = 0;

    scores = {
        computer: 0,
        art: 0,
        music: 0,
        children: 0,
        speech: 0,
        theater: 0
    };

    loadQuestion();
}

loadQuestion();
const requirementsImg = document.getElementById("requirementsImg");
const imageModal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const closeImage = document.querySelector(".close-image");

requirementsImg.addEventListener("click", function () {
    largeImage.src = this.src;
    imageModal.classList.add("show");
});

closeImage.addEventListener("click", function () {
    imageModal.classList.remove("show");
});

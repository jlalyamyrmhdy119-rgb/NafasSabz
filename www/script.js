const trees = {
    oak: {
        name: "بلوط",
        folder: "oak",
        description: "درخت بلوط یکی از درختان پهن‌برگ و بادوام است که در مناطق مختلف جهان رشد می‌کند. این درخت تنه‌ای محکم، شاخه‌هایی گسترده و تاجی بزرگ دارد. برگ‌های آن معمولاً پهن و دارای بریدگی هستند. میوه بلوط به شکل فندقه است و پوششی کاسه‌مانند دارد. درخت بلوط می‌تواند سال‌های بسیار زیادی عمر کند و نقش مهمی در حفظ تنوع زیستی جنگل‌ها داشته باشد.",
features: [
    "دارای تنه‌ای محکم و چوبی",
    "برگ‌های پهن و لوب‌دار",
    "تولید میوه بلوط",
    "عمر طولانی",
    "ایجاد زیستگاه برای جانوران"
]
    },

    pine: {
        name: "کاج",
        folder: "pine",
        description: "کاج از درختان همیشه‌سبز و سوزنی‌برگ است. بیشتر گونه‌های آن برگ‌هایی باریک و سوزنی‌شکل دارند که معمولاً در تمام سال روی شاخه‌ها باقی می‌مانند. دانه‌های کاج در ساختاری به نام مخروط تشکیل می‌شوند. این درخت در بسیاری از مناطق سرد و معتدل رشد می‌کند و به دلیل سازگاری با شرایط محیطی مختلف شناخته شده است.",
features: [
    "دارای برگ‌های سوزنی‌شکل",
    "همیشه‌سبز بودن بیشتر گونه‌ها",
    "تولید مخروط و دانه",
    "دارای تنه چوبی و مستقیم",
    "مناسب برای مناطق سرد و معتدل"
]
    },

    olive: {
    name: "زیتون",
        folder: "olive",
        description: "درخت زیتون درختی همیشه‌سبز و بومی نواحی مدیترانه‌ای است. برگ‌های آن باریک و کشیده هستند و سطح زیرین برگ‌ها معمولاً رنگ روشن‌تری دارد. میوه زیتون ابتدا سبز است و با رسیدن ممکن است تیره شود. این درخت در برابر کم‌آبی مقاومت خوبی دارد و برای رشد به آب‌وهوای گرم و آفتابی نیازمند است.",
features: [
    "برگ‌های باریک و کشیده",
    "میوه دارای هسته",
    "مقاومت نسبتاً زیاد در برابر خشکی",
    "عمر طولانی",
    "استفاده از میوه برای تهیه روغن زیتون"
]
    },

    pomegranate: {
    name: "انار",
    folder: "pomegranate",
    description: "درخت انار درختی خزان‌دار یا نیمه‌همیشه‌سبز در برخی مناطق گرم است. این درخت شاخه‌های فراوان و برگ‌های کوچک و کشیده دارد. گل‌های آن معمولاً قرمز و زیبا هستند. میوه انار پوستی نسبتاً ضخیم دارد و درون آن تعداد زیادی دانه آبدار قرار گرفته است. درخت انار در مناطق گرم و نیمه‌خشک رشد مناسبی دارد.",
features: [
    "دارای برگ‌های کوچک و کشیده",
    "گل‌های معمولاً قرمز",
    "میوه دارای دانه‌های فراوان",
    "مقاومت نسبتاً خوب در برابر کم‌آبی",
    "قابل کشت در باغ‌ها و مناطق گرم"
]
    }
};
function showTrees() {
    document.body.innerHTML = `
        <h1>انتخاب درخت 🌳</h1>

        <input
            type="text"
            id="treeSearch"
            placeholder="نام درخت را جست‌وجو کن..."
            oninput="searchTrees()"
        >

        <div id="treeResults">
            ${Object.keys(trees).map(key => `
                <button onclick="showTree('${key}')">
                    ${trees[key].name}
                </button>
            `).join("")}
        </div>

        <button class="back-button" onclick="location.reload()">
            بازگشت
        </button>
    `;
}
function showTree(key) {
    const tree = trees[key];

    document.body.innerHTML = `
        <h1>${tree.name}</h1>

        <div class="info-card">
            <h2>معرفی درخت</h2>
            <p>${tree.description}</p>
        </div>

        <div class="info-card">
            <h2>ویژگی‌ها</h2>
            <p>${tree.features}</p>
        </div>

        <div class="tree-images">
            ${[1, 2, 3, 4, 5].map(i => `
                <img src="images/${key}/${i}.png" alt="${tree.name}">
            `).join("")}
        </div>

        <button class="back-button" onclick="showTrees()">
            بازگشت
        </button>
    `;
}
function showCities() {
    document.body.innerHTML = `
        <h1>انتخاب شهر 🌍</h1>

        <input
            type="text"
            id="citySearch"
            placeholder="نام شهر را جست‌وجو کن..."
            oninput="searchCities()"
        >

        <div id="cityResults">
            ${Object.keys(cities).map(key => `
                <button onclick="showCity('${key}')">
                    ${cities[key].name}
                </button>
            `).join("")}
        </div>

        <button class="back-button" onclick="location.reload()">
            بازگشت
        </button>
    `;
}
const cities = {
    tehran: {
        name: "تهران",
        climate: "نیمه‌خشک؛ تابستان‌های گرم و زمستان‌های نسبتاً سرد.",
        soil: "در بخش‌های مختلف، خاک آبرفتی، رسی و شنی دیده می‌شود.",
        plants: ["چنار", "زبان‌گنجشک", "ارغوان", "بادام کوهی"],
        trees: ["بلوط", "زیتون"]
    },

    isfahan: {
        name: "اصفهان",
        climate: "خشک؛ تابستان‌های گرم و زمستان‌های سرد.",
        soil: "خاک‌های آبرفتی، رسی و در بعضی مناطق شور.",
        plants: ["گز", "پسته کوهی", "بادام کوهی", "اسکنبیل"],
        trees: ["زیتون", "انار"]
    },

    shiraz: {
        name: "شیراز",
        climate: "نیمه‌خشک؛ تابستان‌های گرم و زمستان‌های نسبتاً معتدل.",
        soil: "خاک‌های آبرفتی و آهکی در بخش‌هایی از منطقه.",
        plants: ["بلوط", "بادام کوهی", "بنه", "ارژن"],
        trees: ["بلوط", "انار"]
    },

    tabriz: {
        name: "تبریز",
        climate: "سرد و نیمه‌خشک؛ زمستان‌های سرد و تابستان‌های نسبتاً گرم.",
        soil: "خاک‌های آبرفتی و رسی در دشت‌ها و اطراف شهر.",
        plants: ["ارس", "بادام کوهی", "زالزالک", "گون"],
        trees: ["کاج", "بلوط"]
    },

    mashhad: {
        name: "مشهد",
        climate: "نیمه‌خشک؛ تابستان‌های گرم و زمستان‌های سرد.",
        soil: "خاک‌های آبرفتی، رسی و در بعضی نواحی شور.",
        plants: ["ارس", "پسته کوهی", "بادام کوهی", "گون"],
        trees: ["کاج", "انار"]
    }
};
function showCity(key) {
    const city = cities[key];

    document.body.innerHTML = `
        <h1>${city.name}</h1>

        <div class="info-card">
            <h2>🌤️ آب‌وهوا</h2>
            <p>${city.climate}</p>
        </div>

        <div class="info-card">
            <h2>🌱 نوع خاک</h2>
            <p>${city.soil}</p>
        </div>

        <div class="info-card">
            <h2>🌿 پوشش گیاهی</h2>
            <ul>
                ${city.plants.map(plant =>
                    `<li>${plant}</li>`
                ).join("")}
            </ul>
        </div>

        <div class="info-card">
            <h2>🌳 درختان پیشنهادی</h2>
            <ul>
                ${city.trees.map(tree => {
                    const treeKey = Object.keys(trees).find(
                        id => trees[id].name === tree
                    );

                    return `
                        <li>
                            <button class="tree-button"
                                onclick="showTree('${treeKey}')">
                                ${tree}
                            </button>
                        </li>
                    `;
                }).join("")}
            </ul>
        </div>

        <button class="back-button" onclick="showCities()">
            بازگشت به شهرها
        </button>
    `;
}

function showMessage(name) {
    alert("شما " + name + " را انتخاب کردید.");
}
function showLibrary() {
    document.body.innerHTML = `
        <h1>کتابخانه درختان 🌳</h1>
        <p>برای دیدن درخت بعدی اسکرول کن</p>

        <div class="library-feed">

            ${Object.keys(trees).map(key => `
                <section class="library-item">
                    <h2>${trees[key].name}</h2>

                    <img
                        src="images/${trees[key].folder}/1.png"
                        alt="${trees[key].name}"
                    >

                    <p>${trees[key].description}</p>

                    <button class="tree-button"
                        onclick="showTree('${key}')">
                        اطلاعات کامل درخت
                    </button>
                </section>
            `).join("")}

        </div>

        <button class="back-button"
            onclick="location.reload()">
            بازگشت
        </button>
    `;
}
function searchTrees() {
    const search = document.getElementById("treeSearch").value;
    const results = document.getElementById("treeResults");

    results.innerHTML = Object.keys(trees)
        .filter(key => trees[key].name.includes(search))
        .map(key => `
            <button onclick="showTree('${key}')">
                ${trees[key].name}
            </button>
        `).join("");
}
function searchCities() {
    const search = document.getElementById("citySearch").value;
    const results = document.getElementById("cityResults");

    results.innerHTML = Object.keys(cities)
        .filter(key => cities[key].name.includes(search))
        .map(key => `
            <button onclick="showCity('${key}')">
                ${cities[key].name}
            </button>
        `).join("");
}
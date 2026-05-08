import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9860e129-0699-4474-97cd-56aa52fa7048/files/a00edad5-eeeb-423b-aad2-a1b59c4b5d59.jpg";

const animals = [
  {
    id: 1,
    name: "Амурский тигр",
    latin: "Panthera tigris altaica",
    emoji: "🐯",
    habitat: "Дальний Восток",
    diet: "Хищник",
    lifespan: "15–20 лет",
    status: "Под угрозой",
    statusColor: "text-red-600 bg-red-50",
    color: "from-orange-50 to-amber-50",
    accent: "border-orange-300",
    description: "Самая крупная кошка на планете. Обитает в хвойных лесах Дальнего Востока России. Мастер маскировки и терпения — может часами выжидать добычу.",
    facts: [
      "Прыжок достигает 6 метров в длину",
      "Каждый тигр имеет уникальный узор полос",
      "Плавают с удовольствием и умеют охотиться в воде",
    ],
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&q=80",
  },
  {
    id: 2,
    name: "Африканский слон",
    latin: "Loxodonta africana",
    emoji: "🐘",
    habitat: "Африканская саванна",
    diet: "Травоядный",
    lifespan: "60–70 лет",
    status: "Уязвимый",
    statusColor: "text-amber-700 bg-amber-50",
    color: "from-stone-50 to-gray-50",
    accent: "border-stone-300",
    description: "Крупнейшее наземное животное Земли. Обладает исключительной памятью и развитым интеллектом. Живёт сложной социальной жизнью в матриархальных группах.",
    facts: [
      "Пьёт до 200 литров воды в день",
      "Хобот содержит более 40 000 мышц",
      "Узнают себя в зеркале — признак самосознания",
    ],
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
  },
  {
    id: 3,
    name: "Жираф",
    latin: "Giraffa camelopardalis",
    emoji: "🦒",
    habitat: "Восточная Африка",
    diet: "Травоядный",
    lifespan: "25 лет",
    status: "Уязвимый",
    statusColor: "text-amber-700 bg-amber-50",
    color: "from-yellow-50 to-orange-50",
    accent: "border-yellow-300",
    description: "Самое высокое животное на планете. Длинная шея позволяет доставать листья акаций, недоступные другим травоядным. Спят стоя всего 30 минут в сутки.",
    facts: [
      "Рост до 6 метров — выше двухэтажного дома",
      "Язык длиной 45 см и тёмно-синего цвета",
      "Сердце весит около 11 кг и бьётся 150 раз/мин",
    ],
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80",
  },
  {
    id: 4,
    name: "Горилла",
    latin: "Gorilla gorilla",
    emoji: "🦍",
    habitat: "Центральная Африка",
    diet: "Травоядный",
    lifespan: "35–40 лет",
    status: "Под угрозой",
    statusColor: "text-red-600 bg-red-50",
    color: "from-green-50 to-emerald-50",
    accent: "border-green-300",
    description: "Ближайший родственник человека — ДНК совпадает на 98,3%. Живут семейными группами под руководством самца-«серебряной спины». Общаются жестами и звуками.",
    facts: [
      "Могут научиться языку жестов",
      "Делают новое гнездо каждую ночь",
      "ДНК совпадает с человеческим на 98,3%",
    ],
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80",
  },
  {
    id: 5,
    name: "Полярный медведь",
    latin: "Ursus maritimus",
    emoji: "🐻‍❄️",
    habitat: "Арктика",
    diet: "Хищник",
    lifespan: "25–30 лет",
    status: "Уязвимый",
    statusColor: "text-amber-700 bg-amber-50",
    color: "from-blue-50 to-cyan-50",
    accent: "border-blue-200",
    description: "Крупнейший наземный хищник планеты. Прекрасный пловец — может проплыть несколько сотен километров. Шерсть прозрачная и полая внутри для теплоизоляции.",
    facts: [
      "Шерсть не белая — она прозрачная",
      "Чует добычу за 30 км и под метром снега",
      "Лапы работают как вёсла при плавании",
    ],
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80",
  },
  {
    id: 6,
    name: "Фламинго",
    latin: "Phoenicopterus roseus",
    emoji: "🦩",
    habitat: "Тропики и субтропики",
    diet: "Всеядный",
    lifespan: "20–30 лет",
    status: "Вне угрозы",
    statusColor: "text-green-700 bg-green-50",
    color: "from-pink-50 to-rose-50",
    accent: "border-pink-300",
    description: "Птица с уникальным изогнутым клювом для фильтрации пищи. Розовый цвет обеспечивается каротиноидами из корма. Стоят на одной ноге, чтобы сохранить тепло.",
    facts: [
      "Рождаются белыми — розовеют от еды",
      "Стоят на одной ноге для экономии тепла",
      "Летят со скоростью 60 км/ч",
    ],
    image: "https://images.unsplash.com/photo-1563557826-b449a85e7012?w=600&q=80",
  },
];

const stats = [
  { icon: "PawPrint", value: "200+", label: "Видов животных" },
  { icon: "Users", value: "500K+", label: "Посетителей в год" },
  { icon: "TreePine", value: "45 га", label: "Территория парка" },
  { icon: "Heart", value: "30+", label: "Лет истории" },
];

const zones = [
  { name: "Африканская саванна", emoji: "🦁", color: "bg-amber-100 border-amber-300", desc: "Слоны, жирафы, зебры" },
  { name: "Тропический лес", emoji: "🦜", color: "bg-green-100 border-green-300", desc: "Приматы, рептилии, птицы" },
  { name: "Арктическая зона", emoji: "🐧", color: "bg-blue-100 border-blue-300", desc: "Пингвины, белые медведи" },
  { name: "Хищники Азии", emoji: "🐯", color: "bg-orange-100 border-orange-300", desc: "Тигры, леопарды, рыси" },
  { name: "Водный мир", emoji: "🦭", color: "bg-cyan-100 border-cyan-300", desc: "Дельфины, морские котики" },
  { name: "Птичий двор", emoji: "🦢", color: "bg-pink-100 border-pink-300", desc: "Фламинго, павлины, туканы" },
];

type Section = "home" | "animals" | "about";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null);
  const [filter, setFilter] = useState<"all" | "Хищник" | "Травоядный" | "Всеядный">("all");

  const filteredAnimals = filter === "all" ? animals : animals.filter(a => a.diet === filter);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => setActiveSection("home")}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl">🦁</span>
            <span className="font-display text-xl font-semibold text-primary">Зоопарк</span>
          </button>
          <div className="flex gap-1">
            {([["home", "Главная"], ["animals", "Животные"], ["about", "О зоопарке"]] as [Section, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => { setActiveSection(key); setSelectedAnimal(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === key
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ANIMAL MODAL */}
      {selectedAnimal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedAnimal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedAnimal(null)}
                className="absolute top-3 right-3 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
              <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${selectedAnimal.statusColor}`}>
                {selectedAnimal.status}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground">{selectedAnimal.name}</h2>
                  <p className="text-muted-foreground text-sm italic">{selectedAnimal.latin}</p>
                </div>
                <span className="text-4xl">{selectedAnimal.emoji}</span>
              </div>
              <p className="text-foreground/80 mt-3 leading-relaxed">{selectedAnimal.description}</p>

              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { icon: "MapPin", label: "Ареал", val: selectedAnimal.habitat },
                  { icon: "Utensils", label: "Питание", val: selectedAnimal.diet },
                  { icon: "Clock", label: "Продолжит.", val: selectedAnimal.lifespan },
                ].map(item => (
                  <div key={item.label} className="bg-muted rounded-xl p-3 text-center">
                    <Icon name={item.icon as "MapPin"} size={18} className="text-primary mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-semibold mt-0.5">{item.val}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={18} className="text-accent" />
                  Интересные факты
                </h3>
                <ul className="space-y-2">
                  {selectedAnimal.facts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 bg-muted/50 rounded-lg p-3">
                      <span className="text-accent font-bold text-lg leading-none mt-0.5">✦</span>
                      <span className="text-sm leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HOME */}
      {activeSection === "home" && (
        <div>
          {/* Hero */}
          <section className="relative h-[90vh] min-h-[500px] overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Зоопарк"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
              <div className="animate-fade-in">
                <p className="text-sm uppercase tracking-[0.3em] mb-4 font-body opacity-90">Добро пожаловать</p>
                <h1 className="font-display text-6xl md:text-8xl font-bold leading-none mb-6">
                  Мир живой<br />
                  <span className="italic text-amber-300">природы</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg mx-auto opacity-90 font-body mb-10">
                  Более 200 видов животных на 45 гектарах нетронутой природы
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setActiveSection("animals")}
                    className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-lg"
                  >
                    Каталог животных
                  </button>
                  <button
                    onClick={() => setActiveSection("about")}
                    className="border border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all"
                  >
                    О зоопарке
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <Icon name="ChevronDown" size={28} className="text-white/70" />
            </div>
          </section>

          {/* Stats */}
          <section className="bg-primary text-primary-foreground py-12">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <Icon name={s.icon as "Users"} size={28} className="mx-auto mb-2 opacity-80" />
                  <div className="font-display text-4xl font-bold">{s.value}</div>
                  <div className="text-sm opacity-75 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured animals */}
          <section className="py-20 px-4 hero-pattern">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Познакомьтесь</p>
                <h2 className="font-display text-5xl font-bold text-foreground">Наши питомцы</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {animals.slice(0, 3).map((animal, i) => (
                  <div
                    key={animal.id}
                    className={`bg-gradient-to-br ${animal.color} border ${animal.accent} rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all hover:-translate-y-1`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                    onClick={() => { setSelectedAnimal(animal); }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-2xl font-bold">{animal.name}</h3>
                        <span className="text-2xl">{animal.emoji}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-3">{animal.latin}</p>
                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">{animal.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Подробнее <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button
                  onClick={() => setActiveSection("animals")}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-md"
                >
                  Все животные →
                </button>
              </div>
            </div>
          </section>

          {/* Zones preview */}
          <section className="py-16 px-4 bg-muted/40">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-4xl font-bold">Зоны парка</h2>
                <p className="text-muted-foreground mt-2">Путешествие по континентам</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {zones.map(zone => (
                  <div
                    key={zone.name}
                    className={`${zone.color} border rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-default`}
                  >
                    <div className="text-3xl mb-3">{zone.emoji}</div>
                    <div className="font-semibold text-foreground">{zone.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{zone.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ANIMALS CATALOG */}
      {activeSection === "animals" && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-1">Наши жители</p>
            <h1 className="font-display text-5xl font-bold text-foreground">Каталог животных</h1>
            <p className="text-muted-foreground mt-2">Нажмите на карточку, чтобы узнать больше</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(["all", "Хищник", "Травоядный", "Всеядный"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f === "all" ? "Все животные" : f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.map((animal, i) => (
              <div
                key={animal.id}
                className={`bg-gradient-to-br ${animal.color} border ${animal.accent} rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => setSelectedAnimal(animal)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${animal.statusColor}`}>
                    {animal.status}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-2xl font-bold">{animal.name}</h3>
                    <span className="text-2xl">{animal.emoji}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic mb-3">{animal.latin}</p>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-white/70 text-foreground/70 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Icon name="MapPin" size={11} />{animal.habitat}
                    </span>
                    <span className="bg-white/70 text-foreground/70 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Icon name="Utensils" size={11} />{animal.diet}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed line-clamp-2">{animal.description}</p>
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center gap-1 text-primary text-sm font-semibold">
                    <Icon name="Lightbulb" size={14} className="text-accent" />
                    {animal.facts.length} интересных факта
                    <Icon name="ArrowRight" size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABOUT */}
      {activeSection === "about" && (
        <div>
          {/* Hero about */}
          <div className="bg-primary text-primary-foreground py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-center pointer-events-none">🌿</div>
            <div className="relative max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-widest opacity-75 mb-3">История и миссия</p>
              <h1 className="font-display text-6xl font-bold mb-6">О зоопарке</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                Мы создаём пространство, где наука встречается с природой, а каждый посетитель становится частью глобальной миссии сохранения биоразнообразия.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
            {/* History */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">С нами с 1994 года</p>
                <h2 className="font-display text-4xl font-bold mb-5">Наша история</h2>
                <p className="text-foreground/75 leading-relaxed mb-4">
                  Зоопарк был основан в 1994 году с миссией сохранения редких видов и экологического просвещения. За 30 лет мы выросли из небольшого питомника в один из крупнейших зоологических парков страны.
                </p>
                <p className="text-foreground/75 leading-relaxed">
                  Сегодня наш зоопарк участвует в международных программах разведения 15 видов, находящихся под угрозой исчезновения, и ежегодно принимает более полумиллиона гостей.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "1994", label: "Год основания", color: "bg-amber-50 border-amber-200" },
                  { num: "200+", label: "Видов животных", color: "bg-green-50 border-green-200" },
                  { num: "15", label: "Программ охраны", color: "bg-blue-50 border-blue-200" },
                  { num: "45 га", label: "Территория", color: "bg-orange-50 border-orange-200" },
                ].map(item => (
                  <div key={item.label} className={`${item.color} border rounded-2xl p-5 text-center`}>
                    <div className="font-display text-3xl font-bold text-foreground">{item.num}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="leaf-divider" />

            {/* Map zones */}
            <div>
              <div className="text-center mb-10">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Навигация</p>
                <h2 className="font-display text-4xl font-bold">Карта территории</h2>
                <p className="text-muted-foreground mt-2">Зоопарк разделён на тематические зоны по континентам</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {zones.map((zone, i) => (
                    <div
                      key={zone.name}
                      className={`${zone.color} border rounded-2xl p-4 flex items-start gap-3`}
                    >
                      <div className="text-2xl">{zone.emoji}</div>
                      <div>
                        <div className="font-semibold text-sm text-foreground">{zone.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{zone.desc}</div>
                        <div className="mt-2 text-xs font-medium text-primary">Зона {i + 1}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                  <Icon name="Info" size={14} />
                  Схема зоопарка доступна у входа и в мобильном приложении
                </p>
              </div>
            </div>

            <div className="leaf-divider" />

            {/* Mission */}
            <div>
              <div className="text-center mb-10">
                <h2 className="font-display text-4xl font-bold">Наша миссия</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "Shield", title: "Охрана природы", text: "Участвуем в 15 международных программах сохранения видов. Помогаем восстанавливать популяции редких животных.", color: "text-green-600 bg-green-50" },
                  { icon: "GraduationCap", title: "Образование", text: "Ежегодно проводим 500+ экскурсий для школьников. Наши программы помогают детям полюбить природу.", color: "text-blue-600 bg-blue-50" },
                  { icon: "Microscope", title: "Наука", text: "Собственный научный центр изучает поведение и биологию животных. Результаты публикуются в мировых журналах.", color: "text-purple-600 bg-purple-50" },
                ].map(item => (
                  <div key={item.title} className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon name={item.icon as "Shield"} size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit info */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-10">
              <div className="text-center mb-8">
                <h2 className="font-display text-4xl font-bold">Информация для посетителей</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Icon name="Clock" size={28} className="mx-auto mb-3 opacity-80" />
                  <div className="font-semibold text-lg mb-1">Режим работы</div>
                  <div className="opacity-75 text-sm">Пн–Пт: 9:00–18:00</div>
                  <div className="opacity-75 text-sm">Сб–Вс: 9:00–20:00</div>
                </div>
                <div>
                  <Icon name="Ticket" size={28} className="mx-auto mb-3 opacity-80" />
                  <div className="font-semibold text-lg mb-1">Билеты</div>
                  <div className="opacity-75 text-sm">Взрослый: 600 ₽</div>
                  <div className="opacity-75 text-sm">Детский (до 12): 300 ₽</div>
                </div>
                <div>
                  <Icon name="MapPin" size={28} className="mx-auto mb-3 opacity-80" />
                  <div className="font-semibold text-lg mb-1">Как добраться</div>
                  <div className="opacity-75 text-sm">Метро: Зоологическая</div>
                  <div className="opacity-75 text-sm">Бесплатная парковка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 py-10 mt-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦁</span>
            <span className="font-display text-xl font-semibold text-white">Зоопарк</span>
          </div>
          <p className="text-sm opacity-60 text-center">Мир живой природы · Открыты каждый день</p>
          <div className="flex gap-4 text-sm">
            <button onClick={() => setActiveSection("home")} className="hover:text-white transition-colors">Главная</button>
            <button onClick={() => setActiveSection("animals")} className="hover:text-white transition-colors">Животные</button>
            <button onClick={() => setActiveSection("about")} className="hover:text-white transition-colors">О нас</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

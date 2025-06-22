import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Базовый",
      price: "25 000",
      duration: "до 4 часов",
      features: [
        "1 оператор",
        "Основные моменты (3-5 мин)",
        "Цветокоррекция",
        "Фоновая музыка",
        "Доставка через 7 дней",
      ],
      popular: false,
    },
    {
      name: "Стандарт",
      price: "45 000",
      duration: "до 8 часов",
      features: [
        "2 оператора",
        "Полный фильм (15-20 мин)",
        "Трейлер (1-2 мин)",
        "Профессиональная цветокоррекция",
        "Лицензионная музыка",
        "Съёмка с дрона",
        "Доставка через 10 дней",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "75 000",
      duration: "весь день",
      features: [
        "3 оператора",
        "Полный фильм (25-30 мин)",
        "Трейлер + тизер",
        "Профессиональная цветокоррекция",
        "Эксклюзивная музыка",
        "Съёмка с дрона",
        "Интервью с гостями",
        "Онлайн-галерея",
        "Доставка через 14 дней",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Пакеты услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите пакет, который подходит именно для вашего мероприятия. Все
            цены указаны с учётом полного цикла работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                pkg.popular ? "ring-2 ring-purple-500 ring-offset-4" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Популярный
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-gray-600 mb-4">{pkg.duration}</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-4xl font-bold gradient-text">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">₽</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-all duration-300`}
                  size="lg"
                >
                  Выбрать пакет
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужно что-то особенное? Обсудим индивидуальные условия!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-600 hover:bg-purple-50"
          >
            Индивидуальный расчёт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

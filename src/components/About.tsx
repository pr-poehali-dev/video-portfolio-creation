import { Award, Camera, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, number: "200+", label: "Снятых мероприятий" },
    { icon: Users, number: "500+", label: "Довольных клиентов" },
    { icon: Award, number: "5", label: "Лет опыта" },
    { icon: Clock, number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Об авторе
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Привет! Меня зовут Александр, и я профессиональный видеограф с
                пятилетним опытом создания эмоциональных видеоисторий.
                Специализируюсь на съёмке мероприятий, свадеб и корпоративных
                событий.
              </p>
              <p>
                Моя философия — каждое мероприятие уникально, и моя задача
                запечатлеть не просто происходящее, а те эмоции и моменты,
                которые будут вызывать улыбку через годы.
              </p>
              <p>
                Работаю с профессиональным оборудованием: камеры Sony FX6, дроны
                DJI, стабилизаторы Ronin. Каждый проект — это индивидуальный
                подход и внимание к деталям.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Александр - видеограф"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  200+
                </div>
                <div className="text-gray-600 font-medium">
                  Счастливых клиентов
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

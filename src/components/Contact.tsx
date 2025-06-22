import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звоните в любое время",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@videostudio.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: MapPin,
      title: "Локация",
      value: "Москва и область",
      description: "Выезжаем по всей области",
    },
    {
      icon: Clock,
      title: "Время работы",
      value: "9:00 - 21:00",
      description: "Ежедневно, без выходных",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваше мероприятие? Расскажите о своих планах, и мы
            предложим лучшее решение для съёмки.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Оставьте заявку
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип мероприятия
                </label>
                <Input placeholder="Свадьба, корпоратив, день рождения..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дата и время
                </label>
                <Input placeholder="Когда планируется мероприятие?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительная информация
                </label>
                <Textarea
                  placeholder="Расскажите подробнее о вашем мероприятии, пожелания к съёмке..."
                  rows={4}
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg text-gray-700 mb-1">{info.value}</p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Готовы к съёмке?</h3>
              <p className="text-lg opacity-90 mb-6">
                Забронируйте дату прямо сейчас и получите скидку 10% на любой
                пакет услуг!
              </p>
              <Button
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              >
                Забронировать дату
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

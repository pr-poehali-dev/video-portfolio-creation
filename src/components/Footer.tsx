import { Phone, Mail, MapPin, Instagram, Send, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              VideoStudio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Создаём эмоциональные видеоистории для особенных моментов.
              Профессиональная съёмка мероприятий с 2019 года.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Telegram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О себе
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Цены
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">info@videostudio.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">Москва и область</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 VideoStudio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

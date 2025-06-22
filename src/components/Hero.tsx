import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 animate-pulse-slow"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Создаю эмоции
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              в каждом кадре
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Профессиональная видеосъёмка мероприятий, свадеб и корпоративов.
            Превращаю ваши особенные моменты в кинематографичные истории.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Посмотреть работы
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            Смотреть рилс
          </Button>
        </div>

        {/* Video Preview Placeholder */}
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video bg-black/20 rounded-2xl border border-white/20 glass-effect flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

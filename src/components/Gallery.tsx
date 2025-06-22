import { Play, Heart, Eye } from "lucide-react";

const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "Свадьба Анны и Дмитрия",
      category: "Свадьба",
      views: "12.5K",
      likes: "1.2K",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Корпоратив IT-компании",
      category: "Корпоратив",
      views: "8.3K",
      likes: "890",
      thumbnail:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "День рождения в стиле Gatsby",
      category: "День рождения",
      views: "15.7K",
      likes: "2.1K",
      thumbnail:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Выпускной вечер 2024",
      category: "Выпускной",
      views: "9.8K",
      likes: "1.5K",
      thumbnail:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Открытие ресторана",
      category: "Открытие",
      views: "6.2K",
      likes: "720",
      thumbnail:
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Концерт под открытым небом",
      category: "Концерт",
      views: "22.1K",
      likes: "3.4K",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждое видео — это уникальная история, рассказанная через призму
            профессионального взгляда. Посмотрите, как мы превращаем моменты в
            воспоминания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="video-card group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105">
            Посмотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

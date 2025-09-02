import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, Fish, Bird, Heart, Wrench, Truck, Star } from 'lucide-react';

const EnnycapezApp = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Peces Ornamentales",
      items: ["🌟 Goldfish y Carpas", "🌈 Peces Tropicales", "🎯 Peces de Agua Fría", "💎 Especies Exóticas", "🔥 Peces Betta", "⭐ Guppys y Mollys"]
    },
    {
      icon: <Bird className="w-8 h-8" />,
      title: "Aves de Compañía",
      items: ["🎵 Canarios", "💚 Periquitos", "🌺 Loros y Cotorras", "🎪 Agapornis", "👑 Cacatúas", "🎭 Especies Exóticas"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Alimentos Premium",
      items: ["🐟 Comida para Peces", "🌾 Semillas Especializadas", "💊 Suplementos Vitamínicos", "🦐 Alimento Vivo", "🥬 Verduras Frescas", "🎯 Dietas Especiales"]
    },
    {
      icon: "🏠",
      title: "Accesorios y Hábitat",
      items: ["🔧 Acuarios y Peceras", "🏰 Jaulas Especializadas", "💡 Sistemas de Iluminación", "🌊 Filtros y Bombas", "🌡️ Calentadores", "🎨 Decoración"]
    },
    {
      icon: "🍽️",
      title: "Comederos y Bebederos",
      items: ["🤖 Comederos Automáticos", "💧 Bebederos Especiales", "⏰ Dispensadores Programables", "🎯 Comederos Anti-desperdicio", "🧽 Fácil Limpieza", "📏 Diferentes Tamaños"]
    },
    {
      icon: "🌿",
      title: "Plantas y Medicamentos",
      items: ["🌱 Plantas Acuáticas", "💊 Medicamentos Veterinarios", "🧪 Tratamientos de Agua", "🍃 Plantas Naturales", "⚕️ Primeros Auxilios", "🔬 Análisis de Agua"]
    }
  ];

  const services = [
    { icon: <Wrench className="w-8 h-8" />, title: "Mantenimiento de Acuarios", desc: "Servicio completo de limpieza y mantenimiento" },
    { icon: "⚕️", title: "Consulta Veterinaria", desc: "Atención especializada para la salud de tus mascotas" },
    { icon: "🏗️", title: "Instalación de Equipos", desc: "Montaje profesional de acuarios y sistemas" },
    { icon: "📚", title: "Asesoría Especializada", desc: "Orientación experta para el cuidado óptimo" },
    { icon: <Truck className="w-8 h-8" />, title: "Entrega a Domicilio", desc: "Llevamos tus productos hasta tu casa" },
    { icon: "🎓", title: "Cursos y Talleres", desc: "Aprende las mejores técnicas de cuidado" }
  ];

  const galleryItems = [
    { title: "🐠 Peces Tropicales", bg: "from-blue-400 to-blue-600" },
    { title: "🦜 Aves Exóticas", bg: "from-green-400 to-green-600" },
    { title: "🏠 Acuarios Diseñados", bg: "from-purple-400 to-purple-600" },
    { title: "🌿 Plantas Acuáticas", bg: "from-emerald-400 to-emerald-600" },
    { title: "🔧 Servicios", bg: "from-orange-400 to-orange-600" },
    { title: "🏪 Nuestra Tienda", bg: "from-pink-400 to-pink-600" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🐠 Ennycapez
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'productos', 'servicios', 'galeria', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/+573001234567"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              💬 WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['inicio', 'productos', 'servicios', 'galeria', 'contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-pulse">
            Bienvenido a Ennycapez
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Tu tienda especializada en peces, aves y todo lo que necesitas para su cuidado profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('productos')}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Ver Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contáctanos
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nuestros Productos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  {typeof product.icon === 'string' ? (
                    <span className="text-2xl">{product.icon}</span>
                  ) : (
                    product.icon
                  )}
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                  {product.title}
                </h3>
                <ul className="space-y-2">
                  {product.items.map((item, i) => (
                    <li key={i} className="text-gray-600 py-2 border-b border-gray-100 last:border-b-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl hover:from-blue-100 hover:to-purple-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {typeof service.icon === 'string' ? (
                    <span className="text-2xl">{service.icon}</span>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Conoce Nuestras Instalaciones
          </h2>
          <p className="text-xl mb-12">
            Descubre la calidad y profesionalismo que nos caracteriza
          </p>
          
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-12 cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1" />
            </div>
            <p className="text-lg font-semibold">Haz clic para ver nuestro video institucional</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Galería
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`h-64 bg-gradient-to-br ${item.bg} rounded-3xl flex items-center justify-center text-white text-xl font-bold cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ubicación</h3>
              <p className="text-gray-600">Carrera 15 #45-67<br />Bogotá, Colombia</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Teléfono</h3>
              <p className="text-gray-600">+57 300 123 4567<br />+57 1 234 5678</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@ennycapez.com<br />ventas@ennycapez.com</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Horarios</h3>
              <p className="text-gray-600">Lun - Sáb: 8:00 AM - 6:00 PM<br />Dom: 9:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Aliados */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Nuestros Aliados Comerciales</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {['🏪 PetShop Central', '🌊 AquaTech', '🦜 Aves del Paraíso'].map((ally, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="font-bold text-gray-800">{ally}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-8 mb-8 flex-wrap">
            {['Inicio', 'Productos', 'Servicios', 'Galería', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-gray-400 mb-4">&copy; 2025 Ennycapez. Todos los derechos reservados.</p>
          <p className="text-lg">🐠 Cuidamos de tus mascotas con amor y profesionalismo 🦜</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/+573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        💬
      </a>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Video Institucional</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>
            
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1" />
                </div>
                <p className="text-lg">📹 Aquí va tu video institucional</p>
              </div>
            </div>
            
            <div className="text-gray-600">
              <p className="mb-4"><strong>Para integrar tu video:</strong></p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <code className="text-sm">
                  {`<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/TU_VIDEO_ID"
  frameborder="0" 
  allowfullscreen>
</iframe>`}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 space-y-4 z-40 hidden lg:block">
        {['🐠', '🦜', '🌿'].map((emoji, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-bounce"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnnycapezApp;

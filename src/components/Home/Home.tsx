import { useState } from 'react';
import { Carousel } from './Carousel';
import { Galery } from './Galery';
import { Award, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Image paths - using public folder paths
const sweet = '/assets/banners/cardapio/new-bolo.jpeg';
const doce = '/ensaios/galery/WhatsApp Image 2025-06-23 at 18.48.45 (1).jpeg';
const especial = '/ensaios/WhatsApp Image 2025-06-23 at 18.51.48.jpeg';
const profile = '/profile.jpg';

// Carousel images
const carouselImages = [
  '/assets/banners/apres_09_the_polittis.png',
  '/assets/banners/apres_07_the_polittis.png',
  '/assets/banners/apres_08_the_polittis.png',
  '/assets/banners/apres_09_the_polittis.png',
  '/assets/banners/apres_01_the_polittis.png'
];

// Logo
const logoImage = '/assets/banners/logo_01_the_polittis_logo_12.png';
// Pattern/Malha
const patternImage = '/assetsensaios/WhatsApp Image 2026-01-15 at 05.08.22.jpeg';

// Gallery images
const galleryImages = [
  '/ensaios/WhatsApp Image 2025-06-23 at 18.48.06.jpeg',
  '/ensaios/WhatsApp Image 2025-06-23 at 18.51.34 (1).jpeg',
  '/ensaios/WhatsApp Image 2025-06-23 at 18.48.00 (1).jpeg',
  '/ensaios/WhatsApp Image 2025-06-23 at 18.51.37 (1).jpeg',
  '/ensaios/galery/WhatsApp Image 2025-06-23 at 18.48.46.jpeg',
  '/ensaios/WhatsApp Image 2025-06-23 at 18.51.35 (1).jpeg'
];

const AboutMe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img 
              src={logoImage} 
              alt="The Politti's Logo" 
              className="h-20 mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h2 className="text-4xl font-serif text-slate-800 mb-4">Sobre mim</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conheça a história por trás de cada doce especial
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div 
                  className="w-full h-96 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-2xl shadow-xl flex items-center overflow-hidden justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <img width={600} height={500} src={profile} alt='profile' className="w-full h-full object-cover"/>
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-600/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
            {/* Story content */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-4">Minha Jornada Doce</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Olá, sou a Anna Politti! Minha paixão pela confeitaria começou ainda na escola, 
                    quando tudo era apenas um hobby. Mas quando tive meu filho, essa paixão se transformou 
                    em algo muito maior: uma forma de construir um futuro melhor para ele através dos doces.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    Desde 2019, me dedico integralmente à confeitaria, levando amor em forma de doces 
                    para meus clientes. Cada etapa do processo é feita com carinho e dedicação, desde a 
                    seleção dos ingredientes até a apresentação final. Cada doce que sai da minha cozinha 
                    carrega não apenas sabor, mas também história, amor e o sonho de um futuro melhor.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">+7 Anos</h4>
                      <p className="text-sm text-slate-600">de experiência em confeitaria artesanal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">+500 Clientes</h4>
                      <p className="text-sm text-slate-600">felizes com momentos adoçados</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Test = () => {
  return (
    <section 
      style={{
        backgroundColor: '#e5e7eb',
        backgroundImage: `url("/ensaios/malhas_01_the_polittis_malha_01.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }} 
      className="pt-32 pb-20 bg-white/50 backdrop-blur-sm relative"
    >
      {/* Gradiente no topo - transição do branco para a seção */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%)'
        }}
      ></div>
      {/* Gradiente na parte inferior - transição da seção para o branco */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%)'
        }}
      ></div>
      <div className="absolute inset-0 bg-white/85 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl font-serif text-slate-800 mb-4"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Por que escolher The Politti&apos;s?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada doce é uma obra de arte, feito com ingredientes selecionados e muito carinho
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-sky-100 rounded-lg"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="p-8 text-center">
              <img 
                src="/ensaios/WhatsApp Image 2026-01-15 at 05.08.23 (3).jpeg" 
                alt="Feito com Amor" 
                className="w-16 h-16 object-contain mx-auto mb-6 rounded-sm"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Feito com Amor</h3>
              <p className="text-slate-600">
                Cada receita é preparada com ingredientes frescos e o carinho de uma tradição familiar
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-sky-100 rounded-lg"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="p-8 text-center">
              <img 
                src="/ensaios/WhatsApp Image 2026-01-15 at 05.08.23 (4).jpeg" 
                alt="Qualidade Premium" 
                className="w-16 h-16 object-contain mx-auto mb-6 rounded-sm"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Qualidade Premium</h3>
              <p className="text-slate-600">
                Utilizamos apenas os melhores ingredientes para garantir sabor e qualidade únicos
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-sky-100 rounded-lg"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="p-8 text-center">
              <img 
                src="/ensaios/WhatsApp Image 2026-01-15 at 05.08.23 (2).jpeg" 
                alt="Tradição Artesanal" 
                className="w-16 h-16 object-contain mx-auto mb-6 rounded-sm"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Tradição Artesanal</h3>
              <p className="text-slate-600">
                Técnicas tradicionais combinadas com criatividade moderna para criar doces únicos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSession = () => {
  return (
    <section id="menu-section" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Nossas Especialidades</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubra nossa variedade de doces artesanais, cada um feito com carinho e ingredientes especiais
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border-sky-100 overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 241, 242, 0.95) 100%)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
              <img
                src={sweet}
                className="w-full h-full object-cover"
                alt="Bolo artesanal"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Bolos Artesanais</h3>
              <p className="text-slate-600 mb-4">
                Bolos únicos e personalizados para ocasiões especiais. Desde sabores clássicos até criações exclusivas.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Dois amores</li>
                <li>• Prestígio</li>
                <li>• Red velvet</li>
                <li>• Maracujá com ganache de chocolate meio amargo</li>
                <li>• Ninho com Nutella</li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border-sky-100 overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 241, 242, 0.95) 100%)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
              <img
                src={doce}
                className="w-full h-full object-cover"
                alt="Bolo artesanal"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Docinhos de Festa</h3>
              <p className="text-slate-600 mb-4">
                Pequenas delícias que despertam grandes sorrisos. Perfeitos para presentear ou saborear.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Brigadeiro tradicional</li>
                <li>• Beijinho</li>
                <li>• Bicho de pé</li>
                <li>• Leite ninho</li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border-sky-100 overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 241, 242, 0.95) 100%)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
              <img
                src={especial}
                className="w-full h-full object-cover"
                alt="Bolo artesanal"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Sobremesas Especiais</h3>
              <p className="text-slate-600 mb-4">
                Criações únicas que combinam tradição e inovação para momentos verdadeiramente especiais.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Torta cookie Nutella</li>
                <li>• Torta cookie red velvet</li>
                <li>• Pudim</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const cardapioSection = document.getElementById('cardapio-section');
              if (cardapioSection) {
                cardapioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Cardápio Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const CardapioSection = () => {
  const [tab, setTab] = useState('tradicionais');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const whatsappNumber = '5518981268295';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de fazer um pedido 😊'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const tabs = [
    { id: 'tradicionais', label: 'Tradicionais' },
    { id: 'especiais', label: 'Especiais' },
    { id: 'bolos', label: 'Bolos Caseiros' },
  ];

  const cardapioImages = {
    tradicionais: [
      '/assets/banners/cardapio/doce_simples.jpeg',
      '/assets/banners/cardapio/doce_simples2.jpeg',
      '/assets/banners/cardapio/doce_simples3.jpeg',
    ],
    especiais: [
      '/assets/banners/cardapio/doce_especial.jpeg',
      '/assets/banners/cardapio/doce_especial2.jpeg',
    ],
    bolos: [
      '/assets/banners/cardapio/bolo1.jpeg',
      '/assets/banners/cardapio/bolo2.jpeg',
    ],
  };

  // Resetar índice quando mudar de tab
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    setCurrentImageIndex(0);
  };

  const currentImages = cardapioImages[tab as keyof typeof cardapioImages] || [];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="cardapio-section" className="py-24 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #D3658A 0px,
            #D3658A 30px,
            #D76E96 30px,
            #D76E96 60px
          )`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 text-white relative z-10">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={logoImage} 
            alt="The Politti's Logo" 
            className="h-20 md:h-24 mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
            Cardápio
          </h2>
          <p className="text-white/90 text-lg">
            Docinhos & bolos artesanais
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className={`
                px-6 py-2 rounded-full border transition
                ${
                  tab === t.id
                    ? 'bg-white text-pink-600 border-white'
                    : 'border-white/60 text-white hover:bg-white/20'
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          >

            {/* TEXTO */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20">
              {tab === 'tradicionais' && (
                <>
                  <h3 className="text-3xl mb-6" style={{ color: '#D3658A' }}>
                    Docinhos Tradicionais
                  </h3>

                  <PriceRow label="Cento" price="R$ 160,00" />
                  <PriceRow label="Meio cento" price="R$ 90,00" />

                  <h4 className="mt-6 text-xl" style={{ color: '#D3658A' }}>Sabores</h4>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li>• Brigadeiro tradicional</li>
                    <li>• Brigadeiro de leite ninho</li>
                    <li>• Bicho de pé</li>
                    <li>• Beijinho</li>
                  </ul>
                </>
              )}

              {tab === 'especiais' && (
                <>
                  <h3 className="text-3xl mb-6" style={{ color: '#D3658A' }}>
                    Docinhos Especiais
                  </h3>

                  <PriceRow label="Cento" price="R$ 180,00" />
                  <PriceRow label="Meio cento" price="R$ 110,00" />

                  <h4 className="mt-6 text-xl" style={{ color: '#D3658A' }}>Sabores</h4>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li>• Brigadeiro de churros</li>
                    <li>• Leite ninho com nutella</li>
                    <li>• Bicho de pé com nutella</li>
                    <li>• Red velvet com nutella</li>
                    <li>• Ferrero Rocher</li>
                    <li>• Oreo</li>
                  </ul>
                </>
              )}

              {tab === 'bolos' && (
                <>
                  <h3 className="text-3xl mb-6" style={{ color: '#D3658A' }}>
                    Bolos Caseiros
                  </h3>

                  <ul className="space-y-3 text-slate-700">
                    <li>Cenoura com brigadeiro — <strong>R$ 35,00</strong></li>
                    <li>Chocolate com brigadeiro — <strong>R$ 35,00</strong></li>
                    <li>Fubá com goiabada — <strong>R$ 35,00</strong></li>
                    <li>Limão com mousse — <strong>R$ 35,00</strong></li>
                    <li>Churros — <strong>R$ 35,00</strong></li>
                    <li>Fubá simples — <strong>R$ 30,00</strong></li>
                    <li>Laranja — <strong>R$ 30,00</strong></li>
                  </ul>
                </>
              )}
            </div>

            {/* IMAGENS - CARROSSEL */}
            <div className="relative">
              {currentImages.length > 0 && (
                <>
                  <div className="relative w-full rounded-2xl overflow-hidden border-2 border-white/40 bg-white/90 backdrop-blur-sm shadow-xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={currentImages[currentImageIndex]}
                        alt={`${tab} ${currentImageIndex + 1}`}
                        className="w-full h-auto object-cover"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    
                    {/* Botões de navegação */}
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2 shadow-lg transition-all z-10"
                          aria-label="Imagem anterior"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2 shadow-lg transition-all z-10"
                          aria-label="Próxima imagem"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Indicadores (dots) */}
                  {currentImages.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {currentImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white w-6'
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Ir para imagem ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-green-500 hover:bg-green-600
              text-white
              px-10 py-4 rounded-full
              text-lg font-semibold
              shadow-lg transition
            "
          >
            Fazer pedido no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

/* AUX */
const PriceRow = ({ label, price }: { label: string; price: string }) => (
  <div className="flex justify-between items-center rounded-full px-5 py-2 mb-3" style={{ border: '1px solid #D3658A' }}>
    <span className="text-slate-700">{label}</span>
    <span className="px-4 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: '#D3658A' }}>
      {price}
    </span>
  </div>
);




const Footer = () => {
  const whatsappNumber = '5518981268295';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de fazer um pedido 😊');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div>
              <img 
                src={logoImage} 
                alt="The Politti's Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-slate-300 text-sm">
                Doces artesanais feitos com amor e ingredientes selecionados. 
                Cada doce é uma obra de arte única.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Links Rápidos</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#menu-section" className="hover:text-pink-400 transition-colors">
                    Cardápio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Galeria
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Contato</h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-semibold mb-4"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <p className="text-slate-300 text-sm">
                Pres. Prudente - SP
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} The Politti&apos;s. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className='w-full mx-auto px-0'>
      <Carousel images={carouselImages} logo={logoImage} patternImage={patternImage}/>
      <div className='bg-white mb-12 py-8'>
        <Test/>
        <AboutMe/>
        <MenuSession/>
        <Galery images={galleryImages}/>
      </div>
      <CardapioSection/>
      <Footer/>
    </main>
  );
}


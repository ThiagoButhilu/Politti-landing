import { motion } from 'framer-motion';

interface CarouselProps {
  images: string[];
  logo: string;
  patternImage: string;
}

export const Carousel = ({ images, logo, patternImage }: CarouselProps) => {
  return (
    <div id="default-carousel" className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
      {/* Background com malha de listras verticais rosa */}
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
      
      {/* Fotos sobrepostas - apenas desktop */}
      <div className="relative h-full w-full z-20 hidden md:block">
        {images.slice(0, 3).map((img, idx) => {
          // Posicionamento escalonado das fotos - apenas desktop
          const positionsDesktop = [
            { top: '10%', right: '10%', width: '35%', rotate: '-5deg', z: 30 },
            { top: '20%', right: '25%', width: '40%', rotate: '3deg', z: 25 },
            { top: '15%', right: '5%', width: '38%', rotate: '-2deg', z: 20 }
          ];
          const posDesktop = positionsDesktop[idx];
          
          return (
            <motion.div
              key={idx}
              className="absolute rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, x: 100, rotate: posDesktop.rotate }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: posDesktop.rotate }}
              transition={{ 
                duration: 1.2, 
                delay: idx * 0.6 + 0.5,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ scale: 1.05, rotate: parseFloat(posDesktop.rotate) + 2 }}
              style={{
                top: posDesktop.top,
                right: posDesktop.right,
                width: posDesktop.width,
                zIndex: posDesktop.z,
                aspectRatio: '4/3'
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Banner ${idx + 1}`}
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Conteúdo - centralizado no mobile, à esquerda no desktop */}
      <div className="absolute inset-0 z-40 flex items-center justify-center md:justify-start pl-0 md:pl-8 lg:pl-16">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          {/* Logo */}
          <motion.img 
            src={logo} 
            alt="The Politti's Logo" 
            className="h-28 md:h-24 lg:h-32 w-auto drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Botão Ver Cardápio - centralizado no mobile, alinhado no desktop */}
          <motion.button
            className="relative bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold overflow-hidden"
            style={{
              boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3), 0 5px 10px rgba(236, 72, 153, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 2.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => {
              const cardapioSection = document.getElementById('cardapio-section');
              if (cardapioSection) {
                cardapioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Ver Cardápio</span>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
              }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};


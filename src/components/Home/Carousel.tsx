import { motion } from 'framer-motion';

interface CarouselProps {
  images: string[];
  logo: string;
  patternImage: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export const Carousel = ({ images, logo }: CarouselProps) => {
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
          const positionsDesktop = [
            { top: '10%', right: '10%', width: '35%', rotate: -5, z: 30 },
            { top: '20%', right: '25%', width: '40%', rotate: 3, z: 25 },
            { top: '15%', right: '5%', width: '38%', rotate: -2, z: 20 },
          ];
          const posDesktop = positionsDesktop[idx];

          return (
            <motion.div
              key={idx}
              className="absolute rounded-2xl overflow-hidden shadow-2xl will-change-transform"
              initial={{ opacity: 0, y: 24, rotate: posDesktop.rotate }}
              animate={{ opacity: 1, y: 0, rotate: posDesktop.rotate }}
              transition={{
                duration: 0.55,
                delay: 0.12 + idx * 0.1,
                ease: easeOut,
              }}
              style={{
                top: posDesktop.top,
                right: posDesktop.right,
                width: posDesktop.width,
                zIndex: posDesktop.z,
                aspectRatio: '4/3',
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Banner ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Conteúdo - centralizado no mobile, à esquerda no desktop */}
      <div className="absolute inset-0 z-40 flex items-center justify-center md:justify-start pl-0 md:pl-8 lg:pl-16">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <motion.img
            src={logo}
            alt="The Politti's Logo"
            className="h-28 md:h-24 lg:h-32 w-auto drop-shadow-lg"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
          />

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: easeOut }}
          >
            <button
              className="relative bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3), 0 5px 10px rgba(236, 72, 153, 0.2)',
              }}
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
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                }}
              />
            </button>

            <button
              className="relative bg-white/95 hover:bg-white text-pink-600 border-2 border-white px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              type="button"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Entrar em Contato
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0606] min-h-[90vh] md:min-h-[100vh] flex items-center">
      {/* BACKGROUND */}
      <div className="absolute -inset-[2px] pointer-events-none">
        <img
          src={heroBg}
          alt="Criminal Elite"
          className="
            w-full h-full object-cover
            object-center sm:object-[60%_center] md:object-[70%_center] lg:object-[72%_center]
            opacity-95 [backface-visibility:hidden] [transform:translateZ(0)]
          "
          loading="eager"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-y-0 left-0 w-[85%] xs:w-[78%] sm:w-[66%] md:w-[60%] lg:w-[58%] bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/85 via-black/50 to-transparent md:hidden pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full h-full grid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            self-center
            w-full max-w-[780px]
            px-5 sm:px-6
            md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
            text-left text-white space-y-5
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="
              text-[1.85rem] leading-[1.12]
              sm:text-[2.2rem] sm:leading-[1.12]
              md:text-5xl md:leading-[1.1]
              lg:text-6xl font-extrabold tracking-tight
            "
          >
            Estrutura para{" "}
            <span className="text-red-500 whitespace-nowrap">
              Advogado Criminal
            </span>{" "}
            captar com urgência e previsibilidade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="text-[0.97rem] sm:text-base md:text-lg text-white/85 max-w-[92%]"
          >
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#condicao">Quero essa estrutura</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://wa.me/48999379752?text=Quero+avancar+com+a+estrutura+digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

{/* CONTEÚDO */}
<div className="relative z-10 w-full h-full grid">
  <div
    className={`
      self-center md:self-center
      w-full max-w-[780px]
      px-5 sm:px-6
      md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
      text-left text-white space-y-5
      /* --- ajuste mobile --- */
      translate-y-[25vh] sm:translate-y-[22vh] md:translate-y-0
    `}
  >
    {/* TÍTULO */}
    <h1
      className="
        text-[1.85rem] leading-[1.12]
        sm:text-[2.2rem] sm:leading-[1.12]
        md:text-5xl md:leading-[1.1]
        lg:text-6xl font-extrabold tracking-tight
        max-w-[26rem] sm:max-w-none
      "
    >
      <span className="sm:hidden">
        Estrutura para{" "}
        <span className="text-red-500 whitespace-nowrap">
          Advogado Criminal
        </span>
        <br />
        captar com urgência e
        <br />
        previsibilidade
      </span>
      <span className="hidden sm:inline">
        Estrutura para{" "}
        <span className="text-red-500 whitespace-nowrap">
          Advogado Criminal
        </span>{" "}
        captar com urgência e previsibilidade
      </span>
    </h1>

    <p className="text-[0.97rem] sm:text-base md:text-lg text-white/85 max-w-[92%]">
      Receba uma estrutura completa de marketing jurídico pronta para gerar
      novos clientes em até 7 dias
    </p>

    <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
    </div>
  </div>
</div>

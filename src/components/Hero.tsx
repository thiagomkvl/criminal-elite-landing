{/* CONTEÚDO */}
<div className="relative z-10 w-full h-full grid">
  <div
    className="
      self-end md:self-center         /* mobile no rodapé, desktop central */
      w-full max-w-[780px]
      px-5 sm:px-6
      md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
      text-left text-white space-y-5
      mb-[4.5vh] md:mb-0              /* respiro do rodapé só no mobile */
    "
    style={{
      paddingBottom: "env(safe-area-inset-bottom, 0px)", // iOS safe area
    }}
  >
    {/* ... título, parágrafo e botões exatamente como já estão ... */}
  </div>
</div>

import founderPhoto from "@/assets/founder-photo.png";

const AboutFounder = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${founderPhoto})` }}
      >
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Por uma <span className="text-primary">única</span> vez irei revelar os bastidores da criação do meu negócio digital multimilionário.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada passo meu sempre foi milimetricamente planejado para que meu nome valesse centenas de milhões. <span className="text-primary font-semibold">Pela primeira e única vez</span>, você terá a chance de utilizar essa mesma fórmula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

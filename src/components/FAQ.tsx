import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Estou em uma situação de urgência. Vocês atendem fora do horário comercial?",
      answer: "Absolutamente. Nosso plantão criminal é 24 horas e 7 dias por semana. Em casos de prisão em flagrante ou emergência, a intervenção imediata é crucial. Ligue ou envie WhatsApp agora."
    },
    {
      question: "Como é garantido o sigilo e a privacidade do meu caso?",
      answer: "O sigilo é total e inegociável, conforme nosso Código de Ética e a natureza sensível da sua situação. Nenhuma informação é compartilhada sem sua permissão."
    },
    {
      question: "Qual é o primeiro passo para contratar seus serviços?",
      answer: "O primeiro passo é uma consulta detalhada. Nela, analisamos seu caso, entendemos o contexto e apresentamos a estratégia jurídica. O agendamento é rápido e pode ser feito agora mesmo."
    },
    {
      question: "Vocês têm experiência em casos complexos como o meu?",
      answer: "Sim. Somos especializados em Direito Penal e lidamos constantemente com casos complexos (crimes empresariais, júri, lavagem de dinheiro). Nossa experiência é a sua principal garantia."
    },
    {
      question: "Quanto custa uma consulta ou a defesa do meu caso?",
      answer: "Os honorários variam muito conforme a complexidade, a fase processual e o tipo de crime. Por isso, é essencial a consulta inicial. Após a análise, apresentaremos uma proposta clara e transparente."
    },
    {
      question: "Vocês atendem apenas na minha cidade/estado?",
      answer: "Atuamos em todo o território nacional. Com a digitalização dos processos, podemos iniciar sua defesa e te representar em qualquer estado do Brasil, de forma eficiente e rápida."
    }
  ];

  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Dúvidas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

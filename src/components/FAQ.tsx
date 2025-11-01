import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter experiência com anúncios?",
      answer: "Não. Você recebe segmentações de partida, templates prontos e um checklist detalhado para publicar sua primeira campanha em menos de 1 hora. Tudo já validado e testado."
    },
    {
      question: "Isso está alinhado à ética da OAB?",
      answer: "Sim, completamente. A comunicação é informativa e respeitosa, sem promessas individualizadas de resultado. Seguimos todas as diretrizes do Código de Ética e do Provimento 205/2021 da OAB."
    },
    {
      question: "Quanto preciso investir em anúncios?",
      answer: "Recomendamos começar com R$ 20-30/dia para testar. Com a estrutura otimizada, muitos advogados começam a ter retorno já nas primeiras semanas. O investimento é escalável conforme seus resultados."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação completa pode ser feita em até 7 dias. Perfil nas redes sociais pode ser publicado no mesmo dia, e as campanhas de anúncios podem estar rodando em 24-48h após a aprovação."
    },
    {
      question: "Recebo suporte durante a implementação?",
      answer: "Sim! Você tem acesso direto via WhatsApp para tirar dúvidas durante a implementação. Também fornecemos checklists e materiais de apoio para facilitar cada etapa."
    },
    {
      question: "A estrutura funciona para qualquer cidade?",
      answer: "Sim. As estratégias são adaptáveis para qualquer localidade do Brasil. A segmentação geográfica dos anúncios garante que você alcance apenas pessoas da sua região de atuação."
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

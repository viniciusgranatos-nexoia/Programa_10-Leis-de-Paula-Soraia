import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, Star, MessageCircle, Sparkles, Brain, Zap, Target, Users, Calendar, Award, ArrowRight, Phone, Gift, BookOpen, Presentation } from 'lucide-react';

export default function PropostaPaula() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const pilares = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mentoria Humana 1:1",
      subtitle: "Método MEI",
      items: [
        "MENTE: autorregulação e confiança baseada em evidências",
        "ENERGIA: limites e gestão de pressão do canteiro",
        "IMPACTO: comunicação assertiva e visibilidade segura"
      ],
      entrega: "Scripts e playbooks para conversas difíceis"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Avaliação DISC",
      subtitle: "Devolutiva Estratégica",
      items: [
        "Como você age sob pressão (e como ajustar)",
        "Posicionamento firme sem cair no emocional",
        "Negociar e impor limites com elegância"
      ],
      entrega: "Mapa de forças + plano de ação comportamental"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Agente de IA Exclusivo",
      subtitle: "Copiloto NEXO IA",
      items: [
        "Traduz emoção em linguagem técnica",
        "Gera roteiros para conversas com liderança",
        "Mantém log de evidências e conquistas"
      ],
      entrega: "Suporte 24/7 entre as sessões"
    }
  ];

  const sessoes = [
    "Diagnóstico MEI + metas e indicadores",
    "Gatilhos, cultura e regras do jogo",
    "Linguagem técnica e presença executiva",
    "Conversas com liderança: combinados e autonomia",
    "Influência e visibilidade estratégica",
    "Plano de carreira: próxima cadeira",
    "Simulações de reuniões e conflitos",
    "Networking estratégico e construção de aliados",
    "Consolidação de aprendizados e ajustes finais",
    "Plano 90 dias + prevenção de recaída"
  ];

  const depoimentos = [
    {
      nome: "Vicente de Paula",
      cargo: "Promovido a Supervisor",
      texto: "Este trabalho foi muito importante para resgatar minha autoestima e me posicionar de forma mais segura. O agente IA foi incrível. Começo como supervisor de uma grande empresa, conforme eu almejava.",
      destaque: true
    },
    {
      nome: "Juliana Dolabela",
      cargo: "HRBP & Sustainability Manager",
      texto: "Abordagem séria, ética e altamente humana na aplicação de IA. Trabalho diferenciado, direcionamento e resultados concretos."
    },
    {
      nome: "Murilo de Souza",
      cargo: "Business Reporting Leader",
      texto: "Visão equilibrada sobre aliar alta performance com qualidade de vida. Um consultor estratégico para momentos de carreira desafiadores."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Proposta Personalizada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            NEXO IA TALENTOS
          </h1>
          
          <p className="text-lg md:text-xl text-purple-200/80 mb-4">
            Laboratório de Inteligência Humana e Artificial
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Olá, Paula! 👋
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Preparei esta proposta especialmente para você, baseada na sua trajetória e nos desafios que compartilhou comigo.
          </p>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Reconhecimento */}
      <section id="reconhecimento" className="animate-section py-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.reconhecimento ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Sua Trajetória é Sólida</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você reúne <span className="text-white font-semibold">DP de campo com governança</span>, vivência com sistemas (SAP/Protheus), 
              rotina completa e ainda atua como <span className="text-white font-semibold">preposta</span> — além de ter liderado equipes 
              e interface com contrato/cliente (Vale).
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-purple-400 font-semibold">Isso é base real para uma cadeira maior.</span>
            </p>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-amber-500/20">
            <p className="text-gray-300 leading-relaxed">
              Ao mesmo tempo, você trouxe um ponto sensível: 
              <span className="text-amber-400 font-semibold"> quando você se destaca, aparece resistência</span> — 
              e isso drena energia, ativa ansiedade e faz você oscilar entre "segurar tudo" e reagir no limite.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xl text-white font-medium">
              O nosso trabalho é te colocar no <span className="text-purple-400">controle</span>:
            </p>
            <p className="text-lg text-purple-300 mt-2">
              postura técnica + influência + blindagem emocional, sem perder a humanidade.
            </p>
          </div>
        </div>
      </section>

      {/* Resultado Destaque */}
      <section id="resultado" className="animate-section py-12 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.resultado ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-2xl p-8 border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-lg">RESULTADO RECENTE</span>
              </div>
              <p className="text-xl text-white leading-relaxed">
                <span className="font-semibold">Vicente</span> entrou no programa buscando uma cadeira de supervisão. 
                Em <span className="text-emerald-400 font-bold">10 semanas</span>, foi contratado como 
                <span className="text-emerald-400 font-bold"> supervisor em uma grande empresa</span>.
              </p>
              <p className="text-lg text-emerald-300 mt-4 font-medium">
                O mesmo caminho está disponível para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section id="objetivo" className="animate-section py-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.objetivo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Objetivo do Programa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Ser respeitada e ouvida com linguagem técnica e presença executiva",
              "Negociar suporte com a liderança sem depender de validação",
              "Reduzir gatilhos emocionais e prevenir desgaste",
              "Preparar sua movimentação para coordenação/supervisão"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4 border border-purple-500/10">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section id="pilares" className="animate-section py-16 px-6 bg-gradient-to-b from-transparent via-purple-950/50 to-transparent">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.pilares ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            O Que Você Recebe
          </h2>
          <p className="text-center text-purple-300 mb-12">3 Pilares Integrados</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((pilar, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{pilar.title}</h3>
                <p className="text-purple-400 text-sm mb-4">{pilar.subtitle}</p>
                
                <ul className="space-y-2 mb-4">
                  {pilar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="text-sm text-purple-300">
                    <span className="font-semibold">Entrega:</span> {pilar.entrega}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section id="estrutura" className="animate-section py-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.estrutura ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Estrutura do Programa
          </h2>
          <p className="text-center text-purple-300 mb-12">10 Encontros Estratégicos · 1 por semana</p>
          
          <div className="grid gap-3">
            {sessoes.map((sessao, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-300">{sessao}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center text-purple-300">
            <p>+ Acompanhamento contínuo com Agente IA + checkpoints rápidos</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="animate-section py-16 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible.depoimentos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quem Já Passou Pelo Programa
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((dep, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 border ${dep.destaque ? 'bg-gradient-to-b from-emerald-900/30 to-teal-900/30 border-emerald-500/30' : 'bg-slate-900/50 border-purple-500/20'}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed text-sm">"{dep.texto}"</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{dep.nome}</p>
                  <p className="text-sm text-purple-400">{dep.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus Exclusivos */}
      <section id="bonus" className="animate-section py-16 px-6 bg-gradient-to-b from-transparent via-amber-950/30 to-transparent">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible.bonus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30 mb-4">
              <Gift className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold">Bônus Exclusivos</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Você Recebe Ainda Mais
            </h2>
            <p className="text-gray-400 mt-2">Diferenciais que vão além do programa</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bônus 1: Diário de Liderança */}
            <div className="bg-gradient-to-b from-purple-900/50 to-slate-900 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                <BookOpen className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Diário de Liderança IA</h3>
              <p className="text-purple-300 text-sm mb-4">Conectado ao livro que você está lendo</p>
              
              <div className="bg-purple-950/50 rounded-xl p-4 mb-6 border border-purple-500/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Vi que você está lendo <span className="text-purple-400 font-semibold">"O Diário de um CEO - 33 Leis"</span>. 
                  Vamos transformar isso em algo único seu.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    A cada sessão, você escolhe 1-2 leis do livro que ressoam com seu desafio
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    O Copiloto NEXO IA traduz para seu contexto real no canteiro
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Ao final: <span className="text-purple-400 font-semibold">"As 10 Leis de Paula para Liderança no Canteiro"</span>
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-purple-500/20">
                <p className="text-purple-300 font-semibold text-sm">
                  ✨ Seu manifesto pessoal de liderança - único, aplicável, seu
                </p>
              </div>
            </div>

            {/* Bônus 2: Apresentações Executivas */}
            <div className="bg-gradient-to-b from-blue-900/50 to-slate-900 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Presentation className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Laboratório de Apresentações IA</h3>
              <p className="text-blue-300 text-sm mb-4">Sessão especial de diferenciação técnica</p>
              
              <div className="bg-blue-950/50 rounded-xl p-4 mb-6 border border-blue-500/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Domine apresentações <span className="text-blue-400 font-semibold">interativas e modernas com IA</span> - 
                  tipo esta proposta que você está vendo agora.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Transforme relatórios maçantes em dashboards interativos
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Crie visualizações animadas de indicadores de RH
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Apresente propostas que causam <span className="text-blue-400 font-semibold">"wow effect"</span> na liderança
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-blue-500/20">
                <p className="text-blue-300 font-semibold text-sm">
                  🚀 Ninguém no canteiro faz isso - você vai se destacar brutalmente
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/20">
            <p className="text-amber-300 font-semibold">
              💎 Valor real dos bônus: R$ 1.500 | Inclusos sem custo adicional
            </p>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="investimento" className="animate-section py-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.investimento ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Investimento
          </h2>
          
          <div className="bg-gradient-to-b from-purple-900/50 to-slate-900 rounded-3xl p-8 md:p-12 border border-purple-500/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <p className="text-purple-300 mb-2">Programa Completo</p>
              <p className="text-sm text-gray-400 mb-6">10 sessões semanais + DISC + Agente IA</p>
              
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  6x <span className="text-purple-400">R$ 450</span>
                </div>
                <p className="text-gray-400">sem juros no cartão</p>
              </div>
              
              <div className="inline-block bg-emerald-500/20 rounded-xl px-6 py-4 border border-emerald-500/30 mb-8">
                <p className="text-emerald-400 font-semibold">
                  ou <span className="text-2xl">R$ 2.376</span> à vista no PIX
                </p>
                <p className="text-emerald-300 text-sm">12% de desconto</p>
              </div>
              
              <p className="text-gray-400 text-sm italic">
                💡 O Vicente recuperou o investimento no primeiro mês de salário como supervisor.
              </p>
            </div>
          </div>

          {/* Comparativo resumido */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/10">
              <p className="text-gray-400 text-sm">Mentorias no mercado</p>
              <p className="text-xl font-bold text-gray-500 line-through">R$ 7.000+</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/10">
              <p className="text-gray-400 text-sm">Outplacement executivo</p>
              <p className="text-xl font-bold text-gray-500 line-through">R$ 15.000+</p>
            </div>
            <div className="bg-purple-900/50 rounded-xl p-4 border border-purple-500/30">
              <p className="text-purple-300 text-sm">NEXO IA</p>
              <p className="text-xl font-bold text-purple-400">R$ 2.700</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="animate-section py-20 px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Pronta para dar o próximo passo?
          </h2>
          <p className="text-gray-300 mb-8">
            Clique no botão abaixo e me envie <span className="text-purple-400 font-semibold">"QUERO COMEÇAR"</span>
          </p>
          
          <a
            href="https://wa.me/5531992414791?text=QUERO%20COMEÇAR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            <MessageCircle className="w-7 h-7" />
            QUERO COMEÇAR
          </a>
          
          <p className="mt-8 text-gray-500 text-sm">
            Eu te envio o contrato + link para agendar nossa primeira sessão.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">Vinicius Granato</h3>
          <p className="text-purple-400 mb-4">Founder NEXO IA Talentos</p>
          <div className="flex items-center justify-center gap-6 text-gray-400">
            <a href="tel:+5531992414791" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Phone className="w-4 h-4" />
              31 99241-4791
            </a>
            <a href="https://instagram.com/nexoiatalentos" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              @nexoiatalentos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

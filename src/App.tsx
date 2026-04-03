/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Award,
  Zap,
  Info,
  DollarSign,
  BarChart3,
  Rocket,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { cn } from './lib/utils';

const SectionTitle = ({ children, subtitle, light = false, align = "center" }: { children: React.ReactNode, subtitle?: string, light?: boolean, align?: "center" | "left" }) => (
  <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-5xl font-black tracking-tight mb-6",
        light ? "text-white" : "text-slate-900"
      )}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-lg md:text-xl max-w-3xl font-medium",
          align === "center" ? "mx-auto" : "",
          light ? "text-slate-300" : "text-slate-500"
        )}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

interface RewardCardProps {
  goal: string;
  reward: string;
  delay?: number;
  featured?: boolean;
  type?: "weekly" | "monthly";
}

const RewardCard: React.FC<RewardCardProps> = ({ goal, reward, delay = 0, featured = false, type = "weekly" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={cn(
      "relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl group overflow-hidden",
      featured 
        ? "bg-slate-900 border-slate-800 text-white" 
        : "bg-white border-slate-100 text-slate-900 shadow-sm"
    )}
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
        featured ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-600"
      )}>
        {type === "weekly" ? <Zap size={28} /> : <Rocket size={28} />}
      </div>
      <div>
        <p className={cn("text-xs font-bold uppercase tracking-widest mb-2", featured ? "text-orange-400" : "text-orange-600")}>
          Meta {type === "weekly" ? "Semanal" : "Mensal"}
        </p>
        <h3 className="text-2xl font-black mb-2">{goal}</h3>
      </div>
      <div className="mt-auto pt-6 border-t border-slate-100/10">
        <p className={cn("text-sm font-medium mb-1", featured ? "text-slate-400" : "text-slate-500")}>Bonificação Extra</p>
        <p className="text-3xl font-black text-orange-600">{reward}</p>
      </div>
    </div>
  </motion.div>
);

interface RankingItemProps {
  pos: string;
  reward: string;
  sales?: string;
  delay?: number;
}

const RankingItem: React.FC<RankingItemProps> = ({ pos, reward, sales, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group gap-4"
  >
    <div className="flex items-center gap-5">
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center font-black text-xl transition-transform group-hover:scale-110",
        pos === "1º lugar" ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" : "bg-slate-800 text-slate-400"
      )}>
        {pos.charAt(0)}
      </div>
      <div>
        <span className="font-bold text-white block text-lg">{pos}</span>
        {sales && <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Exemplo: {sales}</span>}
      </div>
    </div>
    <span className="text-2xl font-black text-orange-600">{reward}</span>
  </motion.div>
);

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-600 text-slate-900">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">Minha<span className="text-orange-600">Bagg</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('weekly')} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">Semanal</button>
            <button onClick={() => scrollToSection('monthly')} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">Mensal</button>
            <button onClick={() => scrollToSection('simulation')} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">Simulação</button>
            <button onClick={() => scrollToSection('rules')} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">Regras</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 text-orange-600 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-orange-100 shadow-sm">
              <Trophy size={14} /> Campanha de Performance 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-10 leading-[0.95]">
              Premiações <br />
              <span className="text-orange-600">MinhaBagg</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
              Venda mais, bata metas e tenha acesso a bonificações extras com as campanhas oficiais da MinhaBagg.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button 
                onClick={() => scrollToSection('weekly')}
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-3 group"
              >
                Ver metas da semana <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('monthly')}
                className="w-full sm:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-3"
              >
                Ver metas do mês
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Uma estrutura de ganhos meritocrática desenhada para impulsionar seus resultados.">
            Como Funciona
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign />, title: "Comissão Direta", desc: "O afiliado já recebe comissão integral sobre todas as vendas realizadas." },
              { icon: <Zap />, title: "Bônus por Performance", desc: "Além da comissão, receba bônus extras em dinheiro ao atingir metas." },
              { icon: <Calendar />, title: "Ciclos de Campanha", desc: "Campanhas semanais e mensais independentes e cumulativas." },
              { icon: <Trophy />, title: "Top Rankings", desc: "Dispute o Top da Semana e o Top do Mês para prêmios exclusivos." },
              { icon: <Users />, title: "Entrada Automática", desc: "Não é necessário inscrição. O ranking é atualizado automaticamente." },
              { icon: <ShieldCheck />, title: "Transparência Total", desc: "Regras claras e apuração baseada em vendas aprovadas no sistema." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-orange-200 transition-all duration-500 group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta da Semana */}
      <section id="weekly" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <SectionTitle align="left" subtitle="Bonificações rápidas para manter o ritmo constante de vendas.">
              Metas da Semana
            </SectionTitle>
            <div className="flex items-center gap-3 text-orange-600 bg-orange-50 px-6 py-3 rounded-2xl border border-orange-100 text-sm font-black uppercase tracking-widest mb-12 lg:mb-0">
              <Calendar size={18} /> Apuração: Segunda a Sexta-feira
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <RewardCard goal="3 vendas" reward="R$ 50" delay={0.1} />
            <RewardCard goal="5 vendas" reward="R$ 120" delay={0.2} />
            <RewardCard goal="10 vendas" reward="R$ 300" delay={0.3} featured />
            <RewardCard goal="15 vendas" reward="R$ 500" delay={0.4} />
            <RewardCard goal="20 vendas" reward="R$ 800" delay={0.5} />
          </div>

          {/* Simulação Semana */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              { title: "10 Vendas Growth", comm: "R$ 2.098,50", bonus: "R$ 300,00", total: "R$ 2.398,50" },
              { title: "15 Vendas Growth", comm: "R$ 3.147,75", bonus: "R$ 500,00", total: "R$ 3.647,75" },
              { title: "20 Vendas Growth", comm: "R$ 4.197,00", bonus: "R$ 800,00", total: "R$ 4.997,00" }
            ].map((sim, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart3 size={18} className="text-orange-600" /> {sim.title}
                </h4>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Comissões:</span>
                    <span className="font-bold text-slate-700">{sim.comm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Bônus:</span>
                    <span className="font-bold text-orange-600">+{sim.bonus}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-black text-slate-400 uppercase">Total Estimado</span>
                  <span className="text-2xl font-black text-slate-900">{sim.total}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Top da Semana */}
          <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[120px] -z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600/10 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-orange-600/20">
                  <Award size={16} /> Elite Semanal
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Top da Semana</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  Os três afiliados com maior volume de vendas na semana recebem prêmios extras em dinheiro.
                </p>
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10">
                  <Info className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-white mb-1">Regra de Qualificação</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Para participar do Top da Semana, o afiliado precisa realizar no mínimo <span className="text-white font-bold">10 vendas válidas</span> na semana.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <RankingItem pos="1º lugar" reward="R$ 500" sales="12 vendas" delay={0.1} />
                <RankingItem pos="2º lugar" reward="R$ 300" sales="11 vendas" delay={0.2} />
                <RankingItem pos="3º lugar" reward="R$ 200" sales="10 vendas" delay={0.3} />
                <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mt-8">Ranking automático • Sem necessidade de inscrição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta do Mês */}
      <section id="monthly" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#FF6B0008_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Grandes Conquistas</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Metas do Mês</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Bonificações robustas para quem mantém a escala e a constância.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {[
              { goal: "20 vendas", reward: "R$ 500" },
              { goal: "35 vendas", reward: "R$ 1.000" },
              { goal: "50 vendas", reward: "R$ 2.000" },
              { goal: "75 vendas", reward: "R$ 3.500" },
              { goal: "100 vendas", reward: "R$ 5.000" }
            ].map((item, i) => (
              <RewardCard key={i} goal={item.goal} reward={item.reward} delay={i * 0.1} featured={i === 2} type="monthly" />
            ))}
          </div>

          {/* Simulação Mês */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {[
              { title: "20 Vendas Growth", comm: "R$ 4.197,00", bonus: "R$ 500,00", total: "R$ 4.697,00" },
              { title: "35 Vendas Growth", comm: "R$ 7.344,75", bonus: "R$ 1.000,00", total: "R$ 8.344,75" },
              { title: "50 Vendas Growth", comm: "R$ 10.492,50", bonus: "R$ 2.000,00", total: "R$ 12.492,50" },
              { title: "75 Vendas Growth", comm: "R$ 15.738,75", bonus: "R$ 3.500,00", total: "R$ 19.238,75" },
              { title: "100 Vendas Growth", comm: "R$ 20.985,00", bonus: "R$ 5.000,00", total: "R$ 25.985,00" }
            ].map((sim, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="font-black text-white mb-4 flex items-center gap-2">
                  <BarChart3 size={18} className="text-orange-600" /> {sim.title}
                </h4>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Comissões:</span>
                    <span className="font-bold text-slate-300">{sim.comm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Bônus:</span>
                    <span className="font-bold text-orange-600">+{sim.bonus}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-black text-slate-500 uppercase">Total</span>
                  <span className="text-2xl font-black text-white">{sim.total}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Top do Mês */}
          <div className="p-10 md:p-20 rounded-[4rem] bg-gradient-to-br from-orange-600 to-orange-700 relative overflow-hidden shadow-2xl shadow-orange-600/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tighter">Top do Mês</h3>
                <p className="text-orange-50 text-xl mb-12 leading-relaxed font-medium">
                  A maior honraria da MinhaBagg. Os três afiliados que dominarem o mercado no mês garantem as maiores bonificações.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <p className="text-xl font-black">Mínimo de 20 vendas</p>
                      <p className="text-orange-100 font-medium">Qualificação obrigatória para o ranking mensal.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950/40 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white/10">
                <div className="space-y-5">
                  <RankingItem pos="1º lugar" reward="R$ 2.000" />
                  <RankingItem pos="2º lugar" reward="R$ 1.000" />
                  <RankingItem pos="3º lugar" reward="R$ 500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulação de Ganhos Detalhada */}
      <section id="simulation" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Entenda como as comissões recorrentes e os bônus de performance se somam para maximizar seus lucros.">
            Simulação de Ganhos
          </SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="p-10 rounded-[3rem] bg-orange-50 border border-orange-100">
                <span className="text-orange-600 font-black uppercase tracking-widest text-xs mb-4 block">Referência de Plano</span>
                <h3 className="text-4xl font-black text-slate-900 mb-6">Plano Growth</h3>
                <div className="text-5xl font-black text-orange-600 mb-10">R$ 139,90<span className="text-lg text-slate-400 font-bold">/mês</span></div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-white shadow-sm">
                    <span className="font-bold text-slate-600">1º Mês (70%)</span>
                    <span className="text-xl font-black text-slate-900">R$ 97,93</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-white shadow-sm">
                    <span className="font-bold text-slate-600">2º Mês (50%)</span>
                    <span className="text-xl font-black text-slate-900">R$ 69,95</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-white shadow-sm">
                    <span className="font-bold text-slate-600">3º Mês (30%)</span>
                    <span className="text-xl font-black text-slate-900">R$ 41,97</span>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-orange-200 flex justify-between items-center">
                  <span className="font-black text-slate-900 uppercase tracking-tighter">Total por Venda</span>
                  <span className="text-3xl font-black text-orange-600">R$ 209,85</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="p-10 rounded-[3rem] bg-slate-900 text-white mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center mb-8">
                  <DollarSign size={28} />
                </div>
                <h4 className="text-2xl font-black mb-4">Comissão Recorrente</h4>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Ao vender 1 plano Growth, você garante um recebimento total de <span className="text-white font-bold">R$ 209,85</span> ao longo dos 3 primeiros ciclos de mensalidade.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8">
                  <Zap size={28} />
                </div>
                <h4 className="text-2xl font-black mb-4">Bônus de Performance</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Além das comissões recorrentes, bater as metas da campanha injeta bônus diretos em sua conta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regras da Campanha */}
      <section id="rules" className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle subtitle="Transparência e clareza para uma parceria de longo prazo.">
            Regras da Campanha
          </SectionTitle>
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Participação automática para todos os afiliados ativos.",
                "Vendas válidas sujeitas à aprovação final do sistema.",
                "Cancelamentos e reembolsos não entram na contagem de metas.",
                "O Top da Semana exige no mínimo 10 vendas válidas.",
                "O Top do Mês exige no mínimo 20 vendas válidas.",
                "O período semanal é de segunda a sexta-feira.",
                "Em caso de empate, o desempate ocorre por maior faturamento.",
                "As bonificações são adicionais à comissão padrão do afiliado."
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-orange-600" size={14} />
                  </div>
                  <span className="text-slate-600 font-medium leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/20">
              <TrendingUp className="text-white" size={28} />
            </div>
            <span className="text-3xl font-black tracking-tighter text-slate-900">Minha<span className="text-orange-600">Bagg</span></span>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-10">Campanha Oficial de Premiações • 2026</p>
          <p className="text-slate-400 text-sm font-medium">© 2026 MinhaBagg. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

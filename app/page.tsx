import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      
      {/* NAVEGAÇÃO */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-8 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="text-xl font-light tracking-[0.4em] uppercase">
          Conexão <span className="font-bold">Presente</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
          Dossiê Educação 2026
        </div>
      </nav>

      {/* --- INTEGRANTES NO INÍCIO DA PÁGINA --- */}
      <div className="bg-slate-50 py-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <span className="text-slate-300">Equipe:</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">Victória Bordignon</a>
          <a href="https://github.com/muvibordignon" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">Murillo Bordignon</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">Pedro Rafael</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">Gisely Freitas</a>
        </div>
      </div>

      {/* CABEÇALHO */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-[0.95] mb-12">
          O Resgate da <span className="italic font-serif text-slate-700">Atenção</span> nas Escolas.
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed italic">
          "A escola não é um lugar de consumo digital, mas um santuário para o desenvolvimento humano."
        </p>
      </header>

      {/* IMAGEM DA PROIBIÇÃO */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative h-[400px] md:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
            alt="Uso de celulares nas escolas" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* CONTEÚDO INFORMATIVO */}
      <main className="max-w-3xl mx-auto px-6 space-y-24 pb-32">
        <section>
          <h2 className="text-3xl font-medium mb-8 tracking-tight border-b border-slate-100 pb-4">A Crise da Atenção Fragmentada</h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-600 font-light leading-relaxed text-justify">
            <p>
              Este projeto aborda o uso de celulares nas escolas, analisando seus impactos no aprendizado, vantagens como ferramenta educacional e desafios relacionados à distração em sala de aula.
            </p>
            <p>
              A implementação da proibição surge como resposta à fragmentação da atenção. Estudos indicam que a mera presença de um smartphone reduz a capacidade cognitiva disponível para o aprendizado real.
            </p>
          </div>
        </section>

        {/* BOX DE ESTATÍSTICAS */}
        <section className="bg-slate-950 text-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-light">Dados de Impacto</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Resultados observados em instituições que adotaram políticas de restrição ao uso de aparelhos móveis.
              </p>
            </div>
            <div className="space-y-12">
              <div className="border-l border-slate-800 pl-10">
                <span className="text-7xl font-extralight block tracking-tighter">62%</span>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-4 font-bold">Aumento na Retenção</p>
              </div>
              <div className="border-l border-slate-800 pl-10">
                <span className="text-7xl font-extralight block tracking-tighter">45min</span>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-4 font-bold">Socialização Real</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center pt-12">
           <p className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">Instituição</p>
           <p className="text-slate-800 font-light">Escola Técnica Estadual José Humberto De Moura Cavalcante - 2DSA</p>
        </section>
      </main>

      {/* RODAPÉ SIMPLIFICADO */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center text-[9px] text-slate-300 uppercase tracking-[0.3em]">
          &copy; 2026 Projeto Web 1 - Celulares nas escolas
        </div>
      </footer>
    </div>
  );
}

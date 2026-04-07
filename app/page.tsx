import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* TÍTULO PRINCIPAL */}
      <div>
        <h1>Celulares nas escolas</h1>
      </div>

      {/* --- CABEÇALHO --- */}
      <div>
        <h2>Projeto Web 1 - Celulares nas escolas</h2>
        <p>
          <Link href="https://github.com/SEU-NOME/NOME-PROJETO.git">
            Repositório Github
          </Link>
        </p>
      </div>

      {/* --- CONTEÚDO --- */}
      <div>
      <h2>Celulares na escola e seu uso</h2>
      
        {/* --- INTEGRANTES --- */}
        <div>
          <h2>Integrantes da Equipe</h2>
          <ul>
            <li>Murillo Bordignon Castilho Rodrigues Luricy</li>
            <li>Pedro Rafael Simoes Da Silva</li>
            <li>Victória Bordignon Castilho Rodrigues Luricy</li>
            <li>Gisely Freitas Travasso</li>
          </ul>
        </div>

        {/* --- TEMA --- */}
        <div>
          <h2>Uso de celulares nas escolas</h2>
          <img
            src="/https://www12.senado.leg.br/noticias/materias/2025/03/06/conselho-de-comunicacao-debate-restricao-de-celulares-nas-escolas.jpg"
            alt="Uso de celulares nas escolas"
          />
          <p>
            Este projeto aborda o uso de celulares nas escolas, analisando seus impactos no aprendizado,
            vantagens como ferramenta educacional e desafios relacionados à distração em sala de aula.
          </p>
        </div>

      </div>

      {/* --- RODAPÉ --- */}
      <div>
        <h3>
          Escola Tecnica Estadual Jose Humberto De Moura Cavalcante - 2DSA
        </h3>
      </div>

    </div>
  );
}

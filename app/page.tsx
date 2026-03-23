import Link from "next/link";

export default function Home() {
  return (
    // Container principal de toda a página
    <div>

      {/* --- CABEÇALHO --- */}
      <div>
        <div>
          <h1>
            Projeto Web 1 - Nome do Projeto da Equipe
          </h1>
          <p>
            <Link href="https://github.com/SEU-NOME/NOME-PROJETO.git">Repositório Github</Link>
          </p>
        </div>
      </div>

      {/* --- CONTEÚDO --- */}
      <div>
        {/* --- PRIMEIRO BLOCO --- */}
        <div>
          <h2>
            Integrantes da Equipe
          </h2>
          <ul>
            <li>Nome do Integrante 1</li>
            <li>Nome do Integrante 2</li>
            <li>Nome do Integrante 3</li>
            <li>Nome do Integrante 4</li>
          </ul>
        </div>

        {/* --- SEGUNDO BLOCO --- */}
        <div>
          <h2>
            Título do Tema Escolhido
          </h2>
          <img src="/caminho-da-sua-imagem.jpg" alt="Descrição da imagem inserida" />
          <p>
            Aqui entra o texto descritivo sobre o projeto.
          </p>
        </div>
      </div>

      {/* --- RODAPÉ --- */}
      <div>
        <h3>
          Nome da Escola - Turma
        </h3>
      </div>

    </div>
  );
}

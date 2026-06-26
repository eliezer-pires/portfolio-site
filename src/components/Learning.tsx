import { BookOpen, BookMarked, Target, Lightbulb } from "lucide-react";

const currentLearning = [
  {
    area: "Kubernetes",
    topics: [
      "Deployments",
      "Services",
      "Ingress Controllers",
      "ConfigMaps & Secrets",
    ],
    status: "Em progresso",
  },
  {
    area: "CI/CD",
    topics: ["GitHub Actions", "GitLab CI", "ArgoCD"],
    status: "Estudos práticos",
  },
  {
    area: "Terraform",
    topics: ["Módulos", "State Management", "Workspaces"],
    status: "Implementação de IaC em projeto real de Datacenter.",
  },
];

const certificationRoadmap = [
  {
    name: "Concurso ALE-RO - Analista Legislativo de TI - Infraestrutura de Redes e Comunicação",
    status: "Concluído - Aprovado",
    priority: "Alta",
    timeline: "Prova em 08 de Fevereiro 2026",
    quarter: "Q1",
  },
  {
    name: "Concurso TCE-RN - Analista Administrativo de TI (Infraestrutura, Redes e Segurança)",
    status: "Em Andamento - Aprovado",
    priority: "Alta",
    timeline: "Prova em 12 de Abril 2026",
    quarter: "Q2",
  },
  {
    name: "Github Action Certification",
    status: "Planejada",
    priority: "Alta",
    timeline: "Inicio de Julho 2026",
    quarter: "Q3",
  },
  {
    name: "HashiCorp Terraform Associate",
    status: "Planejada",
    priority: "Alta",
    timeline: "Inicio de Setembro 2026",
    quarter: "Q3",
  },
  {
    name: "AWS Solution Architect Associate",
    status: "Planejada",
    priority: "Alta",
    timeline: "Inicio de Novembro 2026",
    quarter: "Q4",
  },
];

// Status possíveis: "Lido", "Lendo", "Planejado"
// skill.type: "Soft" → roxo | "Hard" → ciano
const booksRoadmap = [
  {
    title: "Manual da Persuasão do FBI",
    author: "Joe Navarro",
    status: "Lido",
    quarter: "Q1",
    skills: [
      { type: "Soft", label: "Comunicação" },
      { type: "Soft", label: "Negociação" },
      { type: "Soft", label: "Inteligência Emocional" },
    ],
  },
  {
    title: "Manual de DevOps",
    author: " Gene Kim, Jez Humble, Patrick Debois & John Willis",
    status: "Lido",
    quarter: "Q1 e Q2",
    skills: [
      { type: "Hard", label: "Cultura DevOps" },
      { type: "Soft", label: "Liderança" },
      { type: "Soft", label: "Comunicação" },
    ],
  },
  {
    title: "Como fazer Amigos e Influenciar Pessoas",
    author: "Dale Carnegie",
    status: "Lido",
    quarter: "Q2",
    skills: [
      { type: "Soft", label: "Relacionamento Interpessoais" },
      { type: "Soft", label: "Inteligência Emocional" },
      { type: "Soft", label: "Comunicação" },
      { type: "Soft", label: "Colaboração" },
    ],
  },
  {
    title: "Fundamentos da Arquitetura de Software: Uma abordagem moderna de Engenharia.",
    author: "Mark Richards, Neal Ford",
    status: "Lendo",
    quarter: "Q3",
    skills: [
      { type: "Hard", label: "Arquitetura de Software" },
      { type: "Hard", label: "Engenharia de Software" },
      { type: "Hard", label: "Padrões de Projeto" },
      { type: "Hard", label: "Design de Sistemas" },
    ],
  },
  {
    title: "Entendendo Algoritmos",
    author: "Aditya Bhargava",
    status: "Planejado",
    quarter: "Q3",
    skills: [
      { type: "Hard", label: "Algoritmos e Estrutura de Dados" },
      { type: "Hard", label: "Otimização de Código" },
      { type: "Hard", label: "Pensamento Computacional" },
      { type: "Hard", label: "Resolução de Problemas Complexos" },
      { type: "Hard", label: "Raciocínio Lógico" },
      { type: "Hard", label: "Raciocínio Matemático" },
      { type: "Hard", label: "Matemática Pura, Discreta e Aplicada" },
      { type: "Hard", label: "Análise de Complexidade e Algoritmos" },
      { type: "Hard", label: "Pensamento Analítico" },
    ],
  },
  {
    title: "O Programador Pragmático",
    author: "Andrew Hunt & David Thomas",
    status: "Planejado",
    quarter: "Q3 e Q4",
    skills: [
      { type: "Hard", label: "Engenharia de Software" },
      { type: "Soft", label: "Eficiência" },
      { type: "Soft", label: "Produtividade" },
      { type: "Soft", label: "Gestão de Tempo" },
      { type: "Hard", label: "Otimização de Código" },
    ],
  },
  {
    title: "Aprenda Domain Driven Design",
    author: "Eric Evans",
    status: "Planejado",
    quarter: "Q4",
    skills: [
      { type: "Hard", label: "Engenharia de Software" },
      { type: "Hard", label: "Design Orientado a Domínio" },
      { type: "Hard", label: "Arquitetura de Software" },
      { type: "Soft", label: "Colaboração" },
    ],
  },
];

const learningPrinciples = [
  "Hands-on primeiro, teoria depois",
  "Projetos práticos em todos os estudos",
  "Documentação como hábito",
  "Compartilhamento de conhecimento",
  "Comunidade e networking ativo",
];

export default function Learning() {
  return (
    <section id="learning" className="section bg-dark-900">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Aprendizado Contínuo</span>
        </h2>
        <p className="section-subtitle text-center">
          Roadmap de estudos e desenvolvimento profissional
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estudos Atuais */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-primary-500" size={28} />
              <h3 className="text-2xl font-semibold">Estudos Atuais</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentLearning.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-100">
                      {item.area}
                    </h4>
                    <span className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded">
                      {item.status}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-0.5">▸</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-primary-500" size={28} />
            <h3 className="text-2xl font-semibold">Roadmap 2026</h3>
          </div>

          <div className="space-y-4">
            {certificationRoadmap.map((cert, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary-600/20 text-primary-400 text-xs rounded font-semibold">
                      {cert.quarter}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${cert.priority === "Alta"
                        ? "bg-red-600/20 text-red-400"
                        : "bg-blue-600/20 text-blue-400"
                        }`}
                    >
                      {cert.priority}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-gray-100 mb-1">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{cert.timeline}</span>
                    <span className="text-blue-400">{cert.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <BookMarked className="text-primary-500" size={28} />
            <h3 className="text-2xl font-semibold">Livros</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {booksRoadmap.map((book, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-600/20 text-primary-400 text-xs rounded font-semibold">
                    {book.quarter}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${book.status === "Lido"
                      ? "bg-green-600/20 text-green-400"
                      : book.status === "Lendo"
                        ? "bg-yellow-600/20 text-yellow-400"
                        : "bg-gray-600/20 text-gray-400"
                      }`}
                  >
                    {book.status}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-gray-100 mb-1">
                  {book.title}
                </h4>
                <p className="text-xs text-gray-400 mb-3">{book.author}</p>
                <div className="flex flex-wrap gap-1.5">
                  {book.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${skill.type === "Soft"
                        ? "bg-purple-600/20 text-purple-400"
                        : "bg-cyan-600/20 text-cyan-400"
                        }`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-6 bg-gradient-to-br from-primary-600/10 to-primary-800/10 border-primary-600">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎯</span>
              <h4 className="text-base font-semibold text-primary-400">
                Foco 2026
              </h4>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Consolidar fundamentos DevOps/SRE, obter certificações-chave por
              trimestre e contribuir ativamente para projetos open source.
              Planejamento estruturado com foco em Linux, IaC, AWS e CI/CD.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <Lightbulb className="text-primary-500" size={28} />
            <h3 className="text-2xl font-semibold">Princípios de Aprendizado</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPrinciples.map((principle, index) => (
              <div key={index} className="card flex items-center gap-3">
                <span className="text-primary-500 text-lg flex-shrink-0">▸</span>
                <span className="text-sm text-gray-300">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}

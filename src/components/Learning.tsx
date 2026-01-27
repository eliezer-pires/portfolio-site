import { BookOpen, Target, TrendingUp } from "lucide-react";

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
  {
    area: "Observabilidade",
    topics: ["Prometheus", "Grafana", "Alertmanager", "SLI/SLO/SLA"],
    status: "Aprofundamento",
  },
];

const certificationRoadmap = [
  {
    name: "LFCS (Linux Foundation)",
    status: "Planejada",
    priority: "Alta",
    timeline: "Inicio de Maio 2026",
    quarter: "Q2",
  },
  {
    name: "AWS Solutions Architect Associate",
    status: "Planejada",
    priority: "Alta",
    timeline: "Inicio de Agosto 2026",
    quarter: "Q3",
  },
  {
    name: "HashiCorp Terraform Associate",
    status: "Planejada",
    priority: "Alta",
    timeline: "Meio de Setembro 2026",
    quarter: "Q3",
  },
  {
    name: "GitHub Actions Certification",
    status: "Planejada",
    priority: "Média",
    timeline: "Meio de Outubro 2026",
    quarter: "Q4",
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

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
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
        <div>
          <div className="flex items-center gap-3 mb-6">
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
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        cert.priority === "Alta"
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
        </div>
      </div>
    </section>
  );
}

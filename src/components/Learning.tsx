import { BookOpen, Target } from "lucide-react";

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
    area: "Terraform",
    topics: ["Módulos", "State Management", "Workspaces"],
    status: "Preparação para certificação",
  },
  {
    area: "CI/CD",
    topics: ["GitHub Actions", "GitLab CI", "ArgoCD"],
    status: "Estudos práticos",
  },
];

const certificationRoadmap = [
  {
    name: "LPIC-1 (102-500)",
    status: "Em andamento",
    priority: "Alta",
    timeline: "Q1 2026",
  },
  {
    name: "HashiCorp Terraform Associate",
    status: "Planejada",
    priority: "Alta",
    timeline: "Q2 2026",
  },
  {
    name: "LFCS (Linux Foundation)",
    status: "Planejada",
    priority: "Média",
    timeline: "Q3 2026",
  },
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-primary-500" size={28} />
              <h3 className="text-2xl font-semibold">Estudos Atuais</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-primary-500" size={28} />
              <h3 className="text-2xl font-semibold">Roadmap</h3>
            </div>

            <div className="space-y-4">
              {certificationRoadmap.map((cert, index) => (
                <div
                  key={index}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`px-2 py-1 rounded ${
                          cert.status === "Em andamento"
                            ? "bg-green-600/20 text-green-400"
                            : "bg-blue-600/20 text-blue-400"
                        }`}
                      >
                        {cert.status}
                      </span>
                      <span className="text-gray-400">{cert.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

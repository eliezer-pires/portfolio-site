import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    role: "Network Analyst & SRE",
    company: "Força Aérea Brasileira",
    period: "Atual",
    description:
      "Responsável por infraestrutura de redes, administração de sistemas Linux, automação de processos e monitoramento. Transição ativa para práticas DevOps/SRE.",
    achievements: [
      "Implementação de monitoramento com Zabbix e Grafana em infraestrutura crítica",
      "Automação de tarefas operacionais com Python e Bash",
      "Administração de redes Cisco em ambientes de alta disponibilidade",
      "Migração e modernização de infraestrutura TI",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Ativo",
    icon: "☁️",
  },
  {
    name: "Fortinet Cybersecurity",
    issuer: "Fortinet",
    status: "Ativo",
    icon: "🔒",
  },
  {
    name: "LPIC-1 (101)",
    issuer: "Linux Professional Institute",
    status: "Certificado - Estudando 102",
    icon: "🐧",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-dark-950">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Experiência & Certificações</span>
        </h2>
        <p className="section-subtitle text-center">
          Trajetória profissional e validações técnicas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary-500" size={28} />
              <h3 className="text-2xl font-semibold">
                Experiência Profissional
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-100 mb-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-400">{exp.company}</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-400 mb-2">
                      Principais Realizações:
                    </p>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="text-primary-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary-500" size={28} />
              <h3 className="text-2xl font-semibold">Certificações</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-100 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">
                        {cert.issuer}
                      </p>
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                        {cert.status}
                      </span>
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

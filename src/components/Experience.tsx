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
    name: "LPIC-1: Linux Administrator",
    issuer: "Linux Professional Institute",
    status: "Certificado - Ativo",
    badge:
      "https://images.credly.com/size/110x110/images/c0ffb784-86af-4e2e-8f97-fe4fff1aa57a/blob",
    link: "https://www.credly.com/badges/74be2f28-2ecb-4b2a-a38d-ec7e9699c9ff/public_url",
    verify: "https://lpi.org/verify/LPI000664778/anx7knhb4a",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Ativo",
    badge:
      "https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    link: "https://www.credly.com/badges/534be0f2-58cb-46de-942b-ecc64dd5a888/public_url",
    verify:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/e047f460e0614fbe961e3955f38c5e44",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    status: "Ativo",
    badge:
      "https://images.credly.com/size/110x110/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    link: "https://www.credly.com/badges/e6cbc626-e03c-4c5c-b434-11e23274767a/public_url",
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
                    <div className="flex-shrink-0">
                      <img
                        src={cert.badge}
                        alt={"${cert.name} Badge"}
                        className="w-16 h-16"
                      />
                    </div>
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
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          Ver Badge no Credly →
                        </a>
                      )}
                      {cert.verify && (
                        <a
                          href={cert.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          Verificar Certificação →
                        </a>
                      )}
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

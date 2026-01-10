import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Infraestrutura de Rede VoIP para Aeronaves",
    description:
      "Projeto de infraestrutura de rede VoIP completa para aeronaves militares, incluindo redundância, QoS e segurança.",
    tags: ["Networking", "VoIP", "Cisco", "QoS", "Redundância"],
    category: "Infraestrutura",
    github: "https://github.com/eliezer-pires/infra-network-voip-aircraft",
  },
  {
    title: "Migração e Melhoria de Infraestrutura TI",
    description:
      "Projeto completo de migração e modernização de infraestrutura durante mudança de sede. Liderança de equipe e implementação de melhorias.",
    tags: ["Migração", "Infraestrutura", "Liderança", "Modernização"],
    category: "Infraestrutura",
    github:
      "https://github.com/eliezer-pires/InfrastructureTImigration-and-Improve",
  },
  {
    title: "Automação On-Premises",
    description:
      "Scripts de automação para ambientes on-premises, focando em eficiência operacional e redução de tarefas manuais.",
    tags: ["Python", "Automação", "Bash", "Linux"],
    category: "Automação",
    github: "https://github.com/eliezer-pires/OnPremissesAutomation",
  },
  {
    title: "Docker Learning",
    description:
      "Repositório de estudos práticos com Docker, incluindo Dockerfiles, docker-compose e boas práticas de containerização.",
    tags: ["Docker", "Containers", "DevOps"],
    category: "Estudos DevOps",
    github: "https://github.com/eliezer-pires/docker-learn",
  },
  {
    title: "Terraform Learning",
    description:
      "Estudos e práticas com Terraform para infraestrutura como código, incluindo módulos e provisionamento multi-cloud.",
    tags: ["Terraform", "IaC", "AWS", "Automação"],
    category: "Estudos DevOps",
    github: "https://github.com/eliezer-pires/terraform-learning",
  },
  {
    title: "DevOps Learning Journey",
    description:
      "Repositório consolidado de estudos DevOps, incluindo CI/CD, GitOps, monitoramento e melhores práticas.",
    tags: ["DevOps", "CI/CD", "GitOps", "Best Practices"],
    category: "Estudos DevOps",
    github: "https://github.com/eliezer-pires/devops-learning",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="relative section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bgdevopsct.png"
          alt="DevOps background"
          fill
          priority
          quality={90}
          className="object-cover opacity-40"
        />
        {/* Overlay em gradiente (mais leve) */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/40 to-dark-900/70" />
      </div>

      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Projetos</span>
        </h2>

        <p className="section-subtitle text-center">
          Trabalhos profissionais e projetos de estudo em DevOps/SRE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.github}
              className="
                group flex flex-col justify-between
                rounded-xl p-6
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-primary-500/40
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-primary-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-800/80 text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 text-sm font-medium"
              >
                Ver no GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/eliezer-pires?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Todos os Projetos no GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

import { Cloud, Container, Network, Code, Server, Eye } from "lucide-react";

const skillCategories = [
  {
    icon: Container,
    title: "DevOps & Containers",
    skills: [
      "Docker",
      "Kubernetes (deployments, services, ingress)",
      "CI/CD (conceitos, pipelines)",
      "GitOps (em evolução)",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, RDS, ELB, CloudWatch)",
      "Cloudflare (DNS, Pages, CDN)",
      "Terraform (IaC)",
      "Ansible (automação)",
    ],
  },
  {
    icon: Server,
    title: "Sistemas & Automação",
    skills: [
      "Linux (administração, hardening)",
      "Python para automação",
      "Bash scripting",
      "Git, GitHub, GitLab",
    ],
  },
  {
    icon: Network,
    title: "Redes",
    skills: [
      "Cisco (Switches e Routers)",
      "VLAN, Roteamento, ACL",
      "STP, EtherChannel",
      "Troubleshooting corporativo",
    ],
  },
  {
    icon: Eye,
    title: "Observabilidade",
    skills: ["Zabbix", "Grafana", "Prometheus (estudos)", "CloudWatch"],
  },
  {
    icon: Code,
    title: "Versionamento & Colaboração",
    skills: ["Git", "GitHub", "GitLab", "Boas práticas de código"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-dark-950">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Habilidades Técnicas</span>
        </h2>
        <p className="section-subtitle text-center">
          Tecnologias e ferramentas que domino ou estou ativamente estudando
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-600/10 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                  <category.icon
                    size={28}
                    className="text-primary-500 group-hover:text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-1">▸</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

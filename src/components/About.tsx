import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bgdevopsct.png"
          alt="DevOps background"
          fill
          quality={85}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-dark-950/80" />
      </div>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">
            <span className="heading-gradient">Sobre mim</span>
          </h2>

          <p className="section-subtitle text-center">
            Infraestrutura, automação e confiabilidade em ambientes modernos
          </p>
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6">
            <p>
              Profissional de infraestrutura com experiência sólida em
              administração de ambientes conteinerizados e automatizados,
              atuando fortemente com práticas{" "}
              <span className="tech-highlight">DevOps</span> e fundamentos de{" "}
              <span className="tech-highlight">SRE</span>. Meu foco está em
              resolver problemas e a relação{" "}
              <span className="tech-highlight">Técnicos (Devs e SysAdmins) × Tempo</span> o objetivo é aplicar
              automação (IaC) e cultura SRE para reduzir o{" "}
              <span className="tech-highlight">MTTR</span> de serviços lógicos
              complexos de dias/horas para minutos, poupando a força de trabalho
              técnica em estruturas críticas. Experiência prática com{" "}
              <span className="tech-highlight">Docker Swarm e Kubernetes</span>, incluindo
              administração de clusters, criação e manutenção de manifestos
              YAML, gerenciamento de Pods, Deployments e Services, além da
              configuração de escalabilidade automática com HPA.
            </p>

            <p>
              Vivência com <span className="tech-highlight">Docker</span>,{" "}
              <span className="tech-highlight">Git</span> e pipelines{" "}
              <span className="tech-highlight">CI/CD</span> utilizando{" "}
              <span className="tech-highlight">GitLab CI e Github Actions</span>, automatizando
              processos de build, testes e deploys, com foco em padronização,
              confiabilidade e entrega contínua.
            </p>

            <p>
              Atuação com Infraestrutura como Código e provisionamento imutável
              e idempotente utilizando{" "}
              <span className="tech-highlight">Terraform</span> e{" "} Gestão de Configurações com
              <span className="tech-highlight"> Ansible</span>, promovendo
              ambientes escaláveis, versionados e reproduzíveis. Experiência com{" "}
              <span className="tech-highlight">monitoramento</span> e{" "}
              <span className="tech-highlight">observabilidade</span> de
              sistemas críticos utilizando{" "}
              <span className="tech-highlight">Zabbix</span>,{" "}
              <span className="tech-highlight">Grafana</span> e{" "}
              <span className="tech-highlight">Prometheus</span>, com
              centralização de logs para auditoria técnica e foco em
              disponibilidade, performance e resposta a incidentes.
              Gerenciamento seguro de secrets com{" "}
              <span className="tech-highlight">HashiCorp Vault</span>,
              protegendo dados sensíveis e fiduciários.
            </p>

            <p>
              Background sólido como SysAdmin{" "}
              <span className="tech-highlight">Linux</span> com virtualização
              resiliente em <span className="tech-highlight">Proxmox</span> e{" "}
              <span className="tech-highlight">XCP-Ng</span> e backup
              centralizado via{" "}
              <span className="tech-highlight">
                Proxmox Backup Server (PBS)
              </span>
              , além de Apache2, Nginx, DNS, DHCP, NTP,
              <span className="tech-highlight"> pfSense</span> e{" "}
              <span className="tech-highlight">Windows Server</span> (Active
              Directory, WSUS), aliado à experiência como Analista de Redes{" "}
              <span className="tech-highlight">Cisco</span>, com forte atuação
              em troubleshooting, documentação,{" "}
              <span className="tech-highlight">VoIP</span> (Cisco Call Manager
              Express) e ambientes de missão crítica.
            </p>

            <p>
              Vivência em programação e automação utilizando{" "}
              <span className="tech-highlight">Python</span> (DevNet) e{" "}
              <span className="tech-highlight">Shell Script</span>, com foco em
              automação operacional, integração de sistemas e suporte a
              pipelines DevOps. Atuação em ambientes ágeis, com definição de{" "}
              <span className="tech-highlight">
                Checkpoints Críticos (Go/No-Go)
              </span>{" "}
              para mudanças em produção e <span className="tech-highlight">documentação técnica</span> focada na
              <span className="tech-highlight"> capacitação </span>
              técnica de equipes internas, além de experiência em
              <span className="tech-highlight"> liderança técnica</span>
              , <span className="tech-highlight">organização de demandas</span> e
              <span className="tech-highlight"> trabalho colaborativo</span> em
              equipes multidisciplinares.
            </p>
          </div>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">11+</div>
              <div className="text-gray-400">Anos em Infraestrutura</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">2</div>
              <div className="text-gray-400">Certificações Ativas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

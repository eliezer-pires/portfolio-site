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
              <span className="tech-highlight">SRE</span>. Experiência prática
              com <span className="tech-highlight">Kubernetes</span>, incluindo
              administração de clusters, criação e manutenção de manifestos
              YAML, gerenciamento de Pods, Deployments e Services, além da
              configuração de escalabilidade automática com HPA.
            </p>

            <p>
              Vivência com <span className="tech-highlight">Docker</span>,{" "}
              <span className="tech-highlight">Git</span> e pipelines{" "}
              <span className="tech-highlight">CI/CD</span> utilizando{" "}
              <span className="tech-highlight">GitLab CI</span>, automatizando
              processos de build, testes e deploys, com foco em padronização,
              confiabilidade e entrega contínua.
            </p>

            <p>
              Atuação com Infraestrutura como Código e automação utilizando{" "}
              <span className="tech-highlight">Terraform</span> e{" "}
              <span className="tech-highlight">Ansible</span>, promovendo
              ambientes escaláveis, versionados e reproduzíveis. Experiência com{" "}
              <span className="tech-highlight">monitoramento</span> e{" "}
              <span className="tech-highlight">observabilidade</span> de
              sistemas críticos utilizando{" "}
              <span className="tech-highlight">Zabbix</span>,{" "}
              <span className="tech-highlight">Grafana</span> e{" "}
              <span className="tech-highlight">Prometheus</span>, com foco em
              disponibilidade, performance e resposta a incidentes.
            </p>

            <p>
              Background sólido como SysAdmin{" "}
              <span className="tech-highlight">Linux</span> (Proxmox, XCP-ng,
              Apache2, Nginx, DNS, DHCP, NTP, pfSense) e{" "}
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
              pipelines DevOps. Atuação em ambientes ágeis, com forte
              colaboração entre times de desenvolvimento e infraestrutura, além
              de experiência em liderança técnica, organização de demandas e
              trabalho colaborativo em equipes multidisciplinares.
            </p>
          </div>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">7+</div>
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

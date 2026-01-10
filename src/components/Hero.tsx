import Image from "next/image";
import { Github, Gitlab, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bgdevopsct.png"
          alt="DevOps background"
          fill
          priority
          quality={90}
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/40 to-dark-900/80" />
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* TEXTO */}
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-primary-500 text-lg font-medium">
                Olá! Eu sou
              </p>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="heading-gradient">Eliezer Pires</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                DevOps Engineer | SRE | Cloud & Automation
              </h2>
            </div>

            <p className="text-xl text-gray-400 max-w-xl">
              Profissional de infraestrutura focado em automação, confiabilidade
              e ambientes cloud-native.
              <span className="text-primary-400">
                {" "}
                Construindo sistemas escaláveis e resilientes.
              </span>
            </p>

            {/* SOCIAL */}
            <div className="flex items-center md:justify-start justify-center gap-6 pt-4">
              {/* GitHub */}
              <a
                href="https://github.com/eliezer-pires"
                target="_blank"
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>

              {/* GitLab */}
              <a
                href="https://gitlab.com/eliezerpiresti"
                target="_blank"
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg transition-all hover:scale-110"
              >
                <Gitlab size={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/eliezer-pires-sre-devops-aws"
                target="_blank"
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              {/* Email */}
              <a
                href="mailto:eliezerpiresti@gmail.com"
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* BOTÕES */}
            <div className="flex gap-4 pt-6 md:justify-start justify-center">
              <a href="#about" className="btn-primary">
                Saiba Mais
              </a>
              <a href="#contact" className="btn-secondary">
                Entre em Contato
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96 rounded-2xl shadow-2xl border border-dark-800 overflow-hidden">
              <Image
                src="/images/eliezerpires.png"
                alt="Eliezer Pires - DevOps Engineer"
                fill
                priority
                sizes="(max-width: 768px) 288px, 288px"
                quality={95}
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="pt-16 animate-bounce text-center">
          <a href="#about">
            <ChevronDown size={32} className="mx-auto text-primary-500" />
          </a>
        </div>
      </div>
    </section>
  );
}

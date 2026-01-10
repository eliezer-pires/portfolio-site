import { Mail, Github, Gitlab, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@eliezer-pires",
    href: "https://github.com/eliezer-pires",
  },
  {
    icon: Gitlab,
    label: "GitLab",
    value: "@eliezerpiresti",
    href: "https://gitlab.com/eliezerpiresti",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "eliezer-pires-sre-devops-aws",
    href: "https://linkedin.com/in/eliezer-pires-sre-devops-aws",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eliezerpiresti@gmail.com",
    href: "mailto:eliezerpiresti@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-dark-950">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Vamos Conversar?</span>
        </h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades, colaborações e conversas
          sobre DevOps, SRE e engenharia de infraestrutura.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
                rel={
                  contact.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-dark-800 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                    <contact.icon
                      size={24}
                      className="text-primary-500 group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">
                      {contact.label}
                    </p>
                    <p className="font-medium text-gray-200 group-hover:text-primary-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="card bg-gradient-to-br from-primary-600/10 to-primary-800/10 border-primary-600 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={20} className="text-primary-400" />
              <p className="text-gray-300">
                <span className="font-semibold text-primary-400">
                  Localização:
                </span>{" "}
                Porto Velho, Rondônia, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

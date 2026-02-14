'use client';

import { useState, FormEvent } from 'react';
import { contactInfo } from '@/data/contact';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaré pronto vía Email o WhatsApp.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 px-8 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Trabajemos Juntos
          </h2>
          <p className="text-text-muted text-lg">
            ¿Tienes un flujo de trabajo manual que te cansa? Hablemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="animate-[fadeInLeft_0.8s_ease]">
            <h3 className="text-2xl font-bold text-text mb-6">Conectemos</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Estoy disponible para consultoría de automatización, desarrollo de scripts personalizados y soluciones integradas con IA.
              Envíame un mensaje para agendar una llamada y discutir cómo puedo optimizar tus procesos.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-6 mb-8">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-[50px] h-[50px] bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:rotate-[360deg]">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm text-text-muted mb-1 font-medium">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-text no-underline font-semibold transition-colors duration-300 hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-[50px] h-[50px] bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:rotate-[360deg]">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm text-text-muted mb-1 font-medium">WhatsApp / Teléfono</h4>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text no-underline font-semibold transition-colors duration-300 hover:text-primary"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-[50px] h-[50px] bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-dark group-hover:rotate-[360deg]">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-sm text-text-muted mb-1 font-medium">Ubicación</h4>
                  <span className="text-text font-semibold">{contactInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {contactInfo.social.linkedin && (
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45px] h-[45px] bg-primary/10 border border-primary rounded-full flex items-center justify-center text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-dark hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)]"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {contactInfo.social.github && (
                <a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45px] h-[45px] bg-primary/10 border border-primary rounded-full flex items-center justify-center text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-dark hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)]"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
              {contactInfo.social.instagram && (
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45px] h-[45px] bg-primary/10 border border-primary rounded-full flex items-center justify-center text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-dark hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)]"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-dark-card p-10 rounded-2xl border border-border animate-[fadeInRight_0.8s_ease]">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-text font-medium" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-border rounded-lg text-text text-base transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-text font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-border rounded-lg text-text text-base transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-text font-medium" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark border border-border rounded-lg text-text text-base resize-y min-h-[120px] transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-4 bg-gradient-to-r from-primary to-secondary text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)] flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

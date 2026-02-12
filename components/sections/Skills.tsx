import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease]">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-text-muted text-lg max-w-[600px] mx-auto">
            Combinando Ingeniería Civil con Desarrollo de Software y Automatización
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.1)]"
            >
              {/* Icon */}
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 text-2xl text-white">
                <i className={`fas fa-${category.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text mb-4">
                {category.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30 transition-all duration-300 hover:bg-primary hover:text-dark hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

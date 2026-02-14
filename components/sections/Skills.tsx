import { skillCategories } from '@/data/skills';

export function Skills() {
  const getLevelColor = (level: 'expert' | 'advanced' | 'intermediate') => {
    switch (level) {
      case 'expert':
        return 'from-primary to-accent';
      case 'advanced':
        return 'from-accent to-secondary';
      case 'intermediate':
        return 'from-secondary to-primary';
    }
  };

  const getLevelBadge = (level: 'expert' | 'advanced' | 'intermediate') => {
    switch (level) {
      case 'expert':
        return { text: 'Experto', color: 'text-primary border-primary/30 bg-primary/10' };
      case 'advanced':
        return { text: 'Avanzado', color: 'text-accent border-accent/30 bg-accent/10' };
      case 'intermediate':
        return { text: 'Intermedio', color: 'text-secondary border-secondary/30 bg-secondary/10' };
    }
  };

  return (
    <section id="habilidades" className="py-20 px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease]">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-text-muted text-lg max-w-[700px] mx-auto">
            Stack tecnológico completo: desde desarrollo móvil y web hasta arquitecturas cloud e ingeniería civil
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-dark-card p-8 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.1)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${getLevelColor('expert')} rounded-xl flex items-center justify-center text-2xl text-white shrink-0`}>
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-text">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const badge = getLevelBadge(skill.level);
                  return (
                    <div
                      key={skillIndex}
                      className="group p-4 bg-dark-bg rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-text font-semibold group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${badge.color} whitespace-nowrap`}>
                          {badge.text}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/Layout";

const clients = [
  "Toptal",
  "Devsinc",
  "Upwork",
  "US Clients"
];

const expertise = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Sass",
      "Responsive design",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    category: "Agentic AI & Claude",
    skills: [
      "Agentic AI",
      "Claude API",
      "Anthropic SDK",
      "RAG pipelines",
      "LLM integrations",
      "MCP",
      "Prompt engineering",
      "AI agents",
      "Local LLMs",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Vercel",
      "Heroku",
    ],
  },
  {
    category: "Testing & Practice",
    skills: [
      "Jest",
      "Cypress",
      "React Testing Library",
      "Unit/integration testing",
      "System design",
      "Agile",
      "Scrum",
    ],
  },
  {
    category: "Integrations",
    skills: [
      "Stripe",
      "OAuth",
      "JWT",
      "Webhooks",
      "Google APIs",
      "Third-party API integration",
    ],
  },
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Content */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">About</h1>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p>
                <span className="text-foreground">Aibak Shahzad</span> is aSenior Software Engineer & Solutions Architect. Top 3% Toptal Cleared. Silver Medalist with 6+ years shipping production software.
              </p>
              <p>
              He builds scalable web applications, cloud infrastructure, and production AI systems (RAG pipelines & local LLM integrations) using React, Next.js, NestJS, AWS, and Docker.
              </p>
              <p>
              Formerly building healthcare platforms, AI tools, and high-concurrency real-time systems.


              </p>
            </div>
          </div>

          {/* Selected Clients */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label mb-6">Platforms & Clients</h2>
            <ul className="space-y-3">
              {clients.map((client) => (
                <li key={client} className="text-lg">
                  {client}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-label mb-8">Expertise</h2>
            <div className="space-y-8">
              {expertise.map(({ category, skills }) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-foreground mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm border border-border px-3 py-1.5 text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "💻 Programming Languages",
    items: ["C++", "JavaScript", "Python"],
  },
  {
    category: "🎨 Frontend Development",
    items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap", "EJS"],
  },
  {
    category: "🧠 Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    category: "🗄️ Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "☁️ DevOps & Cloud",
    items: ["AWS"],
  },
  {
    category: "🛠️ Tools & Platforms",
    items: ["Git", "GitHub", "Render"],
  },
  {
    category: "📚 Core Concepts",
    items: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Software Development Life Cycle (SDLC)",
      "System Design",
      "Agile",
      "TDD",
      "Version Control",
      "MVC",
      "JWT Auth",
      "WebSockets",
    ],
  },
];

const Skills = () => {
  return (
    <section className="p-10 bg-gray-950 min-h-screen text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
        🚀 My Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

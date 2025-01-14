import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aleli Macapagal</h1>
            <h2 className="text-xl md:text-2xl mb-6">IT Engineer</h2>
            <p className="text-lg max-w-2xl mb-8">
              Passionate IT systems and software engineer with 5+ years of experience in building scalable applications.
              Specialized in .Net, Java, React, TypeScript, SQL/NoSQL and cloud technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <SkillsSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Website Design"
              description="A Homecare company website"
              technologies={['React', 'Node.js']}
              image="/images/yayahs.jpg"
              githubUrl="https://github.com"
              liveUrl="https://yayahomecareservices.ca/"
            />
            <ProjectCard
              title="Bloodbank Management System"
              description="Blood bank management web application"
              technologies={['Java', 'Socket.io', 'MongoDB']}
              image="/images/bloodbankapp.jpg"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="Data visualization dashboard for business metrics"
              technologies={['Python', 'PowerBI', 'Azure', 'AWS']}
              image="/images/data_analytics.jpg"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Aleli Macapagal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
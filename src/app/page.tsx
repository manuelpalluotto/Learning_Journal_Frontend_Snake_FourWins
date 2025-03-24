'use client';

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  // Token-Handling
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('App initialized with token:', !!token);

    const checkTimer = setTimeout(() => {
      const tokenAfterDelay = localStorage.getItem('token');
      console.log('Token after delay:', !!tokenAfterDelay);
    }, 1000);

    return () => clearTimeout(checkTimer);
  }, []);

  // Projekt-Interface
  interface Project {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  // Projekte laden
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get<Project[]>('/api/getProjects');
        const modifiedProjects = response.data.map((project) => ({
          ...project,
          imageUrl: `/api/getImages?id=${project.id}`
        }));
        setProjects(modifiedProjects);
      } catch (error) {
        console.error('Fehler beim Laden der Projekte:', error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="portfolio-wrapper">
      <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
      <div className="portfolio-container">
        <h2>Fachinformatiker - Anwendungsentwicklung</h2>
        <p>Erfahrungen mit Java, JavaScript/TypeScript, Spring Boot, SQL</p>

        <h3>Projekte</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Verwende die Next.js Image-Komponente */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
                width={300}
                height={200}
              />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
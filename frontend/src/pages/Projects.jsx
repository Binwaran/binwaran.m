import React from 'react'

const projects = [
  {
    title: 'Pet-sitter',
    description:
      'Full stack web application for booking pet sitters, with user authentication, profile management, booking flow, and admin dashboard. Built with Supabase for backend-as-a-service and PostgreSQL database.',
    image: '/pet-sitter.png',
    link: 'https://pet-sitter-app-git-main-nofffies-projects.vercel.app/',
  },
  {
    title: 'Tourist Attraction',
    description:
      'Tourist Attraction — React frontend app for browsing travel destinations with dynamic keyword filtering and responsive UI using Tailwind CSS.',
    image: '/tourist-attraction.png',
    link: 'https://tourist-attraction-i5vhly47o-nofffies-projects.vercel.app/',
  },
  {
    title: 'Question API',
    description:
      'Question API is a backend service built with Node.js and Express.js, designed for managing a collection of quiz or survey questions. It supports CRUD operations with PostgreSQL as the data store',
    image: '/question-api.png',
    link: 'https://github.com/Binwaran/backend-skill-checkpoint-express-server',
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">🚀 My Projects</h1>
      <div className="grid gap-12">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
          >
            <div className="w-full md:w-1/2 h-[350px]">
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl shadow w-full h-[350px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

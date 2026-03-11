export const projects = [
  {
    id: 'pulse720',
    title: 'Pulse 720',
    description: 'Een moderne AI-aangedreven applicatie met Vue.js frontend en Python backend. Ik heb significante bijdragen geleverd aan zowel frontend als AI integratie.',
    link: 'https://pulse720.com',
    tags: ['Vue.js', 'Python', 'SQL', 'AI API', 'REST API'],
    featured: true
  },
]

export const getProjectById = (id) => {
  return projects.find(p => p.id === id)
}

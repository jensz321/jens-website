export const projects = [
  {
    id: 'pulse720',
    title: 'Pulse 720',
    description: 'Een moderne AI-aangedreven applicatie met Vue.js frontend en Python backend. Ik heb significante bijdragen geleverd aan zowel frontend als AI integratie.',
    link: 'https://pulse720.com',
    tags: ['Vue.js', 'Python', 'SQL', 'AI API', 'REST API'],
    featured: true
  },
  {
    id: 'padplanner',
    title: 'Padplanner',
    description: 'Een webapplicatie waarmee je wandelroutes kunt genereren. Je kunt aangeven of je wandelt, hardloopt of fietst, en de route worden gegenereerd op basis van de gewenste duur of afstand. Alle routes keren terug naar het startpunt.',
    link: 'https://padplanner.vercel.app/',
    tags: ['React', 'Mapping API', 'Route Planning', 'Web App'],
    featured: true
  },
]

export const getProjectById = (id) => {
  return projects.find(p => p.id === id)
}

// /src/components/SupportedDatabases.jsx
export default function SupportedDatabases() {
  const logos = [
    { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', alt: 'MySQL' },
    { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
    { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg', alt: 'SQLite' },
  ];

  return (
    <div className="py-16 bg-white px-6 text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-8">Supported Databases</h3>
      <div className="flex justify-center flex-wrap gap-10 items-center">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="h-12 grayscale hover:grayscale-0 transition" />
        ))}
      </div>
    </div>
  );
}

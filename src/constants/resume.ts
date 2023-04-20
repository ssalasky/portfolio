export type ResumeDetail = {
  dates: string;
  title: string;
  company: string;
  duties: string[];
};
export const RESUME: ResumeDetail[] = [
  {
    dates: '06/2021 - 04/2023',
    title: 'Software Engineer',
    company: 'eVisit, Inc.',
    duties: [
      'Migrated legacy React frontend to modern React + TypeScript frontend with a focus on reusable components and near 100% unit test code coverage.',
      'Implemented responsive components at mobile, table and desktop breakpoints for accessibility on all devices.',
      'Led team of 3 handling the migration of Google Maps APIs and digital prescribing API. Ensured code quality and industry compliance.',
      'Worked as part of 5 developer team to update REST API endpoints to ensure compatibility with new frontend functionality.',
      'Actively participated and assumed leadership role in Agile development processes, including Scrum activities and peer code reviews.',
      'Coordinated with product team to develop action plans for rolling out new features and migrating existing ones, ensuring smooth deployments. Provided alternative implementation suggestions for product designs when current design introduced accessibility concerns from a development standpoint.',
    ],
  },
  {
    dates: '2/2018 - 6/2021',
    title: 'Associate Software Engineer, Software Engineer',
    company: 'Email on Acid',
    duties: [
      'Acted as a liaison between product department and engineering department to coordinate efforts to launch the final milestone of a patented software utilizing a MEAN stack.',
      "Helped architect an overhaul of the company's team management tools and data model, while managing an outsourced team of 4 developers to overhaul core functionality of the site.",
      'Developed strategy and timelines for product releases, with 95+% on-time delivery.',
      'Led the initiative to migrate from PHP framework to Angular frontend and Node backend.',
      'Served as team lead with oversight of team projects and code, and acted as an Angular lead developer.',
    ],
  },
];

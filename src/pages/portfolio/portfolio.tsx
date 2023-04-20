import _ from 'lodash';

import PageLayout from '../../components/PageLayout';
import Project from '../../components/Project';
import { PROJECTS } from '../../constants/projects';

const Portfolio = () => {
  return (
    <PageLayout
      intro="I'm constantly learning and trying new things. Check back to see my latest updates."
      title="My life's work...so far."
    >
      <ul className="grid grid-cols-1 gap-x-12 gap-y-15 sm:grid-cols-2 lg:grid-cols-3">
        {_.map(PROJECTS, project => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </PageLayout>
  );
};

export default Portfolio;

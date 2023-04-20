import _ from 'lodash';

import PageLayout from '../../components/PageLayout';
import TimelineSection from '../../components/TimelineSection/TimelineSection';
import { RESUME } from '../../constants/resume';

const Resume = () => {
  return (
    <PageLayout intro="A more fun way to show my history." title="My Resume">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {_.map(RESUME, job => (
            <TimelineSection job={job} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;

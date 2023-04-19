import PageHeaderLayout from '../../components/PageHeaderLayout';
import TimelineSection from '../../components/TimelineSection/TimelineSection';
import { RESUME } from '../../constants/resume';

const Resume = () => {
  return (
    <>
      <PageHeaderLayout
        intro="A more fun way to show my history."
        title="My Resume"
      />
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <TimelineSection job={RESUME[0]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

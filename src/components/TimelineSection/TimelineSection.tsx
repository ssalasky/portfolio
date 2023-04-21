import { MinusSmallIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import { ResumeDetail } from '../../constants/resume';

interface Props {
  job: ResumeDetail;
}

const TimelineTitle = ({
  date,
  className,
}: {
  date: string;
  className: string;
}) => (
  <p
    className={clsx(
      className,
      'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-0 flex items-center md:hidden"
    >
      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
    </span>
    {date}
  </p>
);

const TimelineSection = ({ job }: Props) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {job.company}
        </h2>
        <TimelineTitle className="md:hidden pl-3.5" date={job.dates} />
        <ul className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {job.duties.map((duty, index) => (
            <li className="mt-2 flex" key={index}>
              <MinusSmallIcon className="h-6 w-6 flex-none" />
              {duty}
            </li>
          ))}
        </ul>
      </div>
      <TimelineTitle className="mt-1 hidden md:block" date={job.dates} />
    </article>
  );
};

export default TimelineSection;

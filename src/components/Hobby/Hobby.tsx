import { HobbyType } from '../../constants/hobbies';

const Hobby = (hobby: HobbyType) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {hobby.name}
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Goal: {hobby.goal}
      </p>
    </article>
  );
};

export default Hobby;

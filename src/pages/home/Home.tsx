import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import _ from 'lodash';

import Container from '../../components/Container';
import Hobby from '../../components/Hobby';
import List from '../../components/List';
import SocialLinks from '../../components/SocialLinks';
import { HOBBIES } from '../../constants/hobbies';
import { INTERESTS } from '../../constants/interests';
import CampingPhoto from '../../images/camping.png';
import DogImage from '../../images/dog.png';
import Formula1 from '../../images/formula-1.png';

const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Passionate learner, aspiring entrepreneur and amateur dog trainer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Sam, a software engineer based out of Denver, CO. I'm passionate
            about discovering new hobbies.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLinks />
          </div>
        </div>
      </Container>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt="dogs"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={DogImage}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt="formula 1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={Formula1}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt="Camping"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={CampingPhoto}
            />
          </div>
        </div>
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="flex text-2xl font-medium text-zinc-900 dark:text-zinc-100">
              Hobbies
            </h2>
            {_.map(HOBBIES, hobby => (
              <Hobby {...hobby} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-50 dark:border-zinc-700/80">
                <MagnifyingGlassIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 mb-2">Topics I'm Exploring</span>
              </div>
              <ul className="mt-6 space-y-4">
                {_.map(INTERESTS, interest => (
                  <List item={interest} key={interest.name} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

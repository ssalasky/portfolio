import Container from '../../components/Container';
import SkiPicture from '../../images/ski-picture.png';

const About = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img alt="Family ski trip" src={SkiPicture} />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Sam Salasky. I am constantly learning and exploring physically
            and digitally from my home base in Colorado.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Born in raised in such an outdoor-centric state as Colorado I
              learned a passion for exploring from a young age. This passion was
              furthered when I got my first set of LEGO as a kid. During the
              summer I would attend camps at the museum or Denver University to
              explore different aspects of life and potential jobs. Trying new
              topics and exploring different careers has turned me into an
              insatiable learner. (This has both positive and negative
              implications ;))
            </p>
            <p>
              My parents much prefer international and historical trips over
              "standard" vacation destinations. At the age of 30, I've never
              been to any Disney park, but I have been to Europe multiple times.
              Interacting with different cultures and experiencing a world
              larger than just my state has instilled a massive appreciation for
              history. You hear about how people used to live compared to modern
              culture and you can't help but to wonder at what the future will
              be like; what impact will I have on that very future?
            </p>
            <p>
              I frequently jump from one interest to another, trying to
              accumulate as much knowledge as possible. I believe that software
              is one of the best ways to connect all my various hobbies
              together. However, when my eyes begin to cry for relief I can be
              found outside in the fields working with my dogs, hiking with my
              dad or attending Formula 1 races.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

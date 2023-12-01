import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.ibb.co/pKkqvYG/wp6359333.webp"
        className="mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[550px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Dedicated and highly motivated with a passion for problem-solving and
          a solid foundation in software development. Highly proficient in
          full-stack engineering, system organization, application development,
          code writing, and distributed systems. As a Full Stack developer
          I&apos;ve worked both with startups and large corporations to help
          build & scale their companies. Also I am hardworking, fast-learner,
          organised and trustworthy. Seeking an opportunity to contribute my
          technical skills and enthusiasm to a dynamic software development
          team.
        </p>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.ibb.co/5WLJt1H/logo.png"
        alt="madam logo"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4-xl font-light">CEO of MADAM</h4>
        <p className="font-bold text-2xl mt-1">MADAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://i.ibb.co/L1nwhq1/Java-Script-Logo2.png"
            alt="javascript logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <p>Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

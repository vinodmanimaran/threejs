import React from 'react';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import {quotes} from '../constants';

const FeedbackCard = ({
  quote,
  index,
  author,
  designation,
  company,

}) => (
  <motion.div
    variants={fadeIn ('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{quote}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {author}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

              </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant ()}>
          <p className={styles.sectionSubText}>Inspiring Sayings and Motivational</p>
          <h2 className={styles.sectionHeadText}>Mottos</h2>
        </motion.div> 
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {quotes.map ((quote, index) => (
          <FeedbackCard key={quotes.name} index={index} {...quote} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper (Feedbacks, '');

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatInputBox from '@/components/chat-input-box';
import { VerticalCommonVariants } from '@/libs/framer-motion/variants';

const ChatWithHedro = () => {
  const [chatValue, setChatValue] = useState('');
  const verticalVariant = VerticalCommonVariants(45, 0.5);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (chatValue !== '') {
      console.log('meow');
      setChatValue('');
    }
  };

  return (
    <section className='w-full h-[100vh] flex flex-col gap-9 items-center justify-center'>
      <motion.div
        initial='hidden'
        whileInView='show'
        variants={verticalVariant}
        className='flex flex-col items-center justify-center'
      >
        {/* <h1 className='logo-teal-gradient logo-text'>Hedro.ai</h1> */}
        <motion.h1
          variants={verticalVariant}
          className='logo-teal-gradient logo-text'
        >
          Hedro.ai
        </motion.h1>
        <motion.h2 variants={verticalVariant} className='sub-logo-text'>
          Hedera AI Chatbot Assistant - Elevate Efficiency, Ignite Productivity!
        </motion.h2>

        <motion.form
          variants={verticalVariant}
          onSubmit={handleOnSubmit}
          className='w-full'
        >
          <ChatInputBox
            note={true}
            id={'chat-input'}
            value={chatValue}
            handleOnSubmit={handleOnSubmit}
            handleOnFieldChange={(e: any) => {
              setChatValue(e.target.value);
            }}
          />
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ChatWithHedro;

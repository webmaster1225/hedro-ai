'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { motion } from 'framer-motion';
import ChatWizard from '@/components/chat-wizard';
import ChatInputBox from '@/components/chat-wizard/chat-input-box';
import { VerticalCommonVariants } from '@/libs/framer-motion/variants';

const ChatWithHedro = () => {
  const [isChatMode, setIsChatMode] = useState(false);
  const verticalVariant = VerticalCommonVariants(45, 0.5);
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(e);
    setIsChatMode(true);
  };

  return (
    <section
      className={`w-72 xxsm:w-80 xsm:w-96 xssm:w-[28rem] sm:w-[40rem] lg:w-[63rem] min-h-[100vh] flex flex-col gap-9 items-center justify-center relative`}
    >
      <motion.div
        initial='hidden'
        whileInView='show'
        variants={verticalVariant}
        className='flex flex-col min-h-[100vh] w-full items-center justify-center'
      >
        <motion.h1
          onClick={() => {
            if (isChatMode) {
              window.location.reload();
            }
          }}
          variants={verticalVariant}
          className={`logo-teal-gradient logo-text ${
            isChatMode && 'cursor-pointer'
          }`}
        >
          Hedro.ai
        </motion.h1>
        <motion.h2
          variants={verticalVariant}
          className={`sub-logo-text ${isChatMode && `hidden`}`}
        >
          Hedera AI Chatbot Assistant - Elevate Efficiency, Ignite Productivity!
        </motion.h2>

        {isChatMode && (
          <div className='flex-1 w-full flex justify-center'>
            <ChatWizard messages={messages} isLoading={isLoading} />
          </div>
        )}

        <motion.form
          variants={verticalVariant}
          onSubmit={handleOnSubmit}
          className={`w-full flex justify-center items-center mb-2`}
        >
          <ChatInputBox
            note={true}
            id={'chat-input'}
            value={input}
            isChatMode={isChatMode}
            handleOnSubmit={handleOnSubmit}
            handleOnFieldChange={handleInputChange}
          />
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ChatWithHedro;

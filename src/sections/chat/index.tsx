'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatLog } from '@/types';
import { motion } from 'framer-motion';
import ChatInputBox from '@/components/chat-wizard/chat-input-box';
import { VerticalCommonVariants } from '@/libs/framer-motion/variants';
import ChatWizard from '@/components/chat-wizard';

const ChatWithHedro = () => {
  const [chatValue, setChatValue] = useState('');
  const [chatLog, setChatLog] = useState<ChatLog[]>([]);
  const [isChatMode, setIsChatMode] = useState(false);
  const verticalVariant = VerticalCommonVariants(45, 0.5);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (chatValue !== '') {
      const newChatLog = chatLog;
      newChatLog.push({ id: uuidv4(), user: chatValue, hedro: 'meow' });
      setChatLog(newChatLog);
      setChatValue('');
      setIsChatMode(true);
    }
  };

  useEffect(() => console.log(chatLog), [chatLog.length]);

  return (
    <section
      className={`w-[1000px] min-h-[100vh] flex flex-col gap-9 items-center justify-center relative`}
    >
      <motion.div
        initial='hidden'
        whileInView='show'
        variants={verticalVariant}
        className='flex flex-col min-h-[100vh] w-full items-center justify-center'
      >
        <motion.h1
          variants={verticalVariant}
          className={`logo-teal-gradient logo-text`}
        >
          Hedro.ai
        </motion.h1>
        <motion.h2
          variants={verticalVariant}
          className={`sub-logo-text ${isChatMode && `hidden`}`}
        >
          Hedera AI Chatbot Assistant - Elevate Efficiency, Ignite Productivity!
        </motion.h2>

        <motion.form
          variants={verticalVariant}
          onSubmit={handleOnSubmit}
          className={`w-full flex justify-center items-center mb-2`}
        >
          <ChatInputBox
            note={true}
            id={'chat-input'}
            value={chatValue}
            isChatMode={isChatMode}
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

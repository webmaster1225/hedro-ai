'use client';

import { useEffect, useState } from 'react';
import ChatInputBox from '@/components/chat-input-box';

const ChatWithHedro = () => {
  const [chatValue, setChatValue] = useState('');
  const [mount, didMount] = useState(false);

  useEffect(() => didMount(true), []);

  if (!mount) return null;

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (chatValue !== '') {
      console.log('meow');
      setChatValue('');
    }
  };

  return (
    <section className='w-full h-[100vh] flex flex-col gap-9 items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='logo-teal-gradient logo-text'>Hedro.ai</h1>
        <h2 className='sub-logo-text'>
          Hedera AI Chatbot Assistant - Elevate Efficiency, Ignite Productivity!
        </h2>

        <form onSubmit={handleOnSubmit} className='w-full'>
          <ChatInputBox
            note={true}
            id={'chat-input'}
            value={chatValue}
            handleOnSubmit={handleOnSubmit}
            handleOnFieldChange={(e: any) => {
              setChatValue(e.target.value);
            }}
          />
        </form>
      </div>
    </section>
  );
};

export default ChatWithHedro;

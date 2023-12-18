import { useState } from 'react';
import { RxLoop } from 'react-icons/rx';
import { IoCheckmarkDone } from 'react-icons/io5';
import { FaRegEdit, FaRegCopy } from 'react-icons/fa';

interface PageProps {
  content: string;
  isHedro: boolean;
}

const ChatBuble = ({ content, isHedro }: PageProps) => {
  const nickname = isHedro ? 'Hedrop' : 'You';
  const [copied, setCopied] = useState(false);

  const copyContentToClipboard = (content: string) => {
    setCopied(true);
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={`flex flex-col ${isHedro ? 'items-start' : 'items-end'} `}>
      <p className=' text-primary font-bold text-xl'>{nickname}</p>
      <div
        className={`${
          isHedro ? 'bg-[#fff]' : 'bg-[#f3efe8]'
        } border border-bordercolor/100 rounded-lg px-2 pt-2 pb-2 flex flex-col gap-2`}
      >
        <p
          className={`${
            isHedro ? 'text-[#271d0b]' : 'text-[#715625]'
          } font-semibold tracking-tight`}
        >
          {content}
        </p>

        <div className='flex gap-1'>
          {!isHedro && (
            <div
              className='cursor-pointer w-fit hover:scale-110 transition ease-in-out'
              title='Edit and re-ask this question'
            >
              <FaRegEdit />
            </div>
          )}

          {isHedro && (
            <div
              className='cursor-pointer font-bold w-fit hover:scale-110 transition ease-in-out'
              title='Rewrite this answer'
            >
              <RxLoop />
            </div>
          )}

          <div
            className='cursor-pointer w-fit hover:scale-110 transition ease-in-out'
            title={`Copy this ${isHedro ? 'answer' : 'question'}`}
            onClick={() => copyContentToClipboard(content)}
          >
            {copied ? <IoCheckmarkDone /> : <FaRegCopy />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;

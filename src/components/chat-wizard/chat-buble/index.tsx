import { useState } from 'react';
import { RxLoop } from 'react-icons/rx';
import { IoCheckmarkDone } from 'react-icons/io5';
import { FaRegEdit, FaRegCopy } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';

interface PageProps {
  content: string;
  isHedro: boolean;
  id: string;
}

const ChatBuble = ({ content, isHedro, id }: PageProps) => {
  const nickname = isHedro ? 'Hedro' : 'You';
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const copyContentToClipboard = (content: string) => {
    setCopied(true);
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`w-full flex flex-col ${
        isHedro ? 'items-start' : 'items-end'
      } `}
    >
      <p className=' text-primary font-bold text-base xssm:text-lg'>
        {nickname}
      </p>
      <div
        className={`${
          isHedro ? 'bg-[#fff]' : 'bg-[#f3efe8]'
        } border border-bordercolor/100 rounded-lg px-2 pt-2 pb-2 flex flex-col gap-2`}
      >
        <div
          className={`${
            isHedro ? 'text-[#271d0b]' : 'text-[#715625]'
          } font-semibold tracking-tight text-sm xssm:text-base`}
        >
          {content.split('\n').map((currentTextBlock: string, index) => {
            if (currentTextBlock === '') {
              return <p key={id + index}>&nbsp;</p>; // " "
            } else {
              return <p key={id + index}>{currentTextBlock}</p>;
            }
          })}
        </div>

        <div className='flex gap-1'>
          {!isHedro && (
            <div
              className='cursor-pointer w-fit hover:scale-110 transition ease-in-out'
              title='Edit and re-ask this question'
              onClick={() =>
                toast({
                  title: 'Feature coming soon 🤞',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                  status: 'warning',
                })
              }
            >
              <FaRegEdit />
            </div>
          )}

          {isHedro && (
            <div
              className='cursor-pointer font-bold w-fit hover:scale-110 transition ease-in-out'
              title='Rewrite this answer'
              onClick={() =>
                toast({
                  title: 'Feature coming soon 🤞',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                  status: 'warning',
                })
              }
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

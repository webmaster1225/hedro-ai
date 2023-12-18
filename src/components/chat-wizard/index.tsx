import { Message } from 'ai/react';
import ChatBuble from './chat-buble';
import { useToast } from '@chakra-ui/react';
import FollowUpQuestion from './follow-up-questions';

interface PageProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatWizard = ({ messages, isLoading }: PageProps) => {
  const toast = useToast();
  return (
    <div className='w-80 xsm:w-96 xssm:w-[26rem] sm:w-[36rem] md:w-[42rem] lg:w-[51rem] min-h-full px-3 flex flex-col gap-6'>
      {messages.map((message) => {
        return (
          <div
            className='w-80 xsm:w-96 xssm:w-[26rem] sm:w-[36rem] md:w-[42rem] lg:w-[51rem]'
            key={message.id}
          >
            <ChatBuble
              isHedro={message.role === 'assistant'}
              content={message.content}
              id={message.id}
            />
          </div>
        );
      })}

      {!isLoading && <hr className='mt-12 bg-secondary h-[0.3px]' />}

      {/* Follow up questions*/}
      {!isLoading && (
        <div className='-mt-3'>
          <p className='text-black font-bold'>Follow up questions: </p>
          <div
            className='flex flex-col gap-2'
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
            <FollowUpQuestion question={'Comming soon...'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWizard;

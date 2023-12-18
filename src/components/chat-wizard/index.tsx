import { Message } from 'ai/react';
import ChatBuble from './chat-buble';
import FollowUpQuestion from './follow-up-questions';

interface PageProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatWizard = ({ messages, isLoading }: PageProps) => {
  return (
    <div className='w-full lg:w-[810px] min-h-full px-3 flex flex-col gap-6'>
      {messages.map((message) => {
        return (
          <div className='w-full' key={message.id}>
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
          <div className='flex flex-col gap-2'>
            <FollowUpQuestion question={'Comming soon...'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWizard;

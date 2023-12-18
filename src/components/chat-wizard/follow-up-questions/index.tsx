import { FaRegEdit } from 'react-icons/fa';

interface PageProps {
  question: string;
}

const FollowUpQuestion = ({ question }: PageProps) => {
  return (
    <div className='flex items-center justify-between bg-[#fff] border border-bordercolor/100 rounded-lg cursor-pointer hover:-translate-y-0.5 transition ease-in-out px-2 py-1'>
      <p className='text-secondary font-bold tracking-tight'>{question}</p>

      <div className='text-xl hover:scale-110 pl-2' title='Edit this question'>
        <FaRegEdit />
      </div>
    </div>
  );
};

export default FollowUpQuestion;

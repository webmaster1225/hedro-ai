import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

interface PageProps {
  id: string;
  value: string;
  note?: boolean;
  inputRef?: any;
  isChatMode: boolean;
  lightShadow?: boolean;
  handleOnSubmit: (e: any) => void;
  handleOnFieldChange: (e: any) => void;
}

const ChatInputBox = ({
  id,
  value,
  note,
  inputRef,
  isChatMode,
  handleOnSubmit,
  handleOnFieldChange,
}: PageProps) => {
  const [onHover, setOnHover] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  return (
    <fieldset
      className={`${
        isChatMode ? `sm:w-[51rem]` : `sm:w-[36rem]`
      } w-72 xxsm:w-[20rem] xsm:w-[22rem] xssm:w-96 flex justify-center flex-col items-center mt-12 mx-3 xsm:mx-6 xssm:mx-12`}
    >
      <div className={`w-full relative`}>
        <input
          id={id}
          ref={inputRef}
          type={'text'}
          value={value}
          onChange={handleOnFieldChange}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          placeholder={'Ask me about Hedera network...'}
          className={`appearance-none w-full text-sm font-semibold border p-3 rounded-lg transition ease-in-out focus:-translate-y-0.5 focus:outline-none
        bg-gray-100 border-borderColor-light hover:border-bordercolor focus:border-bordercolor focus:bg-white ${
          (onHover || onFocus) && `-translate-y-0.5`
        }`}
        />
        <div
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={handleOnSubmit}
          className={`absolute hidden xxsm:block text-white text-2xl bg-gradient-to-r from-teal-500 to-teal-300 rounded-xl p-1 top-2 right-3 cursor-pointer transition ease-in-out hover:scale-105 ${
            (onHover || onFocus) && `-translate-y-0.5`
          }`}
        >
          <IoIosSend />
        </div>
      </div>
      {note && (
        <div className='text-xs mt-0.5 font-semibold text-secondary'>
          Hedro is in beta and may display incorrect information
        </div>
      )}
    </fieldset>
  );
};

export default ChatInputBox;

import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface Props {
  title:string;
  info:string;
}

const Question:React.FC<Props> = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='px-6 py-4 border-2 border-solid border-gray-300 mb-4 rounded-lg shadow-xl'>
    <header className='flex justify-between items-center'>
      <h4 className='leading-6 transform-none'>{title}</h4>
      <button className='border-transparent w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full text-red-400 coursor-pointer ml-4 self-start min-w-8' onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
  </article>
  )
}

export default Question
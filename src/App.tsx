import React from 'react';
import data , { QuestionType } from './data'
import SingleQuestion from './Question'


function App() {
  const questions:QuestionType[] = data
return (
  <main className='min-h-screen flex justify-center items-center bg-gray-200'>
    <div className="w-[90vw] my-[5rem] mx-auto bg-white rounded-lg py-9 px-8 max-w-4xl grid gap-y-4 gap-x-8 grid-cols-2">
      <h3 className='leading-5 font-bold'>questions and answers about login</h3>
      <section className="info">
        {questions.map((question)=>{
          return (
            <SingleQuestion key={question.id} {...question} />
          )
        })}
      </section>
    </div>
  </main>
   
  )
}

export default App

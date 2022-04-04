import React from 'react';
import { quizData } from './quiz_data';



const Quiz = () => {
  return (
    <div className='QuizQuestion'>
        {quizData.map((data)=> {
            return(
                <div>{data.instruction_text}</div>
            );
        })}
    </div>
  )
}

export default Quiz

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = (questionProp) => {
  const { question, active, handleActive } = questionProp;

  const [open, setOpen] = useState(false);

  function handleToggle(e) {
    if (active) {
      setOpen((open) => !open);
    } else {
      setOpen((open) => true);
      handleActive(e);
    }
  }
  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button
          data-id={question.id}
          className='btn'
          onClick={(e) => handleToggle(e)}
        >
          {open && active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {open && active && <p>{question.info}</p>}
    </article>
  );
};

export default SingleQuestion;

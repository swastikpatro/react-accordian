import { useState } from 'react';
import data from './Questions';
import SingleQuestion from './SingleQuestion';

function App() {
  const [questions, setQuestions] = useState(data);
  const [isActive, setIsActive] = useState(1);

  function handleClick(e) {
    setIsActive((prevActive) => Number(e.target.closest('.btn').dataset.id));
  }
  return (
    <main className='App'>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion
              active={isActive === question.id}
              handleActive={handleClick}
              key={question.id}
              question={question}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;

import React from 'react';

const TimerChallenge = () => {
  return (
    <section className='challenge'>
      <h2>제목</h2>
      <p className='challenge-time'>
        5 seconds
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p>
        Timer inactive
      </p>
    </section>
  );
};

export default TimerChallenge;
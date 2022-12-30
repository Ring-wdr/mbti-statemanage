import { useStore } from '../store/mbtiStore';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/data';

export const Question = () => {
  const { cnt, inc, addMBTI, mbti } = useStore(
    ({ count, increaseCount, addMBTI, mbti }) => ({
      cnt: count,
      inc: increaseCount,
      addMBTI,
      mbti,
    })
  );
  const navigate = useNavigate();

  const nextMBTI = (choice: number) => {
    cnt === 9 ? navigate('/result') : inc();
    // console.log(questions[cnt].choices[choice].value);
    addMBTI(questions[cnt].choices[choice].value);
  };

  return (
    <div className='container sub'>
      <div className='progress'>
        <div className='value'>{mbti}</div>
      </div>
      <div className='questionsBox'>
        <div className='number'>{cnt}</div>
        <div className='question'>{questions[cnt].question}</div>
        <button className='choice choice1' onClick={() => nextMBTI(0)}>
          {questions[cnt].choices[0].text}
        </button>
        <button className='choice choice2' onClick={() => nextMBTI(1)}>
          {questions[cnt].choices[1].text}
        </button>
      </div>
    </div>
  );
};

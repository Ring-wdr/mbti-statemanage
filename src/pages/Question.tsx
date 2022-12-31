import { useStore } from '../store/mbtiStore';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/data';

export const Question = () => {
  const {
    count: cnt,
    increaseCount: inc,
    decreaseCount: dec,
    addMBTI,
    decMBTI,
  } = useStore((store) => store);
  const navigate = useNavigate();

  const nextMBTI = (choice: number) => {
    cnt === 9 ? navigate('/result') : inc();
    addMBTI(questions[cnt].choices[choice].value);
  };

  const prevPage = () => {
    cnt !== 0 && dec();
    decMBTI();
    cnt < 1 && navigate(-1);
  };

  return (
    <div className='container sub'>
      <div className='progress'>
        <div className='value' style={{ width: `${(cnt + 1) * 10}%` }}></div>
      </div>

      <button onClick={prevPage}>뒤로가기</button>
      <div className='questionsBox'>
        <div className='number'>{questions[cnt]?.number}</div>
        <div className='question'>{questions[cnt]?.question}</div>
        {questions[cnt]?.choices.map((choice, idx) => (
          <button
            className={`choice choice${idx + 1}`}
            onClick={() => nextMBTI(idx)}
            dangerouslySetInnerHTML={{ __html: choice.text }}
          ></button>
        ))}
      </div>
    </div>
  );
};

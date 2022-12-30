import { useNavigate } from 'react-router-dom';
import { MBTIresults, mbtis } from '../data/data';
import { useStore } from '../store/mbtiStore';

type MBTIType =
  | 'entj'
  | 'entp'
  | 'estp'
  | 'esfp'
  | 'esfj'
  | 'enfj'
  | 'infp'
  | 'isfp'
  | 'isfj'
  | 'infj'
  | 'estj'
  | 'istp'
  | 'intj'
  | 'intp'
  | 'istj'
  | 'enfp';

export const Result = () => {
  const navigate = useNavigate();
  const { mbti, reset } = useStore(({ mbti, reset }) => ({ mbti, reset })) as {
    mbti: MBTIType;
    reset: () => void;
  };
  return (
    <div className='container re'>
      <div className='reTitle'>
        <h3>나는 어떤 MBTI일까?</h3>
      </div>
      <div className='titleWrap'>
        <h4 className='pTitle'>{MBTIresults[mbtis[mbti]].title}</h4>
      </div>
      {/* <img src="" alt="캐릭터" className="character"> */}
      <div className='resultWrap'>
        <div className='result'>
          {MBTIresults[mbtis[mbti]].results.map((result, idx) => (
            <div
              className='box'
              key={idx}
              dangerouslySetInnerHTML={{ __html: result }}
            ></div>
          ))}
        </div>
        <div className='result'>
          <h3>이러쿵저러쿵</h3>
          <div className='jobs'>
            {MBTIresults[mbtis[mbti]].jobs.map((job, idx) => (
              <div
                className='job'
                key={idx}
                dangerouslySetInnerHTML={{ __html: job }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <button className='btn btn-green btn-small shareBtn'>
        결과 공유하기
      </button>
      <button
        onClick={() => {
          navigate('/');
          reset();
        }}
        className='btn btn-gray btn-small'
      >
        다시 테스트 하기
      </button>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className='container main'>
        <div className='boxTitle title'>
          <h2>
            <span>MBTI</span>
          </h2>
        </div>
        <div className='mainTitle title'>
          <h3>MBTI TEST</h3>
        </div>
        <div className='mainImg'>
          {/* <img src='./img/nongdamgom.png' alt='메인 이미지' /> */}
        </div>
        <button className='btn' onClick={() => navigate('/question')}>
          TEST START!
        </button>
        <button className='shareBtn'>주변에 농담곰 알리기</button>
      </div>
    </div>
  );
};

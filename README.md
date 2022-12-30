# 전역 상태 관리 라이브러리 zustand test

## store 구성 기획

### state

count: 설문 조사 단계 <br/>
mbti: 설문 내용에 따른 MBTI 분석<br/>

### action

count) <br/>

1. increaseCount: 설문 선택 시 단계를 더한다.
2. decreaseCount: 뒤로가기시 단계를 뺀다.

mbit) <br/>

1. addMBTI: 선택지에 따른 MBTI 분석 후 결과 반영.
2. decMBTI: 뒤로가기시 이전 MBTI 데이터 되돌리기.

reset) <br/>

1. reset: 처음으로 돌아갈 때 모든 결과를 초기화한다.

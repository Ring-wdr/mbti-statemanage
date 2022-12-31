import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface MBTIStoreType {
  count: number;
  mbti: string;
  increaseCount: () => void;
  decreaseCount: () => void;
  addMBTI: (MBTItype: string) => void;
  decMBTI: () => void;
  reset: () => void;
}

// set 함수를 통해서만 상태를 변경할 수 있다
export const useStore = create<MBTIStoreType>()(
  devtools((set, get) => ({
    count: 0, //state
    mbti: '',

    // set 함수 사용 #1 현재 상태를 기반으로 새로운 상태를 리턴하는 함수
    increaseCount: () => set(() => ({ count: get().count + 1 }), false, 'cnt'),
    decreaseCount: () => set(() => ({ count: get().count - 1 }), false, 'cnt'),
    addMBTI: (MBTItype: string) =>
      set(() => ({ mbti: `${get().mbti}${MBTItype}` }), false, 'MBTI'),
    decMBTI: () =>
      set(
        ({ mbti }) =>
          mbti.length < 5
            ? { mbti: mbti.substring(0, mbti.length - 1) }
            : { mbti },
        false,
        'MBTI'
      ),
    reset: () => set({ count: 0, mbti: '' }, false, 'BackToMain'),
  }))
);

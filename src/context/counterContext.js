import { createContext, useContext } from "react";

//Context 생성
export const CounterContext = createContext();

//Provider 생성
export const CounterProvider = CounterContext.Provider;

//store에 있는 밸류를 사용하기 위한 Hooks
export const useCounterStore = () => useContext(CounterContext);

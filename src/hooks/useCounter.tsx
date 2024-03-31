import { useState } from 'react';

const useCounter = ({ initialValue, initialStep = 1 }: CounterStateTypes) => {
	const [count, setCount] = useState<number>(initialValue);
	const [step, setStep] = useState<number>(initialStep);

	const increment = () => setCount((prevCount) => prevCount + step);
	const decrement = () => setCount((prevCount) => prevCount - step);
	const updateStep = (newStep: number) => setStep(newStep);
	const resetCount = () => setCount(initialValue);

	return { count, step, increment, decrement, updateStep, resetCount };
};

type CounterStateTypes = {
	initialValue: number;
	initialStep?: number;
};

export default useCounter;

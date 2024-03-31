import { useState } from 'react';

// Component imports
import { ShowPrevCount } from '.';

// Hook imports
import { useCounter } from '../hooks';

const Counter = () => {
	const { count, step, increment, decrement, updateStep, resetCount } =
		useCounter(counterState);
	const [showPrev, setShowPrev] = useState<boolean>(false);

	return (
		<div className='card'>
			<button onClick={increment}>+</button>
			Count is {count}
			<button onClick={decrement}>-</button>
			<div>
				<button onClick={resetCount}>Reset count</button>
			</div>
			<div>
				<button onClick={() => setShowPrev((prev) => !prev)}>
					Show previous count
				</button>
				{showPrev && (
					<ShowPrevCount prevCount={count > 0 ? count - step : count + step} />
				)}
			</div>
			<div>
				<label htmlFor='count-step'>Step: </label>
				<input
					type='number'
					value={step}
					onChange={(e) => updateStep(parseInt(e.target.value))}
				/>
			</div>
		</div>
	);
};

const counterState: CounterStateTypes = {
	initialValue: 0,
	initialStep: 10,
};

type CounterStateTypes = {
	initialValue: number;
	initialStep: number;
};

export default Counter;

// React imports

// Component imports
import { Heading, Counter, Section } from './components';

function App() {
	return (
		<>
			<Heading title={'React with TypeScript'}>
				<h2>Sub-heading (child of Heading)</h2>
			</Heading>
			<Counter />
			<Section>Technologies</Section>
		</>
	);
}

export default App;

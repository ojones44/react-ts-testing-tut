import { ReactNode } from 'react';

// Data imports
import { items } from '../data/items';

// Component imports
import { List } from '.';

const Section = ({ children }: SectionTypes) => {
	return (
		<div>
			{children}
			<List items={items} />
		</div>
	);
};

type SectionTypes = {
	children?: ReactNode;
};

export default Section;

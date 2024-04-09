import { ReactNode } from 'react';

// Hook imports
import { useFetch } from '../hooks';

// Type imports
import { TUsersResponse } from '../types/types';

// Component imports
import { List } from '.';

const Section = ({ children }: SectionTypes) => {
	const [data, isLoading, fetchError] = useFetch<TUsersResponse[]>(
		'/users.json',
		[]
	);

	if (isLoading) return <h1>Loading...</h1>;
	if (fetchError) return <h1>{fetchError}</h1>;

	return (
		<div>
			{children}
			<List data={data} />
		</div>
	);
};

type SectionTypes = {
	children?: ReactNode;
};

export default Section;

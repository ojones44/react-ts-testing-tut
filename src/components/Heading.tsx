import { ReactElement, ReactNode } from 'react';

const Heading = ({
	title = placeholder,
	children,
}: HeadingTypes): ReactElement => {
	return (
		<>
			<h1>{title}</h1>
			{children}
		</>
	);
};

const placeholder: string = 'Heading Placeholder';

interface HeadingTypes {
	title?: string;
	children?: ReactNode;
}

export default Heading;

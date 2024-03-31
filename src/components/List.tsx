// component imports
import { ListItem } from '.';

const List = ({ items }: ListTypes) => {
	return (
		<ul>
			{items.map((item, i) => {
				return <ListItem key={i} item={item} />;
			})}
		</ul>
	);
};

interface ListTypes {
	items: string[];
	// render: (item: T) => ReactNode;
}

export default List;

// component imports
import { ListItem } from '.';

// Type imports
import { TUsersResponse } from '../types/types';

const List = ({ data }: ListProps) => {
	return (
		<>
			{data.length > 0 ? (
				data.slice(0, 5).map((user) => {
					return <ListItem key={user.id} user={user} />;
				})
			) : (
				<p>No data to show</p>
			)}
		</>
	);
};

interface ListProps {
	data: TUsersResponse[];
}

export default List;

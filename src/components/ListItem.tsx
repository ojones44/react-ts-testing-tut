// Type imports
import { TUsersResponse } from '../types/types';

const ListItem = ({ user }: ListItemTypes) => {
	return (
		<div>
			<h2>Name: {`${user.first_name} ${user.last_name}`}</h2>
			<p>Email: {user.email}</p>
		</div>
	);
};

type ListItemTypes = {
	user: TUsersResponse;
};

export default ListItem;

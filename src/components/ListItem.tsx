const ListItem = ({ item }: ListItemTypes) => {
	return <li>{item}</li>;
};

type ListItemTypes = {
	item: string;
};

export default ListItem;

const ShowPrevCount = ({ prevCount }: ShowPrevCountTypes) => {
	return <div>Previous count is {prevCount}</div>;
};

type ShowPrevCountTypes = {
	prevCount: number;
};

export default ShowPrevCount;

import { useState, useEffect } from 'react';

export const useFetch = <T,>(
	url: string,
	initialState: T
): [T, boolean, string | null] => {
	const [data, setData] = useState<T>(initialState);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [fetchError, setFetchError] = useState<string | null>(null);

	const fetchData = async () => {
		try {
			const res = await fetch(url);
			if (!res.ok) {
				throw new Error('Unexpected error fetching.');
			}

			const serverData = await res.json();
			setData(serverData);
		} catch (error) {
			setFetchError((error as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			fetchData();
		}, 2000);
	}, []);

	return [data, isLoading, fetchError];
};

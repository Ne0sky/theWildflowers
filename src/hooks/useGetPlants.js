import { useQuery } from 'react-query';

const useGetPlants = () => {
    const fetchPlants = async () => {
        console.log('Fetching plants...');
        const res = await fetch('https://sproutz.vercel.app/api/plants');
        console.log('Response:', res);
        if (!res.ok) {
            throw new Error('Failed to fetch plants');
        }
        return res.json();
    };

    const { data: plants, error, isLoading: isPending } = useQuery('plants', fetchPlants);


    return { plants, error, isPending };
};

export default useGetPlants;

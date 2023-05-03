import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platfomrs/lists/parents');

export default usePlatforms;
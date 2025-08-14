interface DataService {
    fetchData(id: number): string;
}

class DataServiceImpl implements DataService {
    fetchData(id: number): string {
        console.log(`Fetching data for ID: ${id}`);
        return `Data for ID: ${id}`;
    }
}

class CachedDataProxy implements DataService {
    private data: DataService;
    private cache: Map<number, string> = new Map();

    constructor() {
        this.data = new DataServiceImpl();
    }

    fetchData(id: number): string {
        if (this.cache.has(id)) {
            console.log(`Fetching data for ID: ${id} from cache.`);
            return this.cache.get(id)!;
        }
        const data = this.data.fetchData(id);
        this.cache.set(id, data);
        return data;
    }
}

const proxy = new CachedDataProxy();

console.log(proxy.fetchData(1));
console.log(proxy.fetchData(2));
console.log(proxy.fetchData(1));
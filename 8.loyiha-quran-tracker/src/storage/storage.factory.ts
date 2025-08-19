import { JSONStorage } from "./json.storage";
import { StorageStrategy } from "./storage.strategy";

export class StorageFactory {
    static create(type:'json'): StorageStrategy {
        switch (type) {
            case 'json':
                return new JSONStorage();
            default:
                throw new Error(`Unknown storage type: ${type}`);
        }
    }
}
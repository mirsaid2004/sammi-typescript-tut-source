import { StorageFactory } from "./storage.factory";
import { StorageStrategy } from "./storage.strategy";

export class StorageSingleton {
    private static instance: StorageStrategy;

    static getInstance(): StorageStrategy {
        if (!StorageSingleton.instance) {
            StorageSingleton.instance = StorageFactory.create('json'); // or any other type you want to support
        }
        return StorageSingleton.instance;
    }

}
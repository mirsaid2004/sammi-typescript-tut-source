import fs from 'fs';
import path from 'path';
import { StorageStrategy } from './storage.strategy';
import { MemorizationProgress } from '@/types/types';

const filePath = path.join(__dirname, '../data/progress.json');

export class JSONStorage implements StorageStrategy {
    load(): MemorizationProgress[] {
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    save(data: MemorizationProgress[]): void {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
}
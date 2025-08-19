import inquirer from 'inquirer';
import { CommandExecutor } from './core/command-executor';
import { Context } from './core/context';
import { StorageSingleton } from './storage/storage.singleton';
import { AddEntryCommand } from './commands/add-entry.command';
import { ShowEntriesCommand } from './commands/show-entries.command';
import { ExitCommand } from './commands/exit-command';

const executor = new CommandExecutor();
const context = new Context(StorageSingleton.getInstance())

async function bootstrap() {
    const {action} = await inquirer.prompt([
        {
            type: "list",
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                '➕ New memorization entry',
                '📜 Show memorization entries',
                '🗑️ Delete memorization entry',
                '🔄 Update memorization entry',
                '📊 Show statistics',
                '❌ Exit'
            ]
        }
    ])

    switch (action) {
        case '➕ New memorization entry':
            await executor.run(
                new AddEntryCommand(context)
            )
            break;
        case '📜 Show memorization entries':
            await executor.run(
                new ShowEntriesCommand(context)
            )
            break;
        case '🗑️ Delete memorization entry':
            // Handle deleting an entry
            break;
        case '🔄 Update memorization entry':
            // Handle updating an entry
            break;
        case '📊 Show statistics':
            // Handle showing statistics
            break;
        case '❌ Exit':
            await executor.run(
                new ExitCommand(context)
            );
            break;
    }

    bootstrap()
}

bootstrap()
import {dictAssignCMD} from './lib';

import {DICT_ASSIGN_CONFIG} from './configs';

export async function registerMutableDictSlashCommands() {
    const context = (await import(/* webpackIgnore: true */ '/scripts/st-context.js')).getContext();

    const slash_parser = context.SlashCommandParser;
    const slash_command = context.SlashCommand;

    slash_parser.addCommandObject(slash_command.fromProps({
        callback: dictAssignCMD,
        ...DICT_ASSIGN_CONFIG,
    }));
}

import {dictAtCMD, dictGetCMD} from './lib.js';

import {DICT_AT_CONFIG, DICT_GET_CONFIG} from './configs.js';

import {DICT_AT_HELP, DICT_GET_HELP} from './docs.js';

export async function registerImmutableDictSlashCommands() {
    const context = (await import(/* webpackIgnore: true */ '/scripts/st-context.js')).getContext()

        , slash_parser = context.SlashCommandParser
        , slash_command = context.SlashCommand;

    slash_parser.addCommandObject(slash_command.fromProps({
        callback: dictAtCMD,
        ...DICT_AT_CONFIG,
        helpString: DICT_AT_HELP,
    }));

    slash_parser.addCommandObject(slash_command.fromProps({
        callback: dictGetCMD,
        ...DICT_GET_CONFIG,
        helpString: DICT_GET_HELP,
    }));
}

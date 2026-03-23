import {SlashCommandParser} from '../../../../../slash-commands/SlashCommandParser.js';
import {SlashCommand} from '../../../../../slash-commands/SlashCommand.js';

import {list_configs} from "./configs.js";
// import {list_docs} from "./docs.js";

import  {list_callbacks} from './lib.js';



export function registerCustomSlashCommands() {
    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        ...list_configs.list_zip,
        callback: list_callbacks.list_zip,
        // helpString: list_docs.list_push,
    }));

    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        ...list_configs.list_zip_longest,
        callback: list_callbacks.list_zip_longest,
    }));
}

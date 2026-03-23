import {
    ARGUMENT_TYPE,
    SlashCommandArgument,
    SlashCommandNamedArgument
} from '../../../../../slash-commands/SlashCommandArgument.js';


const LIST_ZIP_CONFIG = {
    name: 'list-zip',
    aliases: ['arr-zip'],
    returns: 'The zipped list',
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The lists to zip',
            typeList: [
                ARGUMENT_TYPE.STRING,
                ARGUMENT_TYPE.LIST,
            ],
            isRequired: true,
            acceptsMultiple: true,
        }),
    ],
    splitUnnamedArgument: true,
};

const LIST_ZIP_LONGEST_CONFIG = {
    name: 'list-zip-longest',
    aliases: ['arr-zip-longest'],
    returns: 'The zipped list',
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The lists to zip',
            typeList: [
                ARGUMENT_TYPE.STRING,
                ARGUMENT_TYPE.LIST,
            ],
            isRequired: true,
            acceptsMultiple: true,
        }),
    ],
    splitUnnamedArgument: true,
};


export const list_configs = {
    list_zip: LIST_ZIP_CONFIG,
    list_zip_longest: LIST_ZIP_LONGEST_CONFIG,
}

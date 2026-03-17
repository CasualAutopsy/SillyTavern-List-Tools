import {
    ARGUMENT_TYPE,
    SlashCommandArgument,
    SlashCommandNamedArgument
} from '../../../../slash-commands/SlashCommandArgument.js';



// Command configuration constants

// PUSH / POP

const LIST_PUSH_CONFIG = {
    name: 'list-push',
    aliases: ['arr-push'],
    returns: 'The list with the pushed value(s) || The new list\'s length',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'noParse',
            description: "Don't parse values into their appropriate datatypes",
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'jsReturn',
            aliasList: ['js'],
            description: 'Return the new list length instead of the list itself',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The target list to push to',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
        SlashCommandArgument.fromProps({
            description: 'The value(s) to push to the list',
            typeList: [
                ARGUMENT_TYPE.STRING,
                ARGUMENT_TYPE.NUMBER,
                ARGUMENT_TYPE.BOOLEAN,
                ARGUMENT_TYPE.LIST,
                ARGUMENT_TYPE.DICTIONARY,
            ],
            isRequired: true,
            acceptsMultiple: true,
        }),
    ],
    splitUnnamedArgument: true,
};

const LIST_POP_CONFIG = {
    name: 'list-pop',
    aliases: ['arr-pop'],
    returns: 'The popped value from the list || The list without the popped value',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'swapReturn',
            aliasList: ['swap'],
            description: 'Swap the returned value with the value stored in the variable',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The list to pop from',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
    ],
};

// SHIFT / UNSHIFT

const LIST_UNSHIFT_CONFIG = {
    name: 'list-unshift',
    aliases: ['arr-unshift'],
    returns: 'The list with the unshifted value(s) || The new list\'s length',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'noParse',
            description: "Don't parse values into their appropriate datatypes",
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'jsReturn',
            aliasList: ['js'],
            description: 'Return the new list length instead of the list itself',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The target list to unshift to',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
        SlashCommandArgument.fromProps({
            description: 'The value(s) to unshift to the list',
            typeList: [
                ARGUMENT_TYPE.STRING,
                ARGUMENT_TYPE.NUMBER,
                ARGUMENT_TYPE.BOOLEAN,
                ARGUMENT_TYPE.LIST,
                ARGUMENT_TYPE.DICTIONARY,
            ],
            isRequired: true,
            acceptsMultiple: true,
        }),
    ],
    splitUnnamedArgument: true,
};

const LIST_SHIFT_CONFIG = {
    name: 'list-shift',
    aliases: ['arr-shift'],
    returns: 'The shifted value from the list || The list without the shifted value',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'swapReturn',
            aliasList: ['swap'],
            description: 'Swap the returned value with the value stored in the variable',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The list to shift from',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
    ],
};

// SPLICE

const LIST_SPLICE_CONFIG = {
    name: 'list-splice',
    aliases: ['arr-splice'],
    returns: '',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'start',
            description: 'The index to start splicing from',
            typeList: [ARGUMENT_TYPE.NUMBER],
            isRequired: true,
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'del',
            description: 'The number of elements to delete',
            typeList: [ARGUMENT_TYPE.NUMBER],
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'noParse',
            description: "Don't parse values into their appropriate datatypes",
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'jsReturn',
            aliasList: ['js'],
            description: 'Return the new list length instead of the list itself',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
        SlashCommandNamedArgument.fromProps({
            name: 'swapReturn',
            aliasList: ['swap'],
            description: 'Swap the returned value with the value stored in the variable',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The target list to splice',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
        SlashCommandArgument.fromProps({
            description: 'The value(s) to add to the spliced list',
            typeList: [
                ARGUMENT_TYPE.STRING,
                ARGUMENT_TYPE.NUMBER,
                ARGUMENT_TYPE.BOOLEAN,
                ARGUMENT_TYPE.LIST,
                ARGUMENT_TYPE.DICTIONARY,
            ],
            acceptsMultiple: true,
        })
    ],
    splitUnnamedArgument: true,
};

// SORT / REVERSE

const LIST_SORT_CONFIG = {
    name: 'list-sort',
    aliasList: ['arr-sort'],
    returns: '',
    namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
            name: 'reverse',
            description: 'Sort the list in reverse order',
            typeList: [ARGUMENT_TYPE.BOOLEAN],
        }),
    ],
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The target list to sort',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        })
    ],
};

const LIST_REVERSE_CONFIG = {
    name: 'list-reverse',
    aliasList: ['arr-reverse'],
    returns: '',
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The target list to reverse',
            typeList: [ARGUMENT_TYPE.STRING, ARGUMENT_TYPE.LIST, ARGUMENT_TYPE.VARIABLE_NAME],
            isRequired: true,
        }),
    ],
};

export const list_configs = {
    list_push: LIST_PUSH_CONFIG,
    list_pop: LIST_POP_CONFIG,
    list_unshift: LIST_UNSHIFT_CONFIG,
    list_shift: LIST_SHIFT_CONFIG,
    list_splice: LIST_SPLICE_CONFIG,
    list_sort: LIST_SORT_CONFIG,
    list_reverse: LIST_REVERSE_CONFIG,
};

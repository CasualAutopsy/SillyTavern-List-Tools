import {sample, sampleSize, shuffle} from 'lodash-es';
import {toSafeInteger} from 'lodash-es';

import {isVarCheck} from '../../../../utils.js';

/**
 * Handles the '/collection-sample' command for sampling a random value from a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {string} target - Target collection / variable.
 * @returns {*} - Sampled value.
 */
export async function collectionSampleCMD(args, target) {
    return sample(
        isVarCheck(target, args)
    );
}

/**
 * Handles the '/collection-sample-size' command for randomly sampling n number of values from a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {string} target - Target collection / variable.
 * @param {string} n - Number of samples to return.
 * @returns {Array} - Array of sampled values.
 */
export async function collectionSampleSizeCMD(args, [target, n]) {
    return JSON.stringify(sampleSize(
        isVarCheck(target, args),
        toSafeInteger(n)
    ));
}

/**
 * Handles the '/collection-shuffle' command for shuffling a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {string} target - Target collection / variable.
 * @returns {Array} - Array of shuffled values.
 */
export async function collectionShuffleCMD(args, target) {
    return JSON.stringify(shuffle(
        isVarCheck(target, args)
    ));
}

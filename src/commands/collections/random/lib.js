import {sample, sampleSize, shuffle} from 'lodash-es';
import {parseInt} from 'lodash-es';

const {parseJSONOrVar}
    = await import(/* webpackIgnore: true */ '/scripts/extensions/third-party/STLibs-Nox-Library/scripts/parsing.js');

/**
 * Handles the '/collection-sample' command for sampling a random value from a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {String} target - Target collection / variable.
 * @returns {Promise<*>} - Sampled value.
 *///? Maybe combine with SampleSize?
export async function collectionSampleCMD(args, target) {
    const sampledValue = sample(
        parseJSONOrVar(target, args)
    );

    return typeof sampledValue == 'object'
        ? JSON.stringify(sampledValue)
        : sampledValue;
}

/**
 * Handles the '/collection-sample-size' command for randomly sampling n number of values from a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {[String, String]} unnamedArgs - Target collection / variable + number of values to sample.
 * @returns {Promise<String>} - Array of sampled values.
 */
export async function collectionSampleSizeCMD(args, [target, n]) {
    return JSON.stringify(
        // @ts-ignore
        sampleSize(
            parseJSONOrVar(target, args),
            // @ts-ignore
            parseInt(n),
    ));
}

/**
 * Handles the '/collection-shuffle' command for shuffling a collection.
 *
 * @param {Object} args - Slash command arguments.
 * @param {String} target - Target collection / variable.
 * @returns {Promise<String>} - Array of shuffled values.
 */
export async function collectionShuffleCMD(args, target) {
    return JSON.stringify(shuffle(
        parseJSONOrVar(target, args)
    ));
}

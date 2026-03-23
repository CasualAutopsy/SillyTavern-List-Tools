import {custom_itertools} from '../utils/custom.js'



function listZipCMD(_, items) {
    return custom_itertools.zip(items);
}

function listZipLongestCMD(_, items) {
    return custom_itertools.zip_longest(items);
}


export const list_callbacks = {
    list_zip: listZipCMD,
    list_zip_longest: listZipLongestCMD,
}

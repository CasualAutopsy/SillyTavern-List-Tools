import {assign} from 'lodash-es';
import {isMutableVarCheck, parseOrVar} from '../../../../utils.js';

export async function dictAssignCMD(args, [target, ...sources]) {
    const {list, setList} = isMutableVarCheck(target, args);

    const dict = assign(list, ...sources.map((src) => {
        return parseOrVar(src, args);
    }));

    setList(dict);
    return JSON.stringify(dict);
}

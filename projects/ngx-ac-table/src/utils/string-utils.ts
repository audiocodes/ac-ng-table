import {byString} from './by-string';


export class StringUtils {
    static byString = byString;

    static leadToUpper = (srcStr: string, onlyLeadLetter = false) => {
        const postFix = onlyLeadLetter ? srcStr.slice(1) : srcStr.slice(1).toLowerCase();
        return srcStr.charAt(0).toUpperCase() + postFix;
    };

    static toTitleCase = (str: string, {onlyLeadLetter = false, onlyLeadWord = true, delimiter = ' '} = {}) => {
        if (!str) {
            return '';
        }

        return onlyLeadWord ?
            StringUtils.leadToUpper(str, onlyLeadLetter) :
            str.split(delimiter).map((stringFragment) => StringUtils.leadToUpper(stringFragment)).join(' ');
    };
}

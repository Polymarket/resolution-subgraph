import { RegExp } from "assemblyscript-regex";

const REVISION_IDENTIFIER_REGEX = new RegExp("^REVISION:");
const APPROVAL_IDENTIFIER_REGEX = new RegExp("^APPROVAL:");

function regexMatch(inputString: string, regex: RegExp): boolean {
    return regex.test(inputString);
}

export function isRevisionUpdate(updateString: string): boolean {
    return regexMatch(updateString, REVISION_IDENTIFIER_REGEX);
}


export function isApprovalUpdate(updateString: string): boolean {
    return regexMatch(updateString, APPROVAL_IDENTIFIER_REGEX);
}
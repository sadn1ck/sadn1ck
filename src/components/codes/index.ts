import { defaultCode } from "./defaultCode";
import { refComputedCode } from "./refComputedCode"
import { simplerefCode } from "./refSimple";
import { watchCode } from "./watch";

const resolved: Record<string, string> = {
    "simpleref": simplerefCode,
    "refcomp": refComputedCode,
    "default": defaultCode,
    "watch": watchCode,
}

export const codeResolver = (slug: string): string => {
    return resolved[slug];
}
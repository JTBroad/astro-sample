/**
 * Detect if a key exists on a given object
 * @param object object to scan for a given key
 * @param key search term to find in the object
 * @returns boolean
 */
export function ObjectHasKey(object:unknown, key:string):boolean {
    return !!(object && Object.keys(object).findIndex((k)=>k===key) > -1);
}
/* Exclude key(column) from object(row) key can be a list*/
export function exclude(obj, keys) {
	return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
}

export const EXCLIDEBLOCK = 'imageBlock';

/**
 * Find the first successful validation object
 *
 * @param iterator
 * @param success
 * @param nameBlock
 * @returns {null|*}
 */
export function findFirst(iterator, success, nameBlock) {
	const item = iterator.next();

	if (item.done) {
		return null;
	}

	const value = item.value;
	if (nameBlock && value.name === nameBlock) {
		return findFirst(iterator, success, nameBlock);
	}
	if (success(value)) {
		return value;
	}

	return findFirst(iterator, success);
}
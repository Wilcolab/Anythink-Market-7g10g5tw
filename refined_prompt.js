/**
 * Converts a string to camelCase format.
 *
 * This function transforms the input string into camelCase, handling various delimiters
 * such as spaces, underscores, and hyphens. It also removes non-alphanumeric characters
 * (except spaces), normalizes accented letters to their base forms, and ensures numbers
 * are preserved in their original order. The first word is lowercased, and subsequent
 * words are capitalized.
 *
 * @param {string} str - The input string to convert to camelCase.
 * @throws {TypeError} Throws if the input is not a string.
 * @returns {string} The camelCase formatted string. Returns an empty string for null, undefined, or empty input.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase('café au lait'); // 'cafeAuLait'
 * toCamelCase('foo_bar-baz'); // 'fooBarBaz'
 */
function toCamelCase(str) { /* ... */ }

/**
 * Converts a string to dot.case format.
 *
 * This function transforms the input string into dot.case, handling spaces, underscores,
 * hyphens, and mixed delimiters. It removes non-alphanumeric characters (except spaces),
 * normalizes accented letters to their base forms, and ensures numbers are preserved.
 * All words are lowercased and joined by dots.
 *
 * @param {string} str - The input string to convert to dot.case.
 * @throws {TypeError} Throws if the input is not a string.
 * @returns {string} The dot.case formatted string. Returns an empty string for null, undefined, or empty input.
 *
 * @example
 * toDotCase('hello world'); // 'hello.world'
 * toDotCase('café au lait'); // 'cafe.au.lait'
 * toDotCase('foo_bar-baz'); // 'foo.bar.baz'
 */
function toDotCase(str) { /* ... */ }

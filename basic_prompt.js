/**
 * Converts a given string to camelCase.
 * Example: "choudhary tara" => "choudharyTara"
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .map((word, index) =>
            index === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}
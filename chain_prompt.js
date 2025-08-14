// toKebabCase.js

/**
 * Converts a string to kebab-case.
 * Splits on whitespace, underscores, and hyphens; collapses multiple separators.
 * Trims leading/trailing separators/spaces.
 *
 * Examples:
 *   "Hello world"           -> "hello-world"
 *   "  multiple   spaces  " -> "multiple-spaces"
 *   "snake_case-name"       -> "snake-case-name"
 *
 * @param {string} str
 * @returns {string}
 */
export function toKebabCase(str) {
    // Split on whitespace, underscores, and hyphens (collapse runs)
    // Trim leading/trailing separators/spaces
    return str
        .trim()
        .split(/[\s_-]+/u)
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('-');
}
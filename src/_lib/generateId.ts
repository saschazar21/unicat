/**
 * Generates a simple ID of hex values, prefixed with an optional string
 */
export default function generateId(prefix: string = '', length?: number): string {
    const sample = new Array(length || 5).fill(null);
    const base = 'abcdef0123456789';
    const arr = sample.map((n: number) => base.charAt(Math.floor(Math.random() * base.length)));
    return `${prefix && prefix.length > 0 ? `${prefix}-` : '' }${arr.join('')}`;
}

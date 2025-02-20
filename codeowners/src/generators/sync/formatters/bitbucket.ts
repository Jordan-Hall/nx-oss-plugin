import type { PathRules } from '../types';
import { formatRuleLines } from './format-line';

/**

/**
 * Formats a flat CODEOWNERS file (used for Bitbucket).
 *
 * Bitbucket uses a .gitignore–like syntax; in this example it is nearly the
 * same as GitHub. You can tweak this function later if needed.
 */
export function formatBitbucket(rules: PathRules[]): string {
  return rules.flatMap((rule) => formatRuleLines(rule)).join('\n');
}

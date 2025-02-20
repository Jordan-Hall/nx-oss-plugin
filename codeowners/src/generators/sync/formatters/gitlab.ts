import type { PathRules } from '../types';
import { formatRuleLines } from './format-line';

/**
 * Formats a CODEOWNERS file for GitLab.
 *
 * If at least one rule has a defined section, group rules with section headers.
 * Otherwise output a flat file.
 */
export function formatGitLab(rules: PathRules[]): string {
  return rules.flatMap((rule) => formatRuleLines(rule)).join('\n');
}

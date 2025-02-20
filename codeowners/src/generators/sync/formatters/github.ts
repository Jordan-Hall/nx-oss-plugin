import type { PathRules } from '../types';
import { formatRuleLines } from './format-line';

export function formatGitHub(rules: PathRules[]): string {
  return rules.flatMap((rule) => formatRuleLines(rule)).join('\n');
}

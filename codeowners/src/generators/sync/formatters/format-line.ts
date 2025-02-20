import type { PathRules } from '../types';

export function formatRuleLines(rule: PathRules): string[] {
  return rule.paths.map((p) =>
    `${rule.comment ? '# ' + rule.comment + '\n' : ''}${p} ${rule.reviewers.join(
      ' '
    )}`
  );
}

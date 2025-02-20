import * as path from 'path';
import type { CodeownersFormat, PathRules } from '../types';
import { formatBitbucket } from './bitbucket';
import { formatGitHub } from './github';
import { formatGitLab } from './gitlab';
import { formatRuleLines } from './format-line';


/**
 * Switches to the proper function based on the requested format.
 */
export function formatCodeOwners(
  format: CodeownersFormat,
  rules: PathRules[]
): string {
  switch (format) {
    case 'github':
      return formatGitHub(rules);
    case 'bitbucket':
      return formatBitbucket(rules);
    case 'gitlab':
      return formatGitLab(rules);
    default:
      return rules.flatMap((rule) => formatRuleLines(rule)).join('\n');

  }
}

/**
 * Returns the default output file path based on the chosen format:
 *
 * - GitHub: ".github/CODEOWNERS"
 * - GitLab: ".gitlab/CODEOWNERS"
 * - Bitbucket: ".bitbucket/CODEOWNERS"
 */
export function getDefaultOutputPath(format: CodeownersFormat): string {
  switch (format) {
    case 'github':
      return path.join('.github', 'CODEOWNERS');
    case 'gitlab':
      return path.join('.gitlab', 'CODEOWNERS');
    case 'bitbucket':
      return path.join('.bitbucket', 'CODEOWNERS');
    default:
      return 'CODEOWNERS'
  }
}

export type CodeownersFormat = 'github' | 'bitbucket' | 'gitlab' | 'custom';

export type NxReviewers = {
  format?: CodeownersFormat,
  outputPath?: string,
  rules: Rules[]
}

export type NxProjectReviewers = {
  rules: PathRules[]
}

export type Rules = PathRules | TagRule | ProjectRule

type BaseRule = {
  comment?: string,
  reviewers: string[]
}
export type PathRules = BaseRule & {
  paths: string[]
}

export type TagRule = BaseRule & {
  tags: string[]
}

export type ProjectRule = BaseRule & {
  projectNames: string[]
}

# The OSS Codeowner NX plugin

This was inspired by the work from nx-plugin-codeowners and changed to support NX sync. This plugin is completely free, community supported and Open source under MIT license.

## configuraton options

### Options for `nx,json` and `project.json`

| Type                | Property       | Description                                                  |
|---------------------|----------------|--------------------------------------------------------------|
| `nx.json`           | `rules`        | An array of `Rules`, which can include `PathRules`, `TagRule`, or `ProjectRule`. |
| `project.json`      | `rules`        | An array of `PathRules` specifically for project-level reviewers. |

### Wildcard and Regex Support

- Wildcards (`*`) can be used in the `paths`, `projectNames`, and `tags` properties to match anything before or after.
- Standard regex is also supported for more complex matching of project names and tags.

### Examples

#### Example of `nx.json`

```json
{
    "reviewers": {
        "rules": [
            {
                "comment": "General rules for all projects",
                "reviewers": ["@user1", "@user2"],
                "paths": ["src/**"]
            },
            {
                "comment": "Rules for tagging",
                "reviewers": ["@tagReviewer"],
                "tags": ["feature.*", "bug"]
            },
            {
                "comment": "Project specific rules",
                "reviewers": ["@projectReviewer"],
                "projectNames": ["projectA", "projectB.*"]
            },
            {
                "comment": "Regex matching for specific projects",
                "reviewers": ["@regexReviewer"],
                "projectNames": ["/^project[12]$/"]
            }
        ]
    }
}
```

#### Example of `project.json`

```json
{
    "reviewers": {
        "rules": [
            {
                "comment": "Specific rules for Project A",
                "reviewers": ["@projectAReviewer"],
                "paths": ["apps/projectA/src/**"]  // Matches all files in the projectA source directory
            },
            {
                "comment": "Specific rules for Project B",
                "reviewers": ["@projectBReviewer"],
                "paths": ["apps/projectB/src/**", "apps/projectB/tests/**"]  // Matches both source and test files in projectB
            }
        ]
    }
};
```

types:

```typescript
export type NxReviewers = {
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


```

### Acknowledgement

[nx-plugin-codeowners](https://github.com/swapniltech0390/nx-plugin-codeowners) This was inpired and created from this plugin with the support of SYNC

[NX PowerPack](https://nx.dev/blog/introducing-nx-powerpack#codeowners-for-monorepos) While it'ts not directly inspired, NX team support for adding sync for their helped improve the APIand. No license was broken, this was blind/blackbox reverse engerinnering using public API to ensur simulare API and result.

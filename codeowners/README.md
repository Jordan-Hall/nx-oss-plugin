
# The OSS Codeowner NX Plugin

This plugin was inspired by [nx-plugin-codeowners](https://github.com/swapniltech0390/nx-plugin-codeowners) and has been modified to support NX sync. It is completely free, community supported, and open source under the MIT license.

## Configuration Options

### Options for `nx.json` and `project.json`

| Type           | Property    | Description                                                                                                                                                           |
|----------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `nx.json`      | `rules`     | An array of `Rules`, which can include `PathRules`, `TagRule`, or `ProjectRule`.                                                                                    |
| `nx.json`      | `format`    | *Optional.* The output format for the generated CODEOWNERS file. Supported values are `github` (default), `gitlab` (experimental), and `bitbucket` (experimental). |
| `nx.json`      | `outputPath`| *Optional.* Override the default output path. If not provided, the default is determined by the `format` option (see below).                                             |
| `project.json` | `rules`     | An array of `PathRules` specifically for project-level reviewers.                                                                                                   |

### Output Path and CODEOWNERS Format

The plugin generates a CODEOWNERS file using a common, flat format that works across GitHub, GitLab, and Bitbucket. The output path is selected automatically based on the specified `format` option:

- **GitHub (default):** Output file is `.github/CODEOWNERS`
- **GitLab (experimental):** Output file is `.gitlab/CODEOWNERS`
- **Bitbucket (experimental):** Output file is `.bitbucket/CODEOWNERS`

You may override this default behavior by specifying the `outputPath` property in your configuration.

### Wildcard and Regex Support

- Wildcards (`*`) can be used in the `paths`, `projectNames`, and `tags` properties to match anything before or after.
- Standard regex is also supported for more complex matching of project names and tags.

## Examples

### Example of `nx.json`

```json
{
  "reviewers": {
    "format": "github",
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

### Example of `project.json`

```json
{
  "reviewers": {
    "rules": [
      {
        "comment": "Specific rules for Project A",
        "reviewers": ["@projectAReviewer"],
        "paths": ["apps/projectA/src/**"]
      },
      {
        "comment": "Specific rules for Project B",
        "reviewers": ["@projectBReviewer"],
        "paths": ["apps/projectB/src/**", "apps/projectB/tests/**"]
      }
    ]
  }
}
```

### Codeowners Types

```typescript
export type NxReviewers = {
  format?: CodeownersFormat,
  outputPath?: string,
  rules: Rules[]
};

export type NxProjectReviewers = {
  rules: PathRules[];
};

export type Rules = PathRules | TagRule | ProjectRule;

interface BaseRule {
  comment?: string;
  reviewers: string[];
}

export type PathRules = BaseRule & {
  paths: string[];
};

export type TagRule = BaseRule & {
  tags: string[];
};

export type ProjectRule = BaseRule & {
  projectNames: string[];
};
```

## Experimental Support for Bitbucket and GitLab

This plugin now offers **experimental support** for Bitbucket and GitLab. When using these formats, the generated CODEOWNERS file follows the same flat syntax as used for GitHub:

- **Bitbucket:** The CODEOWNERS file uses a `.gitignore`-like syntax in the `.bitbucket/CODEOWNERS` file.
- **GitLab:** The flat CODEOWNERS format is generated in the `.gitlab/CODEOWNERS` file (advanced section support is not available).

Because this support is experimental, please report any issues or feedback so we can continue improving the plugin.

## Acknowledgements

- [nx-plugin-codeowners](https://github.com/swapniltech0390/nx-plugin-codeowners)  
  This plugin was inspired by the original project and modified to support NX sync.

- [NX PowerPack](https://nx.dev/blog/introducing-nx-powerpack#codeowners-for-monorepos)  
  Thanks to the NX team for their excellent support in evolving the API.

No licenses were broken. This project is entirely community supported and utilizes public APIs to achieve similar functionality.

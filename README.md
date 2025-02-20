# NX Open Source Plugins Mono Repo

Welcome to the NX Open Source Plugins Mono Repo!  
This repository contains community-driven NX plugins that help you extend and customize your NX workspace. All plugins in this repository are open source and licensed under the [MIT License](./LICENSE).

> **Note:** Currently, the only available plugin is the **Codeowners Plugin**. Additional plugins will be added over time. We may also attempt to create an open-source version for the entire NX PowerPack in the future.

## Plugins Overview

| Plugin Name | Description                                                                                                     | Documentation                                                                                      | License |
|-------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|---------|
| Codeowners  | A plugin to generate and maintain a CODEOWNERS file for your repository. It supports GitHub, GitLab, and Bitbucket outputs using a common, flat format. | [Codeowners README](./packages/codeowners/README.md) (or see below for details) | MIT     |

## Codeowners Plugin

The Codeowners plugin was inspired by [nx-plugin-codeowners](https://github.com/swapniltech0390/nx-plugin-codeowners) and has been updated to support NX sync.  
It generates a CODEOWNERS file from custom configuration options defined in your `nx.json` or `project.json` files.

## Getting Started

To get started, check out the [Codeowners README](./codeowners/README.md) for detailed installation instructions, configuration information, and usage examples.

## Contributing

Contributions to any of our NX plugins are welcome! Feel free to fork the repository, open issues, or submit a pull request. Please ensure that your contributions are covered by the MIT License.

## Future Roadmap

In addition to expanding our set of plugins, we may attempt to create an open source version for the entire NX PowerPack. This would bring advanced capabilities to the community through a fully open, extensible suite of NX plugins.

## License

All plugins in this repository are licensed under the MIT License. See [LICENSE](./LICENSE) for details.

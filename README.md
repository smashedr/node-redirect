[![Server Status](https://img.shields.io/website?url=https%3A%2F%2Fcssnr.com%2Fapp-health-check&up_message=online&down_message=offline&logo=nodedotjs&logoColor=white&label=server)](https://cssnr.com/uptime)
[![Image Size](https://badges.cssnr.com/ghcr/size/smashedr/node-redirect)](https://github.com/smashedr/node-redirect/pkgs/container/node-redirect)
[![Image Latest](https://badges.cssnr.com/ghcr/tags/smashedr/node-redirect/latest)](https://github.com/smashedr/node-redirect/pkgs/container/node-redirect)
[![Image Tags](https://badges.cssnr.com/ghcr/tags/smashedr/node-redirect)](https://github.com/smashedr/node-redirect/pkgs/container/node-redirect)
[![GitHub Tag Major](https://img.shields.io/github/v/tag/smashedr/node-redirect?sort=semver&filter=!*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/node-redirect/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/smashedr/node-redirect?sort=semver&filter=!*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/node-redirect/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/smashedr/node-redirect?logo=github)](https://github.com/smashedr/node-redirect/releases/latest)
[![Deployments Swarm](https://img.shields.io/github/deployments/smashedr/node-redirect/swarm?logo=portainer&logoColor=white&label=swarm)](https://github.com/smashedr/node-redirect/deployments/swarm)
[![Workflow Build](https://img.shields.io/github/actions/workflow/status/smashedr/node-redirect/build.yaml?logo=cachet&label=build)](https://github.com/smashedr/node-redirect/actions/workflows/build.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/smashedr/node-redirect/lint.yaml?logo=cachet&label=lint)](https://github.com/smashedr/node-redirect/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=smashedr_node-redirect&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=smashedr_node-redirect)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/smashedr/node-redirect?logo=github&label=updated)](https://github.com/smashedr/node-redirect/pulse)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/smashedr/node-redirect?logo=github)](https://github.com/smashedr/node-redirect/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/smashedr/node-redirect?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/smashedr/node-redirect?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/smashedr/node-redirect?logo=htmx)](https://github.com/smashedr/node-redirect/tree/master/src)
[![GitHub Discussions](https://img.shields.io/github/discussions/smashedr/node-redirect?logo=github)](https://github.com/smashedr/node-redirect/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/smashedr/node-redirect?style=flat&logo=github)](https://github.com/smashedr/node-redirect/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/smashedr/node-redirect?style=flat&logo=github)](https://github.com/smashedr/node-redirect/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Node Redirect

This is Private, how did you get here?

# Developing

You can run the dev server with [Docker](#with-docker) compose or [Node](#with-node) run.

### With Docker

This includes live reloads with the dev server.

```shell
docker compose -f "docker-compose-dev.yaml" up --build --remove-orphans --force-recreate
```

Then visit: http://localhost/

Note: this mounts the `./src` directory into the container for live reloading.
To use a different source path, set the `APP_FILES` environment variable.
See the [docker-compose-dev.yaml](docker-compose-dev.yaml) file for more details.

To use a different port set the `PORT` environment variable.

```shell
export PORT=8080
```

### With Node

```shell
npm i
npm run dev
```

Then visit: http://localhost:3000/

To use a different port set the `PORT` environment variable.

```shell
export PORT=8080
```

# Deploying

This is ready for deployment using both [Docker](#to-docker) and [Node](#to-node).

### To Docker

To deploy to a Swarm cluster using Traefik see the [docker-compose-swarm.yaml](docker-compose-swarm.yaml).

### To Node

This is ready to be deployed to services like Render.

The server installs with `npm i`, starts with `npm start`, and listens on `PORT` environment variable.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/smashedr/node-redirect/discussions/categories/q-a
- Request a Feature: https://github.com/smashedr/node-redirect/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/smashedr/node-redirect/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Node%20Redirect)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)

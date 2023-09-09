# EDO



## Convention and Guideline

- Commit messages: we encourage to use [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/).
- After you make a hotfix to `master` branch, please remerge changes to `develop` and `release/x.x.x`.
- We use `snake-case` for creating a new file and `PascalCase` for naming component.

### Basic usage

```bash
# start the project with 3 environments:

# development
$ yarn start:dev

# staging
$ yarn start:stg

# production
$ yarn start:prod

```

```bash
# build the project with 3 environments:

# development
$ yarn build:dev

# staging
$ yarn build:stg

# production
$ yarn build:prod

```

Navigate to [http://localhost:4444](http://localhost:4444). The app will automatically reload if you change any of the source files.


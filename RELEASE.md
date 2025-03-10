### NPM package release procedure

#### Before the release

1. Work on a bug fix or a new feature at a separate branch

2. Follow commitlint commit msg convention

   * the msg pattern: <type>[optional scope]: <description>
     ```
       feat: add a new helper function
       fix: add a type check
     ```
   * More details and examples [here](https://www.conventionalcommits.org/en/v1.0.0/#summary)
   * This commit msg pattern will be auto-checked by husky commit hooks
   * If using VSCode, it's recommended to use this vscode plugin: **Conventional Commits**
   * This will help auto-generate CHANGELOGS.md file upon a new release

     Note: by default, only bugfix and feature commit logs will be put in CHANGELOGS.md automatically

2. When ready, merge your code to the master branch

3. Test to make sure all test pass


#### Make a release

1. When ready, run one of these commands to make a new release:

   ```bash
   npm run release:patch

   (use "release:patch", "release:minor" or "release:major" based on the release types)
   ```

   This will do the version tagging (follow semver pattern) and auto-update CHANGELOGS.md

2. Push changes to GitHub:

   ```bash
   git push --follow-tags origin master
   ```

3. GitHub Actions will take care the rest of release steps

   Double check to make sure everything works as expected:
   https://github.com/biothings/smartapi-kg.js/actions
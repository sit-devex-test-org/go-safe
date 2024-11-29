# go-safe

## Assets

* `gh-pages` branch: <https://sit-devex-test-org.github.io/go-safe/>
* Master key (repo write): `secrets.MASTERKEY`
* npm package: <https://github.com/sit-devex-test-org/go-safe/pkgs/npm/cowsays-be-safe>

## Protection

* **source of trust**: branch protection on `main`
  * TBD
* derived protected `gh-pages` branch ([gh-pages](https://sit-devex-test-org.github.io/go-safe/) release branch)
  * ruleset restricting pushes to `gh-pages`, only bypassable by deploy keys
  * [added ssh deploy key](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-create-ssh-deploy-key) `MASTERKEY` (public key in deploy keys, private key in `protected-gh-pages-env` environment)
  * environment `protected-gh-pages-env` restricted to protected branches (`main`, rulesets don't count btw.)
* derived protected packages
  * TBD

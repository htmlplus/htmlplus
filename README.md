# dev

## Subtree Instructions

### 1- Map the `dev` repository into your system

```bash
git clone git@github.com:htmlplus/dev.git
```

### 2- Add `sample` repository as a subtree

```bash
git remote add -f packages/sample git@github.com:htmlplus/sample.git
git subtree add --prefix packages/sample packages/sample main --squash
```

### 3- Change files in `packages/sample` directory

### 4- Commit and Push changes through the `root`

### 5- Push changes to the `sample` repository through the `root`

```bash
git subtree push --prefix packages/sample packages/sample main
```

# 🌈 Branches and Merging
- [x]  Make a new branch called `bugFix`
- [x]  Checkout the `bugFix` branch with `git checkout bugFix`
- [x]  Commit once
- [x]  Go back to `main` with `git checkout`
- [x]  commit another time
- [x]  Merge the branch `bugFix` into `main` with `git merge`

This command is going to create the new branch and already checkout it

```bash
$ git checkout -b bugFix
```

This command will commit

```bash
$ git commit -m "Create branch bugFix"
```

This command will go back to the main

```bash
$ git checkout main
```

This command will commit

```bash
$ git commit -m "Checkout in main"
```

This command is going to merge main with bugFix

```bash
$ git merge bugFix
```
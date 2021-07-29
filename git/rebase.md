# 🥋 Rebase
Rebase is another way to combine works, like merge, but rebase does copies of commits and put them down somewhere else.

The advantage of using rebase is that the history of git is going to be linear and the log will be a lot more cleaner.

- [x]  Check out a new branch named `bugFix`
- [x]  Commit once
- [x]  Go back to main and commit again
- [x]  Check out bugFix again and rebase onto the main

Create a new branch called bugFix and already checkout

```bash
$ git checkout -b bugFix
```

Commit the branch

```bash
$ git commit -m "New branch bugFix"
```

Go back to the main

```bash
$ git checkout main
```

Commit the checkout

```bash
$ git commit -m "Checkout main"
```

Checkout bugFix

```bash
$ git checkout bugFix
```

Commit the checkout

```bash
$ git commit -m "Checkout bugFix"
```

Rebase bugFix onto the main

```bash
$ git rebase main
```
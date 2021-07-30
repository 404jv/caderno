# 🎁 Reversing Changes
There are two primary ways to undo changes in Git -- one is using git reset and the other is using git revert.

- Reset for local

**git reset** reverses changes by moving a branch reference backward in time to an older commit.

```bash
git reset HEAD~1
```

- Reverse for remote

In order to reverse changes and share those reversed changes with others, we need to use git revert.

```bash
git revert HEAD
```
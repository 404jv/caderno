# 🌧 Relative Refs
The commit hash is like `fed2da64c0efc5293610bdd892f82a58e8cbc5d8` but git let us just describe enough characters for git to identify it, so I can write just `fed2`

Even so, it's still difficult to work with hash. Git has relative refs, with them we can write things more memorable like bugFix or HEAD.

If I want to travel one commit to the top, first check out the last commit:

```bash
git checkout c3
```

Now start to travel one by one, like:

```bash
git checkout HEAD^
```

Now we are in the c2 commit if we do again:

```bash
git checkout HEAD^
```

We are in the c1, and again:

```bash
git checkout HEAD^
```

We are in the first commit c0
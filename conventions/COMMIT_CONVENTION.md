# Commit message rules

## Type
```
// only lowerCase
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

## Examples
```
"foo: some message" # fails
"fix: some message" # passes
```

## Scope
```
// only lowerCase
"fix(SCOPE): some message" # fails
"fix(scope): some message" # passes
```

## Subject
```
echo "fix:" # fails
echo "fix: some message" # passes

echo "fix: some message." # fails
echo "fix: some message" # passes
```
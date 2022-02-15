# Jest

`toBe` compares exactly one object and check referential identity of object instances.
`toEqual` compares the value of the object. For example:

```ts
test('test', () => {
  expect({ name: 'john doe' }).toEqual({ name: 'john doe'}); // PASSES
  expect({ name: 'john doe' }).toBe({ name: 'john doe'});    // FAILS
});
```
in that example, the Jest compares the object reference, so, `toBe` fails but
`toEqual` passes because it's just comparing a value of a object to other object.


```ts
 test('test', () => {
  let objectJhonDoe = { name: 'john doe' }; 
  
  let copyOfObjectJhonDoe = objectJhonDoe;

  expect(objectJhonDoe).toBe(copyOfObjectJhonDoe); // PASSES
  expect(objectJhonDoe).toEqual(copyOfObjectJhonDoe); // PASSES
});
```
Now, in this example, both pass because `toBe` knows that is a copy but also knows
that the copy is referencing the same object as the original variable.


## Truthiness
In tests, you sometimes need to distinguish between undefined, null, and false.
However, there are time that I can't treat these values differently. So there are
some helpers:

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

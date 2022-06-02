# Folders

Umumiy faylarimiza `src` folder-ida joylashgan bo'ladi. Qogan `domen` larimizning fayllari o'zini `module` da bo'ladi.

```
- public
- src
--- components
--- services
--- store
--- styles
--- utils
--- modules
----- auth
-------- components
-------- services
-------- store
-------- styles
----- user
-------- components
-------- services
-------- store
-------- styles
```

# Files

** Faylni nomi `kebab-case` da yozilishi kere **

```
User.js => bad
user.js => good

loginCard.js => bad
LoginCard.js => bad
login-card.js => good
```

** Fayl-larda nima ko'd turishiga qarab suffix qo'shish kere **

```
UserComponent.js => bad
user-component.js => bad
user.component.js => good

// Good another examples:
user.props.js
user.style.js
user.saga.js
user.slice.js
```

** `index.js` da faqat re-export bo'lishi kerak **

```js
export * from './user.component'
export { default: LoginComponent } from './login.component'
```

# Components

** Komponentlar PascalCase-da elon qilinishi kerak **
```jsx
<UserComponent />
```

# Hooks

** custom hook-lar use prefix-i bilan boshlanib PascalCase-da yoziladi **
```js
const useUserProps
```

# Import
** `import` larda maksimal darajada `alias` larni ishlatish kerak **

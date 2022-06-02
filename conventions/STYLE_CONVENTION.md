# Styled Components Rules

** style-larni yozganda ranglar va size-larni maksimal darajada `theme` provider orqali ishlatish kerak **

```js
const Head = styled.h1`
  color: ${props => props.theme.main};
`
const theme = {
  main: "#14114a"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Head>Headline</Head>
    </ThemeProvider>
  )
}
```

** size-larni `px` da emas `rem` yozish kerak.
Agar maket-da `px` da bo'lsa `rem` ga o'tkazishda muammo bo'lsa
bitta alohida funksiya qilish kerak unga `px` berilsa `rem` qilib qaytarsin **


```js
const Headline = styled.h1`
  font-size: ${props => props.theme.sizePxToRem(24)};
`

function App() {
  return (
    <Headline>
      Text 
    </Headline>
  )
}
```

** Ko'p uchridigan style-larni umumiy style-ga chiqazi ulardan meros olib yozish **

```js
const Headline = styled.h1`
  color: green;
`
const HeadlineItalic = styled(Headline)`
  font-style: italic;
`
```

** Stillarni shartli ko'rsatish kerak bo'sa props-lardan foydalanish **

```js
const Headline = styled.h1`
  visibility: ${props => (
    props.show ? "visible" : "hidden")
  };`

function App() {
  return (
    <Headline show={false}>
      Text 
    </Headline>
  )
}
```


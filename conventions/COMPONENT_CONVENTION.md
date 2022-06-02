# Components Rules

** Komponent-ning state bor bo'lsa `hoc` utilitasi orqali elon qilinishi kerak **
** Perfomance-ni oshirish uchun iloji borisha memoizatsiyadan ko'proq foydalanish kerak **

```js
const useModalProps = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return {
    toggleModal,
    isOpen
  }
}

const ModalComponent = hoc(useModalProps, ({ toggleModal, isOpen }) => {
  return (
    <>
      <button onClick={toggleModal}>{ isOpen ? 'Close' : 'Open' }</button>
    </>
  )
})
```
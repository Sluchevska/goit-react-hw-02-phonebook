export default function Input({type, name,title}) {
    return (
<input
  type={type}
  name={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title={title}
  required
/>
    )
}
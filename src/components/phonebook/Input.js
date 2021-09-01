export default function Input({type, name,title}) {
    return (
<input
//   type={text}
  name={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title={title}
 
/>
    )
}
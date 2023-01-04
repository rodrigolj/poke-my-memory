const Button = (props: any) => {
  return (
    <button onClick={() => {alert('Hello World!')}}>{props.title}</button>
  )
}

export default Button

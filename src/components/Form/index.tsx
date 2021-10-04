import { FormEvent, useRef } from "react"

export const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current?.value)
    console.log(emailRef.current?.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="">Name:</label>
        <input type="email" ref={emailRef}/>
      </div>
      <button type="submit" >Enviar</button>
    </form>
  )
}
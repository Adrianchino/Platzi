import { useEffect, useRef } from "react";
import useForm from "../Hooks/useForm";

const FormularioComponet = () => {

  const focusRef = useRef()

  console.log(focusRef)

	const initialForm = {
		username : '',
		email: '',
		password : ''
	}

	const { formState, onInputChange } = useForm(initialForm)

	const {username, email, password} = formState

	const onSubmit = (event)=> {
		event.preventDefault()
		console.log(formState)
	}

  useEffect(() => {
    focusRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name
        </label>
        <input
          ref={focusRef}
          type="texto"
          className="form-control"
          name="username"
          placeholder="Enter your username"
					value={username}
					onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email address"
					value={email}
					onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="password"
					value={password}
					onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormularioComponet;

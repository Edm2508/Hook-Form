import React from 'react'
import { useForm } from 'react-hook-form'
import "./Formulario.css"

const Formulario = () => {
  const { register, handleSubmit } = useForm()
  const customSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <h2>Formulario con React</h2>
      <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
        <div className=''>
          <label>Nombre</label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" {...register('lastName')} />
        </div>
        <div>
          <label>E-mail</label>
          <input type="text" {...register('email')} />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="number" {...register('phone')} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="text" {...register('password')} />
        </div>
        <div>
          <label>Reingresar Contraseña</label>
          <input type="text" {...register('repassword')} />
        </div>
        <button type='submit'>Enviar Datos</button>
        <h4>Curso 133 - Grupo 3</h4>
      </form>
    </>
  )
}

export default Formulario
# LA CREACIÓN DE UN FORMULARIO EN REACT

Para manejar un formulario en React usamos una librería especifica que nos facilita el proceso.
React Hook Forms para el manejo de los Inputs y validaciones

# 1.- Creamos el proyecto React
npm create vite

# 2.- En carpeta Components
Creamos 2 archivos:
-Formulario. Jsx
-Formulario.css

# 3.- Instalamos la librería desde Terminal
npm install react-hool-form
 
# 4.- Creamos la function
const Formulario = () => {
  return (  );
}
export default Formulario;


# Importamos la librería:
import { useForm } from 'react-hook-form'

La sintaxis desestructuración nos devuelve un objeto y así podemos usar las funciones: register, handleSubmit

 const { register, handleSubmit } = useForm()

# 5.- Luego creamos el Formulario con las etiquetas:
- Label
- Input

# 6.- La función register
Registra el componente en el hook
Su valor estará disponible para la validación y envío del Formulario

<input type="text" {...register('name')} />
(sería como un Id)

# 7.- Creamos el botón para enviar el Formulario

<button type='submit'>Enviar Datos</button>

Con la función custom  capturamos los datos del Formulario

 const customSubmit = (data) => {
    console.log(data)

# 8.- En la Terminal ejecutar:
npm start
Ejecuta la aplicación en modo de desarrollo.
Abra hen su navegador.

npm run build
Crea la aplicación para producción en la carpeta de compilación.
Incluye correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.
La aplicación está lista para ser implementada

El formulario es simple. 
Para una mayor profundización habría que crearle una validación de los Inputs.

## Saludos del Curso 133 - Grupo 3 ###   H o o k - F o r m  
 
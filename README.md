# Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

## npm start
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando hagas cambios.
También puedes ver cualquier error de lint en la consola.

## npm test
Inicia el corredor de pruebas en el modo de observación interactivo.
Consulta la sección sobre la ejecución de pruebas para obtener más información.

## npm run build
Construye la aplicación para producción en la carpeta de construcción.
Empaqueta correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción está minimizada y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre el despliegue para obtener más información.

## npm run eject
Nota: esta es una operación irreversible. ¡Una vez que hagas eject, no puedes volver atrás!

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes hacer eject en cualquier momento. Este comando eliminará la única dependencia de construcción de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto eject seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

No tienes que usar nunca eject. El conjunto de características seleccionadas es adecuado para despliegues pequeños y medianos, y no deberías sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para ello.

# Detalles

**¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?**

Decidí utilizar React debido a su eficiencia y flexibilidad para construir interfaces de usuario en JavaScript. Redux Toolkit fue utilizado para manejar el estado de la aplicación de manera predecible, y TypeScript proporciona un entorno de desarrollo seguro con su sistema de tipos estático.

**¿Hay alguna mejora que pueda hacer en su envío?**

Sí, creo que podría mejorar los filtros y el paginado. Actualmente, el filtrado de texto permite encontrar películas por título, pero podría ser más eficiente. El paginado funciona bien, pero podría ser optimizado para una mejor experiencia del usuario.

**¿Qué haría de manera diferente si se le asignara más tiempo?**

Si tuviera más tiempo, agregaría un cambio en el idioma para que los usuarios puedan elegir entre español e inglés. También agregaría filtros por año, lo que permitiría a los usuarios buscar películas de un año específico.

**librerias extra**

utilice como una libreria extra a lo pedido:

*react-spinners*: Esta librería proporciona componentes de spinner de carga, que he utilizado para indicar al usuario cuando la aplicación está cargando datos. 

*react-router-dom*: Esta librería me permitió manejar rutas en mi aplicación, permitiendo la navegación entre diferentes componentes.
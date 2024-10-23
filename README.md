# EldarChallenge

Este proyecto se generó con la versión 17.3.10.

## Development server

Ejecute `npm run start:all` para un servidor de desarrollo con json.server. Navegue hasta `http://localhost:4200/`.

## Estructura de carpetas/componentes

Se buscó seguir el hilo de la arquitectura de Angular en esta nueva versión y se eligió una estructura orientada a 'contenedores' y 'componentes'.
Estos primeros como núcleo de lógica, peticiones, ruta. Y los segundos para manejar la interactividad con el usuario, traspaso de información, etc.
Así como también incluir herramientas en *utils*, *interfaces*, *guards*, etc. En la raíz de la carpeta app para tener un mejor acceso y orden en sí.

## Librerias CSS
Se usó PrimeNG como biblioteca de componentes y PrimeFlex para utilidades de clases.

## JSON Server
Se simuló una DB (incluida en la raíz del proyecto, solo para el challenge) con json.server el cuál se ejecuta en paralelo con el proyecto. Esta se renderiza en el puerto 3000: *localhost:3000*
Se seteó un environmnet local (nuevamente, solo de uso práctico para el challenge) con la dirección de la API, para simular un uso más robusto en los servicios.

## Explicación del proyecto
Se trató de simular un ABM de usuarios, en dónde un ADMIN pueda crear, modificar y eliminar los mismos. En una ruta particular de configuración.
Así como tambien el rol USER, podrá acceder a las rutas configuradas por el ADMIN (estas protegidas por GUARDS) teniendo en cuenta sus permisos, en la ruta 'home'.

ADMIN: slopez.admin
PASSWORD: Admin123

USER: slopez.user
PASSWORD: User123

## EXTRAS
Faltó:
-Paginación, ordenamiento en la tabla de USERS
-Manejo de tokens con JWT.
-Autenticación robusta. (primeramente se ideó hacer la autenticación con un proovedor como Auth0, Clerk, Supabase. Pero se despriorizó por tiempos)
-Configuración de servicios como las *notificaciones* de manera global.
-Configuración de loading general, con *interceptors* para el manejo de peticiones.

Por cuestiones externas no pude plantear el challenge de otra manera. Pero aún así estoy disponible para discutir las mejoras, casos de escalamiento, errores.
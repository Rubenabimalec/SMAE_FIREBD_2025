#Buscador de Alimentos

Este proyecto es un buscador de alimentos desarrollado en TypeScript. Permite realizar búsquedas en una base de datos Firebase almacenada en formato JSON mediante peticiones fetch. Para optimizar el rendimiento, los datos se almacenan en un caché local y se pueden consultar por nombre de alimento o verdura, así como obtener el archivo JSON completo con todos sus campos.

##Características

-Búsqueda eficiente: Permite buscar alimentos o verduras por nombre en la base de datos Firebase.

-Caché local: Guarda los datos para evitar múltiples peticiones a Firebase y mejorar la velocidad de consulta.

-Consulta completa: Se puede obtener el JSON completo con todos los alimentos disponibles.

-Desarrollado en TypeScript: Código tipado y mantenible.

##Estructura del Proyecto

-main.ts: Archivo principal que maneja la lógica del buscador.

-firebase_json.ts: Módulo encargado de interactuar con Firebase para obtener los datos.

-SmaeResponse.ts: Define la estructura de los datos obtenidos de Firebase.

##Instalación y Uso

Clona este repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

Instala las dependencias:

npm install

Ejecuta el proyecto:

npm run dev

Tecnologías Utilizadas

TypeScript

Firebase

Fetch API

Contribución

Si deseas contribuir, siéntete libre de hacer un fork del repositorio y enviar un pull request con mejoras o correcciones.

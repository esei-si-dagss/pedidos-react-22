# Ejemplo REACT (SI-2022, semana 4)

Ejemplo de IU para el API pedidos-rest-22 usando REACT.

Versión simplificada del ejemplo `cra-crud`de PrimeReact (ver https://github.com/primefaces/primereact-examples)

## Requisitos

* Instalación reciente de node.js (https://nodejs.org/es/) [versión > 16.8]
* Usa API REST del proyecto [pedidos-rest-22](https://github.com/esei-si-dagss/pedidos-rest-22)

## Librerias usadas

* [PrimeReact](https://www.primefaces.org/primereact/): componentes de interfaz
* [react-router-dom](https://reactrouter.com/): rutas y navegación de la aplicación
* [axios](https://axios-http.com/): acceso al API REST

## Creación del proyecto (ya hecho)

```sh
npx create-react-app pedidos-react

cd pedidos-react
npm install react-router-dom
npm install axios
npm install primereact
npm install primeicons
npm install primeflex
npm install react-transition-group
```


## Ejecución del proyecto descargado

```
git clone https://github.com/esei-si-dagss/pedidos-react-22.git
cd pedidos-react-22
npm install
npm start
```

Arranca servidor de desarrollo en (http://localhost:3000)

## Estructura y elementos del proyecto

* `src/App.js`: punto de entrada a la aplicaicón, contiene las _rutas_ hacia los componentes que implementan las diferentes vistas
* `src/components`: código de los componentes
  * un directorio por cada entidad
  * `[entidad]Listado.js`: vista del listado de entidades 
  * `[entidad]Detalle.js`: vista de detalle de cada entidad
* `src/services`: clases que encapsulan las operaciones de acceso a los _endpoint_ REST mediante la libreria _axios_ 
  * `pedidosAPI.js` encapsula el objeto _axios_ para realizar las peticiones REST sobre http://localhost:8080/api
  *  `[entidad]Service.js` encapsula las operaciones sobre cada entidad

## Aspectos a revisar
* Gestión de `artículos` (ejemplo de manejo de relación 1:N con `familia`)
* Gestión de `almacenes` (ejemplo de manejo de relaciones N:M con atributos y reutilización de componentes)

### Correcciones (28/12/2022)

1. Actualización de versiones en  `package.json`
   * Requiere hacer `npm install` para forzar la recarga de los nuevos módulos

2. Ajuste de `index.js` para actualizar el renderizado inicial del React 18.x (ver (https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis))

3. Añadido parámetro `forceRefresh` en componente `BrowserRouter` de `App.js` para forzar a repintar las vistas al "navegar" entre URIs en el cliente.

4. Añadida la dependencia `[]` en los _hooks_ `useEffect(...)` de los componente `almacenInfo`, `articuloDetalle`, `clienteDetalle` y `familiaDetalle` para que sólo se cargen los datos de la entidad tras el primer renderizado y permitir la edición de entidades (en la versión inicial del proyecto no era posible ya que se recargaba la vista con el valor inicial de la entidad tras cada modificación)

**Nota:** En la mayor parte de las entidades la acción de borrado falla y no se realiza el borrado realmente, debido a las restricciones de claves foráneas.
* En la llamada al método `xxxxService.eliminar()` se ha añadido la captura del error (función `catch(...)`) y se muestra un mensaje.
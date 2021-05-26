# Medical-minds test 🥼

Una vez clonado el repositorio, es necesario ingresar a la carpeta server y crear un documento ".env" y crear las siguientes elementos: 

```
CLOUD_NAME = {El nombre de tu cloud de cloudinary}
CLOUD_API_KEY = {Tu cloud_api_ley de cloudinary}
CLOUD_API_SECRET = {Con tu api_secret de tu cuenta de cloudinary}
MONGO_URI = {Con tu URI de tu mongoDB}
```

## Iniciar

Después es necesario iniciar el back ingresando a la carpeta "server" y en la terminal escribir:

```
node index
```

Posteriormente, para iniciar el front, es necesario ingresar a la carpeta "client" y en la terminal escribir:

```
npm start
```
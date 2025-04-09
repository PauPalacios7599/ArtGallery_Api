# 🎨 ArtGallery API

API RESTful desarrollada con Node.js, Express y MongoDB para gestionar una galería de artistas y sus obras. Soporta operaciones CRUD, subida de imágenes a Cloudinary y establece relaciones entre artistas y obras.

---

## 🧪 Tecnologías utilizadas

- **Node.js** + **Express** – Backend y estructura del servidor
- **MongoDB Atlas** + **Mongoose** – Base de datos NoSQL y modelado de datos
- **Cloudinary** – Almacenamiento de imágenes en la nube
- **Multer** + `multer-storage-cloudinary` – Middleware para la subida de archivos
- **dotenv** – Variables de entorno
- **cors** – Habilita peticiones desde otros orígenes

---

## ⚙️ Instalación y uso local

1. Clona el repositorio:

```bash
git clone https://github.com/PauPalacios7599/artgallery-api.git
```

2. Entra en el directorio del proyecto:

```bash
cd artgallery-api
```

3. Instala las dependencias:

```bash
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
PORT=5000
MONGODB_URI=tu_uri_de_mongodb
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

5. Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

---

## 📁 Estructura del proyecto

```
📦ArtGallery_Api
 ┣ 📂config
 ┣ 📂controllers
 ┣ 📂models
 ┣ 📂routes
 ┣ 📂seed
 ┣ 📂utils
 ┣ 📄app.js
 ┣ 📄README.md
 ┗ 📄package.json
```

---

## 📌 Funcionalidades principales

- CRUD completo para **artistas**
- CRUD completo para **obras de arte**
- Subida de imágenes de obras a Cloudinary
- Relación entre artistas y sus obras
- Validaciones básicas y manejo de errores

---

## 📮 Rutas principales

### Artistas

- `GET /artists` – Obtener todos los artistas
- `GET /artists/:id` – Obtener un artista por ID
- `POST /artists` – Crear un nuevo artista
- `PUT /artists/:id` – Actualizar un artista
- `DELETE /artists/:id` – Eliminar un artista

### Obras de arte

- `GET /artworks` – Obtener todas las obras
- `GET /artworks/:id` – Obtener una obra por ID
- `POST /artworks` – Crear una nueva obra (con imagen)
- `PUT /artworks/:id` – Actualizar una obra
- `DELETE /artworks/:id` – Eliminar una obra

---

## 🌱 Datos de ejemplo (Seed)

Puedes usar el siguiente comando para poblar la base de datos con datos de ejemplo:

```bash
npm run seed
```

---

## 📦 Scripts disponibles

```bash
npm run dev
npm start
npm run seed
```

---

## 🛡️ Seguridad y validación

- Manejo de errores con middleware personalizado
- Validaciones de datos con Mongoose
- Subida segura de imágenes con Cloudinary

---

## 📬 Contacto

Creado por **Pau Palacios Gordillo**  
📧 paupalaciosgordillo@gmail.com  
🐙 [GitHub](https://github.com/PauPalacios7599)

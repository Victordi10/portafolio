# Usa la imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia el archivo package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala las dependencias del proyecto
RUN pnpm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Construye la aplicación para producción
RUN pnpm run build

# Exponer el puerto en el que Next.js correrá
EXPOSE 3000

# Inicia la aplicación en producción
CMD ["pnpm", "run", "start"]

# ---- BASE IMAGE: Alpine, leicht & ARM-kompatibel ----
    FROM node:20-alpine AS base

    # Set working directory
    WORKDIR /app
    
    # ---- COPY: Nur die nötigen Dateien für die Runtime ----
    # Wichtig: Keine devDependencies notwendig
    COPY package.json package-lock.json* ./  
    COPY .next .next
    COPY public public
    COPY tsconfig.json .                     
    
    # ---- INSTALL only production deps ----
    RUN npm ci --omit=dev
    
    # ---- START ----
    EXPOSE 3000
    CMD ["npm", "start"]
    
    FROM node:20-alpine AS base
    WORKDIR /app
    COPY package.json package-lock.json* ./  
    COPY .next .next
    COPY public public
    COPY tsconfig.json .                     
    RUN npm ci --omit=dev
    EXPOSE 3000
    
    CMD ["npm", "start"]
    
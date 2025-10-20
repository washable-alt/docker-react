FROM node:lts-alpine as builder

WORKDIR '/app'

# In production, code is not being changed 
# Thus, code will not dynamically change - specifically for app.js file

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx 
COPY --from=builder /app/build /usr/share/nginx/html

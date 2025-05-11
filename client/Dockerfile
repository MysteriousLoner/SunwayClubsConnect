FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

# used to run app without npm, used to debug stuff trough exec
# RUN npm run dev -- --port 3000 --host

# RUN rm -rf node_modules
# RUN rm 
# CMD ["tail", "-f", "/dev/null"]

# run with npm
# CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]
CMD ["npm", "run", "dev", "--", "--port", "3000", "--host"]

# run using nginx, less resource heavy
# FROM nginx:1.19-alpine
# COPY --from=build /app/public /usr/share/nginx/htmls
FROM node:alpine as builder

WORKDIR '/app'
COPY . .
RUN npm install -g @angular/cli
#RUN npm install
#COPY package.json .
RUN ng build --prod


FROM nginx
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html


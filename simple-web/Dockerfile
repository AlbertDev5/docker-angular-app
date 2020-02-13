FROM node:alpine

#COPY ./index.js /wd-simple-app/
#COPY ./package.json /wd-simple-app/

WORKDIR /usr/app
COPY ./ ./
RUN npm install

CMD ["npm", "start"]
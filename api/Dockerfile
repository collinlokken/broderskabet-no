FROM node:15
WORKDIR /api
COPY package.json /api/
RUN npm install
COPY . /api/
EXPOSE 80
CMD ["npm", "start"]
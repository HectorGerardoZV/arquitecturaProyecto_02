FROM node:lts
# ENV NODE_ENV=production

# RUN mkdir /build
WORKDIR /build

COPY ./ /build/arquitectura-02/RestApi_Users

RUN cd /build/arquitectura-02/RestApi_Users && npm install

WORKDIR /build/arquitectura-02/RestApi_Users

EXPOSE 1324

# RUN npm --prefix /build/actividad-13/crud-clients/ run dev

CMD ["npm", "run", "dev"]
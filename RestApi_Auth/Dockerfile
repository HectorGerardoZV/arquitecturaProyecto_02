FROM node:lts
# ENV NODE_ENV=production

# RUN mkdir /build
WORKDIR /build

COPY ./ /build/arquitectura-02/RestApi_Auth

RUN cd /build/arquitectura-02/RestApi_Auth && npm install

WORKDIR /build/arquitectura-02/RestApi_Auth

EXPOSE 3850

# RUN npm --prefix /build/actividad-13/crud-clients/ run dev

CMD ["npm", "run", "dev"]
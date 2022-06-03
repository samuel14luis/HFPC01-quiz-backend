# Productive image
FROM node:16.15-alpine

WORKDIR /usr/src

COPY ["./package.json", "/usr/src/"]
RUN npm install --production

RUN apk update && DEBIAN_FRONTEND=noninteractive apk add tzdata
ENV TZ America/Lima
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN date
RUN apk del tzdata

COPY ["./dist", "/usr/src/"]

EXPOSE 3000

ENTRYPOINT ["node", "/usr/src/main.js"]
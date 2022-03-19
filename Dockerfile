FROM golang:1.17-alpine
RUN apk --update --no-cache add bash build-base ca-certificates git
WORKDIR /app
COPY . .
ENV GOOS linux
RUN go build -o ./serve
EXPOSE 3030
ENTRYPOINT [ "./serve" ]

LABEL org.opencontainers.image.source https://github.com/openPronouns/website
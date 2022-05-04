docker login -u 2cc3eb732277c6a2077c45a1c5bc37f1b0eed75b1ba621a304c33dbef9d8faad -p 2cc3eb732277c6a2077c45a1c5bc37f1b0eed75b1ba621a304c33dbef9d8faad registry.digitalocean.com
docker build -t registry.digitalocean.com/is-saude-containers/is-saude-front:v1.0.3 . --no-cache
docker push registry.digitalocean.com/is-saude-containers/is-saude-front:v1.0.3
docker login -u dop_v1_5f63aba26a55ea3954f6cbb4843e62e489e01b63205bc41d4e1e73d55f0adc86 -p dop_v1_5f63aba26a55ea3954f6cbb4843e62e489e01b63205bc41d4e1e73d55f0adc86 registry.digitalocean.com
docker build -t registry.digitalocean.com/is-saude-containers/is-saude-front:v1.0.7 . --no-cache
docker push registry.digitalocean.com/is-saude-containers/is-saude-front:v1.0.7

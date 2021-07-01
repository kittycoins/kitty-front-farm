docker build -f Dockerfile -t kittyfarm/farm  ./
docker tag kittyfarm/farm reg.excodus.com/kittyfarm/farm
docker push reg.excodus.com/kittyfarm/farm
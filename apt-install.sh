# Linux(ubuntu18.04 LTS)インスタンスの作成時に、必要最低限のモジュールと、docker,docker-composeをインストールします。
apt update -y
apt upgrade -y
apt install -y curl
apt install -y cron
apt install -y vim
apt install -y wget
apt install -y zip
apt install -y unzip
apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable edge"
apt install -y docker-ce
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

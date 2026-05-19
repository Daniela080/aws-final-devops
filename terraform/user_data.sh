#!/bin/bash

yum update -y

curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -

yum install -y nodejs git

cd /home/ec2-user

git clone https://github.com/Daniela080/aws-final-devops.git

cd aws-final-devops/app

npm install

nohup node index.js > app.log 2>&1 &

#!/bin/bash

yum update -y

curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -

yum install -y nodejs git

mkdir -p /home/ec2-user/app

cd /home/ec2-user/app

cat <<EOF > index.js
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    instance: process.env.HOSTNAME
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: 'API funcionando correctamente'
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});
EOF

npm init -y

npm install express

node index.js > app.log 2>&1 &
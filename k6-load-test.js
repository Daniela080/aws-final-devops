import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Sube a 10 usuarios
    { duration: '1m',  target: 50 },  // Sube a 50 usuarios
    { duration: '30s', target: 0  },  // Baja a 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% debe responder en menos de 2s
    http_req_failed:   ['rate<0.1'],   // menos del 10% de errores
  },
};

const ALB = 'http://aws-final-devops-alb-745187779.us-east-1.elb.amazonaws.com';

export default function () {
  // Prueba endpoint health
  const res1 = http.get(`${ALB}/health`);
  check(res1, {
    'health status 200': (r) => r.status === 200,
    'health time < 2s':  (r) => r.timings.duration < 2000,
  });

  sleep(1);

  // Prueba endpoint api/test
  const res2 = http.get(`${ALB}/api/test`);
  check(res2, {
    'api/test status 200': (r) => r.status === 200,
  });

  sleep(1);
}
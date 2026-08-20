import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  const response = http.get('https://test.k6.io');

  if (response.status !== 200) {
    throw new Error(`Unexpected status: ${response.status}`);
  }

  sleep(1);
}

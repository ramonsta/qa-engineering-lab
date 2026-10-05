const { test, expect } = require('@playwright/test');

test('@smoke API health', async ({ request }) => {
  const response = await request.get('/health');

  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({ status: 'ok' });
});

test('create, read and delete a user', async ({ request }) => {
  const data = { name: 'Ray', email: 'ray@example.com' };

  const created = await request.post('/users', { data });
  expect(created.status()).toBe(201);

  const user = await created.json();

  try {
    expect(user.id).toEqual(expect.any(String));
    expect(user.id.length).toBeGreaterThan(0);
    expect(user).toMatchObject(data);

    const found = await request.get(`/users/${user.id}`);
    expect(found.status()).toBe(200);
    expect(await found.json()).toEqual(user);

    const removed = await request.delete(`/users/${user.id}`);
    expect(removed.status()).toBe(204);
    expect(await removed.text()).toBe('');

    const missing = await request.get(`/users/${user.id}`);
    expect(missing.status()).toBe(404);
    expect(await missing.json()).toEqual({
      error: 'User not found'
    });
  } finally {
    await request.delete(`/users/${user.id}`);
  }
});

test('reject invalid user data', async ({ request }) => {
  const response = await request.post('/users', {
    data: { name: '', email: 'invalid-email' }
  });

  expect(response.status()).toBe(400);
  expect(await response.json()).toEqual({
    error: 'Valid name and email required'
  });
});

test('reject malformed JSON', async ({ request }) => {
  const response = await request.post('/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: Buffer.from('{"name":', 'utf8')
  });

  expect(response.status()).toBe(400);
  expect(await response.json()).toEqual({
    error: 'Invalid JSON'
  });
});
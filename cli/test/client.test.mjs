import { test } from 'node:test';
import assert from 'node:assert/strict';
import { queryAppFinder, requestUrl } from '../lib/client.mjs';

test('encodes a search as query text, retaining the fixed public origin', () => {
  const url = requestUrl(['search', 'a&b?c=#d', '--limit', '3', '--category', 'project management']);
  assert.equal(url.origin, 'https://appfinder.tech');
  assert.equal(url.pathname, '/api/v1/search');
  assert.equal(url.searchParams.get('q'), 'a&b?c=#d');
  assert.equal(url.searchParams.get('limit'), '3');
  assert.equal(url.searchParams.get('category'), 'project management');
});

test('rejects out-of-range limits, missing values and path traversal before a network request', () => {
  for (const args of [
    ['search', ''], ['search', 'a'.repeat(121)], ['search', 'test', '--limit', '26'],
    ['search', 'test', '--limit', '0'], ['search', 'test', '--limit', '1.5'],
    ['search', 'test', '--category'], ['search', 'test', '--limit', '1', '--limit', '2'],
    ['app', '../admin'], ['app', 'https://other.example'], ['categories', 'extra'], ['compare', 'one'],
  ]) assert.throws(() => requestUrl(args));
});

test('all supported read operations target the matching public endpoint', () => {
  assert.equal(requestUrl(['app', 'test-app']).pathname, '/api/v1/apps/test-app');
  assert.equal(requestUrl(['alternatives', 'test-app']).pathname, '/api/v1/apps/test-app/alternatives');
  assert.equal(requestUrl(['compare', 'one', 'two']).search, '?a=one&b=two');
  assert.equal(requestUrl(['categories']).pathname, '/api/v1/categories');
});

test('preserves response facts and source metadata, and refuses redirected requests', async () => {
  const body = { data: { results: [] }, meta: { source: 'AppFinder', url: 'https://appfinder.tech' } };
  const result = await queryAppFinder(['search', 'test'], async (url, options) => {
    assert.equal(url.hostname, 'appfinder.tech');
    assert.equal(options.redirect, 'error');
    assert.equal(options.headers.Accept, 'application/json');
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json(body);
  });
  assert.deepEqual(result, body);
});

test('reports rate limiting without retries or returning an error as a result', async () => {
  let requests = 0;
  await assert.rejects(queryAppFinder(['categories'], async () => {
    requests++;
    return new Response('', { status: 429, headers: { 'Retry-After': '60' } });
  }), /Retry after 60 seconds/);
  assert.equal(requests, 1);
});

test('fails on HTTP errors, HTML and malformed response envelopes', async () => {
  for (const response of [new Response('', { status: 404 }), new Response('<html>'), Response.json({ error: 'failed' })]) {
    await assert.rejects(queryAppFinder(['categories'], async () => response));
  }
});

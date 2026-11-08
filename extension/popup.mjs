import { searchApps, renderResults } from './search.mjs';
const form = document.querySelector('#search-form');
const input = document.querySelector('#query');
const button = form.querySelector('button');
const status = document.querySelector('#status');
let pending = false;
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (pending) return;
  pending = true; button.disabled = true; button.textContent = 'Searching…';
  status.textContent = 'Searching AppFinder…';
  renderResults(document, []);
  try {
    const { results, weak } = await searchApps(input.value);
    renderResults(document, results);
    status.textContent = !results.length ? 'No matches yet. Try a broader task or browse categories.' : weak ? 'Related tools. AppFinder has no strong match for this search.' : `${results.length} matching tools · Source: AppFinder`;
  } catch (error) {
    status.textContent = error instanceof TypeError || error?.name === 'TimeoutError' ? 'Could not reach AppFinder. Check your connection and try again.' : error.message;
  } finally {
    pending = false; button.disabled = false; button.textContent = 'Find tools';
  }
});

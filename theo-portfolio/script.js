document.getElementById('copy').addEventListener('click', async () => {
  const t = document.getElementById('toast');
  const email = document.getElementById('email').textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    t.textContent = 'Email copied. Talk soon.';
  } catch (e) {
    t.textContent = 'Could not copy automatically. Select the address above to copy it.';
  }
});

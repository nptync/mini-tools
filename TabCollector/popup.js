document.getElementById('collect').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const lines = tabs.map(tab => `[${tab.title}](${tab.url})\\`).join('\n');

  // 一時的にtextareaを作成してコピー
  const textarea = document.createElement('textarea');
  textarea.value = lines;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
});

document.addEventListener('DOMContentLoaded', () => {
  const cursorBtn = document.createElement('button');
  cursorBtn.className = 'btn btn-secondary';
  cursorBtn.style.position = 'fixed';
  cursorBtn.style.bottom = '20px';
  cursorBtn.style.right = '20px';
  cursorBtn.style.zIndex = '10000';
  cursorBtn.style.padding = '0.5rem 1rem';
  cursorBtn.style.fontSize = '0.8rem';
  cursorBtn.style.cursor = 'auto';
  cursorBtn.innerText = 'Toggle Cursor';
  document.body.appendChild(cursorBtn);

  const isNormal = localStorage.getItem('normalCursor') === 'true';
  if (isNormal) {
    document.body.classList.add('normal-cursor-mode');
  }

  cursorBtn.addEventListener('click', () => {
    document.body.classList.toggle('normal-cursor-mode');
    localStorage.setItem('normalCursor', document.body.classList.contains('normal-cursor-mode'));
  });
});

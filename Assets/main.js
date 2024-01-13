//................. Nav drop down .............

document.querySelector('.Open').addEventListener('click', () => {
  document.querySelector('.nav-link').style.display = 'flex';
  document.querySelector('.Open').style.display = 'none';
  document.querySelector('.Close').style.display = 'inline-block';
});

document.querySelector('.Close').addEventListener('click', () => {
  document.querySelector('.nav-link').style.display = 'none';
  document.querySelector('.Open').style.display = 'block';
  document.querySelector('.Close').style.display = 'none';
});

// ....inline....check

document.querySelector('.inline').addEventListener('click', () => {
  document.querySelector('.inline input').classList.toggle('red');
});

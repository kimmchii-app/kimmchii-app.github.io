// 角色宣傳長海報：共用腳本（放在 <head> 載入）
// 1. 照片不給存：擋右鍵選單和拖曳
// 2. 有 data-reveal 的元素，捲到畫面裡才淡入
document.documentElement.classList.add('js');

for (const type of ['contextmenu', 'dragstart']) {
  document.addEventListener(type, e => {
    if (e.target.closest?.('figure, img')) e.preventDefault();
  });
}

addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(el => io.observe(el));
});

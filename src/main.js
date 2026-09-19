(function () {
  const playBtn = document.getElementById('radarPlayBtn');
  if (playBtn) {
    let isPlaying = false;
    playBtn.addEventListener('click', function () {
      isPlaying = !isPlaying;
      if (isPlaying) {
        this.classList.add('bg-warning', 'text-black');
        this.classList.remove('bg-neutral-800', 'text-warning');
        this.innerHTML = '<span class="material-symbols-outlined text-[14px]">pause</span> Pausar Bucle';
      } else {
        this.classList.remove('bg-warning', 'text-black');
        this.classList.add('bg-neutral-800', 'text-warning');
        this.innerHTML = '<span class="material-symbols-outlined text-[14px]">play_arrow</span> Bucle (T - 180 min)';
      }
    });
  }
})();
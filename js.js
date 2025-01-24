document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.zoomable');
    const rect = image.getBoundingClientRect();
  
    // Hitung jarak kursor ke gambar
    const distanceX = Math.abs(event.clientX - (rect.left + rect.width / 2));
    const distanceY = Math.abs(event.clientY - (rect.top + rect.height / 2));
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
    // Jika jarak kursor dekat dengan gambar, besarkan
    if (distance < 150) {
      image.style.transform = 'scale(1.3)';
      image.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
    } else {
      image.style.transform = 'scale(1)';
      image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    }
  });
  
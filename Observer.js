const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.container');
  
      if (entry.isIntersecting) {
        square.classList.add('container-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('container-animation');
    });
  });
  
  observer.observe(document.querySelector('.container-wrapper'));
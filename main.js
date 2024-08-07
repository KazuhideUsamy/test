document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
        }, 2000);
    }, 3000); // 3秒後にフェードアウトを開始
});

const trigger = document.querySelectorAll('.fadeUp_trigger');
trigger.forEach((value) => {
    gsap.set(
        value, {
        y: 100,
        autoAlpha: 0,
    }
    )
    gsap.to(
        value, {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: value,
            start: 'center bottom',
            toggleActions: 'play none none none'
        },
        duration: 1
    }
    );
});

const createRandomStarsLeft = () => {
    const starArea = document.querySelector('.star_leftArea');

    for (let i = 0; i < 4; i++) {
      const star = document.createElement('img');
      star.src = 'images/star.svg';
      star.classList.add('star');

      const maxX = starArea.clientWidth - 50;
      const maxY = starArea.clientHeight - 50;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;

      starArea.appendChild(star);

      setTimeout(() => {
        starArea.removeChild(star);
      }, 2000);
    }
  };
  const createRandomStarsRight = () => {
    const starArea = document.querySelector('.star_rightArea');

    for (let i = 0; i < 4; i++) {
      const star = document.createElement('img');
      star.src = 'images/star.svg';
      star.classList.add('star');

      const maxX = starArea.clientWidth - 50;
      const maxY = starArea.clientHeight - 50;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;

      starArea.appendChild(star);

      setTimeout(() => {
        starArea.removeChild(star);
      }, 2000);
    }
  };


  window.onload = () => {
    setInterval(createRandomStarsLeft, 2000);
    setInterval(createRandomStarsRight, 2000); // 2秒ごとに新しいスターを5つ出現させる
  };
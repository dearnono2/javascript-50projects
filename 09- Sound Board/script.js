const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button'); // button 요소 생성
  btn.classList.add('btn'); // button요소에 class명 부여

  btn.innerText = sound;
  
  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}
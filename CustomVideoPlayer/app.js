const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

console.log(player);
console.log( video, progress, progressBar, toggle, skipButtons, ranges);

function togglePlay () {
  return video.paused ? video.play() : video.pause()
   
}

function updateButton() {
    const icon = this.paused ?  '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
    this.paused ? console.log('pause button'): console.log('play button');
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
    console.log(video.currentTime);
}

function handlerangeUpdate() {
    video[this.name] = this.value;
    
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log("scrubTime:",scrubTime);
    console.log(e);
}

// events
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach((button => button.addEventListener('click', skip) ))
ranges.forEach((range => range.addEventListener('change', handlerangeUpdate) ))
ranges.forEach((range => range.addEventListener('mousemove', handlerangeUpdate) ))

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e) )
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
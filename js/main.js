let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode;
    console.log('Option clicked:', mode);
    setTheme(mode);
  })
}

function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = './css/main.css';
  }
  if(mode == 'blue'){
    document.getElementById('theme-style').href = './css/main-blue.css';
  }
  if(mode == 'green'){
    document.getElementById('theme-style').href = './css/main-green.css';
  }
  if(mode == 'purple'){
    document.getElementById('theme-style').href = './css/main-purple.css';
  }
}
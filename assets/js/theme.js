(function(){
  function set(mode){
    var btn = document.getElementById('themeToggle');
    if(mode==='dark'){ document.body.classList.add('dark'); if(btn) btn.textContent='🌙'; }
    else { document.body.classList.remove('dark'); if(btn) btn.textContent='☀️'; }
    localStorage.setItem('theme-mode', mode);
  }
  var saved = localStorage.getItem('theme-mode') || 'light';
  set(saved);
  document.addEventListener('click', function(e){
    if(e.target && e.target.id==='themeToggle'){
      var now = document.body.classList.contains('dark') ? 'light':'dark';
      set(now);
    }
  });
})();
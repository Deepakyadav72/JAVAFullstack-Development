document.addEventListener('DOMContentLoaded',function () {
 const body = document.body;
 const content =document.getElementById('content');
 const toggleBtn =document.getElementById('toggleBtn');
 let nightMode = false;
 toggleBtn.addEventListener('click', function () {
 nightMode = !nightMode;
 if (nightMode) {
 body.classList.add('night-mode');
 content.style.color = '#fff';
 } else
     {
      body.classList.remove('night-mode');
 content.style.color = '#000';
}
 });
});
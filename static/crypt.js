function calcPass()
{
            var txt = document.getElementById('pass').value;
            var xhtt = new XMLHttpRequest();
            xhtt.open('POST','admpasswd.php',true);
            xhtt.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhtt.send('pass=' + encodeURIComponent(txt));
            xhtt.onreadystatechange = function () {
                document.getElementById('hash').value = xhtt.responseText;
            }
}
window.addEventListener('load', function () {
            document.getElementById('hash').addEventListener('click',function () {
                this.select(); });
            document.getElementById('hashbtn').addEventListener('click',function () {
                calcPass(); });
            document.getElementById('pass').addEventListener('keydown',function (e) {
                if (e.key == 'Enter') {
                    calcPass();
                }  });
});


function changeIcon() {

    let id = document.getElementById('invisible') ? document.getElementById('invisible').id :document.getElementById('visible').id;
    if (id==='invisible') {
        document.getElementById('invisible').src = 'image/visible1.png';
        document.getElementById('invisible').id = 'visible';
        document.getElementById("pass").type = 'text';
    }else {
        document.getElementById('visible').src = 'image/visible.jpg';
        document.getElementById('visible').id = 'invisible'; 
        document.getElementById("pass").type = 'password';
    }
}
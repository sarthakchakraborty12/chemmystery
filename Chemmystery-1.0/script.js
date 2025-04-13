document.getElementById('start-button').addEventListener('click', function() {

    const nickname = document.getElementById('nickname').value;

    if (nickname) {

        localStorage.setItem('nickname', nickname);

        window.location.href = 'mainpage.html';

    } else {

        alert('Please enter a nickname!');

    }

});


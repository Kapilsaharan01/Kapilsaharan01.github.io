document.addEventListener("DOMContentLoaded", function() {
    const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
    const imageAlts = {
        'pic1.jpg': 'Closeup of a blue human eye',
        'pic2.jpg': 'Rock that looks like a wave',
        'pic3.jpg': 'Purple and white pansies',
        'pic4.jpg': 'Section of an Egyptian hieroglyph',
        'pic5.jpg': 'Brown butterfly on green leaf'
    };

    const thumbBar = document.querySelector('.thumb-bar');
    const displayedImg = document.querySelector('.displayed-img');
    const overlay = document.querySelector('.overlay');
    const btn = document.querySelector('button');

    imageFilenames.forEach(function(filename) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `images/${filename}`);
        newImage.setAttribute('alt', imageAlts[filename]);
        thumbBar.appendChild(newImage);

        newImage.addEventListener('click', function() {
            displayedImg.setAttribute('src', `images/${filename}`);
            displayedImg.setAttribute('alt', imageAlts[filename]);
        });
    });

    btn.addEventListener('click', function() {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
            btn.setAttribute('class', 'light');
            btn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        } else {
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    });
});

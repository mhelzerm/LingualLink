async function loadImages() {
    try {
        let response = await fetch('/content-modules/ASL/index.json');
        let data = await response.json();
        let imageGrid = document.getElementById('imageGrid');
        
        data.forEach(entry => {
            let buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'letter-button btn btn-light position-relative';

            // Create audio button
            let audioButton = document.createElement('button');
            audioButton.className = 'audio-button btn btn-outline-dark btn-sm';
            audioButton.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
            audioButton.onclick = function() {
                let audio = new Audio(`/content-modules/ASL/${entry.audio}`);
                audio.play();
            };

            // Create letter text
            let letterText = document.createElement('div');
            letterText.textContent = entry.word.toUpperCase();

            // Create image
            let img = document.createElement('img');
            img.src = `/content-modules/ASL/${entry.image}`;
            img.alt = entry.word;

            // Append elements in correct order
            buttonWrapper.appendChild(audioButton);
            buttonWrapper.appendChild(letterText);
            buttonWrapper.appendChild(img);
            imageGrid.appendChild(buttonWrapper);
        });
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadImages);

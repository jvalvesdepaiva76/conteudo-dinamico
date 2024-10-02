import flags from './model/flags.js';

const flagsContainer = document.getElementById('flags-container');

const loadFlags = () => {
  flags.forEach(flag => {
    const flagDiv = document.createElement('div');
    flagDiv.classList.add('flag', 'col-2', 'my-2', 'text-center');
    
    const flagImg = document.createElement('img');
    flagImg.src = flag.image;
    flagImg.alt = flag.name;

    const flagName = document.createElement('p');
    flagName.textContent = flag.name;

    flagDiv.appendChild(flagImg);
    flagDiv.appendChild(flagName);
    flagsContainer.appendChild(flagDiv);
  });
};

loadFlags();

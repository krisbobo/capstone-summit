const hamburger = document.querySelector('.menu-container');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');

  navbar.classList.toggle('d-block');
});

window.onscroll = () => {
  hamburger.classList.remove('change');

  navbar.classList.remove('d-block');
};

// ========== Dynamic JS part ===========

const featuredSpeakers = [
  {
    name: 'Xavier Leclerc',
    title: 'Climate change researcher',
    description:
    'We have to try to use more environment-friendly energy sources.',
    image: './assets/speaker5.jpg',
  },
  {
    name: 'Edward Howell',
    title: 'Recognized Geographer and seasoned climatologist.',
    description:
    'Climate change is defined as gradual changes in all the interconnected weather elements on our planet over approximately 30 years.',
    image: './assets/talk.jpg',
  },
  {
    name: 'Askas Jeremy',
    title: 'Climate change activist',
    description:
    'The data shows the Earth is warming and it is up to us to make the changes necessary for a healthier planet.',
    image: './assets/speaker1.jpg',
  },
  {
    name: 'M.T ElGassier',
    title: 'Recognized developer of the most inteligent IA of the MIT',
    description:
      'Lead researcher at NASA and seasoned climatologist',
    image: './assets/speaker3.jpg',
  },
  {
    name: 'Dr Josiah Sarpong',
    title: 'Director at the European observatory of climate change',
    description:
      'Climate change is defined as gradual changes in all the interconnected weather elements on our planet over approximately 30 years.',
    image: './assets/speaker4.jpg',
  },
  {
    name: 'Mike Erskine',
    title:
      'Teacher at College of Arts and Science',
    description:
      'It is our duty to educate the younger generation about the consquences of certain actions on the global change in climate.',
    image: './assets/speaker2.jpg',
  },
];

for (let i = 0; i < featuredSpeakers.length; i += 1) {
  const info = document.createElement('div');
  info.classList.add('speaker');
  info.innerHTML = `
                  <div class="pic-container">
                    <div class="image-container">
                      <img src="${featuredSpeakers[i].image}" alt=""> 
                    </div>
                    <span class="square"></span>
                  </div>
                  <div class="speaker-info">
                      <h3>
                      ${featuredSpeakers[i].name}
                      </h3>
                      <h4>
                      ${featuredSpeakers[i].title}
                      </h4>
                      <hr class="line-dark" />
                      <p>
                      ${featuredSpeakers[i].description}
                      </p>
                  </div>
      `;
  document.querySelector('.grid-container').appendChild(info);
}

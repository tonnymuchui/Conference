const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100vh';
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

/** More Button */
const moreButton = document.querySelector('.show-more');
const dispNone = document.querySelector('.dis-none1');
const lessButton = document.querySelector('.show-less');

function showB() {
  dispNone.style.display = 'block';
  moreButton.style.display = 'none';
}

function hideB() {
  dispNone.style.display = 'none';
  moreButton.style.display = 'block';
}

moreButton.addEventListener('click', showB);
lessButton.addEventListener('click', hideB);

const cards = [
  {
    id: 1,
    imageM: './images/Picture3.png',
    heading3: 'Tonnny',
    heading5: 'FirstName LastName',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening',
  },
  {
    id: 2,
    imageM: './images/Picture3.png',
    heading3: 'FirstName LastName',
    heading5: 'FirstName LastName',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening',
  },
  {
    id: 3,
    imageM: './images/Picture3.png',
    heading3: 'FirstName LastName',
    heading5: 'FirstName LastName',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening',
  },
  {
    id: 4,
    imageM: './images/Picture3.png',
    heading3: 'FirstName LastName',
    heading5: 'FirstName LastName',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening',
  },
];

const page2Card = cards.map(
  (card, index) => `
  <section class="page2 ${index}">
  <div class="prg1">
      <h3 class="program2">Featured Speakers</h3>
      <hr class="underline">
  </div>

  <div class="speakerCards">
      <div class="card-lec">
          <img src="${card.imageM}" alt="lecture">

          <div class="feature-card">
              <h3>${card.heading3}</h3>
              <h5>${card.heading5}</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>
      </div>
      <div class="card-lec">
          <img src="./images/Picture3.png" alt="lecture">

          <div class="feature-card">
              <h3>Lecturer</h3>
              <h5>Speaker</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>
      </div>
      <div class="dis-none">
          <button class="show-more" type="button">MORE &#x2228;</button>
      </div>
  </div>

  <div class="speakerCards1 dis-none1">
      <div class="card-lec">
          <img src="./images/Picture3.png" alt="lecture">
          <div class="feature-card">
              <h3>Lecturer1</h3>
              <h5>Speaker</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>
      </div>

      <div class="card-lec ">
          <img src="./images/Picture3.png" alt="lecture">

          <div class="feature-card">
              <h3>Lecturer2</h3>
              <h5>Speaker</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>

      </div>  
      <div class="card-lec">
          <img src="./images/Picture3.png" alt="lecture">
          <div class="feature-card">
              <h3>Lecturer3</h3>
              <h5>Speaker</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>
      </div>
      <div class="card-lec">
          <img src="./images/Picture3.png" alt="lecture">
          <div class="feature-card">
              <h3>Lecturer</h3>
              <h5>Speaker</h5>
              <p>Listen to the speaker from various countries about sharing and opening</p>
          </div>
      </div>
      <div class="dis-none">
          <button class="show-less" type="button">LESS &#x22C0;</button>
      </div>
  </div>
</section>
`,
);
const workCard = document.querySelector('.popup');
workCard.innerHTML += page2Card;

const programCards = [
  {
    id: 1,
    title: 'Food Systems& nutrition',
    imageM: './images/lecture.png',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening.',
  },
  {
    id: 2,
    title: 'Women in Agriculture',
    imageM: './images/lecture.png',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening.',
  },
  {
    id: 3,
    title: 'Agtech',
    imageM: './images/lecture.png',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening.',
  },
  {
    id: 4,
    title: 'Regional trade',
    imageM: './images/lecture.png',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening.',
  },
  {
    id: 5,
    title: 'Agri-investment',
    imageM: './images/lecture.png',
    cardDescription:
      'Listen to the speaker from various countries about sharing and opening.',
  },
];

const programCard = programCards.map(
  (card, index) => `
  <div class="programCards ${index}">
  <div class="card">
      <img class="${index}" src="${card.imageM}" alt="lecture">
      <h3>${card.title}</h3>
      <p>${card.cardDescription}</p>
  </div>
  </div>
  `,
).join('');

const program = document.querySelector('.programCards');
program.innerHTML += programCard;
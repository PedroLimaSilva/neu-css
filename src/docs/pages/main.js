import { ThemeSwitcher } from '../components/theme-switcher';

export const MainPage = () => {
  const article = document.createElement('article');

  const createThemeSwitcherElement = () => {
    return ThemeSwitcher();
  };

  const themeSwitcher = createThemeSwitcherElement();
  article.appendChild(themeSwitcher);

  const section = `
    <main>
      <section>
        <h1>Cards</h1>
        <article class="col-1">
          <div class="card">This is a card</div>
          <div class="card pressed">This card is pressed</div>
        </article>
        <article class="col-2">
          <div class="card">
            This card is long Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci, officia ab dolor atque nesciunt facere?
            Doloremque ullam doloribus perferendis similique optio illo ex
            nesciunt quo quisquam cupiditate, corporis tenetur asperiores!
          </div>
          <div class="card pressed">
            This card is long and pressed Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatum impedit autem sint porro
            aspernatur, voluptates, eos tempore officiis nihil exercitationem
            temporibus quas sunt culpa dolor ab laborum quam sed nesciunt.
          </div>
        </article>
        <article class="col-2">
          <div class="card animated">This card is animated when pressed</div>
          <div class="card pressed animated">
            This card is animated when pressed
          </div>
        </article>
      </section>
      <section>
        <h1>Buttons</h1>
        <article class="col-1">
          <div style="display: flex; justify-content: space-between">
            <button class="button">button</button>
          </div>
        </article>
      </section>
    </main>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

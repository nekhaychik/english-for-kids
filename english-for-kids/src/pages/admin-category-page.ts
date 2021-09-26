import { ImageCategoryModel } from '../models/image-category-model';
import { Foot } from '../components/footer/foot/foot';
import { AdminCategoriesPage } from '../admin-panel/categories/page/page';

export class AdminCategoryPage {
  private readonly page: AdminCategoriesPage;

  private readonly footer: Foot;

  constructor(private readonly rootElement: HTMLElement) {
    this.page = new AdminCategoriesPage();
    this.rootElement.appendChild(this.page.element);
    this.footer = new Foot();
    this.rootElement.appendChild(this.footer.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cards = [];
    let cardsCounter = 0;
    const cat = categories[0];
    const cardsName = cat.images.map((name) => `${name.split('.')[0]}`);
    for (let i = 1; i < categories.length; i++) {
      for (let j = 0; j < cardsName.length; j++) {
        if (categories[i].category === cardsName[j]) {
          const obj = { name: categories[i].category, amount: categories[i].images.length };
          cards[cardsCounter] = obj;
          cardsCounter++;
          break;
        }
      }
    }
    this.page.addCatigoriesPage(cards);
    this.page.setID();
    this.footer.addFooter();
  }
}

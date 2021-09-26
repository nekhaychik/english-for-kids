import { ImageCategoryModel } from '../models/image-category-model';
import { CategoriesPage } from '../components/categ-page/categ-page';
import { Foot } from '../components/footer/foot/foot';

export class MainPage {
  private readonly mainPage: CategoriesPage;

  private readonly footer: Foot;

  constructor(private readonly rootElement: HTMLElement) {
    this.mainPage = new CategoriesPage();
    this.rootElement.appendChild(this.mainPage.element);
    this.footer = new Foot();
    this.rootElement.appendChild(this.footer.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.mainPage.addCatigoriesPage(images);
    this.mainPage.setID();
    this.footer.addFooter();
  }
}

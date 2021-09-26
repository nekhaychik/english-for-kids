import { ImageCategoryModel } from '../models/image-category-model';
import { SelectedCategoryPage } from '../components/selected-category/selected-page/selected-page';
import { listenForAudio } from '../functions';
import { Foot } from '../components/footer/foot/foot';

export class CategoryPage {
  private readonly categoryPage: SelectedCategoryPage;

  private readonly footer: Foot;

  constructor(private readonly rootElement: HTMLElement) {
    this.categoryPage = new SelectedCategoryPage();
    this.rootElement.appendChild(this.categoryPage.element);
    this.footer = new Foot();
    this.rootElement.appendChild(this.footer.element);
  }

  async start(categoryIndex = 1): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[categoryIndex];
    const traslations = cat.translation;
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    const sounds = cat.sounds.map((sound) => `${cat.category}/${sound}`);
    this.categoryPage.addSelectedCategoryPage(images, traslations, sounds);
    this.categoryPage.setID();
    listenForAudio();
    this.footer.addFooter();
  }
}

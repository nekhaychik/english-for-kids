import { HeadAdmin } from './admin-panel/header/head/head';
import { Head } from './components/header/head/head';
import { switchModeHandler } from './functions';
import { AdminCategoryPage } from './pages/admin-category-page';
import { CategoryPage } from './pages/category-page';
import { MainPage } from './pages/main-page';

export const enum PageIds {
  MainPageID = 'main-page',
  CategoryPageActionsID = 'actions',
  CategoryPageAnimalsID = 'animals',
  CategoryPageClothesID = 'clothes',
  CategoryPageEducationID = 'education',
  CategoryPageFoodID = 'food',
  CategoryPageHomeID = 'home',
  CategoryPageNatureID = 'nature',
  CategoryPageWeatherID = 'weather',
  StatisticsPageID = 'statistics-page',
  AdminPanel = 'admin-panel',
}

export class App {
  private readonly head: Head;

  private readonly headAdmin: HeadAdmin;

  private static defaultPageId = 'current-page';

  private static activePrevItem = 'menu-main-page';

  constructor(private readonly rootElement: HTMLElement) {
    this.head = new Head();
    this.headAdmin = new HeadAdmin();
    // this.rootElement.appendChild(this.head.element);
  }

  static deletePage(appElement: HTMLElement | null): void {
    if (!appElement) throw Error('App root element not found');
    const footer = document.querySelector('.footer');
    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);

    if (currentPageHTML) {
      footer?.remove();
      currentPageHTML.remove();
    }
  }

  static createCategoryPage(appElement: HTMLElement, indexOfCategory: number): void {
    const page = new CategoryPage(appElement);
    page.start(indexOfCategory);
  }

  static activeMenuItem(item: string): void {
    const menuPrevItem = <HTMLLinkElement>document.getElementById(`${this.activePrevItem}`);
    menuPrevItem.style.color = 'white';
    const menuItem = <HTMLLinkElement>document.getElementById(`menu-${item}`);
    menuItem.style.color = 'green';
    this.activePrevItem = `menu-${item}`;
  }

  static renderNewPage(idPage: string): void {
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');

    App.deletePage(appElement);

    let page: MainPage | CategoryPage | null = null;
    // console.log(window.location.hash.slice(1));

    switch (idPage) {
      case PageIds.MainPageID:
        page = new MainPage(appElement);
        this.activeMenuItem(PageIds.MainPageID);
        break;
      case PageIds.CategoryPageAnimalsID:
        this.createCategoryPage(appElement, 1);
        this.activeMenuItem(PageIds.CategoryPageAnimalsID);
        break;
      case PageIds.CategoryPageFoodID:
        this.createCategoryPage(appElement, 2);
        this.activeMenuItem(PageIds.CategoryPageFoodID);
        break;
      case PageIds.CategoryPageClothesID:
        this.createCategoryPage(appElement, 3);
        this.activeMenuItem(PageIds.CategoryPageClothesID);
        break;
      case PageIds.CategoryPageActionsID:
        this.createCategoryPage(appElement, 4);
        this.activeMenuItem(PageIds.CategoryPageActionsID);
        break;
      case PageIds.CategoryPageEducationID:
        this.createCategoryPage(appElement, 5);
        this.activeMenuItem(PageIds.CategoryPageEducationID);
        break;
      case PageIds.CategoryPageWeatherID:
        this.createCategoryPage(appElement, 6);
        this.activeMenuItem(PageIds.CategoryPageWeatherID);
        break;
      case PageIds.CategoryPageHomeID:
        this.createCategoryPage(appElement, 7);
        this.activeMenuItem(PageIds.CategoryPageHomeID);
        break;
      case PageIds.CategoryPageNatureID:
        this.createCategoryPage(appElement, 8);
        this.activeMenuItem(PageIds.CategoryPageNatureID);
        break;
      case PageIds.AdminPanel:
        window.location.reload();
        break;
      default:
        // console.log('error. page did not found');
        break;
    }

    if (page) {
      if (typeof (page) !== typeof (CategoryPage)) {
        page.start();
        switchModeHandler();
      }
    }
  }

  static enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      // console.log(hash);
      App.renderNewPage(hash);
    });
  }

  async start(): Promise<void> {
    if (window.location.hash.slice(1) === 'admin-panel') {
      this.head.remove();
      this.rootElement.appendChild(this.headAdmin.element);
      this.headAdmin.addHeader();
      const appElement = document.getElementById('app');
      if (!appElement) throw Error('App root element not found');
      const page = new AdminCategoryPage(appElement);
      if (page) {
        page.start();
      }
    } else {
      this.rootElement.appendChild(this.head.element);
      this.head.addHeader();
      App.renderNewPage('main-page');
      App.enableRouteChange();
    }
  }
}

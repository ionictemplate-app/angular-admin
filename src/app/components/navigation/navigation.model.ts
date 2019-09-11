export class NavigationModel {
  public id: string;
  public title: string;
  public type: string;
  public icon: string;
  public url?: string;
  public badge?: BadgeModel;
  public children?: Array<NavItem>;

  constructor(model: any = {}, badge?: BadgeModel, children?: Array<NavItem>) {
    this.id = model.id;
    this.title = model.title;
    this.type = model.type;
    this.icon = model.icon;
    this.url = model.url;
    this.badge = badge;
    this.children = children;
  }
}

export class NavItem {
  public id: string;
  public title: string;
  public type: string;
  public icon: string;
  public url: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.title = model.title;
    this.type = model.type;
    this.icon = model.icon;
    this.url = model.url;
  }
}

export class BadgeModel {
  public title: string;
  public background: string;
  public foreground: string;

  constructor(model: any = {}) {
    this.title = model.title;
    this.background = model.background;
    this.foreground = model.foreground;
  }
}

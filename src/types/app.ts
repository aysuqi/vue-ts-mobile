export interface IData {
  loading?: boolean;
  menus?: IMenus[];
}

interface IMenus {
  path: string;
  title: string;
  desc?: string;
}

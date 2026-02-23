export interface GmailIcon {
  icon: string;
  label: string;
  route: string;
}

export interface FrontedIconInterface {
  icon : string;
  label : string;
}

export interface CategoriesInteface {
  title : string;
  icons : FrontedIconInterface[];
}

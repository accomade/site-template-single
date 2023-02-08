export interface NavItem {
  key: string,
  path?: string,
  external?: boolean,
}


export interface Nav {
  main: NavItem[]
  footer: NavItem[]
} 
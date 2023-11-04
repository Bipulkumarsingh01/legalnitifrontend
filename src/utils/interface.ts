export interface counterStoreObjType {
  count: number;
}

export interface navbarRoutesObjType {
  key: number;
  to: string;
  label: string;
  hasChildren: boolean;
  children?: Array<{ key: number; to: string; label: string }>;
}

export interface CascadedMenuSmallPropType {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  navbarRouteMenuState: null | HTMLElement;
  navbarRoutes: Array<navbarRoutesObjType>;
  navbarChildRoutesSmallMenuOpenHandler: (event: React.MouseEvent<any>) => void;
  navbarChildRoutesSmallMenuCloseHandler: () => void;
  childRoutesSmallMenuState: null | HTMLElement;
  openChildRouteSmall: boolean;
}

export interface CascadedMenuLargePropType {
  handleCloseNavMenu: () => void;
  navbarRoutes: Array<navbarRoutesObjType>;
  openChildRouteLarge: boolean;
  navbarChildRoutesLargeMenuOpenHandler: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  childRoutesLargeMenuState: null | HTMLElement;
  navbarChildRoutesLargeMenuCloseHandler: () => void;
  menuItems?: string;
}

export interface statesAndCityListIndiaDataType {
  key: number;
  value: string;
  label: string;
}

export interface citiesListIndiaDataType {
  string: Array<statesAndCityListIndiaDataType>;
}

export interface AppsState {
  appsList: {
    [key: string]: string[];
  },
  files:{
    [key: string]: string[];
  }
}
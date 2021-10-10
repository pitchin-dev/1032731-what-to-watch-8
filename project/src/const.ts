export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  MainPage = '/',
  SignIn = '/login',
  MyList = '/mylist',
  FilmPage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

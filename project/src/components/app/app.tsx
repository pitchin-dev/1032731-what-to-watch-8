import MainPage from '../main-page/main-page';
import { AppProps } from './types';

function App({filmInfo}: AppProps): JSX.Element {
  const {
    name,
    genre,
    year,
  } = filmInfo;
  return (
    <MainPage filmName={name} filmGenre={genre} filmYear={year} />
  );
}

export default App;

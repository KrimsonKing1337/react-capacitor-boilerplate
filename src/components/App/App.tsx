import { Wrapper } from '../Wrapper';

import logo from '../../assets/imgs/logo.webp';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div>
      <Wrapper>
        <img src={logo} alt="logo" className={styles.Logo} />

        <div className={styles.Title}>
          Hello from React inside Capacitor!
        </div>
      </Wrapper>
    </div>
  );
};

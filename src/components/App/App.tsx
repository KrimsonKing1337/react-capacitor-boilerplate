import { Wrapper } from '../Wrapper';

import logo from '../../assets/imgs/logo.png';

export const App = () => {
  return (
    <div>
      <Wrapper>
        <img src={logo} alt="logo" />

        <h4>
          Hello from React inside Capacitor!
        </h4>
      </Wrapper>
    </div>
  );
};

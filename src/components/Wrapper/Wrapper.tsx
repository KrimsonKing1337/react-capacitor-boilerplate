import type { PropsWithChildren } from 'react';

import styles from './Wrapper.module.scss';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  );
};

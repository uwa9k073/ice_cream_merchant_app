import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Backdrop.module.scss";

export interface IBackdropProps {
  /**
   * Открыт ли бэкдроп
   */
  open?: boolean;

  /**
   * Время анимации
   */
  duration?: number;

  /**
   * Обработчик клика по бэкдропу
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Дочерние элементы.
   */
  children?: React.ReactNode;
}

/**
 * Компонент для затемнения фона.
 */
const Backdrop: FC<IBackdropProps> = ({
  open = false,
  duration: timeout = 250,
  onClick,
  children,
}) => {
  return (
    <CSSTransition
      in={open}
      unmountOnExit={true}
      timeout={timeout}
      appear={true}
      classNames={styles}
      style={{ "--ep-impl-fade-animation": `${timeout}ms` }}
    >
      <div aria-hidden={true} className={styles.component} onClick={onClick}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Backdrop;

import style from './header.module.scss';

const Header = () => {

  return (
    <div className={style["header"]}>
      <div className="container">
        <div className={style["header__content"]}>

          <h1>Header</h1>

        </div>
      </div>
    </div>
  );
};

export default Header;
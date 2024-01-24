export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="logo.png" />
          <div className="header__title">
            <h1>REACT PIZZA</h1>
            <p>Самая реактивная пицца</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import autoImg from "../../../assets/auto.png";

const Logo = () => {
  return (
    <a
      href="/"
      className="
        flex
        items-center
        gap-0
        select-none
      "
    >
      <img
        src={autoImg}
        alt="STACK"
        className="
          h-32
          w-auto
          object-contain
        "
      />
    </a>
  );
};

export default Logo;

import css from "./Loader.module.css";

function Loader({ className }) {
  return (
    <div className={`${css.loader} ${className || ''}`}>
      {[...Array(8)].map((e, i) => (
        <div key={i} />
      ))}
    </div>
  );
}

export default Loader;

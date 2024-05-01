/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, onClick, to, disabled, className }) {
    if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

    if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
  
  export default Button;
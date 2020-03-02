import React from "react";
import "./Container.scss";

interface Props {
  name: string;
  title?: string;
  description?: string;
  withBack?: boolean;
  children: React.ReactNode;
}

const Container = ({ name, title, description, children, withBack }: Props) => {
  return (
    <div className="Container">
      {withBack && (
        <a className="Back" href="./">
          &#8249;
        </a>
      )}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <section className={name}>{children}</section>
    </div>
  );
};

export default Container;

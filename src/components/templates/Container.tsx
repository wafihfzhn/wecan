import React from "react";
import "./Container.scss";

interface Props {
  name: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Container = ({ name, title, description, children }: Props) => {
  return (
    <div className="Container">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <section className={name}>{children}</section>
    </div>
  );
};

export default Container;

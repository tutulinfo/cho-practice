import React from "react";
import "./globals.css";

interface Props {
  children: React.ReactElement;
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <head></head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;

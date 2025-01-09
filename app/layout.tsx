import "./globals.css";

interface Props {
  children: React.ReactElement;
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");
        </style>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;

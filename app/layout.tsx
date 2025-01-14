import Footer from "./components/Global/Footer";
import Header from "./components/Global/Header";
import "./globals.css";
import "./styles.css";

interface Props {
  children: React.ReactElement;
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <title>Centrum Hecht Practice</title>
        <style>
          {/* @import
          url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"); */}
        </style>
      </head>
      <body>
        <Header />
        <div className="max-w-6xl px-8 mx-auto bg-red-200 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default layout;

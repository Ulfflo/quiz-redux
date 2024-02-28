const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-10">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Emelie, Karolina, Josh, Åsa & Ulf.
          All rights reserved ✌️
        </p>
      </div>
    </footer>
  );
};

export default Footer;

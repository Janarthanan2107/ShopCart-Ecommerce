import React from "react";

function Footer() {
  const footerSections = [
    {
      header: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "Terms & Conditions", url: "#" },
        { name: "Privacy Policy", url: "#" },
      ],
    },
    {
      header: "Support",
      links: [
        { name: "Customer Service", url: "#" },
        { name: "FAQs", url: "#" },
        { name: "Shipping Information", url: "#" },
        { name: "Returns & Exchanges", url: "#" },
      ],
    },
    {
      header: "Shop",
      links: [
        { name: "New Arrivals", url: "#" },
        { name: "Best Sellers", url: "#" },
        { name: "Sale", url: "#" },
        { name: "Gift Cards", url: "#" },
      ],
    },
    {
      header: "Follow Us",
      links: [
        { name: "Facebook", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Pinterest", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {footerSections.map((section, index) => (
            <div className="col-span-2 sm:col-span-1" key={index}>
              <h2 className="text-lg font-semibold mb-4">
                <span className="border-b-2 pb-2 border-gray-500">{section.header}</span>
              </h2>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:text-violet-400">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Your E-commerce Website. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

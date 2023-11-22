"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ propsPagesWodpress }) => {
  const currentRoute = usePathname();
  const links = [
    {
      pathname: "/sklep",
      name: "Sklep",
    },
  ];

  const extractedIds = propsPagesWodpress.map((element) => element);

  // Assuming you want to add the extracted ids to the 'links' array
  // You can use the spread operator to create a new array with the updated values

  const updatedLinks = [
    ...links,
    // Use map to create new objects with the extracted 'id' values
    ...extractedIds.map((menuObject) => ({
      pathname: `/${menuObject.id}`, // Assuming a specific pathname structure
      name: ` ${menuObject.title}`, // You can customize this according to your needs
    })),
  ];
  return (
    <nav>
      <ul className="header__nav">
        {updatedLinks.map((linkData) => (
          <li key={linkData.name}>
            <Link
              className={currentRoute === linkData.pathname ? "acitve" : ""}
              href={linkData.pathname}
            >
              {linkData.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

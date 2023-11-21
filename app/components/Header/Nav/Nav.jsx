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
    {
      pathname: "/",
      name: "Home",
    },
  ];

  // if (propsPagesWodpress) {
  //   propsPagesWodpress.map((element) => console.log(element.id));
  // }

  const extractedIds = propsPagesWodpress.map((element) => element.id);

  // Assuming you want to add the extracted ids to the 'links' array
  // You can use the spread operator to create a new array with the updated values

  const updatedLinks = [
    ...links,
    // Use map to create new objects with the extracted 'id' values
    ...extractedIds.map((id) => ({
      pathname: `/${id}`, // Assuming a specific pathname structure
      name: ` ${id}`, // You can customize this according to your needs
    })),
  ];
  console.log(updatedLinks);
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

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";
import { BtnOutline } from "./button";
import FooterAlgalaf from "./Footer";
import { useEffect, useState } from "react";
import { GB, ID } from "country-flag-icons/react/3x2";
import { FaBars, FaTimes } from "react-icons/fa";

const flags = [
  { title: "Bahasa", icons: <ID className="w-fit h-fit" /> },
  {
    title: "English",
    icons: <GB className="w-5 h-5" />,
  },
];

const links = [
  {
    id: 1,
    link: "/",
    content: "Home",
  },
  {
    id: 2,
    link: "book",
    content: "Homestay",
  },
  {
    id: 3,
    link: "trip",
    content: "Travel",
  },
  {
    id: 4,
    link: "blog",
    content: "Article",
  },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { userDetail, users } = useAuth();
  const [bahasa, setBahasa] = useState(flags[0].icons);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (!users) return;
    if (!userDetail) {
      navigate("sign-up");
    }
  }, []);

  return (
    <div className="w-screen bg-gradient-to-bl flex flex-col from-teal-400/20 via-teal-200/10">
      <header className="py-2 w-full bg-gradient-to-b from-orange-800/50 via-amber-700/30 text-white fixed z-40">
        <nav className="flex justify-between px-3 items-center">
          <div className="md:w-1/3 w-2/3 md:px-4">
            <h1 className="font-signature md:text-2xl text-xl italic">
              AL-GALAF
            </h1>
          </div>
          <div
            id="menu"
            className="flex items-center  justify-between gap-3 md:w-2/3"
          >
            <div className="lg:flex hidden tracking-widest justify-evenly w-2/3">
              <Link
                to="/"
                className="hover:scale-125 hover:font-bold ease-in-out delay-75 duration-200"
              >
                Home
              </Link>
              <Link
                to="book"
                className="hover:scale-125 hover:font-bold ease-in-out delay-75 duration-200"
              >
                Homestay
              </Link>
              <Link
                to="trip"
                className="hover:scale-125 hover:font-bold ease-in-out delay-75 duration-200"
              >
                Travel
              </Link>
              <Link
                to="blog"
                className="hover:scale-125 hover:font-bold ease-in-out delay-75 duration-200"
              >
                Article
              </Link>
            </div>
            <div
              id="user"
              className="flex items-center justify-evenly md:w-1/3"
            >
              <div className="md:w-1/3">
                {/* <Dropdown label={bahasa} inline={true}>
                  {flags.map((item, i) => (
                    <Dropdown.Item key={i}>
                      <div
                        className="flex justify-between w-20 items-center"
                        onClick={() => setBahasa(flags[i].icons)}
                      >
                        {item.icons}
                        <p className="select-none">{item.title}</p>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown> */}
                <select className="appearance-none bg-transparent border-transparent rounded border-0 active:border-0 focus:border-0 focus:border-transparent">
                  {flags.map((item, i) => (
                    <option
                      key={i}
                      className="bg-transparent flex justify-between"
                    >
                      {item.icons}
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              {userDetail ? (
                <div className="rounded-full inline-flex object-cover w-10 h-10 p-[1.5px] border border-white overflow-hidden">
                  <img
                    src="https://spng.pngfind.com/pngs/s/80-804674_png-file-male-user-vector-transparent-png.png"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
              ) : (
                <BtnOutline text="base" px="5" py="1" colour="amber">
                  Login
                </BtnOutline>
              )}
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-white lg:hidden"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white/20 backdrop-blur-lg text-white">
                {links.map(({ id, link, content }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                    <Link onClick={() => setNav(!nav)} to={link}>
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
      <main className="flex flex-col">{children}</main>
      <FooterAlgalaf />
    </div>
  );
};

export default Layout;

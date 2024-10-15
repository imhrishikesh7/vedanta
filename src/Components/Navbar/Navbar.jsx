import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon,
  DocumentArrowDownIcon
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "The Impact We Are Creating \n Driven By Our Purpose",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/impact-we-are-creating"
  },
  {
    title: "Key ESG Highlights For 2024",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/key-esg-highlights"
  },
  {
    title: "Menu",
    description: "",
    icon: Bars3Icon,
    link: "/menu"
  },
  {
    title: "Sustainable Governance",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/sustainable-governance"
  },
  {
    title: "Our Stakeholders",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/our-stakeholders"
  },
  {
    title: "ESG Scorecard",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "./docs/ESG Scorecard.pdf"
  },
  {
    title: "Human Capital Development",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/human-capital-development"
  },
  {
    title: "Supply Chain Management",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/supply-chain-management"
  },
  {
    title: "ESG Factsheet",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/esg-factsheet"
  },
  {
    title: "GRI Content Index",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/gri-content-index"
  },
  {
    title: "UNGC Index",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/ungc-index"
  },
  {
    title: "Acronym",
    description: "",
    icon: ArrowTopRightOnSquareIcon,
    link: "/acronym"
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => {
      const isPdf = link.includes('.pdf'); // Check if the link contains '.pdf'
      
      return isPdf ? (
        <Link to={link} key={key} target="_blank" rel="noopener noreferrer">
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="p"
                color="blue-gray"
                className="flex items-center whitespace-pre-line text-xs font-medium"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      ) : (
        <Link to={link} key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="p"
                color="blue-gray"
                className="flex items-center whitespace-pre-line text-xs font-medium"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      );
    }
  );
  

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 text-base py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Inside the Report
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        // as="a"
        // href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/">
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">Home</ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center bg-blue-gray-50 font-semibold w-fit gap-2 py-2 pr-4">
          Download Full Report <span className="w-[25px]"><DocumentArrowDownIcon /></span>
        </ListItem>
      </Typography>
    </List>
  );
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto rounded-none max-w-full sticky top-0 z-50 px-4 py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src="./home/vedanta-logo.svg" alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
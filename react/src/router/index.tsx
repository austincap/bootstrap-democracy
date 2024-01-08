import { createBrowserRouter, Outlet } from "react-router-dom";

import IgntHeader from "../components/IgntHeader";
import DataView from "../views/DataView";
import PortfolioView from "../views/PortfolioView";
import MakeProposalView from "../views/MakeProposalView";
import ConstitutionView from "../views/ConstitutionView";

const items = [
  {
    label: "Portfolio",
    to: "/",
  },
  {
    label: "Data",
    to: "/data",
  },
  {
    label: "Constitution",
    to: "/constitution",
  },
  {
    label: "MakeProposal",
    to: "/makeproposal",
  },
];
const Layout = () => {
  return (
    <>
      <IgntHeader navItems={items} />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PortfolioView /> },
      { path: "/data", element: <DataView /> },
      { path: "/constitution", element: <ConstitutionView /> },
      { path: "/makeproposal", element: <MakeProposalView /> }
    ],
  },
]);

export default router;

export const RoutePaths = {
  ROOT: "/",
  CONTACT: "/contact",
  SHOP_DETAILS: "/shop_details",
  SHOP_DETAILS_With_Id: "/shop_details/:id",
  SHOP: "/shop",
  LOGIN: "/login",
  REGISTER: "/register",
};

export function Navigate_to(navigate, path, args = null) {
  if (path === RoutePaths.ROOT) {
    navigate(RoutePaths.ROOT);
  } else if (path === RoutePaths.CONTACT) {
    navigate(RoutePaths.CONTACT);
  } else if (path === RoutePaths.SHOP) {
    navigate(RoutePaths.SHOP);
  } else if (path === RoutePaths.SHOP_DETAILS) {
    navigate(`${RoutePaths.SHOP_DETAILS}/${args}`);
  } else if (path === RoutePaths.LOGIN) {
    navigate(RoutePaths.LOGIN);
  } else if (path === RoutePaths.REGISTER) {
    navigate(RoutePaths.REGISTER);
  } else {
    console.log("Navigation Failed...");
  }
}

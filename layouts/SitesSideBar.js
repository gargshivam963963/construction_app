import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
const SitesSidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const { siteId } = parseCookies();
  const handleLogout = () => {
    const cookies = parseCookies();
    Object.keys(cookies).forEach((cookieName) => {
      destroyCookie(null, cookieName);
    });

    router.push("/");
  };
  return (
    <nav className="navbar navbar-dark sidebar sticky-top h-100">
      <div className="container-fluid h-100 p-0">
        <div className="navbar-collapse h-100 d-flex flex-column justify-content-between">
          <Link href="/">
            <img src="/assets/images/sidelogo.png" width="50" alt="" />
          </Link>
          <ul className="navbar-nav">
            {/* <div exact href="/organisationProfile" className="nav-item dropdown text-center">
              <img src="/assets/images/frame-1.png" alt="side_homeIcon" />
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/">Home</Link></li>
              </ul>
            </div> */}
            <Link
              className="text-decoration-none text-white"
              href={`/sites/dashboard`}
            >
              <div
                className="nav-item dropdown text-center text-center"
                activeclassname="activeClicked"
              >


                <i className={`icons ti ti-layout-dashboard fs-3 ${pathname == '/sites/dashboard' ? 'active-background' : ''}`}></i>

                {/* <img src="/assets/images/frame-2.png" alt="side_homeIcon" /> */}

                {/* <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href={`/sites/dashboard`}>Dashboard
                </Link></li>
              </ul> */}
                <div className="text-light-gray  text-center">
                  <small>Dashboard</small>
                </div>
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              href={`/sites/siteplan`}
            >
              <div
                className="nav-item dropdown text-center"
                activeclassname="activeClicked"
              >
                <i className={`icons ti ti-list-details fs-3 ${pathname == '/sites/siteplan' ? 'active-background' : ''}`}></i>
                {/* <img src="/assets/images/frame-3.png" alt="side_homeIcon" /> */}
                <div className="text-light-gray  text-center">
                  <small>Plan</small>
                </div>

                {/* <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href={`/sites/siteplan`}>Site plan</Link></li>
              </ul> */}
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              href={`/sites/attendence`}
            >
              <div
                className="nav-item dropdown text-center"
                activeclassname="activeClicked"
              >
                <i className={`icons ti ti-calendar fs-3 ${pathname == '/sites/attendence' ? 'active-background' : ''}`}></i>
                {/* <img src="/assets/images/frame-4.png" alt="side_homeIcon" /> */}
                <div className="text-light-gray text-center">
                  <small>Attendence</small>
                </div>

                {/* {/ <i className="bi bi-cash-stack" color='white' width="100"></i> /} */}
                {/* <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href={`/sites/attendence`}>Attendence</Link></li>

              </ul> */}
              </div>
            </Link>
            <Link
              className="text-decoration-none text-white"
              href={`/sites/material/indent`}
            >
              <div className="nav-item dropdown text-center">
                <i className={`icons ti ti-building-warehouse fs-3 ${pathname == '/sites/material/inventory' ? 'active-background' : ''}`}></i>
                <div className="text-light-gray  text-center">
                  <small>Indent</small>
                </div>
              </div>
            </Link>
            {/* <div className="nav-item dropdown text-center" >
              <img src="/assets/images/team.png" alt="side_homeIcon" />
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/sites/team">Team</Link></li>

              </ul>
            </div> */}
            <Link
              className="text-decoration-none text-white"
              href={`/sites/site-setting`}
            >
              <div className="nav-item dropdown text-center">
                <i className={`icons ti ti-settings-cog fs-3 ${pathname == '/sites/site-setting' ? 'active-background' : ''}`}></i>
                {/* <img src="/assets/images/setting-icon.png" alt="side_homeIcon" /> */}
                <div className="text-light-gray  text-center">
                  <small>Setting</small>
                </div>
                {/* <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href={`/sites/site-setting`} >Setting</Link></li>

              </ul> */}
              </div>
            </Link>
            {/* <div className="nav-item dropdown text-center">
              <img src="/assets/images/stock.png" alt="side_homeIcon" />
              <div className='text-white text-center'><small >Stock</small></div>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href={`/sites/stock/bom`} >Stock</Link></li>

              </ul>
            </div> */}
          </ul>

          <Link
            href="/organisationProfile"
            className="nav-item dropdown text-center text-end d-flex b-0"
          >
            <span className="cursor-pointer text-white" onClick={handleLogout}>
              <i className="icons bi bi-power w-100 mb-4 "></i>
            </span>
            {/* <img src="/assets/images/signout.png" alt="side_homeIcon"  className='cursor-pointer mb-4' width={30}/> */}
            {/* <li><Link className="text-decoration-none text-danger mt-5" href="/user/login"><span> <Image src="/assets/images/signout.png" width={30} height={30} className="border border-danger border-2 p-1 rounded-pill " />  Sign Out</span> </Link></li> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default SitesSidebar;
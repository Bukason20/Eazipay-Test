import React, { useEffect, useState } from 'react'
import styles from "./dashboardCont.module.css"
import { DashboardLogo, companyLogo, Avatar } from "../../../assets"
import { LuLayoutDashboard } from "react-icons/lu"
import { BiWalletAlt } from "react-icons/bi"
import { BsPersonPlus, BsFileEarmarkText, Bs0Circle } from "react-icons/bs"
import { RiCheckboxMultipleLine } from "react-icons/ri"
import { PiHandCoins, PiBookOpen } from "react-icons/pi"
import { FiPhone, FiSettings } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { GoHome } from "react-icons/go"
import { NavLink, Outlet } from 'react-router-dom'

function DashboardCont() {
  const links = [
    {
      name: "Home",
      icon: <LuLayoutDashboard />,
      link: "/dashboard"
    },
    {
      name: "Wallet",
      icon: <BiWalletAlt />,
      link: "/dashboard/wallet"
    },
    {
      name: "Employee Management",
      icon: <BsPersonPlus />,
      link: "/dashboard/employee"
    },
    {
      name: "Payroll",
      icon: <BsFileEarmarkText />,
      link: "/dashboard/payroll"
    },
    {
      name: "Compliance",
      icon: <RiCheckboxMultipleLine />,
      link: "/dashboard/compliance"
    },
    {
      name: "Quick Loan",
      icon: <PiHandCoins />,
      link: "/dashboard/loan"
    },
    {
      name: "Book Keeping",
      icon: <PiBookOpen />,
      link: "/dashboard/book-keeping"
    },
    {
      name: "Support",
      icon: <FiPhone />,
      link: "/dashboard/support"
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      link: "/dashboard/settings"
    },
  ]

  const mobileLinks = [
    {
      name: "Home",
      icon: <GoHome />,
      link: "/dashboard"
    },
    {
      name: "Employee",
      icon: <BsPersonPlus />,
      link: "/dashboard/employee"
    },
    {
      name: "Payroll",
      icon: <BsFileEarmarkText />,
      link: "/dashboard/payroll"
    },
    {
      name: "Loans",
      icon: <PiHandCoins />,
      link: "/dashboard/loan"
    },
    {
      name: "Settings",
      icon: <LuLayoutDashboard />,
      link: "/dashboard/settings"
    },
  ]

  const [activeLink, setActiveLink] = useState("")
  const handleActive = (link) => {
    setActiveLink(link)
  }
  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])
  return (
    <div className={styles.Cont}>
      <nav className={styles.sidebar}>
        <img src={DashboardLogo} alt="" />
        <ul className={styles.navlinks}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.link} onClick={() => handleActive(link.link)} className={`${activeLink == link.link ? styles.active : ""}`}>
                <div></div>
                {link.icon}
                <p>{link.name}</p>
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
      <nav className={styles.bottomBar}>
        <ul className={styles.mobileLinks}>
          {mobileLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.link} onClick={() => handleActive(link.link)} className={`${activeLink == link.link ? styles.active : ""}`}>
                {link.icon}
                <p>{link.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <nav className={styles.navbar}>
          <img src={companyLogo} alt="" />
          <div className={styles.notifyAvatar}>
            <div className={styles.notifications}>
              <p>7</p>
              <IoIosNotificationsOutline />
            </div>
            <img src={Avatar} alt="" />
          </div>
        </nav>
        <div>
          <Outlet />
        </div>

      </main>
    </div>
  )
}

export default DashboardCont
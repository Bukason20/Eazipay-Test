import React from 'react'
import styles from "./mobileHome.module.css"
import { MobilePic } from '../../../assets'
import { IoIosNotificationsOutline } from "react-icons/io"
import { BsPersonPlus, BsWifi } from "react-icons/bs"
import { BiSolidPhoneCall } from "react-icons/bi"
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia"
import { PiPaperPlaneTilt, PiHandCoins } from "react-icons/pi"
import { FaEye, FaEyeSlash, FaEnvelopeOpenText } from "react-icons/fa"
import { RiTimerFlashLine } from "react-icons/ri"

function MobileHome() {
  const actions = [
    { icon: <LiaMoneyBillWaveAltSolid />, name: "Pay Salaries", bgColor: "#F0F7EB", color: "#11453B" },
    { icon: <BsPersonPlus />, name: "Add Employee", bgColor: "#FFEDEC", color: "#EA4E4B" },
    { icon: <FaEnvelopeOpenText />, name: "Send Payslips", bgColor: "#F0EEFF", color: "#5542CF" },
    { icon: <LiaMoneyBillWaveAltSolid />, name: "Edit Salaries", bgColor: "#FFF2DB", color: "#F59E0B" },
    { icon: <PiHandCoins />, name: "Get a Loan", bgColor: "#E5F6FE", color: "#116487" },
    { icon: <PiPaperPlaneTilt />, name: "Make a Transfer", bgColor: "#E0F8EA", color: "#219653" },
    { icon: <BiSolidPhoneCall />, name: "Airtime", bgColor: "#32A7E21A", color: "#32A7E2" },
    { icon: <BsWifi />, name: "Data", bgColor: "#B548C61A", color: "#B548C6" },
    { icon: <RiTimerFlashLine />, name: "Electricity", bgColor: "#FF87001A", color: "#FF8700" },
  ]
  return (
    <div className={styles.Cont}>
      <div className={styles.idNotifications}>
        <div className={styles.identity}>
          <img src={MobilePic} alt="" />
          <p>Hello Wasiu</p>
        </div>
        <div className={styles.notifications}>
          <IoIosNotificationsOutline />
          <div></div>
        </div>
      </div>
      <div className={styles.balance}>
        {/* <div className={styles.amount}> */}
        <p>Wallet Balance</p>
        <div className={styles.amount}>
          <p>N12,560,078.00</p>
          <FaEyeSlash />
        </div>


        {/* </div> */}
        <button>Fund Wallet</button>

      </div>
      <div className={styles.quickStats}>
        <h3>QUICK STATS</h3>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p>Total Payroll</p>
            <p>N2,293,044,345.05</p>
          </div>
          <div className={styles.stat}>
            <p>Total Employee</p>
            <p>10,000</p>
          </div>
        </div>
      </div>
      <div className={styles.quickActions}>
        <h3>QUICK ACTIONS</h3>
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <div className={styles.action} key={index}>
              <div style={{ color: action.color, backgroundColor: action.bgColor }} className={styles.actionIcon}>
                {action.icon}
              </div>
              <p>{action.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileHome
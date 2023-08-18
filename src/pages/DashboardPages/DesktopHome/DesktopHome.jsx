import React, { useState } from 'react'
import styles from "./desktopHome.module.css"
import { Chart, CardPic1, CardPic2 } from "../../../assets"
import { BsPersonPlus } from "react-icons/bs"
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia"
import { PiPaperPlaneTilt, PiHandCoins } from "react-icons/pi"
import { MdOutlineCalendarMonth } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { ImEqualizer2 } from "react-icons/im"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Card from '../../../components/Card/Card'


function DesktopHome() {
  const [moneyVisible, setMoneyVisible] = useState(true)
  const actions = [
    { icon: <BsPersonPlus />, name: "Add Employee", color: "#EA4E4B" },
    { icon: <LiaMoneyBillWaveAltSolid />, name: "Pay Salaries", bgColor: "#F0F7EB", color: "#11453B" },
    { icon: <PiPaperPlaneTilt />, name: "Pay Compliances", bgColor: "#E0F8EA", color: "#219653" },
    { icon: <PiHandCoins />, name: "Quick Loan", bgColor: "#EDF5FF", color: "#2F80ED" },
  ]

  const employeeActivities = [
    {
      date: "Wednesday, November 09, 2022",
      activities: [
        {
          type: "PAYROLL",
          logo: CardPic1,
          employeeName: "Badmus Kemis",
          activity: "ACTIVITY",
          activityDetails: "Paid November 2022 salary",
          infoText: "EMPLOYEE",
          info: 52,
          time: "TIME",
          timeDigits: "16:15"

        },
        {
          type: "PAYROLL",
          logo: CardPic2,
          employeeName: "Badmus Kemis",
          activity: "ACTIVITY",
          activityDetails: "Paid November 2022 salary",
          infoText: "EMPLOYEE",
          info: 52,
          time: "TIME",
          timeDigits: "16:15"

        },
      ]

    }
  ]
  return (
    <div className={styles.Cont}>
      <h1>Welcome Abasiama</h1>
      <p>Pay and manage your employee in minutes</p>

      <div className={styles.companyInfo}>
        <div className={styles.walletActions}>
          <div className={styles.balance}>
            <div className={styles.amount}>
              <p>Wallet Balance</p>
              <div className={styles.moneyVisible}>
                <p>{moneyVisible ? "N12,560,078.00" : "*****"}</p>
                <div className={styles.visibleIcon} onClick={() => setMoneyVisible(!moneyVisible)}>
                  {moneyVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button>Fund Wallet</button>

          </div>
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
        <div className={styles.nextPayroll}>
          <h3>Next Payroll</h3>
          <div className={styles.date}>
            <div className={styles.day}>
              <MdOutlineCalendarMonth />
              <p>Friday</p>
            </div>
            <p>09/11/2022</p>
          </div>
          <div className={styles.totalEmployees}>
            <p>Total Employee</p>
            <p>64</p>
            <div className={styles.bars}>
              <div className={styles.bar}>
                <div></div>
                <p>Male</p>
                <p>32</p>
              </div>
              <div className={styles.bar}>
                <div></div>
                <p>Female</p>
                <p>32</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ----------------------------------------CASHFLOW CONTAINER------------------------------------------------- */}
      <div className={styles.cashflowCont}>
        <div className={styles.cashflows}>
          <div className={styles.inflow}>
            <p>Inflow</p>
            <p>N1,567,552</p>
          </div>
          <div className={styles.outflow}>
            <p>Outflow</p>
            <p>N1,567,552</p>
          </div>
          <div className={styles.selectFlow}>
            <p>Inflow/outflow</p>
          </div>
        </div>
        <img src={Chart} alt="" />
      </div>

      {/* ---------------------------------------------RECENT ACTIVITIES CONTAINER---------------------------------------------- */}
      <section className={styles.recentCont}>
        <h2>Recent Activities</h2>
        <div className={styles.searchFilter}>
          <div className={styles.search}>
            <input type="text" />
            <div className={styles.searchIcon}>
              <FiSearch />
            </div>
          </div>
          <div className={styles.filter}>
            <ImEqualizer2 />
            <p>Filter</p>
          </div>
        </div>

        <div className={styles.employeeActivities}>
          {employeeActivities.map((employeeActivity, index) => (
            <div key={index}>
              <p>{employeeActivity.date}</p>
              {employeeActivity.activities.map((activity, index) => (
                <div key={index} className={styles.activity}>
                  <Card>
                    <p>{activity.type}</p>
                    <div className={styles.activityInfo}>
                      <div>
                        <img src={activity.logo} alt="" />
                        <p>{activity.employeeName}</p>
                      </div>
                      <div>
                        <p>{activity.activity}</p>
                        <p>{activity.activityDetails}</p>
                      </div>
                      <div>
                        <p>{activity.infoText}</p>
                        <p>{activity.info}</p>
                      </div>
                      <div>
                        <p>{activity.time}</p>
                        <p>{activity.timeDigits}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

          ))}
        </div>

      </section>
    </div>
  )
}

export default DesktopHome
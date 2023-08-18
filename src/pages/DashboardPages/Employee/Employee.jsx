import React from 'react'
import styles from "./employee.module.css"
import { EmployeeImg } from "../../../assets"
import { FiSearch } from "react-icons/fi"
import { BiFilter } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineDashboard } from "react-icons/md"
import { BsCheck } from "react-icons/bs"

function Employee() {
  const employees = [
    { img: EmployeeImg, name: "Caleb Nwafor", department: "Accountant", gender: "Female", duration: "Monthly", salary: "N250,600.78" },
    { img: EmployeeImg, name: "Wasiu Tiamiyu", department: "Product Designer", gender: "Male", duration: "Monthly", salary: "N550,600.78" },
    { img: EmployeeImg, name: "Toyin Faleke", department: "Product Manager", gender: "Female", duration: "Monthly", salary: "N700,600.78" },
    { img: EmployeeImg, name: "Ada Okorie", department: "Customer Service", gender: "Female", duration: "Monthly", salary: "N150,600.78" },
    { img: EmployeeImg, name: "Bolade Ifedayo", department: "Data Analyst", gender: "Female", duration: "Monthly", salary: "N250,600.78" },
  ]

  return (
    <div className={styles.Cont}>
      <h2>Eazipay's Team</h2>
      <div className={styles.totalEmployeesCont}>
        <div className={styles.totalEmployees}>
          <p>Total Employee</p>
          <p>11264</p>
        </div>
      </div>

      <div className={styles.employeeBtns}>
        <button className={styles.active}>All Employee</button>
        <button>Departments</button>
      </div>
      <div className={styles.searchCont}>
        <div className={styles.search}>
          <input type="text" placeholder='Search' />
          <div className={styles.searchIcon}>
            <FiSearch />
          </div>

        </div>
        <div className={styles.filter}>
          <BiFilter />
        </div>
      </div>

      <div className={styles.employees}>
        <section className={styles.actions}>
          <div className={styles.actionIcons}>
            <div className={styles.icon}><GiHamburgerMenu /> </div>
            <div className={styles.icon}><MdOutlineDashboard /> </div>
            <p>Archived</p>
          </div>
          <div className={styles.select}>
            <input type="checkbox" />
            <p>Select All</p>
          </div>
        </section>
        {employees.map((employee, index) => (
          <div key={index} className={styles.employee}>
            <img src={employee.img} alt="" />
            <div className={styles.employeeInfo}>
              <div className={styles.employee}>
                <p>{employee.name}</p>
                <p>{employee.department}</p>
                <p>{employee.gender} | {employee.duration}</p>
              </div>
              <p>{employee.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Employee
import React from 'react'
import styles from "./settings.module.css"
import Card from '../../../components/Card/Card'
import { EditLogo } from '../../../assets'

function Setting() {
  return (
    <div className={styles.Cont}>
      <div className={styles.businessProfile}>
        <Card>
          <p>BUSINESS PROFILE</p>
        </Card>

      </div>
      <div className={styles.Company}>
        <Card>
          <div className={styles.companyCont}>
            <p className={styles.active}>Company</p>
            <p>CEO/Founder</p>
            <p>Company Director</p>
            <p>Account Information</p>
            <p>Branch/Department</p>
            <p>KYC</p>
          </div>

        </Card>
      </div>
      <div className={styles.companyProfile}>
        <Card>
          <h2>Edit Company Information</h2>
          <form action="">
            <div className={styles.editLogo}>
              <img src={EditLogo} alt="" />
              <div className={styles.upload}>
                <button type="button">Change Logo</button>
              </div>
            </div>
            <div className={styles.inputGrp}>
              <label>Company Name</label>
              <input type="text" placeholder='Juyonna Travels' />
            </div>
            <div className={styles.inputGrp}>
              <p>Is your Company Registered?</p>
              <div className={styles.registerBtns}>
                <button type="button" className={styles.active}>Yes</button>
                <button type="button">No</button>
              </div>
              <div className={styles.upload}>
                <button type="button">Upload CAC Doc.</button>
                <p>Jpeg and Png Only(2mb max)</p>
              </div>
            </div>
            <div className={styles.inputGrp}>
              <label>Office Address</label>
              <input type="text" placeholder="17, Simbiat Abiola Way, Ikeja" />
              <div className={styles.upload}>
                <button type="button">Upload Proof of Address</button>
                <p>e.g Nepa bill, etc</p>
              </div>
            </div>
            <div className={styles.inputGrp}>
              <label>Company Size</label>
              <input type="text" placeholder='1oo and above' />
            </div>
            <div className={styles.inputGrp}>
              <label>Pension Code</label>
              <input type="text" placeholder='ADDFER4546GDGG76' />
            </div>
            <div className={styles.inputGrp}>
              <label>PAYE State</label>
              <input type="text" placeholder='Lagos' />
            </div>
            <div className={styles.inputGrp}>
              <label>PAYE ID</label>
              <input type="text" placeholder='N-12565432' />
            </div>
            <div className={styles.inputGrp}>
              <label>NHF Code</label>
              <input type="text" placeholder='100667ZUHEG4' />
            </div>
            <div className={styles.inputGrp}>
              <label>Website</label>
              <input type="text" placeholder='www.customerwebsite.com' />
            </div>
            <div className={styles.inputGrp}>
              <label>Industry</label>
              <input type="text" placeholder='Travel & Tourism' />
            </div>
            <div className={styles.formBtns}>
              <button type='button'>Cancel</button>
              <button type='button' className={styles.active}>Save</button>
            </div>
          </form>

        </Card>

      </div>

    </div>
  )
}

export default Setting
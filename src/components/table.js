import React, { Suspense } from 'react';
import './table.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Tables() {

  const {t , i18n} = useTranslation()

  function handleclick(lang){
    i18n.changeLanguage(lang);
  }

  return(

      <div className='rate_logo' >

        <div className = "header" >
          <div className = "logo" >
            <a href = "localhost:3000" ><img src="https://rate.am/am/armenian-dram-exchange-rates/images/logo.png" ></img></a>
          </div>
          <div className = "date_time" >
              <p>12 45 62 35</p>
              <div className = "language" >
                <button onClick = { () => handleclick("en") } >
                  <img src = "https://rate.am/en/armenian-dram-exchange-rates/images/lang1.png" ></img>
                </button>
                <button onClick = { () => handleclick("arm") } >
                  <img src = "https://rate.am/en/armenian-dram-exchange-rates/images/lang2.png" ></img>
                </button>
              </div>
          </div>
        </div>
        <table className = "menu-list" >
          <tr className = "list" >
            <td>{t('banks_manu.1')}</td>
            <td>{t('banks_manu.2')}</td>
            <td>{t('banks_manu.3')}</td>
            <td>{t('banks_manu.4')}</td>
            <td>{t('banks_manu.5')}</td>
            <td>{t('banks_manu.6')}</td>
          </tr>
        </table>
        <table className = "rate_type" >
          <tr>
            <th colSpan = "3" >{t('types.1')}</th>
            <th colSpan = "2">{t('types.2')}</th>
          </tr>
          <tr>
            <td><input type = "radio" ></input>{t('change_type.rad1')}</td>
            <td><input type = "radio" ></input>{t('change_type.rad2')}</td>
            <td><input type = "radio" ></input>{t('change_type.rad3')}</td>
            <td className = "padd" ><input type = "radio" ></input>{t('change_type.rad4')}</td>
            <td className = "padd" ><input type = "radio" ></input>{t('change_type.rad5')}</td>
          </tr>
        </table>
        <div className = "table_bank" >
          <table>
              <tr className = "table_manu">
                <td rowSpan = "2" > </td>
                <td rowSpan = "2" colSpan = "2" >{t('table_manu.td1')}</td>
                <td rowSpan = "2" >{t('table_manu.td2')}</td>
                <td rowSpan = "2" >{t('table_manu.td3')}</td>
                <td colSpan = "2" >
                  <img src = "https://rate.am/images/currency/icon/USD.gif" ></img>
                    USD         
                </td>
                <td colSpan = "2" >
                  <img src = "https://rate.am/images/currency/icon/EUR.gif" ></img>
                    EUR
                </td>
                <td colSpan = "2" >
                  <img src = "https://rate.am/images/currency/icon/RUR.gif" ></img>
                    RUR
                </td>
                <td colSpan = "2" >
                  <img src = "https://rate.am/images/currency/icon/GBP.gif" ></img>
                    GBP
                </td>
              </tr>
              <tr>
                <td>{t('table_manu.td4')}</td>
                <td>{t('table_manu.td5')}</td>
                <td>{t('table_manu.td4')}</td>
                <td>{t('table_manu.td5')}</td>
                <td>{t('table_manu.td4')}</td>
                <td>{t('table_manu.td5')}</td>
                <td>{t('table_manu.td4')}</td>
                <td>{t('table_manu.td5')}</td>
              </tr>
              <tr className = "bankname" >
                <td>1.</td>
                <td className = "bank" >
                  <img src = "https://rate.am/images/organization/logo/12.gif" ></img>
                  {t("banks_names.hsbc")}
                </td>
                <td className = "star" >
                  <img src = "https://rate.am/am/armenian-dram-exchange-rates/images/s.png" ></img>
                </td>
                <td>9</td>
                <td>date</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = "bankname" >
                <td>2.</td>
                <td className = "bank" >
                  <img src = "https://rate.am/images/organization/logo/247e6cb5ede645579a2a6dba26dc6200.jpg" ></img>
                  {t("banks_names.converse")}
                </td>
                <td className = "star" >
                  <img src = "https://rate.am/am/armenian-dram-exchange-rates/images/s.png" ></img>
                </td>
                <td>36</td>
                <td>date</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = "branch" >
                  <td colSpan = "13" >
                    <a href = "https://rate.am/am/search/by-map" >
                      {t("branch.1")}
                    </a>
                  </td>
              </tr>
              <tr className = "min_max" >
                <td colSpan = "5" >Minimum</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = "min_max" >
                <td colSpan = "5" >Maximum</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = "min_max" >
                <td colSpan = "5" >Average</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = "min_max" >
                <td colSpan = "5" >Fluctuation</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </table>
        </div>

      </div>
    )
   
}
export default Tables
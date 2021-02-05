import React from 'react';
import './calc_r.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';



function Calc_r (){

    return ( 
      <div className = "calc_r" >
        <table>
            <tr></tr>
            <tr className = "calc_body" >
                <td>
                    <table>
                        <tr>
                            <td>
                                <img src = "https://rate.am/am/armenian-dram-exchange-rates/images/organization/logo/2.gif" ></img>
                            </td>
                            <td>
                                <select>
                                    <option>Converse Bank</option>
                                    <option>HSBC Bank</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <select>
                                    <option>Non Cash</option>
                                    <option>Cash</option>
                                    <option>Card</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>I Have</th>
                            <th> </th>
                            <th>I Want</th>
                        </tr>
                        <tr>
                            <td>
                                <select>
                                    <option>EUR</option>
                                    <option>RUR</option>
                                    <option>USD</option>
                                    <option>GBD</option>
                                </select>
                            </td>
                            <td>
                                <img src = "https://rate.am/images/clcrf.png" ></img>
                            </td>
                            <td>
                                <select>
                                    <option>EUR</option>
                                    <option>RUR</option>
                                    <option>USD</option>
                                    <option>GBD</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type = "number" ></input>
                            </td>
                            <td>
                                <input type = "number" ></input>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <tr>dgfzdhfxb fhbx</tr>
                    <tr>
                        <td>
                            <img src = "https://rate.am/en/armenian-dram-exchange-rates/images/organization/logo/17.gif" ></img>
                            Մելլաթ բանկ
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = "https://rate.am/en/armenian-dram-exchange-rates/images/organization/logo/7d9ba737c27842de87bc5abe9e901525.png" ></img>
                            Էվոկաբանկ
                        </td>
                    </tr>
                </td>
            </tr>
        </table>
        
  
      </div>
  
    )
  
  }
  
  export default Calc_r;
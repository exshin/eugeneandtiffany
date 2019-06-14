import React from 'react';
import { Button, Table } from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';

import $ from 'jquery'

class EmailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvps: []
    };
  }

  componentDidMount() {
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default EmailPage

/*

 <br>
 <table width="640" align="center" class="gmail-container gmail-m_2003889379589030866float-center" style="font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 1px; text-align: center; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; border-collapse: collapse; border-spacing: 0px; float: none; margin: 0px auto; padding: 0px; vertical-align: top; width: 600px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <td dir="auto" style="padding: 0px;">
 <table class="gmail-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: transparent; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px; margin: 0px;">
 <tbody>
 <tr valign="top" style="padding: 0px; vertical-align: top;">
 <th dir="auto" class="gmail-small-12 gmail-m_2003889379589030866large-12 gmail-m_2003889379589030866columns gmail-m_2003889379589030866first gmail-m_2003889379589030866last" valign="top" style="margin: 0px auto; padding: 0px; width: 564px;">
 <table style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <th dir="auto" align="left" style="padding: 0px; background-color: transparent; color: rgb(85, 85, 85); font-family: helvetica, arial, verdana, sans-serif; font-size: 17px; font-weight: normal; line-height: 1.5; margin: 0px;">
 <table class="gmail-spacer" style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <td height="<span>20px</span>">&nbsp;</td>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 <table class="gmail-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: rgb(132, 129, 124); background-image: url(&quot;https://lh3.googleusercontent.com/8b0wCDKivBM9q3DHMOLn7goQoG4f-ChBsxXtjL_IRTkJX797FNlS31cem6jaHIsPvhZUg5r1NwHAVx9VHJhWU2G_bgcQWZLhAv-aAZmIHRWYxyD9GbRw5xvT0UwhVe_bvjtQNxS6Zv8=w2400&quot;); background-position: 50% 0px; background-size: cover; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px; margin: 0px;">
 <tbody>
 <tr valign="top" style="padding: 0px; vertical-align: top;">
 <th dir="auto" class="gmail-small-12 gmail-m_2003889379589030866large-12 gmail-m_2003889379589030866columns gmail-m_2003889379589030866first gmail-m_2003889379589030866last" valign="top" style="margin: 0px auto; padding: 15px 15px 20px; width: 564px;">
 <table style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 612.222px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <th dir="auto" align="left" style="padding: 0px; background-color: transparent; color: rgb(85, 85, 85); font-family: helvetica, arial, verdana, sans-serif; font-size: 17px; font-weight: normal; line-height: 1.5; margin: 0px;">
 <table bgcolor="transparent" width="100%" dir="auto" style="background-color: transparent; border-spacing: 0px; border-collapse: collapse; padding: 0px; vertical-align: top; width: 612.222px;">
 <tbody>
 <tr>
 <td width="100%" height="5" style="font-size: 1px; line-height: 5px; height: 5px;">&nbsp;</td>
 </tr>
 <tr>
 <td dir="auto" style="padding: 0px 8px;">
 <div class="gmail-dscr" dir="auto" style="margin: 0px; font-family: helvetica, arial, verdana, sans-serif; font-size: 14px; line-height: 1.5;">
 <div>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>.&nbsp;
 <br>
 <div>&nbsp;</div>
 </div>
 </div>
 </td>
 </tr>
 <tr>
 <td height="10" style="font-size: 1px; height: 10px;"></td>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 <table class="gmail-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: transparent; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px; margin: 0px;">
 <tbody>
 <tr valign="top" style="padding: 0px; vertical-align: top;">
 <th dir="auto" class="gmail-small-12 gmail-m_2003889379589030866large-12 gmail-m_2003889379589030866columns gmail-m_2003889379589030866first gmail-m_2003889379589030866last" valign="top" style="margin: 0px auto; padding: 15px 6px; width: 564px;">
 <table style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 630px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <th dir="auto" align="left" style="padding: 0px; background-color: transparent; color: rgb(85, 85, 85); font-family: helvetica, arial, verdana, sans-serif; font-size: 17px; font-weight: normal; line-height: 1.5; margin: 0px;">
 <table bgcolor="transparent" width="100%" dir="auto" style="background-color: transparent; border-spacing: 0px; border-collapse: collapse; padding: 0px; vertical-align: top; width: 630px;">
 <tbody>
 <tr>
 <td width="100%" style="padding: 0px; text-align: center;">
 <img alt="" border="0" width="629" height="782" src="https://lh3.googleusercontent.com/tdp5tNeHsPF5BMpXunRSR2Kln_BHVNl6MoUE5y6DIs4nJnZ8sPE3yY2SBMGKmAmYgZjIK0LE4l-x1AmhE8CJhVk-tiRUR-0DE5C5UjGJ79A_SwwLADnlzA4ZgR6X_wikmGF_R7pdY6o=w2400" class="gmail-small-12 gmail-m_2003889379589030866img634x205" style="vertical-align: top; display: inline-block; border: none; outline: 0px; float: none; clear: both; width: 629px; margin: 0px;">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
 </td>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 <table class="gmail-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: transparent; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px; margin: 0px;">
 <tbody>
 <tr valign="top" style="padding: 0px; vertical-align: top;">
 <th dir="auto" class="gmail-small-12 gmail-m_2003889379589030866large-12 gmail-m_2003889379589030866columns gmail-m_2003889379589030866first gmail-m_2003889379589030866last" valign="top" style="margin: 0px auto; padding: 25px 7px 45px; width: 564px;">
 <table style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 627.778px;">
 <tbody>
 <tr style="padding: 0px; vertical-align: top;">
 <th dir="auto" align="left" style="padding: 0px; background-color: transparent; color: rgb(85, 85, 85); font-family: helvetica, arial, verdana, sans-serif; font-size: 17px; font-weight: normal; line-height: 1.5; margin: 0px;">
 <table bgcolor="transparent" width="100%" dir="auto" style="background-color: transparent; border-spacing: 0px; border-collapse: collapse; padding: 0px; vertical-align: top; width: 627.778px;">
 <tbody>
 <tr>
 <td width="100%" height="5" style="font-size: 1px; line-height: 5px; height: 5px;">&nbsp;</td>
 </tr>
 <tr>
 <td dir="auto" style="padding: 0px 8px;">
 <div class="gmail-dscr" dir="auto" style="color: rgb(255, 255, 255); margin: 0px; font-family: helvetica, arial, verdana, sans-serif; font-size: 14px; line-height: 1.5;">
 <div style="text-align: center;">
 <strong>
 <span style="font-size: 15px; color: rgb(55, 87, 119);">&nbsp;&nbsp;
 <span style="font-family: lora, georgia, &quot;times new roman&quot;, serif;">Please RSVP by July 11th at&nbsp;
 <a dir="auto" href="https://publicate.it/c/54923884?alt_obj=hre&amp;method=email&amp;url=http%3A%2F%2Fwww.tiffanyandeugene.com" rel="noopener" target="_blank" style="color: rgb(115, 196, 201); text-decoration-line: none;">tiffanyandeugene.com</a>&nbsp;
 </span>
 </span>
 </strong>
 </div>
 </div>
 </td>
 </tr>
 <tr>
 <td height="10" style="font-size: 1px; height: 10px;"></td>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 <table class="gmail-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: transparent; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px; margin: 0px;">
 <tbody>
 <tr valign="top" style="padding: 0px; vertical-align: top;">
 <th dir="auto" class="gmail-small-12 gmail-m_2003889379589030866large-12 gmail-m_2003889379589030866columns gmail-m_2003889379589030866first gmail-m_2003889379589030866last" valign="top" style="margin: 0px auto; padding: 0px; width: 640px;">
 <table style="border-collapse: collapse; border-spacing: 0px; padding: 0px; vertical-align: top; width: 642.222px;">
 <tbody></tbody>
 </table>
 </th>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>

 */


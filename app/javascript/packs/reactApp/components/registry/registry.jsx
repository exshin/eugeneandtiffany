import React from 'react';
import { Button, Panel, Glyphicon } from 'react-bootstrap'

class RegistryPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    let registryLink1 = "https://www.williams-sonoma.com/registry/nnvjvc7799/registry-list.html";
    let registryLink2 = "https://www.amazon.com/wedding/share/tiffanyandeugene";

    return(
      <div className="registry-page registryBG" style={{height: "100vh"}}>
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Registry</h1>
        <hr/>

        <br/>

        <div className="registry" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "50%", background: "floralwhite", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "14px", fontStyle: "italic"}}>
              <br/>
              <div>Regarding gifts</div>
              <br/>
              <div>
                We have been fortunate enough to have many of the essential home items that a newly married couple may need and
                we are thankful for your gift of love and support. However, should you wish to honor us with a gift, a contribution
                to our First Home Fund will help us set down roots for our future family.
              </div>
              <br/>
              <div className="div-center" style={{width: "50%", marginLeft: "25%"}}>
                <div style={{float: "left", color: "cornflowerblue", marginRight: "15px"}}>
                  VENMO
                </div>
                <div>
                  @TiffanyKWu
                </div>
              </div>
              <div className="div-center" style={{width: "50%", marginLeft: "25%"}}>
                <div style={{float: "left", color: "cornflowerblue", marginRight: "15px"}}>
                  ZELLE
                </div>
                <div>
                  tiffany.k.wu@gmail.com
                </div>
              </div>
              <div className="div-center" style={{width: "50%", marginLeft: "25%"}}>
                <div style={{float: "left", color: "cornflowerblue", marginRight: "15px"}}>
                  CHECK
                </div>
                <div>
                  Tiffany Wu
                </div>
              </div>
              <br/>
              <br/>
              <div>
                If you prefer tangible gifts, we also have a small registry
              </div>
              <br/>
              <div>
                <a href={registryLink1} target="/">Williams Sonoma</a>
              </div>
              <div>
                <a href={registryLink2} target="/">Amazon</a>
              </div>
              <br/>
              <br/>
            </Panel.Body>
          </Panel>
        </div>

      </div>
    )
  }
}

export default RegistryPage

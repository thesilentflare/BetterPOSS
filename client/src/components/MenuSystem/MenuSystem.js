// import React, { Component } from "react";
// import "./MenuSystem.scss";

// class MenuSystem extends Component {
  
//   render() {
//     return (
//       <div className="container__menu">
//         Menu
        
//       </div>
//     );
//   }
// }

// export default MenuSystem;

import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function MenuSystem() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Burgers
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Drinks
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Sides
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
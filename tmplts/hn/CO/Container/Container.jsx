import React from 'react';

import { Divider } from "react-email-components-typography";


import Block from '../../../../Block/Block.jsx';


import Body from '../Content/Body.jsx';


import { styles } from './styles';

const Container = () => (
  <Block styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templateBody" {/*style={styles.templateBody}*/}>
          <Divider>
            
            <Body />

          </Divider>
        </td>
      </tr>
    </tbody>

  </Block>
);

export default Container;

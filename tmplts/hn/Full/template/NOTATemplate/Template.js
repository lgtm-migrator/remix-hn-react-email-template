import React from 'react';

import { Divider } from "atherdon-react-markdown-component-body";
import { Logo } from "atherdon-react-markdown-component-content";

// import BodyPrototype from '../../../Body/BodyPrototype';

import Container from '../../../CO/Container/Container';

// import Header from '../';

import Footer from '../Footer';

import config from './config';

import { styles } from './styles';

const NOTATemplate = ({ header }) => (
  <Container styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templatePreheader" 
        style={styles.templatePreheader}>
          <Logo />
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateHeader" style={styles.templateHeader} 
        data-testid="bodyPropsTest">
          {header}
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
            {/*
            <BodyPrototype
              config={config}
            />
            */}
          </Divider>
          <Logo />
        </td>
      </tr>
    </tbody>
    {/* <Footer /> */}
  </Container>
);

export default NOTATemplate;

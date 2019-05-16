import React from 'react';
import {
  Col, Container, Row, Card, CardBody,
} from 'reactstrap';

const logoSalesforce = `${process.env.PUBLIC_URL}/img/salesforce.png`;
const logoServiceNow = `${process.env.PUBLIC_URL}/img/servicenow.png`;
const logoAtlassian = `${process.env.PUBLIC_URL}/img/atlassian.png`;

const logoWhitehat = `${process.env.PUBLIC_URL}/img/whitehat.png`;
const logoVeracode = `${process.env.PUBLIC_URL}/img/veracode.png`;
const logoAcunetix = `${process.env.PUBLIC_URL}/img/acunetix.png`;
const logoMicroFocus = `${process.env.PUBLIC_URL}/img/microfocus.png`;
const logoTrustwave = `${process.env.PUBLIC_URL}/img/trustwave.png`;
const logoQualys = `${process.env.PUBLIC_URL}/img/qualys.png`;
const logoRapid7 = `${process.env.PUBLIC_URL}/img/rapid7.png`;
const logoPortSwigger = `${process.env.PUBLIC_URL}/img/portswigger.png`;
const logoNstalker = `${process.env.PUBLIC_URL}/img/nstalker.png`;
const logoErpScan = `${process.env.PUBLIC_URL}/img/erpscan.png`;
const logoNsFocus = `${process.env.PUBLIC_URL}/img/nsfocus.png`;
const logoDataTheorem = `${process.env.PUBLIC_URL}/img/datatheorem.png`;
const logoOpenVas = `${process.env.PUBLIC_URL}/img/openvas.png`;
const logoNmap = `${process.env.PUBLIC_URL}/img/nmap.png`;
const logoTenable = `${process.env.PUBLIC_URL}/img/tenable.png`;

const logoSynopsys = `${process.env.PUBLIC_URL}/img/synopsys.png`;
const logoVirtualForge = `${process.env.PUBLIC_URL}/img/virtualforge.png`;
const logoCheckMarx = `${process.env.PUBLIC_URL}/img/checkmarx.png`;
const logoSiteLock = `${process.env.PUBLIC_URL}/img/sitelock.png`;
const logoBrakeMan = `${process.env.PUBLIC_URL}/img/brakeman.png`;
const logoSonarCube = `${process.env.PUBLIC_URL}/img/sonarcube.png`;

const logoContrast = `${process.env.PUBLIC_URL}/img/contrast.png`;

const logoSnyk = `${process.env.PUBLIC_URL}/img/snyk.png`;
const logoSonaType = `${process.env.PUBLIC_URL}/img/sonatype.png`;
const logoWhiteSource = `${process.env.PUBLIC_URL}/img/whitesource.png`;

const logoPureSec = `${process.env.PUBLIC_URL}/img/puresec.png`;
const logoProtego = `${process.env.PUBLIC_URL}/img/protego.png`;

const logoJenkins = `${process.env.PUBLIC_URL}/img/jenkins.png`;
const logoBamboo = `${process.env.PUBLIC_URL}/img/bamboo.png`;
const logoTravisCi = `${process.env.PUBLIC_URL}/img/travisci.png`;
const logoCircleCi = `${process.env.PUBLIC_URL}/img/circleci.png`;
const logoTeamCity = `${process.env.PUBLIC_URL}/img/teamcity.png`;
const logoHarness = `${process.env.PUBLIC_URL}/img/harness.png`;

const logoEclipse = `${process.env.PUBLIC_URL}/img/eclipse.png`;
const logoVisualStudio = `${process.env.PUBLIC_URL}/img/visualstudio.png`;

const logoSlack = `${process.env.PUBLIC_URL}/img/slack.png`;
const logoOutlook = `${process.env.PUBLIC_URL}/img/outlook.png`;
const logoTeams = `${process.env.PUBLIC_URL}/img/teams.png`;
const logoWorkplace = `${process.env.PUBLIC_URL}/img/workplace.png`;
const logoChatter = `${process.env.PUBLIC_URL}/img/chatter.svg`;

const logoArcher = `${process.env.PUBLIC_URL}/img/archer.jpg`;

const logostyle = {
  left: 0,
  width: 100,
  lineHeight: '24px',
};

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Available Connections</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Platforms</h5>
            </div>
            <img style={logostyle} src={logoSalesforce} alt="" />&nbsp;
            <img style={logostyle} src={logoServiceNow} alt="" />&nbsp;
            <img style={logostyle} src={logoAtlassian} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Scanners</h5>
            </div>
            <img style={logostyle} src={logoWhitehat} alt="" />&nbsp;
            <img style={logostyle} src={logoVeracode} alt="" />&nbsp;
            <img style={logostyle} src={logoAcunetix} alt="" />&nbsp;
            <img style={logostyle} src={logoMicroFocus} alt="" />&nbsp;
            <img style={logostyle} src={logoTrustwave} alt="" />&nbsp;
            <img style={logostyle} src={logoQualys} alt="" />&nbsp;
            <img style={logostyle} src={logoRapid7} alt="" />&nbsp;
            <img style={logostyle} src={logoPortSwigger} alt="" />&nbsp;
            <img style={logostyle} src={logoNstalker} alt="" />&nbsp;
            <img style={logostyle} src={logoErpScan} alt="" />&nbsp;
            <img style={logostyle} src={logoNsFocus} alt="" />&nbsp;
            <img style={logostyle} src={logoDataTheorem} alt="" />&nbsp;
            <img style={logostyle} src={logoOpenVas} alt="" />&nbsp;
            <img style={logostyle} src={logoNmap} alt="" />&nbsp;
            <img style={logostyle} src={logoTenable} alt="" />&nbsp;

            <img style={logostyle} src={logoSynopsys} alt="" />&nbsp;
            <img style={logostyle} src={logoVirtualForge} alt="" />&nbsp;
            <img style={logostyle} src={logoCheckMarx} alt="" />&nbsp;
            <img style={logostyle} src={logoSiteLock} alt="" />&nbsp;
            <img style={logostyle} src={logoBrakeMan} alt="" />&nbsp;
            <img style={logostyle} src={logoSonarCube} alt="" />&nbsp;

            <img style={logostyle} src={logoContrast} alt="" />&nbsp;

            <img style={logostyle} src={logoSnyk} alt="" />&nbsp;
            <img style={logostyle} src={logoSonaType} alt="" />&nbsp;
            <img style={logostyle} src={logoWhiteSource} alt="" />&nbsp;

            <img style={logostyle} src={logoPureSec} alt="" />&nbsp;
            <img style={logostyle} src={logoProtego} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">CI/CD</h5>
            </div>
            <img style={logostyle} src={logoJenkins} alt="" />&nbsp;
            <img style={logostyle} src={logoBamboo} alt="" />&nbsp;
            <img style={logostyle} src={logoTravisCi} alt="" />&nbsp;
            <img style={logostyle} src={logoCircleCi} alt="" />&nbsp;
            <img style={logostyle} src={logoTeamCity} alt="" />&nbsp;
            <img style={logostyle} src={logoHarness} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Developer Tools</h5>
            </div>
            <img style={logostyle} src={logoEclipse} alt="" />&nbsp;
            <img style={logostyle} src={logoVisualStudio} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Communication</h5>
            </div>
            <img style={logostyle} src={logoSlack} alt="" />&nbsp;
            <img style={logostyle} src={logoOutlook} alt="" />&nbsp;
            <img style={logostyle} src={logoTeams} alt="" />&nbsp;
            <img style={logostyle} src={logoChatter} alt="" />&nbsp;
            <img style={logostyle} src={logoWorkplace} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">CMDB</h5>
            </div>
            <img style={logostyle} src={logoServiceNow} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">GRC</h5>
            </div>
            <img style={logostyle} src={logoArcher} alt="" />&nbsp;
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;

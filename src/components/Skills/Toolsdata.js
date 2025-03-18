import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiStreamlit,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiSqlite
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";  // Pour SQL Server

const toolsDataScienceAI = [
  { icon: SiStreamlit, name: "Streamlit" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: DiMsqlServer, name: "SQL Server" },
  { icon: SiSqlite, name: "SQLite" }
];

function Toolsdata() {
  return (
    <Row className="tech-stack-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-stack-wrapper">
        {/* Affichage des outils */}
        {toolsDataScienceAI.map(({ icon: Icon, name }, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <Icon size={50} />
            <p style={{ fontSize: "0.4em", marginTop: "5px", textAlign: "center", fontFamily: "Press Start 2P" }}>{name}</p>
          </Col>
        ))}
      </div>
    </Row>
  );
}

export default Toolsdata;

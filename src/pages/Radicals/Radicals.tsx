import React, { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GlobalHeader from "../../components/GlobalHeader";
import radicalsByStrokeCount from "../../data/radicalsByStrokeCount";

const Radicals = () => {
  const dataUri = useMemo(() => {
    return (
      "data:application/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(radicalsByStrokeCount, null, 2))
    );
  }, []);

  return (
    <>
      <GlobalHeader />
      <Container fluid>
        <Row>
          <a href={dataUri} download="radicalsByStrokeCount.json">
            <Button>Download data</Button>
          </a>
        </Row>
        {radicalsByStrokeCount.map((radicalsByStrokeCount) => (
          <div>
            <p>画{radicalsByStrokeCount.笔画数}</p>
            <ol>
              {radicalsByStrokeCount.首部列.map((首部) => (
                <li>
                  {首部.首部}: {首部.名称}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Radicals;

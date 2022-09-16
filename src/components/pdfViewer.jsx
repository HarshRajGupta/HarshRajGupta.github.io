import { memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdf({ url }) {
  return (
    <Container>
      <Wrap href={url} download={url.substring(1)}>
        <Document file={url}>
          <Page
            pageNumber={1}
            className="myPdf"
            renderInteractiveForms={false}
          />
        </Document>
      </Wrap>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
  justify-content: center;
  position: relative;
  @media (max-width: 540px) {
    height: calc(100vh - 56px);
  }
  width: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  .myPdf > canvas {
    width: 720px !important;
    @media (max-width: 720px) {
      width: 98vw !important;
    }
    height: auto !important;
  }
  position: relative;
`;

const Wrap = styled.a`
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default memo(Pdf);

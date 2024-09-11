import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../styles/CertificateDetail.css';

// Set the worker URL for PDF.js to load the worker script correctly
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CertificateDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfUrl, imgUrl } = location.state || {};

  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError('');
  };

  const onDocumentLoadError = (error) => {
    console.error('Failed to load PDF:', error);
    setError('Failed to load PDF. Please try again later.');
  };

  // If neither PDF nor images are available, show an error message
  if (!pdfUrl && (!imgUrl || !Array.isArray(imgUrl))) {
    return <div>PDF or image file not found.</div>;
  }

  const pdfPath = pdfUrl ? (pdfUrl.startsWith('http') ? pdfUrl : `${process.env.PUBLIC_URL}${pdfUrl}`) : null;

  const goToPreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));

  return (
    <div className="certificate-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="viewer-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : imgUrl && Array.isArray(imgUrl) && imgUrl.length > 0 ? (
          <div className="image-viewer">
            {imgUrl.map((url, index) => (
              <img key={index} src={url} alt={`Certificate ${index + 1}`} className="image-item" />
            ))}
          </div>
        ) : pdfUrl ? (
          <>
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              <Page pageNumber={currentPage} />
            </Document>
            {numPages > 1 && (
              <div className="page-controls">
                <button
                  className="page-button"
                  onClick={goToPreviousPage}
                  disabled={currentPage <= 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {numPages}
                </span>
                <button
                  className="page-button"
                  onClick={goToNextPage}
                  disabled={currentPage >= numPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CertificateDetail;

import { jsPDF } from "jspdf";

export default function DownloadPDF() {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Hello, this is your PDF content!", 10, 10);

    // Save the PDF with a filename
    doc.save("Research.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}

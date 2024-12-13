import { jsPDF } from "jspdf";

export default function DownloadPDF() {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Research Paper Title: Impact of AI on Healthcare", 10, 20);

    // Line break for spacing
    doc.setFontSize(12);
    doc.text("________________________________________", 10, 22);

    // Authors
    doc.setFont("helvetica", "normal");
    doc.text("Authors: Malou Santos, John Doe, Jane Smith", 10, 30);

    // DOI
    doc.setFontSize(12);
    doc.text("DOI: 10.1234/abcd.efgh5678", 10, 35);

    // Abstract title
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Abstract", 10, 45);

    // Abstract content
    doc.setFontSize(12);
    const abstractText = `This research paper explores the impact of artificial intelligence (AI) on the healthcare sector. It examines the various applications of AI, such as predictive analytics, disease diagnosis, and personalized medicine, and how these innovations are reshaping patient care and medical practices. The study highlights both the benefits and challenges of AI integration in healthcare, emphasizing ethical considerations, data security, and the role of healthcare professionals in managing AI technologies.`;
    doc.text(abstractText, 10, 50, { maxWidth: 180 });

    // Save the PDF with a filename
    doc.save("Research_Paper.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}

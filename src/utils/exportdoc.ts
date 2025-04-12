// import { Document, Packer, Paragraph } from 'docx';
// import { saveAs } from 'file-saver';

// export const exportHtmlToDocx = async (html: string) => {
//   const doc = new Document({
//     sections: [
//       {
//         children: [new Paragraph({ text: html.replace(/<[^>]*>?/gm, '') })],
//       },
//     ],
//   });

//   const blob = await Packer.toBlob(doc);
//   saveAs(blob, 'document.docx');
// };

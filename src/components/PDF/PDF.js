import React from "react";
import "./PDF.css";
import jsPDF from "jspdf";
// import "jquery";

var pdfData;
var pdfFileName;
var pdfHTML = pdfData
`<div>
    <h1>ZigRig Run Diagram</h1>
    <h2>T.Novell Diagram #1014</h2>
    <table>
        <tr>
            <th>Loads</th>
            <th>Connection\nType</th>
            <th>Current</th>
            <th>Leg 1</th>
            <th>Leg 2</th>
            <th>Leg 3</th>
        </tr>
        <tr>
            <td>Rooftop 20k #1</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>83.3A</td>
            <td>83.3A</td>
            <td>-----</td>
        </tr>
        <tr>
            <td>Rooftop 20k #2</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>83.3A</td>
            <td>-----</td>
            <td>83.3A</td>
        </tr>
        <tr>
            <td>Rooftop 20k #3</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>-----</td>
            <td>83.3A</td>
            <td>83.3A</td>
        </tr>
        <tr>
            <td>Rooftop 10k #1</td>
            <td>3 Phase</td>
            <td>83.3A</td>
            <td>41.65A</td>
            <td>41.65A</td>
            <td>-----</td>
        </tr>
        <tr>
            <th>Totals</th>
            <th>-----</th>
            <th>583.1A</th>
            <th>208.25A</th>
            <th>208.25A</th>
            <th>166.6A</th>
        </tr>
        
    </table>
</div>`
;

function HTMLtoPDF(){
    var pdf = new jsPDF('p', 'pt', 'letter');
    var source = pdfData || pdfHTML;
    // source = $('#HTMLtoPDF')[0];
    var specialElementHandlers = {
        '#bypassme': function(element, renderer){
            return true
        }
    }
    var margins = {
        top: 50,
        left: 60,
        width: 545
    };
    // --------------------IMAGE INSERT--------------------
    // function getBase64Image(img){
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);
    //     var dataURL = canvas.toDataURL("images/ZigRig.png");
    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // };
    // var img = new Image();
    // img.onload = function(){
    //     var dataURI = getBase64Image(img);
    //     return dataURI;
    // };
    // img.src = "./images/ZigRig.png";
    // pdf.addImage(img, 'png', 25, 50, 200, 200, 'zigrig');
    pdf.fromHTML(
          source // HTML string or DOM elem ref.
          , margins.left // x coord
          , margins.top // y coord
          , {
              'width': margins.width // max width of content on PDF
              , 'elementHandlers': specialElementHandlers
          },
          function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save(pdfFileName||'diagram.pdf');
          }
    )		
}

export const PDF = ({PDFrequest}) => {
    return (
        // button that yields pdf
        <button
        className="pdfButton"
        onClick={HTMLtoPDF}
        >Generate PDF</button>
    );
};


// react-pdf dependencies
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/core';
// import ReactPDF from '@react-pdf/node';
// -------REACT-PDF

// FUNCTION FOR CREATING THE PDF
// const renderNewPDF = () => {
//     // Create styles
//     const styles = StyleSheet.create({
//         page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//         },
//         section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//         }
//     });


//     // Create Document Component
//     const MyDocument = () => (
//         <Document>
//         <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//             <Text>Section #1</Text>
//             </View>
//             <View style={styles.section}>
//             <Text>Section #2</Text>
//             </View>
//         </Page>
//         </Document>
//     );

//     return <MyDocument />;
// };

// export const PDF = ({PDFrequest}) => {
//     return (
//         // button that yields pdf
//         <button
//         onClick={renderNewPDF}
//         >Generate PDF</button>
//     );
// };



// ----------------R&D-GRAVEYARD----------------
// ---------------------------------------------
// -------PDFKIT DEPENDENCIES
// import PDFDocument from "pdfkit";
// import fs from "fs";
// -------jsPDF
// import jsPDF from "jspdf";
// -------PDFkit functionality
// export const PDFkit = () => {
//     return (
        // button that yields pdf
        // <button
        // onClick={renderNewPDF}
//         >Generate PDF</button>
//     );
// };
// -------PDFKIT
// const renderNewPDF = () => {
//     const doc = new PDFDocument();
//     doc.pipe(fs.createWriteStream('newPDF.pdf'));
//     doc.fontSize(25).text("Hello, world!");
//     doc.end();
// }

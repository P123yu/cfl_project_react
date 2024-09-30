import React, { useState } from "react";
import * as XLSX from "xlsx";

function UploadFileFromExcel() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };
  return (
    <div>
      UploadFileFromExcel
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
    </div>
  );
}

export default UploadFileFromExcel;

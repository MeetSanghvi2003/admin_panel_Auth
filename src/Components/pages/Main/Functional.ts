export const handleSmallMenu = () => {
  const menu = document.querySelector(".dd-menu");
  menu?.classList.toggle("toggle");
};

export const handleMainMenu = () => {
  const menu = document.querySelector(".sidebar"),
    list = document.querySelector(".listIcon");
  list?.classList.toggle("toggle");
  menu?.classList.toggle("toggle");
};

export const handleFloatEvent = () => {
  const formWrapper = document.querySelector(".bg-zindex"),
    form = document.querySelector(".float-form-wrap");
  if (form?.classList.contains("float-down")) {
    setTimeout(() => {
      formWrapper?.classList.remove("float-down");
    }, 200);
    form?.classList.remove("float-down");
  } else {
    formWrapper?.classList.add("float-down");
    setTimeout(() => {
      form?.classList.add("float-down");
    }, 100);
  }
};

export const downloadFile = () => {
  let csvFileData = [
    ["Singing", "Type 1", "22-10-2023"],
    ["Singing", "Type 1", "23-10-2023"],
  ];

  //define the heading for each row of the data
  let csv = "Event,CodeType,OnSaleDate\n";

  //merge the data with CSV
  csvFileData.forEach((row) => {
    csv += row.join(",");
    csv += "\n";
  });

  const hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "export.csv";
  hiddenElement.click();
};

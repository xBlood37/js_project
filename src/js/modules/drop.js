const drop = () => {
  // fucking slave are not allowed to connections
  const fileInputs = document.querySelectorAll('[name="upload"]');

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragleave", "dragover", "drop"].forEach((e) => {
    fileInputs.forEach((input) => {
      input.addEventListener(e, preventDefaults, false);
    });
  });

  ["dragenter", "dragover"].forEach((e) => {
    fileInputs.forEach((input) => {
      input.addEventListener(e, hightLight(input), false);
    });
  });

  function hightLight(item) {
    item.closest(".file_upload").style.border = "10px solid yellow";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0. .7)";
  }

  ["dragleave", "drop"].forEach((e) => {
    fileInputs.forEach((input) => {
      input.addEventListener(e, unhightLight(input), false);
    });
  });

  function unhightLight(item) {
    item.closest(".file_upload").style.border = "none";
    item.closest(".file_upload").style.backgroundColor = "#ededed";
  }
};
export default drop;

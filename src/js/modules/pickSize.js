const pickSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  const blockShow = (block, tag) => {
    block.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
      p.style.display = `${tag}`;
    });
  };

  const blockEvent = (block, fn, event) => {
    block.addEventListener(event, () => {
      fn(block);
    });
  };

  const showImg = (block) => {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    blockShow(block, "none");
  };

  const closeImg = (block) => {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    blockShow(block, "block");
  };

  blocks.forEach((block) => {
    blockEvent(block, showImg, "mouseover");
    blockEvent(block, closeImg, "mouseout");
  });
};

export default pickSize;

//templates файл больше не нужен

import { row, col, css } from "./utils";
function title(block) {
  const { tag = "h1", styles } = block.options;
  // const tag = block.options.tag ?? "h1";
  // const styles = block.options.styles;
  // return `
  //     <div class="row">
  //         <div class="col-sm">
  //           <h1>${block.value}</h1>
  //         </div>
  //       </div>
  //   `;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(block.options.styles));
}

function text(block) {
  // const { tag = "h1", styles } = block.options;
  // return `
  //      <div class="row">
  //         <div class="col-sm">
  //           <p>
  //             ${block.value}
  //           </p>
  //         </div>
  //       </div>
  //     `;
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function columns(block) {
  // const { tag = "h1", styles } = block.options;
  // let html = "";
  // block.value.forEach((item) => {
  //   html += `
  //   <div class="col-sm">
  //     ${item}
  //   </div>`;
  // });
  // const html = block.value.map(
  //   (item) => `<div class="col-sm">
  //     ${item}
  //   </div>`
  // );
  // return `<div class="row">
  //   ${html.join("")}
  // </div>`;
  //  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  // return `<div class="row">
  //   ${html.join("")}
  // </div>`;
  const html = block.value.map(col).join("");
  return row(html, css(block.options.styles));
}

function image(block) {
  const { imageStyles: is, alt, styles } = block.options;
  // const { tag = "h1", styles } = block.options;
  return row(
    `<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`,
    css(styles)
  );
}

export const templates = {
  // title: title,
  // text: text,
  // image: image,
  // columns: columns,
  title,
  text,
  image,
  columns,
};

import { model } from "./model";
import { Site } from "./classes/site";
// import { title, text, columns, image } from "./templates";
// import { templates } from "./templates";
import "./styles/main.css";
import { Sidebar } from "./classes/sidebar";
// const model = [
//   { type: "title", value: "Hello World from JS" },
//   { type: "text", value: "here we go with some text" },
//   {
//     type: "columns",
//     value: ["11111111111", "22222222222", "33333333333"],
//   },
//   { type: "image", value: "./assets/image.png" },
// ];

const site = new Site("#site");

site.render(model);

const sidebar = new Sidebar("#panel");
// const $site = document.querySelector("#site"); //DOM елемент

// const key = "title";
// console.log(templates[key]);
// console.log(templates["title"]({ value: "text" }));

// model.forEach((block) => {
// console.log(block);
// let html = "";
//   console.log(block);
// if (block.type === "title") {
//   html = title(block);
// } else if (block.type === "text") {
//   html = text(block);
// } else if (block.type === "columns") {
//   html = columns(block);
//   //    <div class="row">
//   //       <div class="col-sm">
//   //         {block.value}
//   //       </div>
//   //       <div class="col-sm">
//   //         {block.value}
//   //       </div>
//   //       <div class="col-sm">
//   //         {block.value}
//   //       </div>
//   //     </div>
//   //   `;
// } else if (block.type === "image") {
//   html = image(block);
// }
// const toHTML = templates[block.type];
// if (toHTML) {
// console.log(block.toHTML());
// if (false) {
// $site.insertAdjacentHTML("beforeend", toHTML(block));
// $site.insertAdjacentHTML("beforeend", block.toHTML());
//   site.insertAdjacentHTML("beforeend", block.toHTML());
// }
// });

// function title(block) {
//   return `
//       <div class="row">
//           <div class="col-sm">
//             <h1>${block.value}</h1>
//           </div>
//         </div>
//     `;
// }

// function text(block) {
//   return `
//        <div class="row">
//           <div class="col-sm">
//             <p>
//               ${block.value}
//             </p>
//           </div>
//         </div>
//       `;
// }

// function columns(block) {
//   // let html = "";
//   // block.value.forEach((item) => {
//   //   html += `
//   //   <div class="col-sm">
//   //     ${item}
//   //   </div>`;
//   // });
//   const html = block.value.map(
//     (item) => `<div class="col-sm">
//       ${item}
//     </div>`
//   );
//   return `<div class="row">
//     ${html.join("")}
//   </div>`;
// }

// function image(block) {
//   return `
//   <div class="row">
//   <img src="${block.value}" />
//   </div>
//   `;
// }

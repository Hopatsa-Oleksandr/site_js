import image from "./assets/image.png";
// import { Block } from "./classes/blocks";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = `Крутые видео и уроки по JavaScript тут`;

export const model = [
  new TitleBlock("Констуктор сайтов на чистом JavaScript", {
    tag: "h2",
    //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;text-align: center; padding: 1.5rem;`,
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  // {
  //   type: "title",
  //   value: "Констуктор сайтов на чистом JavaScript",
  //   options: {
  //     tag: "h2",
  //     //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;text-align: center; padding: 1.5rem;`,
  //     styles: {
  //       background: "linear-gradient(to right, #ff0099, #493240)",
  //       color: "#fff",
  //       "text-align": "center",
  //       padding: "1.5rem",
  //     },
  //   },
  // },
  new ImageBlock(image, {
    styles: {
      padding: "1rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Это картинка",
  }),
  // {
  //   type: "image",
  //   value: image,
  //   options: {
  //     styles: {
  //       padding: "1rem 0",
  //       display: "flex",
  //       "justify-content": "center",
  //     },
  //     imageStyles: {
  //       width: "500px",
  //       height: "auto",
  //     },
  //     alt: "Это картинка",
  //   },
  // },
  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
      "JavaScript - это просто, интиресно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  // {
  //   type: "columns",
  //   value: [
  //     "Приложение на чистом JavaScript, без использования библиотек",
  //     "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
  //     "JavaScript - это просто, интиресно. Научись создавать любые UI своими руками",
  //   ],
  //   options: {
  //     styles: {
  //       background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
  //       padding: "#fff",
  //       "font-weight": "bold",
  //     },
  //   },
  // },

  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  // {
  //   type: "text",
  //   value: text,
  //   options: {
  //     styles: {
  //       background: "linear-gradient(to left, #f2994a, #f2c94c)",
  //       padding: "1rem",
  //       "font-weight": "bold",
  //     },
  //   },
  // },
];

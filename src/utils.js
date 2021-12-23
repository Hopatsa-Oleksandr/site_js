export function row(content, styles = "") {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

//Утилита для преобразование файла обьекта стилей

export function css(styles = {}) {
  if (typeof styles === "string") return styles;
  //   const keys = Object.keys(styles);
  //   //   console.log(keys);
  //   const array = keys.map((key) => {
  //     return `${key}: ${styles[key]}`;
  //   });
  //   return array.join(";");

  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(";");
}

export function block(type) {
  return `
    <form name ="${type}">
    <h5>${type}</h5>
    <div class ="form-group">
    <input class ="form-control form-control-sm" name="value" placeholder="value"></div>
    <div>
    <div class="form-group">
    <input class="form-control form-control-sm" name="styles" placeholder="styles" margin-top:10px;="" margin-bottom:10px="" style="margin-top: 10px;margin-bottom: 10px;"></div>
    <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
    `;
}

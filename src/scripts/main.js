'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

for (const tr of table.rows) {
  const row = tr.cells;
  const needTr = row[1];
  const elementAfter = tr.children[tr.children.length - 1];

  if (tr.parentNode === thead || tr.parentNode === tfoot) {
    const newTh = document.createElement('th');

    newTh.textContent = needTr.textContent;
    elementAfter.before(newTh);
    continue;
  } else {
    const newTd = document.createElement('td');

    newTd.textContent = needTr.textContent;
    elementAfter.before(newTd);
    continue;
  }
}

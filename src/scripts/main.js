'use strict';

const table = document.querySelector('table');

for (const tr of table.rows) {
  const row = tr.cells;
  const needTr = row[1];
  const clone = needTr.cloneNode(true);

  if (!needTr) {
    continue;
  }

  if (tr.children.length === 0) {
    tr.append(clone);
  }

  const elementAfter = tr.children[tr.children.length - 1];

  elementAfter.before(clone);
}

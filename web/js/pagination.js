// PAGINATION SCRIPT

const newPage = 2
const pagenum = document.getElementById('page_number')
const addPage = document.createElement('a')

addPage.textContent = newPage
addPage.setAttribute('id', 'newPage')

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
}

insertAfter(addPage, pagenum.lastElementChild)

// Limit the number of entries displayed on the first page
if (datas.length > 5) {
  const extra = datas.slice(5) // target cells that gave index > 3 into 'extra'
  const matches = document.querySelectorAll('td') // scan all cells

  extra.forEach(function (extraId) {
    // trims table to only 5 entries by hiding them
    var e = extraId.id

    for (const match of matches) {
      if (match.textContent.includes(e)) {
        match.parentElement.style.display = 'none'
      }
    }
  })

  // then create DOM that appends another new element on
  // on pagination, that adds a new page that will display the spliced data

  $(document).ready(function () {
    $('#newPage').click(function () {
      let rows = table.rows

      // ensures table on the next page is initially cleared
      for (var j = 1; j < rows.length; j++) {
        rows[j].style.display = 'none'
      }

      // choose the extra rows and display them on second page
      for (var i = 0; i <= extra.length; i++) {
        let newRow = table.insertRow()

        let idCol = newRow.insertCell()
        idCol.setAttribute('id', 'id')

        let userCol = newRow.insertCell()
        userCol.setAttribute('id', 'user')

        let desCol = newRow.insertCell()
        desCol.setAttribute('id', 'description')

        let comp = document.getElementById('complete')
        let cloneCompl = comp.cloneNode(true)

        let compCol = newRow.insertCell()
        compCol.setAttribute('id', 'completed')

        let jsonCol = newRow.insertCell()
        jsonCol.setAttribute('id', 'json')

        let rem = document.getElementById('delete')
        let cloneDelete = rem.cloneNode(true)

        let deleteCol = newRow.insertCell()
        deleteCol.setAttribute('id', ' ')

        idCol.textContent = extra[i].id
        userCol.textContent = extra[i].user_id
        desCol.textContent = extra[i].description
        compCol.appendChild(cloneCompl)

        jsonCol.textContent =
          '{ id: ' +
          extra[i].id +
          ', user_id: ' +
          extra[i].user_id +
          ', description: ' +
          extra[i].description +
          ' }'

        deleteCol.appendChild(cloneDelete)
      }
    })
  })
}

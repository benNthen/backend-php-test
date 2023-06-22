let table = document.getElementById('listInfo')

let rowCount = table.rows.length

let allRows = table.rows

let tdid = document.querySelectorAll('td#id')
let total_id = []

let tduser = document.querySelectorAll('td#user')
let total_user = []

var tddesc = document.querySelectorAll('td#des')
let total_desc = []

var datas = [
  {
    id: total_id[0],
    user_id: total_user[0],
    description: total_desc[0],
  },
]

tdid.forEach((id) => {
  total_id.push(id.innerHTML)
})

tduser.forEach((uid) => {
  total_user.push(uid.innerHTML)
})

tddesc.forEach((desc) => {
  total_desc.push(desc.innerHTML)
})

for (var i = 1; i < total_id.length; i++) {
  datas.push({
    id: total_id[i],
    user_id: total_user[i],
    description: total_desc[i],
  })
}

// append json column with these entries
var json = document.querySelectorAll('td#json')

for (var i = 0; i < total_id.length; i++) {
  json[i].textContent =
    '{ id: ' +
    datas[i].id +
    ', user_id: ' +
    datas[i].user_id +
    ', description: ' +
    datas[i].description +
    ' }'
}

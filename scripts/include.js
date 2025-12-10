// (async () => {
//   const el = document.currentScript
//   const path = el.dataset.inc
//   const txt = await fetch(`templates/${path}`).then(r => r.text())

//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = txt

//   // drop all nodes before script
//   while (wrapper.firstChild) {
//     el.parentNode.insertBefore(wrapper.firstChild, el)
//   }

//   // re-run scripts from the inserted nodes
//   const insertedScripts = []
//   let node = el.previousSibling
//   while (node) {
//     if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
//       insertedScripts.push(node)
//     }
//     node = node.previousSibling
//   }

//   insertedScripts.reverse().forEach(old => {
//     const fresh = document.createElement('script')
//     if (old.src) fresh.src = old.src
//     else fresh.textContent = old.textContent
//     old.replaceWith(fresh)
//   })

//   el.remove()
// })()

(function() {
  const el = document.currentScript
  const path = el.dataset.inc

  const xhr = new XMLHttpRequest()
  xhr.open('GET', `templates/${path}`, false) // sync mode fr 💀
  xhr.send(null)

  const wrapper = document.createElement('div')
  wrapper.innerHTML = xhr.responseText

  // insert nodes before script
  while (wrapper.firstChild) {
    el.parentNode.insertBefore(wrapper.firstChild, el)
  }

  // rerun scripts
  // let node = el.previousSibling
  // const list = []
  // while (node) {
  //   if (node.nodeType === 1 && node.tagName === 'SCRIPT') list.push(node)
  //   node = node.previousSibling
  // }

  // list.reverse().forEach(old => {
  //   const fresh = document.createElement('script')
  //   if (old.src) fresh.src = old.src
  //   else fresh.textContent = old.textContent
  //   old.replaceWith(fresh)
  // })

  // el.remove()
})()

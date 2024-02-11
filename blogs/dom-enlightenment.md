---
title: Notes from reading DOM Enlightenment
desc: A summary of the things I learnt from reading DOMEnlightenment.com
date: 2024-02-10
---

Read here: [DOM Enlightenment](https://domenlightenment.com/)

#### HTML things:

- `node.isEqualNode(otherNode)` to check if `node` in the DOM is the same as `otherNode`
- `document.referrer`, `document.compatMode` exists???
- `element.attributes` returns a `NamedNodeMap`
  - primary usage via `get/set/has/removeAttribute()`
  - get/set/del via `getNamedItem`, `setNamedItem`, `removeNamedItem`
- `element.classList` returns DOMTokenList
- `element.dataset` maps `data-foo-foo` to `fooFoo` in the `DOMStringMap`
- `document.forms`, `document.images`, `document.links` returns an HTMLCollection of all those elements in the document (damn)
- `offsetLeft`/`offsetTop` returns the offset pixel value of the element from its `offsetParent`
  - the `offsetParent` is any ancestor with position which is not static (hence, either `absolute`, `relative`, `fixed`, etc)
- for viewport relative offset or element width/height _(including margin)_, `element.getBoundingClientRect()` works
- for element width/height _(content+padding)_, `element.clientWidth`, `element.clientHeight`
- for topmost element in viewport using a point, `document.elementFromPoint(x,y)`
- change the entire inline styles of an element using `element.cssText` as well as `element.setAttribute()`
- get the current computed style values using `getComputedStyle(element)`
- create a `Text` node using `document.createTextNode())`
  - manipulate it via `appendData()`, `deleteData()`, `insertData()`, etc
- `element.innerText` vs `textNode.textContent`
  - `innerText` is CSS aware, and won't return hidden text
  - `textContent` will return what is in the document after removing markup
- `DocumentFragment` for creating insertable nodes, transfers live objects to document, while `createElement` ones do not. only inserts the content of the Fragment instead of the Fragment itself (use `cloneNode(fragment)` to preserve the original fragment structure)

#### CSS Things:

- to get a style declaration, try `document.styleSheets[0].cssRules[0]` appropriately
  - to insert, `styleElement.sheet.insertRule(rule)`
  - to disable a stylesheet, `styleElement.disabled = true`

#### JS Things:

- JS parsing synchronous by default
- `defer` on `<script>` helps defer (lol) the download and execution of external JS till browser finishes parsing the closing `html` tag
- `async` on `<script>` prevents blocking of the html parsing, and load in parallel
- for dom manipulation, `<script>` tag order matters
- capture phase -> DOM trunk to branch (`event.target`)
- bubbling phase -> branch (`event.target`) to trunk
- `this` inside event listener on `addEventListener` will refer to the node/object the event is attached to
- `event.target` is the target of the event, `this` is the invoker of the event callback
- cancel browser default events with `preventDefault()`
- `stopPropagation()` prevents the capture phase and bubbling phase, only the event listener attached to element will be called
- `stopImmediatePropagation()` will stop the phases as well as any events attached after the event callback containing `stopImmediatePropagation`
- custom events via `document.createEvent()`, `initCustomEvent()`, `dispatchEvent()`
- event delegation to handle multiple event targets leveraging the bubbling and capture of events

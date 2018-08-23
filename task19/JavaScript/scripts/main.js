var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');
context.fillStyle = "white";
context.fillRect(0, 0, yyy.width, yyy.height);

autoSetCanvasSize(yyy)

listenToMouse(yyy)

var eraserEnabled = false
let nodes = document.querySelectorAll('#actions')
changeLineWidth(nodes)

let colors = document.querySelectorAll('#colors')
changeColor(colors)

clear.onclick = function () {
  context.clearRect(0, 0, yyy.width, yyy.height)
}
download.onclick = function () {
  fillCanvasBackgroundWithColor(yyy, 'white');
  let url = yyy.toDataURL("image/png")
  let a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '我的作品'
  a.target = '_blank'
  a.click()
}

function fillCanvasBackgroundWithColor(canvas, color) {
  const context = canvas.getContext('2d');
  context.save();
  context.globalCompositeOperation = 'destination-over';
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
}

function changeColor(aim) {
  length = aim[0].children
  let activeicn = null
  for (i = 0; i < length.length; i++) {
    length[i].onclick = function (x) {
      activeicn = x.currentTarget
      activeicn.classList.add('active')
      context.strokeStyle = x.currentTarget.id
      let siblings = allSiblings(activeicn)
      for (j = 0; j < siblings.length; j++) {
        siblings[j].classList.remove('active')
      }
    }
  }
}

function changeLineWidth(aim) {
  length = aim[0].children
  let activeicn = null
  for (i = 0; i < length.length; i++) {
    length[i].onclick = function (x) {
      activeicn = x.currentTarget
      activeicn.classList.add('active')
      switch (x.currentTarget.id) {
        case 'pensmall':
          context.lineWidth = 1
          eraserEnabled = false
          break
        case 'penmiddle':
          context.lineWidth = 3
          eraserEnabled = false
          break
        case 'penbig':
          context.lineWidth = 5
          eraserEnabled = false
          break
        case 'eraser':
          context.lineWidth = 5
          eraserEnabled = true
        default:
          break
      }
      let siblings = allSiblings(activeicn)
      for (j = 0; j < siblings.length; j++) {
        siblings[j].classList.remove('active')
      }
    }
  }
}

function allSiblings(context) {
  var siblings = [];
  var parent = context.parentNode;
  var childs = parent.children;
  for (var i = 0; i < childs.length; i++) {
    if (childs[i] !== context) {
      siblings.push(childs[i])
    }
  }
  return siblings;
}

function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function () {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

function drawCircle(x, y, radius) {
  context.beginPath()
  context.fillStyle = 'black'
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) // 起点
  context.lineTo(x2, y2) // 终点
  context.stroke()
  context.closePath()
}

function listenToMouse(canvas) {
  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  if (document.body.ontouchstart !== undefined) {
    //触屏设备
    canvas.ontouchstart = function (aaa) {
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.ontouchmove = function (aaa) {
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      if (!using) {
        return
      }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function (aaa) {
      using = false
    }
  } else {
    //非触屏设备
    canvas.onmousedown = function (aaa) {
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.onmousemove = function (aaa) {
      var x = aaa.clientX
      var y = aaa.clientY
      if (!using) {
        return
      }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.onmouseup = function (aaa) {
      using = false
    }
  }
}
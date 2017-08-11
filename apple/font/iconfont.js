;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M754.714127 540.65462c-0.977297-113.176642 92.377635-167.599136 96.794406-170.231079-52.601117-76.964906-134.578466-87.534636-163.871806-88.765673-69.664424-7.046486-135.849464 41.049928-171.213305 41.049928-35.365888 0-89.876573-40.031738-147.697789-38.97057-75.990762 1.062192-145.911023 44.192501-185.053065 112.11445-78.920608 136.864134-20.165075 339.652723 56.674043 450.759217 37.571203 54.337559 82.402038 115.425869 141.284466 113.219621 56.717023-2.25025 78.114209-36.678364 146.6376-36.678364 68.433336 0 87.750055 36.678364 147.651738 35.530215 60.877957-1.102101 99.637267-55.440683 136.868719-109.948111 43.131054-63.049988 60.708081-124.052341 61.896188-127.236869C873.371342 721.115692 755.860277 676.073846 754.714127 540.65462M641.999494 208.216205c31.288869-37.865399 52.34528-90.505293 46.529593-142.891408-45.000711 1.825578-99.467391 29.971615-131.817472 67.837015-28.953589 33.493835-54.297828 87.069031-47.419906 138.434909C559.429627 275.417747 610.79761 245.998717 641.999494 208.216205"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daohang-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M79.78 742.215h898.076v69.58h-898.076v-69.58z"  ></path>' +
    '' +
    '<path d="M79.78 475.945h898.076v69.551h-898.076v-69.551z"  ></path>' +
    '' +
    '<path d="M79.78 209.715h898.076v69.549h-898.076v-69.549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({width: 375, height: 812});

  // 事件监听，可用于事件通信
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('warning', msg => console.log('PAGE WARN:', JSON.stringify(msg)));
  page.on('error', msg => console.log('PAGE ERR:', ...msg.args));

  // waitUntil 参数为 load/domcontentload/networkidle0/networkidle2
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});

  // 对打开的页面进行操作
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  // 将页面截图，输出为 pdf 或 图片
  await page.pdf({path: 'hn.pdf', format: 'A4'});
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

// html属性
// data-skeleton-remove：指定进行移除的 dom 节点属性
// data-skeleton-bgcolor：指定在某 dom 节点中添加的背景色
// data-skeleton-ignore：指定忽略不进行任何处理的 dom 节点属性
// data-skeleton-empty: 将某dom的innerHTML置为空字符串

const styles = Array.from(document.querySelectorAll('style')).map(style => style.innerHTML || style.innerText);
// 移除非首屏样式
function handleStyles(styles, html) {
    const ast = cssTree.parse(styles);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const cleanedChildren = [];
    let index = 0;
    ast && ast.children && ast.children.map((style) => {
        let slectorExisted = false,
            selector;
        switch (style.prelude && style.prelude.type) {
            case 'Raw':
                selector = style.prelude.value && style.prelude.value.replace(/\,|\n/g, '');
                slectorExisted = selectorExistedInHtml(selector, document);
                break;
            case 'SelectorList':
                style.prelude.children && style.prelude.children.map(child => {
                    const children = child && child.children;
                    selector = getSelector(children);
                    if (selectorExistedInHtml(selector, document)) {
                        slectorExisted = true;
                    }
                });
                break;
        }
        if (slectorExisted) {
            cleanedChildren.push(style);
        }
    });
    ast.children = cleanedChildren;
    let outputStyles = cssTree.generate(ast);
    outputStyles = outputStyles.replace(/}\,+/g, '}');
    return outputStyles;
}

function selectorExistedInHtml(selector, document) {

    if (!selector) {
      return false;
    }

    // 查询当前样式在 html 中是否用到
    let selectorResult, slectorExisted = false;
    try {
      selectorResult = document.querySelectorAll(selector);

    } catch (e) {
      console.log('selector query error: ' + selector);
    }

    if (selectorResult && selectorResult.length) {
      slectorExisted = true;
    }

    return slectorExisted;
}

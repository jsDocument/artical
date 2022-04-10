```javascript
class CustomElementStart extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        // 内部结构
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("span");
        text.textContent = 'Hi Custom Element!';
        text.style = 'color: red';
        shadow.append(text);
    }
}

customElements.define('custom-element-start', CustomElementStart)
```


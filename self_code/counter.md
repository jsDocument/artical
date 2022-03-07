```javascript
// 当页面处于不可见 (document.hidden = false) 状态时，将可能会停止计时
const useCountDown = (num) => {
    const [seconds, setSecond] = useState(num)

    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSecond(c => c - 1);
            }
        }, 1000);
    }, [seconds]);

    return [seconds, setSecond]
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{count}</h1>;
}
```

+ cloneElement，根据 Element 生成新的 Element
+ createElement，根据 Type 生成新的 Element

Quiz!

1. What is a React component?

- A set of piece of or individual part of an application usually used with a function that returns React elements. React elements are the objects (real DOM elements where users can see on the screen UI) returned with JSX. It is reusable and easy to maintain

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

- Should use Pascal Case Naming Convention -> `MyComponent`

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

- Should use self closing tag < /> -> <Header />

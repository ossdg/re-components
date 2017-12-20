Button example:


```js
<Button
  onClick={() => console.log('button clicked')}
 >
 Default
 </Button>

```

```js
<Button
  className="btn-lg btn-outline-danger"
  onClick={() => console.log('button clicked')}
 >
 Default + Custom
 </Button>

```


```js
<Button
  defaultClasses={false}
  onClick={() => console.log('button clicked')}
 >
 No Default
 </Button>

```

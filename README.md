# as.js
```javascript
require("./as.js");

class Point {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}

let length = ({x: 4, y: 3}).as(Point).length();
console.log(length); // 5
```
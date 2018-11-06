# Should You Use Classes in JavaScript?
## Design Expression vs Dogma

![two people drawing on whiteboard](images/kaleidico-754613-unsplash.jpg)

## The Ubiquity of OOP
Object Oriented Programming (OOP) is without question an important advancement in the design and development of software. In fact languages such as C++ and later Java were developed primarily around the OOP concept of a `class`[1–2].

For years, Java was the most widely taught language in introductory computer science and was only recently surpassed by Python [3]. However, OOP and in particular `class`es are nearly always taught regardless of the language— it’s rather that the multi-paradigm approach of Python can be used to simplify introductory concepts that can be implemented procedurally.

Thus, OOP is ubiquitous and often certain techniques or features such as `class` are associated to the very foundations of computer science. However by making such a strong association, we may inadvertently produce a dogmatic environment. Indeed, to many programmers who start with Java, it can almost seem like `class` and similar constructs are inherent to programming, when in fact they are not.

Such dogma is only avoided when we make clear **why** OOP was developed and **what** problems it solves. We have to remain cognizant that while it is useful in many cases, it is not a silver bullet [4].

## OOP as Expression Of Design
OOP was developed in order to reduce the complexity of software development [4]. As Fred Brooks points out, it is ultimately a tool that **aides in the translation of requirements to execution**:

>For both abstract types and hierarchical types, the result is to remove a higher-order kind of accidental difficulty and allow a higher-order expression of design.
Nevertheless, such advances can do no more than to remove all the accidental difficulties from the expression of the design. The complexity of the design itself is essential, and such attacks make no change whatever in that.

In other words, `class`es, encapsulation, abstract data types, inheritance and so forth are for developers to reason about program structure. We develop an abstract model of the software-to-be as a sets of actors, objects, functions, properties and so forth. OOP constructs yield a way to translate these models to code with an understandable syntax.

While it’s true that some high-level languages force such paradigms upon us, we have to realize that this is a constraint of the language and not of programming at large. In fact, such high-level features can be a relevant factor in determining whether or not a specific language is the correct tool for a given solution.

Thus if these features exist to aide in expression then they should only be used so long as their expressiveness remains valuable. As will be shown in the case of JavaScript, this may not always be a straight-forward decision.

## Classes in JavaScript
As of ecmascript 2015 (es6), `class`es were added to the JavaScript language. However it’s very important to understand that underneath the syntax, `class`es use functions and prototypal inheritance both of which are foundations in JavaScript.

As an example, the following class:

```javascript
class Person {
  constructor (name) {
    this.name = name
  }
  
  talk () {
    console.log(`${this.name} says hello`)
  }
}
```

Is closer to the following, under the hood:

```javascript
function Person (name) {
  this.name = name
}
Person.prototype.talk = function () {
  console.log(`${this.name} says hello`)
}
```

Of importance is realizing that the function `talk` is not an encapsulated method of the “class” `Person`. It’s a regular JavaScript function that the object Person inherits. As such, the value of `this` is related to how the function is called, rather then where the function is defined [5].

Perhaps the most obvious implication of the above is how the `this` value behaves when called from another object:

```javascript
const Grey = new Person('Grey')
const mockDomObj = {}
mockDomObj.onClick = Grey.talk
mockDomObj.onClick() // this.name -> undefined! 
```

Here, `this.name` when called from `mockDomObj.onClick` is looking on the `mockDomObj` for a property `name`.

ie:

```javascript
mockDomObj.name = 'button'
mockDomObj.onClick() // this.name -> 'button'
```

The way that `class`es operate in JavaScript is quite different from the encapsulation achieved in other class-based languages. It’s a potentially horrendous headache for those that are new to JavaScript, and can lead towards debugging hell. In such cases, the problem isn’t a misunderstanding of OOP but rather its expression within the JavaScript environment.

Of course the seasoned JavaScript developer knows that one can use bind in order to ensure the expected `this` value, but such utility begs an important question: **Is it useful to fight with our tools in order to force design expression?**

## An Alternative: Classes as Factories
We’ve already answered why `class` and other OOP features exist, but in order to answer whether or not one should use `class` and `bind` excessively in JavaScript, we need to know what a `class` really is.

A class is a blueprint for creating objects. We define what properties and methods an object should have, which taken together are considered a type, and then instantiate many objects using that blueprint. Perhaps a more visual analogy is that a class acts as an **object creation factory**.

Understanding classes in this manner yields alternative ways to reproduce the same level of design expressiveness. For example, consider **factory functions**: functions that return objects.

```javascript
const PersonFactory = (name) => ({
  talk () {
    console.log(`${name} says Hello`)
  }
})
```

which can now be used without bind, or this due to function closures [6]:

```javascript
const Grey = PersonFactory('Grey')
const mockDomObj = {}
mockDomObj.onClick = Grey.talk
mockDomObj.onClick() // -> Grey says Hello
```

>A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created

Note that the general principles of `class`es are still achieved and as a bonus the `name` property is actually now private (whereas it is public in the case of using the `class` keyword). The result is equal in expressiveness with improved code clarity.

At this point, some may object that classes are meant to be extensible and at face-value, these factories do not seem to be as easily extensible. Again, we consider that the reasons for composition and inheritance are to not only improve design expression, but to avoid code duplication.

We do not need magic keywords such as `extends` to achieve shared properties. Instead, we can alter how the object returned by a factory is created.

For example, if we want `PersonFactory` to share other properties, say of `Mammal`, we can achieve composition without code duplication using `Object.assign`:

```javascript
const Mammal = {
  isVertebrae: true
}
const PersonMammalFactory = (name) => (
  Object.assign(
    {},
    Mammal,
    PersonFactory(name)
  )
)
```

The relationship between `PersonMammal` as a composition of `Mammal` and `Person` is very clear, and as a bonus, is achieved without needing to compose an object hierarchy. Further it wasn’t even necessary to create a factory or class for `Mammal`, but rather in simpler cases just a plain object will suffice.

However, there is a caveat: for **every** object that’s being created, the function `talk` is also being created. It is notable that this does not have an impact on most use-cases. However in cases that require manipulating a very large number of objects within tight frames, `class` with `bind` may be more appropriate from a performance perspective.

## Factories with State and Setters
For purposes related to brevity, the prior example utilized a local constant that was provided during construction, but could not change. This section is a brief aside that demonstrates utilizing state within factory function closures and how that state is properly private.

Consider the ability for a `Person` to change their name. A `state` object can replace the `name` parameter and instead of immediately returning an object, first initialize the value of member variables:

```javascript
const PersonFactory = (state) => {
  let name = state.name
  return {
    talk () {
      console.log(`${name} says hello`)
    },
    changeName (newName) {
      name = newName
    }
  }
}
const Grey = PersonFactory({ name: 'Grey' })
Grey.talk() // -> 'Grey'
Grey.changeName('Grey B')
Grey.talk() // -> 'Grey B'
```

Again, because of the nature of closures in JavaScript, simply trying to access `name` as `Grey.name` will return `undefined`.

## Expression Over Dogma
This article examined why OOP and in particular classes exist: to improve expressiveness when translating requirements to code and reduce software complexity. By understanding why a feature exists and what it solves, one escapes being dogmatically tied to its use.

When crafting programs, two of the most important factors are:

1. Accurately translating requirements
2. Writing reasonable, sensible, maintainable code

Syntax that shield internals may present a more narrow trade-off than initially considered. In the case of JavaScript classes, those without a deep understanding of JavaScript’s object model and functions may find themselves surprised by its implementation. In other words, the syntax doesn’t always express what’s intended.

Sometimes, alternative approaches are beneficial beyond just their expressiveness. In the case of factories composition can be achieved without creating base classes and thus forcing type hierarchies.

Ultimately, if one finds they have to write ‘hacks’ or fight with their tools to force a feature, it should be questioned whether or not there is other ways to achieve a similar level of expression. Forcing JavaScript to look like another language may seem ‘desirable’ from a naive viewpoint, but will not help in long term maintenance. In other words, value expressiveness over dogma.

## References
[1] Cplusplus.com. (2018). History of C++ — C++ Information. [online] Available at: http://www.cplusplus.com/info/history/.

[2] En.wikipedia.org. (2018). Java (programming language). [online] Available at: https://en.wikipedia.org/wiki/Java_(programming_language)#History.

[3] Guo, P. (2018). Python Is Now the Most Popular Introductory Teaching Language at Top U.S. Universities. [online] Cacm.acm.org. Available at: https://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-u-s-universities/fulltext.

[4] Brooks, Frederick P., “No Silver Bullet: Essence and Accidents of Software Engineering,”. Computer, vol. 20, no. 4, April 1987, pp. 10–19. Available at: http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html

[5] MDN Web Docs. (2018). this. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this.

[6] MDN Web Docs. (2018). Closures. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures.

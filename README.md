# 11-week-constructor

# Week 11 Homework Instructions

### Overview

This week's homework assignment requires students to use prototypes
to implement a Shape "class", and Triangle; Square; and Pentagon "subclasses".
The `instanceof` operator should behave properly when used on instances of any
of the three classes.

### Instructions

1. Create a github repository named "shapes". Initiated it with readme.md and a .gitignore. Select Node
for the option when initiated with a .gitignore.

For the remaining steps, each constructor should be in its own file. You should use `module.exports` to
make a constructor available to other files. `require` will allow you to import or include one constructor
in another file. We covered `module.exports` and `require` in week 10.

2. Create a Shape constructor. It should have a property called type. Attach
   a function, called get_type, such that any Shape will be able to call it.
   Just fill it in with a return statement for now.

3. Create Triangle and Square constructors. The triangles should set the
   properties side1, side2, and side3 for its side lengths.
   Do the same for Square.

4. Set the prototype of both of these objects equal to a new Shape().

5. Turn your attention to Shape.get_type. This function should return
   the type of the shape that it's called on--but only be defined on Shape.

   To do this, read about the Object.prototype.constructor property on MDN:

    http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

   JavaScript sets a constructor property for you automatically. But, when
   you muck with the prototype chain, this default won't accurately
   represent which function created which object.

   We learned about a new property of functions through the documentation
   above, which should be helpful in solving this exercise. Return it from
   get_type.

   Now, console.log the result of calling get_type. What do you get? What
   should you have gotten?

   There is no "secret" to fixing this, actually. You really do just reset
   the .constructor property of the triangles you create. But, there's a
   nuance to it.

     1. If you want all triangles ever created to report Triangle as their
        .constructor, where do you put that property?
     2. If your code still doesn't work, take a close look at where you're
        modifying your shape prototypes. Does the order in which you change
        the prototype and constructor properties matter?

6. Create a Pentagon object, analogous to your other shapes. Your getType
   method should work without any additional work.

7. **Challenge**. Reimplement your hierarchy using `Object.create`, without explicit `.prototype` references. This is *not* required for full credit on the homework.

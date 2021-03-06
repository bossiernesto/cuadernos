# Unified Types

In contrast to Java, all values in Scala are objects (including numerical values and functions). Since Scala is class-based, all values are instances of a class. The diagram below illustrates the class hierarchy.

![Image of JVM](https://gist.githubusercontent.com/bossiernesto/ccb3a847e83ae0ddf7db0b0eae30870f/raw/8cd56fb51509ce78b8ed87d8c863fff7fbde7da3/classhierarchy.img_assist_custom.png)

The superclass of all classes scala.Any has two direct subclasses scala.AnyVal and scala.AnyRef representing two different class worlds: value classes and reference classes. All value classes are predefined; they correspond to the primitive types of Java-like languages. All other classes define reference types. User-defined classes define reference types by default; i.e. they always (indirectly) subclass scala.AnyRef. Every user-defined class in Scala implicitly extends the trait scala.ScalaObject. Classes from the infrastructure on which Scala is running (e.g. the Java runtime environment) do not extend scala.ScalaObject. If Scala is used in the context of a Java runtime environment, then scala.AnyRef corresponds to java.lang.Object.
Please note that the diagram above also shows implicit conversions called views between the value classs.
Here is an example that demonstrates that both numbers, characters, boolean values, and functions are objects just like every other object:

```scala
object UnifiedTypes {
  def main(args: Array[String]) {
    val set = new scala.collection.mutable.HashSet[Any]
    set += "This is a string"  // add a string
    set += 732                 // add a number
    set += 'c'                 // add a character
    set += true                // add a boolean value
    set += main _              // add the main function
    val iter: Iterator[Any] = set.elements
    while (iter.hasNext) {
      println(iter.next.toString())
    }
  }
}
```

The program declares an application UnifiedTypes in form of a top-level singleton object with a main method. Themain method defines a local variable set which refers to an instance of class HashSet[Any]. The program adds various elements to this set. The elements have to conform to the declared set element type Any. In the end, string representations of all elements are printed out.
Here is the output of the program:

```
c
true
<function>
732
This is a string
```
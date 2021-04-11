# Bootstrapping

A compiler is characterized by three languages:

1.  Source Language
2.  Target Language
3.  Implementation Language

![](../../images/bootstrapping/SAA.gif)

1. *Notation*: ![](../../images/bootstrapping/img1.gif) represents a compiler for Source _S_, Target _T_, implemented in _I_. The _T-diagram_ shown above is also used to depict the same compiler.

![](../../images/bootstrapping/SIT.gif)


To create a new language, L, for machine A:

2.  Create ![tex2html_wrap_inline71](../../images/bootstrapping/img2.gif) , a compiler for a subset, S, of the desired language, L, using language A, which runs on machine A. (Language A may be assembly language.)

![](../../images/bootstrapping/SAA.gif)

![](../../images/bootstrapping/LSA.gif)
    
3.  Create ![tex2html_wrap_inline73](../../images/bootstrapping/img3.gif) , a compiler for language L written in a subset of L.

4.  Compile ![tex2html_wrap_inline73](../../images/bootstrapping/img3.gif) using ![tex2html_wrap_inline71](../../images/bootstrapping/img2.gif) to obtain ![tex2html_wrap_inline79](../../images/bootstrapping/img4.gif) , a compiler for language L, which runs on machine A and produces code for machine A.
    

![displaymath81](../../images/bootstrapping/img5.gif)

![](../../images/bootstrapping/bootstrap.gif)

The process illustrated by the T-diagrams is called _bootstrapping_ and can be summarized by the equation:

![displaymath83](../../images/bootstrapping/img6.gif)

To produce a compiler for a different machine B:

1.  Convert ![tex2html_wrap_inline85](../../images/bootstrapping/img3.gif) into ![tex2html_wrap_inline87](../../images/bootstrapping/img8.gif) (by hand, if necessary). Recall that language S is a subset of language L.
2.  Compile ![tex2html_wrap_inline87](../../images/bootstrapping/img8.gif) to produce ![tex2html_wrap_inline91](../../images/bootstrapping/img9.gif) , a _cross-compiler_ for L which runs on machine A and produces code for machine B.
3.  Compile ![tex2html_wrap_inline87](../../images/bootstrapping/img8.gif) with the cross-compiler to produce ![tex2html_wrap_inline95](../../images/bootstrapping/img10.gif) , a compiler for language L which runs on machine B.

![](../../images/bootstrapping/crosscompile.gif)


* * *

_CS 631 Class Account  
Thu Sep 14 11:55:16 ADT 2000_
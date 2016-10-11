# Eureka-Flexbox

Flexbox as CSS classes with media query breakpoints. A library for flexbox users.

## Table of contents

- Installation
- Media Breakpoints
- Classes and Rulesets
- Customization

## Installation

- Install with [Bower](https://bower.io/): `bower install eureka-flexbox --save`

## Media Breakpoints

Eureka-Flexbox uses a mobile-first approach so its media queries use min-width instead of max-width. There is support for four media breakpoints and, just like any other css library, by prefixing the classname with the desired breakpoint and a hyphen the work is done. Available media breakpoints are:

 - Extra Small (xs: 480px)
 - Small (sm: 768px)
 - Medium (md: 992px)
 - Large (lg: 1200px)

## Classes and Rulesets

The library keeps things simple: ---One class translates to one property---

The available classes with their rulesets are:
```
- flex                     { display: flex;                  }
- block                    { display: flex;                  }
- inline                   { display: inline-flex;           }
- direction-row            { flex-direction: row;            }
- direction-row-reverse    { flex-direction: row-reverse;    }
- direction-column         { flex-direction: column;         }
- direction-column-reverse { flex-direction: column-reverse; }
- nowrap                   { flex-wrap: nowrap;              }
- wrap                     { flex-wrap: wrap;                }
- wrap-reverse             { flex-wrap: wrap-reverse;        }
- justify-start            { justify-content: flex-start;    }
- justify-end              { justify-content: flex-end;      }
- justify-center           { justify-content: center;        }
- justify-between          { justify-content: space-between; }
- justify-around           { justify-content: space-around;  }
- items-start              { align-items: flex-start;        }
- items-end                { align-items: flex-end;          }
- items-stretch            { align-items: stretch;           }
- items-center             { align-items: center;            }
- items-baseline           { align-items: baseline;          }
- content-start            { align-content: flex-start;      }
- content-end              { align-content: flex-end;        }
- content-stretch          { align-content: stretch;         }
- content-center           { align-content: center;          }
- content-between          { align-content: space-between;   }
- content-around           { align-content: space-around;    }
- self-start               { align-self: flex-start;         }
- self-end                 { align-self: flex-end;           }
- self-stretch             { align-self: stretch;            }
- self-center              { align-self: center;             }
- self-baseline            { align-self: baseline            }
```
**NOTE:** `block` is used only with a breakpoint prefix and does not exists as a standalone class because `flex` already applies the same ruleset.

Naturally, to use any of the available classes, the `flex` class **MUST** be present in the element because it applies the `flex` display

## Customization

Eureka-Flexbox is written in LESS. The code itself is perfectly aligned to facilitate the text modification.

The media breakpoint declarations are as follows:
```
@01: xs-;
@02: sm-;
@03: md-;
@04: lg-;

@xs-breakpoint: 480px;
@sm-breakpoint: 768px;
@md-breakpoint: 992px;
@lg-breakpoint: 1200px;
```

So, it must be straightforward to customize that stuff. Just make sure to:
1. Match the breakpoint variable name prefix with the corresponding value of the variable containing the prefix.
2. Invoke accordingly the `.mixin` and `.block` mixins to match the names of the variables that contain the prefixes values
```
.mixin(@01);
.mixin(@02);
.mixin(@03);
.mixin(@04);

.block(@01);
.block(@02);
.block(@03);
.block(@04);
```

-- Generated by psc-make version 0.6.9.3
module Prelude.Unsafe where
import Prim ()
import Prelude ()
--  | Find the element of an array at the specified index.
--  |
--  | Note: this function can cause unpredictable failure at runtime if the index is out-of-bounds.
foreign import unsafeIndex :: forall a. [a] -> Prim.Number -> a

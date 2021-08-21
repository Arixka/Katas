::::::::::::::::::: kyu5
MergeSort "merge" function

In this excercise, we will implement the "merge" function from MergeSort.

MergeSort is often taught in Computer Science as the canonical example of the "Divide and Conquer" algorithm. The strategy of MergeSort is both simple and profound, leveraging two simple-to-prove mathematical facts (1. That every list of 1 element is "sorted" ... and 2. It is much easier to combine two already-sorted lists into 1 sorted list than it is to sort a big list all at once) to yield an algorithm with a worst-case complexity of O(n log n).

https://www.codewars.com/kata/52336a4436e0b095d8000093/train/javascript/6120e1ba27e722000e724827

Where my anagrams at?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.


https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript/60b7ae5c8e8d6200553eff2e

:::::::::::::::::::: kyu6

Roman Numerals Encoder

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript/61137c270e51db00515a1afe


Take a Ten Minute Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript/60f929148b940b0045f23d2a


Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript/60f7d786ca1ef900492f52aa


Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order...

https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript/60f686f3d02629001a13b6da


HTML dynamic color string generation

Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript/60ebfeb7756e37000e902955


Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript/60b8fbb95e6e130040acda7a


Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements

https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript/60b6586aa388ae00192faa68

Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript/60b52c54af163a0049aba026

:::::::::::::::::::: kyu7

Spacify

Modify the spacify function so that it returns the given string with spaces inserted between each character.

https://www.codewars.com/kata/57f8ee485cae443c4d000127


Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. 

https://www.codewars.com/kata/59c5f4e9d751df43cf000035


Odd Ones Out!

The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript/611ce75682e7cc003712af43


Number Of Occurrences

Write a function that returns the number of occurrences of an element in an array.

https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript/6106d95b3e38e90032c772d8


Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript/60b7e1f4bec5c400316ed5d7


Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript/60a24832d5a5fc0007d8f4f0



::::::::::::::::::::kyu8


Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript/6095baa49c79660006563acb


Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript/60963b2cbe87da00259a343a


Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript/60963c8c9c796600496e08f5



What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript/609640469c796600496fa820


Welcome!

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
The Task

    Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
    Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript/609643d2be87da00319c34e7


Multiply

This code does not execute properly. Try to figure out why.

https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript/60b67e464777e30007291810


Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript/611ce1ba1a598c000e437cb3


Grasshopper - Personalized Message

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'

https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript/611ce6d83567030033739037


A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle...

https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript/611cf16f0c4b94000e822c0c
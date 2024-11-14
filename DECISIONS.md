# Thought Map

1. First of I read the Task and decided to setup the Initial Repository to work in. As this is a very small task I choose the Test Driven approach to always have an working solution.
The Setup itself is an small Typescript Project with Jest as Testing Framework. Since those Typescript setups always consume Time to setup I created the Function with an hard coded return value to have a working Test.
Why Typescript instead of pure Node? I try to avoid pure JS and force myself to use Typescript as much as possible in my Projects. Besides that it's a long time ago since I setup an Node Project with Typescript from scratch and using this as an opportunity to refresh my knowledge.

2. Implementing the Solution:
* * Starting with the running test I thought about the Implementation. First of we sort the Array to have the lowest starting interval at first and the highest at last.
* * Then we iterate over the array and check if we have an active interval. if not we set the current interval as active.
* * If we have an active interval we check if the current interval is overlapping with the active interval. If not we add the active interval to the result array and set the current interval as active. If it is we merge the two intervals.

3. Breaking the Solution:
An downside of TDD is once if you have an working solution it suggests that you are done. But Humans makes mistakes. So I added some more Tests wich are breaking it. one obvious case is that the interval itself is not sorted correctly. The other one is text as User input. I decided to skip out those invalid arrays from the execution.

4. Infinity and NaN:
Difficult topic... while Infinity makes sense in the execution, NaN does not. And it does not help ourself that ` typeof interval[0] !== 'number'` will not catch NaN. So I added an additional check for that.


# Conclusion

## Runtime Complexity
I want to be honest, I have no real Talent in Big O Notations. But searching up the Internet for the O Notation of javascript `.sort()` its O(n log n).
The Filtering is only O(n) and the Iteration as well. Since that not overrule the O(n log n) I would say the final O Notation is O(n log n).

## Memory Complexity
Difficult question for an Javascript Developer to answer. I would guess O(n), but Javascript is copying the Arrays with each map or filter function underneath.


# Additions
After finishing the Implementation I did a break and continued on the next day.
It seems weird to extend this by adding an CLI and a Dockerfile, since the usability is limited. But it's always provide some sort of Indipendency of your local Enviroument.
So bare with me that the CLI implementation is not handling any further Input validation. It's just for Demo purpose.

I also fill up the Readme with the most important facts since the task established itself.
The whole Project took me around 4 to 5 hours to complete.
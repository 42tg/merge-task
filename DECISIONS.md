# Thought Map

1. First of I read the Task and decided to setup the Initial Repository to work in. As this is a very small task I choose the Test Driven approach to always have an working solution.
The Setup itself is an small Typescript Project with Jest as Testing Framework. Since those Typescript setups always consume Time to setup I created the Function with an hard coded return value to have a working Test.
Why Typescript instead of pure Node? I try to avoid pure JS and force myself to use Typescript as much as possible in my Projects. Besides that it's a long time ago since I setup an Node Project with Typescript from scratch and using this as an opportunity to refresh my knowledge.

2. Implementing the Solution:
* * Starting with the running test I thought about the Implementation. First of we sort the Array to have the lowest starting interval at first and the highest at last.
* * Then we iterate over the array and check if we have an active interval. if not we set the current interval as active.
* * If we have an active interval we check if the current interval is overlapping with the active interval. If not we add the active interval to the result array and set the current interval as active. If it is we merge the two intervals.


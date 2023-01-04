# next/link Link component issue with relative paths

This project demonstrates an issue with the Next.js Link component where navigating using relative paths does not behave the same way as a regular old `<a>` tag does.

## Reproduction Steps

- Clone and run this Next.js project
- Navigate to http://localhost:3000/parent/child-a
- Click the "Soft Nav Child B" link -- will navigate to `/child-b` when `/parent/child-b` was the expected result

Using the hard navigation (i.e. a regular old `<a>` tag) will correctly navigate to `/parent/child-b`.

## Describe the bug

Using a path-relative href in the next/link component does not behave in the same way as its regular anchor tag counterpart. I would expect that using path-relative notation (e.g. `./sibling`, or `../parent-sibling`) would navigate to the same place that the regular anchor tag does.

## Demo

[https://next-navigation-bug-repro.vercel.app/](https://next-navigation-bug-repro.vercel.app/)

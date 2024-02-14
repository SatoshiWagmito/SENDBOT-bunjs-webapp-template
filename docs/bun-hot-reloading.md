Bun.js provides hot reloading, which automatically refreshes the server when running JavaScript or TypeScript code. To use hot reloading with Bun, you can run the following command:

```bash
bun --hot server.ts
```

This command enables hot reloading for the `server.ts` file, allowing the server to be automatically refreshed when changes are made to the code. Unlike nodemon, Bun's hot reloading feature does not require a full process restart, ensuring that HTTP and WebSocket connections remain uninterrupted and the application state is preserved[1][4].

Citations:
[1] https://www.builder.io/blog/bun-vs-node-js
[2] https://yarnaudov.com/what-is-bun-js-and-why-its-here-to-stay.html
[3] https://www.sitepoint.com/bun-javascript-runtime-introduction/
[4] https://bun.sh/docs/runtime/hot
[5] https://www.freecodecamp.org/news/a-quick-look-at-bun-js/

via https://www.perplexity.ai/search/example-for-nodemon-pgkPg_A8QVKanj3CfpvjCw?s=c
// ecosystem.config.cjs
module.exports = {
    apps: [
//
// bun.js + PM2 === broken af; use start_api_server.sh instead; thank you--Management
//        {
//            name: 'app-server',
//            script: 'app.ts', // Make sure Bun or Node can execute TypeScript directly, or compile to JavaScript
//            //instances: 'max', // Utilizes all CPUs, adjust as necessary
//            //interpreter: '/root/.bun/bin/bun',
//	          interpreter: 'ts-node',
//            instances: 0, // Utilizes all CPUs, adjust as necessary
//            exec_mode: 'cluster',
//            //watch: true, // Restart on file changes; set to false in production
//            //ignore_watch : ["node_modules", "data"], // Ignores the node_modules and data directories
//	          watch: false,
//            env: {
//                //  NODE_ENV: 'development' // Set environment variables as required
//	              NODE_ENV: "production",
//	              PORT: 3000
//            }
//        },
    ]
};

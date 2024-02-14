# manually start PM2 instances because bunjs/pm2 cluster known issue
NODE_ENV=production PORT=3001 pm2 start --name "app-3001" -i 1 --interpreter /root/.bun/bin/bun app.ts
NODE_ENV=production PORT=3002 pm2 start --name "app-3002" -i 1 --interpreter /root/.bun/bin/bun app.ts
NODE_ENV=produciton PORT=3003 pm2 start --name "app-3003" -i 1 --interpreter /root/.bun/bin/bun app.ts
pm2 start --interpreter /root/.bun/bin/bun lb.ts


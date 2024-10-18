
pnpm 9.x后 link-workspace-packages改为了默认为 false，需要新建.npmrc文件，添加link-workspace-packages=true，在安装依赖时优先在本地链接，而不是从 registry（远程） 中下载
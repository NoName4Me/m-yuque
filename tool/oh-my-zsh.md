# oh-my-zsh

```shell
# 安装 oh-my-zsh(https://github.com/robbyrussell/oh-my-zsh)
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# 设置主题: https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
vi ~/.zshrc
## 设置 ZSH_THEME="avit"
```
## 便利插件

```shell
vi ~/.zshrc
plugins=(git zsh-autosuggestions zsh-syntax-highlighting z)
## 重开 termial 生效
```
### 快速跳转 z

oh-my-zsh 自带: [https://github.com/rupa/z](https://github.com/rupa/z)
```shell
cd path/foo/bar
cd ~/zoo
# 进入 path/foo/bar 对应的目录
z bar
# 删除无效路径
z -x trash-path
```

### 语法高亮

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
正确路径会有下划线，正确命令会是绿色。

### 自动提示

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

如果当前有灰色提示，方向上表示使用提示。

### git 简写

oh-my-zsh 自带。
```shell
# git branch -a
gba
# 查看缩写
alias | grep branch
```
## 集成到 VS Code

`settiongs.json` 里增加:

```json
"terminal.integrated.shell.osx": "/bin/zsh"
```

---
## 常见问题

* 安装 `oh-my-zsh` 后出现一些全局命令找不到的错误（如 node）

原因：这是因为在 `oh-my-zsh` 的配置中没有添加（加载）原有环境变量配置。

解决：在 `~/.zshrc` 中增加 `source ~/.profile`（添加所有的原自定义环境变量配置文件），执行 `source ~/.zshrc`。

# LinrFiddler
===========

<img src="https://github.com/Linrstudio/LinrFiddler/blob/master/ui.png?raw=true" />

通过生成自定义脚本，快速配置 Fiddler:

1. 文件及目录映射；
2. 代码注入；
3. 请求忽略等；
4. Fiddler 项目管理；
5. 请求延时；
6. 列出最近修改的文件；

## 下载 Download

请在 [Download](https://github.com/Linrstudio/LinrFiddler/blob/master/download/LinrFiddler-2.7.24.zip?raw=true 'Download') 下载

2015.7 beta

## 视频演示 Video

http://www.tudou.com/programs/view/KqMm9Gg8ilM/

## 使用方法 How to

打开 Fiddler 后，开启 LinrFiddler；第一次使用，请先新建项目；

### 新建项目 New Project

点击 “New” 方块，进入项目新建页。输入项目名称、hosts 及文件映射，点击保存即可；（除项目名称外其他只有一项可为空）

### 修改项目 Config Project

在首页，双击项目方块，进入编辑项目状态；

### 添加文件映射

* 在新建或编辑页面，列表为空是单击即可添加本地文件，不为空时双击任意条目，添加本地文件；您也可以拖放多个文件或文件夹至列表；
* 然后选中一条数据，将剪贴板中的网址粘贴即可映射成功；
* 您还可以手动添加映射内容，点击“手动输入”链接，即可进入文本输入模式，请以这种格式输入：EXACT:url 本地路径

## 代码注入

点击“代码注入”，在输入框中输入想要注入页面的代码，即可。代码会被插入至 &lt;/body&gt; 前。

## 高级

可以在此配置 Fiddler 忽略的数据类型，被忽略的数据不会显示在 Fiddler 列表中。

## 配置当前规则

当您勾选几个项目后，您可以临时配置 Fiddler 规则。例如仅开启哪几个文件映射；

## 开启 Compat Inspector

此功能为 微软 IE 团队提供。当你的 Web 要兼容 IE10 时，开启它可以动态检测兼容性并给出改进建议；

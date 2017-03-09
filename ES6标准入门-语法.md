* /** Created by wxh on 2017/3/6. */ *

### 1. IntelliJ中配置Babel转码器
   - (1). IntelliJ IDEA中首先设置ES6编译环境 : Setting --> languages && Frameworks --> Javascript --> ECMAScript 6
   - (2). 启动Node.js解释器(interpreter) : Setting --> languages && Frameworks --> Node.js && NPM --> 把Node interpreter加载，Node assistance 打开，并且此时Package(包)环境中已经有Babel解释器了。

   
### 2. ES6编译为ES5： (cmd命令窗口完全可以被intelliJ中的Terminal(终端)功能替代，是加上Terminal终端也是调用的cmd.exe程序)

#### (1). 创建package.json文件:  cmd进入到项目文件夹之后 输入 npm init 就可以创建package.json文件了
 
#### (2). 安装Babel的依赖包(node-modules): 进入到项目文件夹后cmd中输入 [ npm install --save-dev babel-cli ]
 
#### (3). 在cmd中进入到当前项目后输入 "type null>.babelrc" 即可创建 .babelrc文件 : .babelrc文件只需要一个属性就是加载preset(预设)编译ES6为ES5  <br/>
          {
             "presets": ["es2015"]
          }
          
#### (4). 安装babel的ES6的preset(预置)把ES6语法转为ES5语法 : [ npm install --save-dev babel-preset-es2015 ]
 
#### (5). 最后一步在当前项目下运行: babel demo1.js -o  xxx.js  [-o 参数或(--out-file)可以将转换后的代码从标准输出重定向只文件 xxx.js]
 
#### (6). 如果是编译整个文件目录: [-d 参数用于转换整个目录] : babel -d build-dir source-dir [注意:build-dir是输出目录，source-dir是被输出目录]，如过希望生成source.map文件，则需要加上 [-s 参数] : babel -d build-dir source-dir -s

*-------------------------------------------------------------------*

###箭头函数讲解:  所谓箭头函数，目的其实就是为了实现函数式的 lambda 表达式的，它本身就是为了函数式而添加进去的新概念，所谓“方便写”只是附带的特性罢了。然而，函数式和面向对象两种编程语言范式是冲突的，冲突的点在于数据组织的方式不一致导致的。面向对象是利用 “对象” 来集合一组数据和方法，而函数式是通过函数来集合一组数据，并且他的方法是和数据分开的。所以在函数式里面不会存在 this 这种上下文概念。所以你在面对对象的领域用函数式的东西，不容易出错才奇怪呢。
      
      


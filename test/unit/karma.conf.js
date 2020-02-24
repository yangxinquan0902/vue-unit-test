var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  config.set({
    // 这里使用的是PhantomJS作为浏览器测试环境，这个插件支持DOM, CSS, JSON, Canvas, and SVG.的解析
    browsers: ['PhantomJS'],
    
    // 下面的测试框架是用来测试js
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    
    // 下面的是用来出报告的
    reporters: ['spec', 'coverage'],
    
    // 关于index.js其实就是把需要测试的文件都require进来，然后一股脑的在上面的browsers里面跑，使用frameworks测试js,通过reporters输出报告
    files: ['./index.js'],
    
    // 下面是为文件制定预处理器，也就是说测试index.js之前用webpack和sourcemap处理一下
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    
    // 下面给webpack指定相关的配置文件
    webpack: webpackConfig,
    
    
    webpackMiddleware: {
      noInfo: true
    },
    
    // 下面是覆盖报告
    // coverage是代码测试覆盖率的一个reporter，也就是说告诉你项目的代码有多少测试了
    // 下面是vue-cli对这个的一个配置
    /*
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
    */

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { 
          type: 'lcov', 
          subdir: function(browser) {
            return browser.toLowerCase().split(/[ /-]/)[0];
          } 
        },
        { type: 'text-summary' }
      ],
      watermarks: {
        // 这将用于设置覆盖阈值颜色。第一个数字是红色和黄色之间的阈值。 第二个数字是黄色和绿色之间的阈值。
        statements: [ 50, 75 ],
        functions: [ 50, 75 ],
        branches: [ 50, 75 ],
        lines: [ 50, 75 ]
      }
    }

  })
}

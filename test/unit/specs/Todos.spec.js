import Vue from 'vue'
import { mount } from '@vue/test-utils';
import Todos from '@/components/Todos'

// import {mount} from '@vue/test-utils'
// const wrapper = mount(Todos);
/*
  	// 寻找定制DOM元素
    console.log(wrapper.find('.list'));
    // 通过VM寻找data中的数据
    console.log(wrapper.vm.list)
*/

describe('Todos.vue', () => {
  // Vue自身提供
  // 创建构造器
  const Constructor = Vue.extend(Todos);
  // 创建 Todos实例，并挂载到一个元素上。
  const This = new Constructor().$mount();
  
  // @vue/test-utils插件提供的挂载方法，方便模拟触发事件
  const wrapper = mount(Todos);
  
  /*
  	对比：
  	Vue:This相当于Vue的子实例
	  	获取数据：This.list
	  	获取DOM元素: This.$el.querySelector('.hello h1')
	  	设置数据:
		      This.todo = 'test'
		      
  	@vue/test-utils
	  	获取数据：wrapper.vm.list
	  	获取DOM元素:wrapper.find('.input')
	  	设置数据:
		  	wrapper.setData({
		      todo: 'test',
		    });
  */
  
  it('测试查看功能', () => {
    expect(This.list.length).to.be.equal(1);
  });
  
  it('测试添加功能', () => {
  	// 模拟添加数据
  	wrapper.setData({
      todo: 'test',
    });
    // 模拟input点击
  	wrapper.find('.input').trigger('keyup.enter');
    expect(wrapper.vm.list[0].txt).to.be.equal('test');
  });
  
  it('测试删除功能', () => {
    // 模拟close点击
  	wrapper.find('.close').trigger('click');
    expect(wrapper.vm.list.length).to.be.equal(1);
  });
  
})

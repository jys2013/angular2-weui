/**
 * 按钮组件
 * @param text 显示文本
 * @param type 类型：（default，primary，warn）
 * @param plain 背景色填充
 * @param size 按钮大小，默认，small
 * @param disabled 无效按钮
 */

import {Component, OnInit} from 'angular2/core';

@Component({
	selector: '[ui-button]',
	template: `<a href="javascript:;" class="weui_btn" [ngClass]="classes">{{text}}</a>`,
	inputs: ['text', 'type','size' ,'disabled', 'plain'],
})

export class ButtonComponent implements OnInit {
	text = '按钮';
	setClass = {};
	type = "default";
	size = "";
	disabled = false;
	plain = false;
	classes={}
	setClasses(){
		this.classes = {
			//type
			weui_btn_default: this.type === 'default' && !this.plain,
			weui_btn_primary: this.type === 'primary'&& !this.plain,
			weui_btn_warn: this.type === 'warn'&& !this.plain,

			weui_btn_plain_default: this.type === 'default' && this.plain,
			weui_btn_plain_primary: this.type === 'primary'&& this.plain,
			weui_btn_plain_warn: this.type === ' warn'&& this.plain,
			//size
			weui_btn_mini: this.size === 'small',

			//disabled
			weui_btn_disabled: this.disabled,
		};
	}
	ngOnInit(){
		this.setClasses()
	}
}
// export default {
//   mounted(el, binding) {
//     el.style.position = 'fixed'
//     // binding.value 是我们传递给指令的值——在这里是 200
//     el.style.top = binding.value + 'px'
//   }

import { createApp } from "vue";
import LoadingIcon from "../components/LoadingIcon.vue";

// }
export default {
	mounted(el, binding) {
		// 插入元素
		const app = createApp(LoadingIcon);
		// console.log(app);
		const instance = app.mount(document.createElement("div"));
		console.log(instance);
		el.instance = instance;
		el.appendChild(el.instance.$el);

		el.style.position = "relative";

		// 提示文字
		if (binding.arg) {
			el.instance.tips = binding.arg;
		}
	},
	updated(el, binding) {
		if (!binding.value) {
			el.removeChild(el.instance.$el);
		} else {
			el.appendChild(el.instance.$el);
		}
	},
};

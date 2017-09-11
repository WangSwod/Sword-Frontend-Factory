function renderApp(newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
	if (newAppState === oldAppState) return; // 数据没有变化就不渲染了
	// console.log("render app...");
	renderTitle(newAppState.title, oldAppState.title);
	renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
	if (newTitle === oldTitle) return; // 数据没有变化就不渲染了
	// console.log("render title...");
	const titleDOM = document.getElementById("title");
	titleDOM.innerHTML = newTitle.text;
	titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
	if (newContent === oldContent) return; // 数据没有变化就不渲染了
	// console.log("render content...");
	const contentDOM = document.getElementById("content");
	contentDOM.innerHTML = newContent.text;
	contentDOM.style.color = newContent.color;
}


// let appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }

// function stateChanger(state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             return { // 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     text: action.text
//                 }
//             }
//         case 'UPDATE_TITLE_COLOR':
//             return { // 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     color: action.color
//                 }
//             }
//         default:
//             return state // 没有修改，返回原来的对象
//     }
// }

function createStore(reducer) {
	let state = null;
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	};
	dispatch({}); // 初始化 state
	return { getState, dispatch, subscribe };
}

function themeReducer(state, action) {
	if (!state) return {
		themeName: "Red Theme",
		themeColor: "red"
	};
	switch (action.type) {
	case "UPATE_THEME_NAME":
		return { ...state, themeName: action.themeName };
	case "UPATE_THEME_COLOR":
		return { ...state, themeColor: action.themeColor };
	default:
		return state;
	}
}

// const store = createStore(appState, stateChanger)
const store = createStore(themeReducer);
store.subscribe(() => renderApp(store.getState())); // 监听数据变化

renderApp(store.getState()); // 首次渲染页面
store.dispatch({ type: "UPDATE_TITLE_TEXT", text: "《React.js 小书》" }); // 修改标题文本
store.dispatch({ type: "UPDATE_TITLE_COLOR", color: "yellow" }); // 修改标题颜色

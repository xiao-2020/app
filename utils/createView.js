export const createView = (id, iconName, rect) => {
	const view = new plus.nativeObj.View(id, rect,
		[{
			tag: 'img',
			id: 'img',
			src: `static/image/${iconName}.png`,
			position: {
				"right": "0",
				"top": "0",
				"width": "100%",
				"height": "100%"
			}
		}]);
	view.show()

}


export const createBackBtn = () => {
	createView('back', 'back', {
		top: '15px',
		left: '20px',
		height: '21px',
		width: '21px'
	})
}

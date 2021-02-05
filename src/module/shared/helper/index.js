export const addChild = (parent, child) => {
	parent.children.push(child)
}

export const createNode = (id, name) => ({
	id,
	actions: name,
	children: []
});

export const generateUniquePaths = (node, path = "") => {
	const log = []

	path += node.id

	if(node.children.length === 0)
		return path

	path += "."


	node.children.forEach(child => {
		const newPaths = generateUniquePaths(child, path)
		log.push(newPaths)
	})

	return log.flat()
}

export const generateAllPaths = (node, path = "") => {
	const log = []

	path += node.id

	log.push(path)

	path += "."


	node.children.forEach(child => {
		const newPaths = generateAllPaths(child, path)
		log.push(newPaths)
	})

	return log.flat()
}


export const getAllWorldLines = (node, path = "", actions = []) => {
	let log = []

	actions = actions.concat(node.actions)
	path += node.id

	log = log.concat({
		...node,
		path, 
		actions 
	})

	path += "."

	node.children.forEach(child => {
		const newActions = getAllWorldLines(child, path, actions)
		log = log.concat(newActions)
	})

	return log
}

export const allWorldLines = (node) => {
	const items = getAllWorldLines(node)
	return items;
}

export const getUniqueWorldLines = (node, path = "", actions = []) => {
	let log = []

	actions = actions.concat(node.actions)
	path += node.id

	if(node.children.length === 0)
		return {
			...node,
			path,
			actions
		}

	path += "."

	node.children.forEach(child => {
		const newPaths = getUniqueWorldLines(child, path, actions)
		log = log.concat(newPaths)
	})

	return log
}

export const uniqueWorldLines = (node) => {
	const items = getUniqueWorldLines(node)
	return items
}
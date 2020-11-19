function inOrder(rootNode) {
    
    if(rootNode.left) {
        inOrder(rootNode.left)
    } 
    console.log(rootNode.data)
    if(rootNode.right) {
        inOrder(rootNode.right)
    } 
}

function findOrAdd(rootNode, newNode) {
    if(rootNode.data > newNode.data) {
        if(rootNode.left) {
            findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode
        }
    } else if(rootNode.data < newNode.data){
        if(rootNode.right) {
            findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode
        }
    } 
    return true
}

function max(rootNode) {
    if(rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
    
}

function min(rootNode) {
    if(rootNode.left) {
        return min(rootNode.left)
    } else {
        return rootNode
    }
}
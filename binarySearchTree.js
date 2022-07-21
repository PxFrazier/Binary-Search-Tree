class Leaf
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree
{
	constructor(data)
	{
		this.root = new Leaf(data);
		this.count = 1;
	}
	
	size()
	{
		return this.count;
	}
	
	insert(data)
	{
		this.count++;
		
		let newNode = new Leaf(data);
		
		const searchTree = node=>{
			if(data < node.data)
			{
				if(!node.left)
				{
					node.left = newNode;
				}
				else
				{
					searchTree(node.left);
				}
			}
			
			else if(data > node.data)
			{
				if(!node.right)
				{
					node.right = newNode;
				}
				else
				{
					searchTree(node.right);
				}
			}
		}
		searchTree(this.root);
	}
	
	min()
	{
		let current = this.root;
		
		while(current.left)
		{
			current = current.left;
		}
		return current.data;
	}
	
	max()
	{
		let current = this.root;
		
		while(current.right)
		{
			current = current.right;
		}
		return current.data;
	}
	
	contains(data)
	{
		let current = this.root;
		
		while(current)
		{
			if(data === current.data)
			{
				return true;
			}
			if(data < current.data)
			{
				current = current.left;
			}
			else
			{
				current = current.right;
			}
		}
		
		return false;
	}
	
	dfsInOrder()
	{
		let result = [];
		
		const traverse = node =>{
			if(node.left)
				traverse(node.left);
			
			result.push(node.data);
			
			if(node.right)
				traverse(node.right);
		}
		
		traverse(this.root);
		return result;
	}
	
	dfsPreOrder()
	{
		let result = [];
		
		const traverse = node=>{
			result.push(node.data);
			
			if(node.left)
				traverse(node.left);
			
			if(node.right)
				traverse(node.right);
		}
		
		traverse(this.root);
		return result;
	}
	
	dfsPostOrder()
	{
		let result = [];
		
		const traverse = node=>{
			if(node.left)
				traverse(node.left);
			
			if(node.right)
				traverse(node.right);
			
			result.push(node.data);
		}
		
		traverse(this.root);
		return result;
	}
	
	bdfs()
	{
		let result = [];
		
		let queue = [];
		
		queue.push(this.root);
		
		while(queue.length)
		{
			let current = queue.shift();
			
			result.push(current.data);
			
			if(current.left)
			{
				queue.push(current.left);
			}
			if(current.right)
			{
				queue.push(current.right);
			}
		}
		
		return result;
	} //Needs a heap sort algorithm later on
}

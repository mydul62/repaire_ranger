const useFunction =()=>{
  const addComment = (tree,commentId,newComment)=>{
     if(tree.id === commentId){
     tree.item.unshift(newComment)
     return tree;
     }
     const updatedItem = tree.item.map((ele)=>(
     addComment(ele,commentId,newComment)
     ))
     return {...tree,item:updatedItem}
  }
  return {addComment}
}

export default useFunction;
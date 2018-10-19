
    function Clone(pHead){
        if(pHead===null){
            return;
        }
        //复制每一个节点，并且将复制的结点放在原本结点的后面
        var currentNode=pHead;
        while(currentNode!==null){
            var clone=new RandomListNode(currentNode.label);
            clone.next=currentNode.next;
            currentNode.next=clone;
            currentNode=clone.next;//假如是A->A'->B，这个currrentnode是指B
        }
        //因为我们要设置复制的结点的random,所以要用clone.random=pHead.random.next
        //而pHead.random.next是在已经链接完毕之后才实现的，所以要重新遍历链表
        //刚开始敲代码的时候，没有设置变量，直接用的pHead,错误；
        //若这样到下面这个循环的时候，pHead就变成尾节点了
       currentNode=pHead;
        while(currentNode){
            if(currentNode.random){//这个判断写成H.next!=null&&H!==null就报错,但是H!==null&&H.next!=null
                currentNode.next.random=currentNode.random.next;
            }
            currentNode=currentNode.next.next;
        }
        //拆分
        var pCloneHead = pHead.next;
        var temp = null;
        currNode = pHead;
        while (currNode.next !== null) {
            tmp = currNode.next;
            currNode.next = tmp.next;
            currNode = tmp;
        }
        return pCloneHead;
        }
    转自http://www.cnblogs.com/echovic/p/6517918.html，侵删
    
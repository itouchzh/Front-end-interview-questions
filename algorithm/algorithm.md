# 数据结构与算法



跟着代码随想录学习数据结构与算法，目标是一个月学完，今天是2022年12月31日

## 第一章 数组

### 1.二分查找

题目特点：给定排序数组

二分查找的关键点在于确定 `left`和 `right`还有 `middle`

1. 例题[Leetcode704](https://leetcode.cn/problems/binary-search/submissions/ "LeetCode")

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # if target in nums:
        #     return nums.index(target)
        # else:
        #     return -1

        left = 0
        right = len(nums) -1 
        while left <= right:
            middle = left + (right - left) // 2
            if nums[middle] > target:
                right = middle -1
            elif nums[middle] < target:
                left = middle + 1
            else:
                return middle
        return -1
```

2. 例题[Leetcode35](https://leetcode.cn/problems/search-insert-position/)

```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right: 
            middle = left + (right-left) // 2
            # print(left,right,middle)
            if nums[middle] < target:
                left = middle + 1
            elif nums[middle] > target:
                right = middle - 1
            else:
                return middle
        return left

```

### 2. 移除元素

思路就是利用两个指针，进行覆盖

[Leetcode27](https://leetcode.cn/problems/remove-element/comments/)

```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        slow = fast = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[slow]  = nums[fast]
                fast = fast + 1
                slow = slow + 1
            else:
                fast += 1
        return slow

```

[Leetcode26](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/) 删除有序数组中的重复项
注意返回新数组长度

```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        fast = slow = 0
        while fast < len(nums):
            if nums[fast] != nums[slow]:
                slow += 1
                nums[slow] = nums[fast]
            fast += 1
        return slow + 1
```

[Leetcode283](https://leetcode.cn/problems/move-zeroes/)移动0

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        slow = fast = 0
        while fast < len(nums):
            if nums[fast] != 0:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        # print(slow)
        for i in range(slow,len(nums)):
            nums[i] = 0
        return nums
```

### 3.有序数组的平方

[Leetcode977](https://leetcode.cn/problems/squares-of-a-sorted-array/)

```python
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        result = [0 for _ in range(len(nums))]
        slow = 0
        fast = len(nums) - 1
        currentLength = len(nums) - 1
        while slow <= fast:
            if nums[slow] ** 2 < nums[fast] ** 2:
                result[currentLength] = nums[fast] ** 2
                fast = fast - 1
            else:
                result[currentLength] = nums[slow] ** 2
                slow = slow + 1
            currentLength = currentLength - 1 
  
        return result
```

## 第二章 链表

### 2.1移除链表元素

- [leetcode203](https://leetcode.cn/problems/remove-linked-list-elements/)   2023年1月1日
  定义一个虚拟头结点，虚拟头结点的下一个指向头结点，再定义一个临时指针，通过这个指针的下一个进行判断。

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummyHead = ListNode()
        dummyHead.next = head
        current = dummyHead
        while current.next:
            if current.next.val == val:
                current.next = current.next.next
            else:
                current = current.next
        return dummyHead.next
```

### 2.2翻转链表

[leetcode206](https://leetcode.cn/problems/reverse-linked-list/)

思路：定义一个当前指针，保留下一个位置temp，然后把目前位置的下一个位置指向前一个位置，再把前一个位置指向当前位置，当前位置指向当前的下一个位置temp。

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre = None
        current = head
        while current:
            temp = current.next
            current.next = pre
            pre = current
            current = temp
        return pre
```

### 2.3 两两交换链表中的节点

[Leetcode24](https://leetcode.cn/problems/swap-nodes-in-pairs/)

```python
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummyHead = ListNode(next=head)
        temp = temp1 = None
        current = dummyHead
        while current.next and current.next.next:
            temp = current.next
            temp1 = current.next.next.next
            current.next = current.next.next
            current.next.next = temp
            temp.next = temp1
            current = current.next.next
        return dummyHead.next

```

### 2.4[删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

Leetcode 19

采用双指针的思想来解题

```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        demmyHead = ListNode(next=head)
        fast = slow = demmyHead
        for i in range(n+1):
            fast = fast.next

        while fast:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next
        return demmyHead.next
```

### 2.5 链表相交

[Leetcode面试题02.07](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/)

找指针地址相同，不是值相同，值相同地址不一定相同，但是地址相同值一定相同，这个从后面往前找。

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        lenA = lenB = 0
        currentA = headA
        currentB = headB
  
        while currentA:
            lenA += 1
            currentA = currentA.next
        while currentB:
            lenB += 1
            currentB = currentB.next

        currentA = headA
        currentB = headB
        # print(lenA,lenB) 
        if lenA > lenB:
            for i in range(lenA-lenB):
                currentA = currentA.next
        if lenB > lenA:
            for i in range(lenB - lenA):
                currentB = currentB.next
        while currentA:
            if currentA == currentB:
                return currentB
            currentA = currentA.next
            currentB = currentB.next
        return None
```

## 第三章 哈希表

### 3.1 有效的字母异位词

[Leetcode242](https://leetcode.cn/problems/valid-anagram/)

数组

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hash = [0 for _ in range(26)]
        print(hash)
        for i in range(len(s)):
            hash[ord(s[i]) - ord('a')] += 1
        for i in range(len(t)):
            hash[ord(t[i]) - ord('a')] -= 1
        if hash.count(0) == 26:
            return True
        return False

```

### 3.2 两个数组的交集

[Leetcode349](https://leetcode.cn/problems/intersection-of-two-arrays/)

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        len1 = len(nums1)
        len2 = len(nums2)
        if len1 > len2:
            for i in range(len2):
                if nums2[i] in nums1 and nums2[i] not in res:
                    res.append(nums2[i])
        else:
            for i in range(len1):
                if nums1[i] in nums2 and nums1[i] not in res:
                    res.append(nums1[i])
        return res
```

采用哈希表

```python
dict_val = {}
        res = []
        for i in nums1:
            dict_val[i] = 1
        # print(dict_val)
        for i in nums2:
            if i in dict_val.keys() and i not in res:
                res.append(i)
        return res
```

### 3.3快乐数

[Leetcode202](https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html)主要是怎么判断是否死循环了

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        def getSum(n:int) -> int:
            Sum = 0
            while n > 0:
                bits = n % 10
                n //= 10
                Sum += bits ** 2
            return Sum
  
        res = set()
  
        while True:
            n = getSum(n)
            if n == 1:
                return True
            if n in res:
                return False
            else:
                res.add(n)
            print(res)
```

### 3.4 两数之和

[Leetcode1](https://leetcode.cn/problems/two-sum/submissions/)

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # for i in range(len(nums)):
        #     for j in range(i+1,len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i,j]
        dict = {}
        for i in range(len(nums)):
            if target - nums[i] not in dict:
                dict[nums[i]] = i
            else:
                return [dict[target - nums[i]],i]
            # print(dict)
```

### 3.5 四数相加II

[Leetcode454](https://leetcode.cn/problems/4sum-ii/)

这个题太绝妙了，两两一组进行分配。

```python
        hashmap = dict()
        count = 0
        for i in nums1:
            for j in nums2:
                if i + j in hashmap.keys():
                    hashmap[i+j] += 1
                else:
                    hashmap[i + j] = 1

        for i in nums3:
            for j in nums4:
                if -(i + j) in hashmap:
                    count += hashmap[-(i + j)]
        return count
```

### 3.6 赎金信

[Leetcode383](https://leetcode.cn/problems/ransom-note/)

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hashmap = {}
        if len(ransomNote) > len(magazine):
            return False
        for i in magazine:
            if i not in hashmap:
                hashmap[i] = 1
            else:
                hashmap[i] += 1
        for i in ransomNote:
            if i not in hashmap or hashmap[i] == 0:
                return False
            else:
                hashmap[i] -= 1
  
        return True

```

## 第四章 字符串

### 4.1 反转字符串

[Leetcode344](https://leetcode.cn/problems/reverse-string/)

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        i = 0
        j = len(s) - 1
        while i <= j:
            temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i += 1
            j -= 1
        return s
```

### 4.2 反转字符串Ⅱ

[Leetcode541](https://leetcode.cn/problems/reverse-string-ii/)

```python
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        i = 0
        res = ''
        while len(res) < len(s):
            s1 = s[ i*k :(i + 2) * k]
            if len(s1) < k:
                res += s1[::-1]
            else:
                res = res + s1[:k][::-1] + s1[k:]
            s1 = ''
            i += 2
        return res
```

### 4.3 替换空格

[Leetcode05](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

```
class Solution:
    def replaceSpace(self, s: str) -> str:
        res = ''
        for i in range(len(s)):
            if ord(s[i]) == 32:
                res += '%20'
            else:
                res += s[i]
        return res
```

### 4.4 反转字符串中的单词

[Leetcode151](https://leetcode.cn/problems/reverse-words-in-a-string/)

```
class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        s = s + ' '
        res = []
        slow = 0
        for i in range(len(s)-1):
            if s[i] != ' ' and s[i+1] == ' ':
                res.append(s[slow:i+1])
            if s[i] == ' ' and s[i+1] != ' ':
                slow = i + 1
        s = ''
        res = res[::-1]
        for i in range(len(res)):
            if i != len(res) - 1:
                s = s + res[i] + ' '
            else:
                s = s + res[i]
        return s
```

### 4.5 找出字符串中第一个匹配的下标

[Leetcode28](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)

暴力解法：

```
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        len_hays = len(haystack)
        len_need = len(needle)
        for i in range(abs(len_hays-len_need) + 1):
            if haystack[i:i + len_need] == needle:
                return i
        return -1
```

KMP算法：

```
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        len_hays = len(haystack)
        len_need = len(needle)
        next = self.getNext(needle)
        p = 0
        for i in range(len_hays):
            while p>0 and needle[p] != haystack[i]:
                p = next[p-1]
            if needle[p] == haystack[i]:
                print(needle[p],haystack[i])
                p += 1
            # print(p)
            if p == len_need:
                return i - len_need+1
        return -1 

    def getNext(self,needle:str):
        next = ['' for _ in range(len(needle))]
        next[0] = 0
        j = 0
        for i in range(1,len(needle)):
            while needle[j] != needle[i] and j > 0:
                j = next[j-1]
            if needle[j] == needle[i]:
                j += 1
            next[i] = j
        return next
  
```

主要是如何求出Next数组

### 4.6重复的子字符串（x）

[Leetcode459](https://leetcode.cn/problems/repeated-substring-pattern/)

```

```

## 第五章 栈和队列

### 5.1删除字符串中所有相邻重复项

[Leetcode1047](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/)

```
class Solution:
    def removeDuplicates(self, s: str) -> str:
        res = list()
        for item in s:
            if res and res[-1] == item:
                res.pop()
            else:
                res.append(item)
        return "".join(res)  # 字符串拼接
```

## 第六章 二叉树

### 6.1 二叉树的遍历

- 前序遍历：中左右
- 中序遍历：左中右
- 后序遍历：左右中
- 层序遍历：广度优先

递归思想：

前序遍历：[Leetcode144](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # 前序遍历是：中左右
        res = []
        def traversal(root):
            if root == None:
                return
            res.append(root.val)
            traversal(root.left)
            traversal(root.right)
        traversal(root)
        return res
```

后序遍历：[Leetcode145](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # 后续遍历是左右中
        res = []
        def traversal(root):
            if root == None:
                return 
            traversal(root.left)
            traversal(root.right)
            res.append(root.val)
        traversal(root)
        return res
```

中序遍历：[Leetcode94](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def traversal(root):
            if root == None:
                return
            traversal(root.left)
            res.append(root.val)
            traversal(root.right)
        traversal(root)
        return res
```

非递归思想：

前序遍历：

```
if not root:
            return []
        stack = [root]
        res = []
        while stack:
            node = stack.pop()
            res.append(node.val)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return res
```

后续遍历：

中序遍历：

### 6.2 二叉树的层序遍历

[Leetcode102](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = [root]
        res = []
        while queue:
            size = len(queue)
            layer=[]
            while size:
                node = queue.pop(0)
                layer.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                size -= 1
            res.append(layer)
        return res
        
```

### 6.3 翻转二叉树

[Leetcode226](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    
        if not root:
            return root
        stack = [root]
        res = []
        while stack:
            node = stack.pop(0)
            if node.left and node.right:
                node.left,node.right = node.right,node.left
            elif node.left:
                node.right,node.left = node.left,None
            elif node.right:
                node.left,node.right = node.right,None
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
            res.append(node)
        # print(res)
        return res[0]
```

### 6.4 对称二叉树

[Leetcode101](https://leetcode.cn/problems/symmetric-tree/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def compareChild(leftChild,rightChild):
            if leftChild == None and rightChild != None: return False
            elif leftChild != None and rightChild == None: return False
            elif leftChild == None and rightChild == None: return True
            elif leftChild.val != rightChild.val: return False

            leftResult = compareChild(leftChild.left,rightChild.right)
            rightResult = compareChild(leftChild.right,rightChild.left)
            return leftResult and rightResult

        if not root:
            return False
        return compareChild(root.left,root.right)
```

### 6.5平衡二叉树

[Leetcode110](https://leetcode.cn/problems/balanced-binary-tree/)

思路：获取左右子树的高度，进行比较

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # 平衡二叉树就是左右子树的高度差小于等于1
        def getHeight(root):
            if not root:
                return 0

            leftHeight = getHeight(root.left)
            if leftHeight == -1:
                return -1
            rightHeight = getHeight(root.right)
            if rightHeight == -1:
                return -1
            res = 0
            if abs(leftHeight - rightHeight) > 1:
                return -1
            return 1 + max(leftHeight,rightHeight)
        res = getHeight(root)
        return res > -1
```

### 6.5 二叉搜索树中的搜索

[Leetcode700](https://leetcode.cn/problems/balanced-binary-tree/)

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root or root.val == val:
            return root
        res = None
        if root.val < val:
            res = self.searchBST(root.right,val)
        else:
            res = self.searchBST(root.left,val)
        return res
```

### 6.6判断是否为完全二叉搜索树

[Leetcode98](https://leetcode.cn/problems/validate-binary-search-tree/)

思路：二叉搜索树，中序遍历，一定是按照顺序来的。

用一个pre记录上一个的值，中序遍历，上一个永远小于下一个。

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    pre = None
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        # 左中右遍历 则一定是按照顺序来的，从小到大
        if not root:
            return True
    
        left = self.isValidBST(root.left)
        if self.pre != None and self.pre.val >= root.val:
            return False
        self.pre = root
        right = self.isValidBST(root.right)

        return left and right
```

## 第七章 回溯算法

### 7.1 组合

[Leetcode77](https://leetcode.cn/problems/combinations/)

```
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        # 采用回溯算法：for 里面套 递归
        # 保存每个叶子节点
        path = []
        # 二维列表，保存结果
        res = []
        # 每次循环开始时候位置
        startIndex = 1
        def backtracking(n,k,startIndex):
            # path 中所放的为叶子节点，大小正好为k就加入到结果中
            if len(path) == k:
                res.append(path[:])
                return
            for startIndex in range(startIndex,n+1):
                path.append(startIndex)
                backtracking(n,k,startIndex + 1)
                path.pop()

        backtracking(n,k,startIndex)
        return res
          
```
优化操作：控制没用的循环
```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        # 采用回溯算法：for 里面套 递归
        # 保存每个叶子节点
        path = []
        # 二维列表，保存结果
        res = []
        # 每次循环开始时候位置
        startIndex = 1
        def backtracking(n,k,startIndex):
            # path 中所放的为叶子节点，大小正好为k就加入到结果中
            if len(path) == k:
                res.append(path[:])
                return
            for startIndex in range(startIndex, n - (k - len(path)) + 2):
                path.append(startIndex)
                backtracking(n,k,startIndex + 1)
                path.pop()

        backtracking(n,k,startIndex)
        return res 

```

### 7.2组合总和Ⅲ

[216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)

```python
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        path = []
        res = []
        def backtracking(k,n,startIndex):
            if len(path) == k:
                if sum(path[:]) == n:
                    res.append(path[:])
                    return
                return
            for i in range(startIndex,9 - (k - len(path)) + 2):
                path.append(i)
                backtracking(k,n,i+1)
                path.pop()
        backtracking(k,n,1)
        return res
```

### 7.3 组合总和

[39. 组合总和](https://leetcode.cn/problems/combination-sum/)

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        path = []
        res = []
        # if sum(candidates[:]) < target:
        #     return []
        def backtracking(candidates,target,startIndex):
            if sum(path[:]) == target:
                res.append(path[:])
                return
            if sum(path[:]) > target:
                return
            for i in range(startIndex,len(candidates)):
                path.append(candidates[i])
                backtracking(candidates,target,startIndex)
                path.pop()
                startIndex += 1
        backtracking(candidates,target,0)
        return res
```

### 7.4 组合总和Ⅱ

[40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)

```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        path = []
        used = [False] * len(candidates)
        candidates.sort()
        def backtracking(Sum,candidates,target,startIndex):
            
            if sum(path[:]) == target:
                res.append(path[:]) 
                return 

            for i in range(startIndex,len(candidates)):
                if Sum + candidates[i] > target:
                    return
                if i > startIndex and candidates[i] == candidates[i-1]:
                    continue
                Sum += candidates[i]
                path.append(candidates[i])
                backtracking(Sum,candidates,target,i+1)
                path.pop()
                Sum -= candidates[i]


        backtracking(0,candidates,target,0)
        return res
```

***

```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        path = []
        used = [False] * len(candidates)
        candidates.sort()
         def backtracking(target,Sum,candidates,startIndex):
            if Sum == target:
                res.append(path[:])
                return 
            
            for i in range(startIndex,len(candidates)):
                if Sum + candidates[i] > target:
                    return
                if i > 0 and candidates[i] == candidates[i-1] and used[i-1] == False:
                    continue
                Sum += candidates[i]
                path.append(candidates[i])
                used[i] = True
                backtracking(target,Sum,candidates,i + 1)
                path.pop()
                Sum -= candidates[i]
                used[i] = False
        backtracking(target,0,candidates,0)

        return res
```

### 7.5 分割回文串

[131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []
        path = []

        def backtracking(s,startIndex):
            if startIndex >= len(s):
                res.append(path[:])
                return 
            for i in range(startIndex,len(s)):
                temp = s[startIndex:i+1]
                if temp == temp[::-1]:
                    path.append(temp)
                    backtracking(s,i+1)
                    path.pop()
                else:
                    continue
        backtracking(s,0)
        return res
```

### 7.6 子集

[78. 子集](https://leetcode.cn/problems/subsets/)

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        path = []

        def backtracking(nums,startIndex):
            
            res.append(path[:])
            for i in range(startIndex,len(nums)):

                path.append(nums[i])
                backtracking(nums,i+1)
                path.pop()

        backtracking(nums,0)
        return res
```

### 7.7 子集Ⅱ

[90. 子集 II](https://leetcode.cn/problems/subsets-ii/)

```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        path = []
        nums.sort()
        def backtracking(nums,startIndex):

            if path not in res:
                res.append(path[:])
                 
            for i in range(startIndex,len(nums)):
                path.append(nums[i])
                backtracking(nums,i+1)
                path.pop()

        backtracking(nums,0)
        return res
```

### 7.8 全排列

[46. 全排列](https://leetcode.cn/problems/permutations/)

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        path = []

        def backtracking(nums,startIndex):
            if len(path) == len(nums):
                res.append(path[:])
                return

            for i in range(0,len(nums)):
                if nums[i] not in path:
                    path.append(nums[i])
                else:
                    continue
                backtracking(nums,0)
                path.pop()
        backtracking(nums,0)
        return res
```

### 7.9全排列Ⅱ

[47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)

```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        path = []
        used = [False] * len(nums)
        nums.sort()
        def backtracking(nums,startIndex):
            if len(path) == len(nums):
                res.append(path[:])
                return 
            for i in range(startIndex,len(nums)):
                if i>0 and nums[i] == nums[i-1] and used[i-1] == False:
                    continue
                if used[i]:
                    continue
                used[i] = True
                path.append(nums[i])
                backtracking(nums,0)
                path.pop()
                used[i] = False

        backtracking(nums,0)
        return res
```

### 7.10 重新安排行程

未通过

[332. 重新安排行程](https://leetcode.cn/problems/reconstruct-itinerary/)

```python
class Solution:
    def __init__(self):
        self.current = 'JFK'
        self.path = []
        self.dict = {}
    def getTimes(self,tickets):
        for i in tickets:
            for j in i:
                if j not in self.dict:
                    self.dict[j] = 1
                else:
                    self.dict[j] += 1                
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        res = []
        def backtracking(tickets):
            if not tickets:
                return
            j = 0
            for i in range(len(tickets)): 
                if tickets[i][0] == self.current:
                    if not self.path:
                        self.path = tickets[i][:]
                        j = i
                    if tickets[i] < self.path and self.dict[tickets[i][1]] > 1:
                        self.path = tickets[i][:]
                        j = i
            res.append(self.current)
            self.current = self.path[1]
            self.dict = {}
            self.getTimes(tickets)
            tickets.pop(j)
            if len(tickets) == 0:
                res.append(self.path[1])
            self.path = []
            backtracking(tickets)
        backtracking(tickets)
        return res

```

### 7.11 N皇后

[51. N 皇后](https://leetcode.cn/problems/n-queens/)

```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        if not n: return []
        board = [['.'] * n for _ in range(n)]
        res = []

        # 判断该位置是否冲突：棋盘，行，列
        # 因为遍历是从上往下从左往右的，所以不需要判断左下角和右下角和行，因为每行指定放一个
        def isVaild(board,row,col):
            # 判断同一列
            for i in range(len(board)):
                if board[i][col] == 'Q':
                    return False
            
            # 判断左上角：
            i = row - 1
            j = col - 1
            while i>=0 and j >= 0:
                if board[i][j] == 'Q':
                    return False
                i -= 1
                j -= 1
            
            # 判断右上角是否冲突
            i = row - 1
            j = col + 1
            while i>=0 and j < len(board):
                if board[i][j] == 'Q':
                    return False
                i -= 1
                j += 1
            return True
        
        def backtracking(board, row, n):
            if row == n:
                temp_res = []
                for temp in board:
                    temp_str = ''.join(temp)
                    temp_res.append(temp_str)
                res.append(temp_res)
            for col in range(n):
                if isVaild(board,row,col):
                    board[row][col] = 'Q'
                    backtracking(board,row + 1,n)
                    board[row][col] = '.'
        backtracking(board,0,n)
        return res        
```

## 第八章 贪心算法

### 8.1分饼干

[455. 分发饼干](https://leetcode.cn/problems/assign-cookies/)

```python
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        res = 0
        for i in range(len(s)):
            if res < len(g) and s[i] >= g[res]:
                res += 1
        return res

```

### 8.2 最大子数组和

[53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        _max = float("-inf")
        Sum = 0
        for i in range(len(nums)):
            Sum += nums[i]
            if Sum > _max:
                _max = Sum
            if Sum < 0:
                Sum = 0
        return _max

```

### 8.3 摆动序列

[376. 摆动序列](https://leetcode.cn/problems/wiggle-subsequence/)

```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        if len(nums) == 2:
            return 2 if nums[0] != nums[1] else 1
        res = []
        res.append(nums[0])
        count = 0
        for i in range(1,len(nums)):
            if nums[i] != res[0]:
                res.append(nums[i])
                count = i
                break
            if i == len(nums)-1:
                return 1
        flag = res[1] - res[0]
        for i in range(count+1,len(nums)):
            if flag > 0:
                if nums[i] - res[-1] < 0:
                    res.append(nums[i])
                if nums[i] > res[-1]:
                    res.pop()
                    res.append(nums[i])
            elif flag < 0:
                if nums[i] - res[-1] > 0:
                    res.append(nums[i])
                if nums[i] < res[-1]:
                    res.pop()
                    res.append(nums[i])
            flag = res[-1] - res[-2]    
        return len(res)
            
```

***

```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        norepet = [nums[0]]
        for i in range(1,len(nums)):
            if i > 0 and nums[i] != nums[i-1]:
                norepet.append(nums[i])
        if len(norepet) == 1:
            return 1
        if len(norepet) == 2:
            return 2
        res = []
        res.append(norepet[0])
        res.append(norepet[1])
        flag = res[1] - res[0]
        for i in range(2,len(norepet)):
            if flag > 0:
                if norepet[i] - res[-1] < 0:
                    res.append(norepet[i])
                if norepet[i] > res[-1]:
                    res.pop()
                    res.append(norepet[i])
            elif flag < 0:
                if norepet[i] - res[-1] > 0:
                    res.append(norepet[i])
                if norepet[i] < res[-1]:
                    res.pop()
                    res.append(norepet[i])
            flag = res[-1] - res[-2]    
        return len(res)
```

### 8.4 买股票的最佳时机Ⅱ

[122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        for i in range(1,len(prices)):
            res += max(prices[i] - prices[i-1],0)
        return res
```

### 8.5 跳跃游戏

[55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        cover = 0
        if len(nums) == 1: return True
        i = 0
        # python不支持动态修改for循环中变量,使用while循环代替
        while i <= cover:
            cover = max(i + nums[i], cover)
            if cover >= len(nums) - 1: return True
            i += 1
        return False
```

### 8.6加油站

[134. 加油站](https://leetcode.cn/problems/gas-station/)

```python
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        # 贪心算法
        curSum = 0
        start = 0
        for i in range(len(gas)):
            curSum += gas[i] - cost[i]
            if curSum < 0:
                curSum = 0
                start = i+1
        return start if sum(gas)-sum(cost) >= 0 else -1    
```

### 8.7 分发糖果

[135. 分发糖果](https://leetcode.cn/problems/candy/)

```python
class Solution:
    def candy(self, ratings: List[int]) -> int:
        candyVec = [1] * len(ratings)

        for i in range(1,len(ratings)):
            if ratings[i] > ratings[i-1]:
                candyVec[i] = candyVec[i-1] + 1
        
        for j in range(len(ratings)-2,-1,-1):
            if ratings[j] > ratings[j+1]:
                candyVec[j] = max(candyVec[j+1]+1,candyVec[j])
        return sum(candyVec)
```

### 8.8 柠檬水找零

[860. 柠檬水找零](https://leetcode.cn/problems/lemonade-change/)

```python
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        # 贪心算法
        dict = {
            5:0,
            10:0,
            20:0
        }
        for i in range(len(bills)):
            if bills[i] == 5:
                dict[bills[i]] += 1
            if bills[i] == 10:
                if dict[5] > 0:
                    dict[5] -= 1
                    dict[bills[i]] += 1
                else:
                    return False
            if bills[i] == 20:
                if dict[10] > 0 and dict[5] > 0:
                    dict[10] -= 1
                    dict[5] -= 1
                    dict[bills[i]] += 1
                elif dict[5] > 2:
                    dict[5] -= 3
                    dict[bills[i]] += 1
                else:
                    return False
        return True
```

***

### 8.9 用最少的弓箭引爆气球

[452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

```python
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        # 贪心算法
        # 求最大公共子序列
        points.sort()
        count = 1
        # [[1, 6], [2, 8], [7, 12], [10, 16]]
        for i in range(1, len(points)):
            if points[i][0] > points[i-1][1]:
                count += 1
            else:
                points[i][1] = min(points[i][1],points[i-1][1])
        return count
```

### 8.10 无重叠区间

[435. 无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/)

```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        # 贪心
        intervals.sort(reverse=True)
        res = 0
        j = 0
        for i in range(1,len(intervals)):
            if intervals[i][1] > intervals[j][0]:
                res += 1
            else:
                j = i 
        return res
```

### 8.11 划分字母区间

[763. 划分字母区间(Medium)](https://leetcode.cn/problems/partition-labels/)

思路：

1. 从第一个字符开始比较，如果这个字符在后面依然出现，就把下一个字符加到字符串里面
2. 当第一个字符在后面不出现了，就进入while循环遍历字符串cur后面的字符，如果后面的字符依然出现在s里面，就继续把当前字符加进来，直到不再出现。那么cur就是一个分割好的字符串。这时把cur的第一个字符放当前字符，继续比较。

```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        # 贪心算法
        j = 0
        # 结果数组
        res = []
        # 保存分割的字符串
        cur = s[0]
        for i in range(1, len(s)):
            if cur[j] in s[i:]:
                cur += s[i]
            else:
                while j < len(cur):
                    if cur[j] in s[i:]:
                        cur+=s[i]
                        break
                    else:
                        j += 1
                if j == len(cur):
                    res.append(len(cur))
                    cur = s[i]
                    j = 0
        res.append(len(cur))
        return res
```

### 8.12 合并区间

思想：

1. 首先进行排序，按照左边界进行排序

2. 取已经合并的区间的最大范围，再和下一个区间进行比较

3. 如果当前区间和前一个区间没有重叠就直接加入到res中

4. 如果有重叠，就计算范围后，把前一个删除，把当前的放进去

[56. 合并区间Medium](https://leetcode.cn/problems/merge-intervals/)

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # if len(intervals) == 1:
        #     return intervals
        # 首先按照左边界的顺序进行排序
        intervals.sort()
        res = [intervals[0]]
        for i in range(1,len(intervals)):
            if intervals[i][0] <= res[-1][1]:
                left = min(res[-1][0],intervals[i][0])
                right = max(res[-1][1],intervals[i][1])
                res.pop()
                res.append([left,right])
            else:
                res.append(intervals[i])
        return res

```

***

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # if len(intervals) == 1:
        #     return intervals
        # 首先按照左边界的顺序进行排序
        intervals.sort()
        res = [intervals[0]]
        for i in range(1,len(intervals)):
            if intervals[i][0] <= res[-1][1]:
                left = min(res[-1][0],intervals[i][0])
                res[-1] = [res[-1][0],max(res[-1][1],intervals[i][1])]
            else:
                res.append(intervals[i])
        return res
```



## 第九章 动态规划

1. 确定dp数组（dp table）以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组

### 9.1 斐波那契

```python
class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        return self.fib(n-1) + self.fib(n-2)
```

### 9.2 爬楼梯

[70. 爬楼梯（Simple）](https://leetcode.cn/problems/climbing-stairs/)

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 1: return n
        dp = [0] * 2
        dp[0] = 1
        dp[1] = 2
        for i in range(2,n):
            dp.append(dp[i-1] + dp[i-2])
        return dp[n-1]
```



### 9.3 爬楼梯的最小花费

[746. 使用最小花费爬楼梯(Simple)](https://leetcode.cn/problems/min-cost-climbing-stairs/)

思路：

1. 确定dp数组并且初始化
2. dp数组的值对应着最小的花费
3. 跳上第一个台阶需要花费0，跳上第二个台阶需要花费0
4. 再往后的台阶可以通过前一台阶跳一次或者前两个台阶跳两次

也就是$dp[i] = dp[i-1] + cost[i-1]$和$dp[i] = dp[i-2] + cost[i-2]$，所以需要取最小值即可
$$
dp[i]=min(dp[i-1] + cost[i-1],dp[i-2] + cost[i-2])
$$

```python
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # 动态规划
        dp = [0,0]
        for i in range(2,len(cost)+1):
            dp.append(min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]))
        return dp[len(cost)]
```

### 9.4 不同路径

[62. 不同路径（Medium）](https://leetcode.cn/problems/unique-paths/)

![image-20230108104552659](C:\Users\kissber\AppData\Roaming\Typora\typora-user-images\image-20230108104552659.png)

思路：

1. 从头走到尾，首先确定dp数组含义，设置二维dp数组，其含义为`dp[i][j]`代表走到`(i,j)`的路径有几条。

2. 初始化dp数组，先把每个位置都置为0，然后把左边界和上边界都置为1，因为只有一条路径能够到达，且后面的路径都需要从左边和上边进行计算

3. 确定dp公式：当`(i,j)`都不为0的时候
   $$
   dp[i][j] = dp[i-1][j] + dp[i][j-1]
   $$

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # 动态规划
        # 开始点为dp[0][0] 
        dp = [[0]*(n)]*(m)
        for i in range(m):
            dp[i][0] = 1
        for j in range(n):
            dp[0][j] = 1
        for i in range(1,m):
            for j in range(1,n):
                dp[i][j] = dp[i][j-1] + dp[i-1][j]
        return dp[-1][-1]
```

### 9.5 不同路径Ⅱ

[63. 不同路径 II](https://leetcode.cn/problems/unique-paths-ii/)

思路：

1. 和上一题一样，主要在于初始化的时候要注意，如果前面有石头，后面都不能走到了
2. ！！！注意，二维列表初始化的时候一定要用如下操作，不然会出错，逻辑错误!!!!!!!!!!

```python
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0] == 1 or obstacleGrid[-1][-1] == 1:
            return 0
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = 1
        for i in range(1,m):
            if obstacleGrid[i][0] == 0:
                dp[i][0] = 1
            else:
                break
        for i in range(1,n):
            if obstacleGrid[0][i] == 0:
                dp[0][i] = 1
            else:
                break
        for i in range(1,m):
            for j in range(1,n):
                if obstacleGrid[i][j] == 0:
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]
        return dp[-1][-1]
```

### 9.6 拆分整数

[343. 整数拆分(Medium)](https://leetcode.cn/problems/integer-break/)

思路：

1. 尽可能拆成相同的数字

2. $dp$数组的含义：`i`代表这个数字，`dp[i]`代表能够拆出来的最大乘积。

3. 对于数字`i`来讲，可以有两种拆法，一种是拆成2个数字，一种是拆成3个及以上。

   - 拆成2个数字的结果为$dp[i]=j*(i-j)$,这里$j$代表拆出来的第一个数字，那么$i-j$就代表第二个数字了。
   - 另外一种的结果为$dp[i]=j*dp[i-j]$,将一个数字拆出来，另外一个继续拆分。

   最终结果取最大值即可。

```python
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n+1)
        dp[0] = 0
        dp[1] = 0
        dp[2] = 1
        for i in range(3,n+1):
            for j in range(i//2+1):
                dp[i] = max(dp[i],j*dp[i-j],j*(i-j))
        return dp[n]
```

### 9.7 0-1背包

问题描述：0-1背包就是有一个背包，有一些物品，背包有一定的体积，物品也有一定的体积，要怎么放才能使得背包能够放置价格最大的物品，每个物品只有一个。

思路：

1. $dp$数组确定，$dp$数组设置为二维数组，里面的`i`和`j`分别表示当前`dp[i][j]`从取$(0-i)$个物品放在容量为$j$的背包里。

2. 确定`dp`公式，当前的$dp[i][j]$表示可以考虑有两点

   - 当前位置放这个物品以及当前位置不放这个物品
   - 当不放物品时，$dp[i][j] = dp[i-1][j]$
   - 当放这个物品时，$dp[i][j]=dp[i-1][j-V[i]]+Price[i]$,含义为先把这个物品的体积去除，再把价钱加上。
   - 最终需要取最大值：因此推导公式为：

   $$
   dp[i][j]=max(dp[i-1][j],dp[i-1][j-V[i]]+Price[i])
   $$

3. 初始化$dp$数组，可以考虑当前的$dp[i][j]$是怎么来的，第一个是需要$dp[i-1][j]$,第二个是需要$dp[i-1][j-V[i]]$,所以需要正上方和左上方的值，因此需要初始化$dp[0][j]和dp[i][0]$，也就是最上面一排和最左面一排。注：初始化的时候需要考虑背包容量和物品容量，如果物品体积>背包容量，是不能放置的。

<img src="C:\Users\kissber\AppData\Roaming\Typora\typora-user-images\image-20230109092048184.png" alt="image-20230109092048184" style="zoom: 50%;" />

```python
def one_zero_bag(bag_size,weight,value):
    rows,cols = len(weight),bag_size+1
    dp = [[0]*cols for _ in range(rows)]

    # 初始化dp数组
    for i in range(rows):
        dp[i][0] = 0
    first_item_weight,first_item_value = weight[0],value[0]
    for j in range(1,cols):
        if first_item_weight <= j:
            dp[0][j] = first_item_value
    
    # 更新dp数组,先遍历物品，再遍历背包
    for i in range(1,len(weight)):
        cur_weight,cur_val = weight[i],value[i]
        for j in range(1, cols):
            if cur_weight > j:
                dp[i][j] = dp[i-1][j]
            else:
                dp[i][j] = max(dp[i-1][j],dp[i-1][j-cur_weight]+cur_val)
    print(dp)
    return dp[rows-1][cols-1]
if __name__ == "__main__": 
    bag_size = 4
    weight = [1, 3, 4]
    value = [15, 20, 30]
    res = one_zero_bag(bag_size, weight, value)
    print(res) # 35
```

***

一维$dp$数组解决
$$
dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
$$

```python
def test_1_wei_bag_problem():
    weight = [1, 3, 4]
    value = [15, 20, 30]
    bag_weight = 4
    # 初始化: 全为0
    dp = [0] * (bag_weight + 1)

    # 先遍历物品, 再遍历背包容量
    for i in range(len(weight)):
        # 倒序遍历，最大范围是到weight[i],因为背包体积必须大于物品体积，所以最大范围是到j == weight[i]，倒序遍历，所以是bag_weight到weight[i]-1
        for j in range(bag_weight, weight[i] - 1, -1):
            # 递归公式
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i])

    print(dp)

test_1_wei_bag_problem()
```

### 9.8 分割等和子集（0-1背包）

[416. 分割等和子集(Medium)](https://leetcode.cn/problems/partition-equal-subset-sum/)

思路：

转化为0-1背包问题。

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        # 背包问题
        # 分割为两个子集，且元素的和相等，那么也就是每个子集各有元素和的一半
        # 元素和必为偶数。
        Sum = sum(nums)
        if Sum % 2 != 0:
            return False
        # 背包的体积为j,看数组中能不能正好填满背包，如果能就可以
        bag_weight = Sum // 2
        dp = [0] * (bag_weight+1)
        # i为物品，j为背包体积
        for i in range(len(nums)):
            for j in range(bag_weight,nums[i]-1,-1):
                dp[j] = max(dp[j],dp[j-nums[i]]+nums[i])
        return dp[bag_weight] == bag_weight
```

### 9.9 最后一块石头重量（0-1背包）

[1049. 最后一块石头的重量 II（Medium）](https://leetcode.cn/problems/last-stone-weight-ii/)

思路：

1. 转化为背包问题
2. 如果列表正好能划分为一半一半，结果就是0，如果不能，就尽量往中间靠拢。所以背包的最大体积就是$middle$,看这个背包最多能装多少，那么剩下的就是另外一半，二者的差值就是结果。

```python
class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        # 背包
        middle = sum(stones) // 2
        dp = [0] * (middle+1)
        for i in range(len(stones)):
            for j in range(middle,stones[i]-1,-1):
                dp[j] = max(dp[j],dp[j-stones[i]]+stones[i])

        return sum(stones) - 2 * dp[middle]
```

### 9.10 目标和（0-1背包）

没明白

[494. 目标和（Medium）](https://leetcode.cn/problems/target-sum/)

```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        bigSize = (target + sum(nums)) // 2
        if abs(target) > sum(nums) or (target + sum(nums)) % 2 == 1:
            return 0
        # 0-1 背包
        dp = [0]*(bigSize+1)
        dp[0] = 1
        for i in range(len(nums)):
            for j in range(bigSize,nums[i]-1,-1):
                dp[j] += dp[j-nums[i]]
        return dp[bigSize]
```



### 9.11 0和1（0-1背包）

[474. 一和零(Medium)](https://leetcode.cn/problems/ones-and-zeroes/)

思路：把m和n都看成背包体积，物品体积为当前字符串有几个0和1。

```python
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        # 背包问题
        # 初始化的时候是先列后行
        dp = [[0] * (n+1) for _ in range(m+1)]
        print(dp)
        for str in strs:
            ones = str.count('1')
            zeros = str.count('0')

            for i in range(m, zeros-1,-1):
                for j in range(n,ones-1,-1):
                    dp[i][j] = max(dp[i][j],dp[i-zeros][j-ones]+1)
        return dp[m][n]
            
```

### 9.12 零钱兑换Ⅱ（完全背包）

[518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)

思路：求组合的话，就用累加的$dp$推导公式

```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        # 完全背包问题
        dp = [0] * (amount+1)
        dp[0] = 1
        for i in range(len(coins)):
            for j in range(coins[i],amount+1):
                dp[j] += dp[j-coins[i]]
                # dp[j] = max(dp[j],dp[j-coins[i]]+coins[i])
        
        return dp[amount]
```

### 9.13 组合总和（完全背包）

思路：

完全背包，先遍历背包，再遍历物品是组合，现遍历物品，再遍历背包是排列。

[377. 组合总和 Ⅳ(Medium)](https://leetcode.cn/problems/combination-sum-iv/)

```python
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        # 背包
        dp = [0] * (target+1)
        dp[0] = 1

        for j in range(1,target+1):
            for i in range(len(nums)):
                
                if j >= nums[i]:
                    
                    dp[j] += dp[j-nums[i]]
        return dp[target]
   
```

### 9.14 零钱兑换

[322. 零钱兑换（Medium）](https://leetcode.cn/problems/coin-change/)

思路：最小就是考虑到min，如果放当前的越小，那么就+1次。初始化要初始化较大值。

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount+1] * (amount+1)
        dp[0] = 0
        for i in range(len(coins)):
            for j in range(coins[i],amount+1):
                dp[j] = min(dp[j],dp[j-coins[i]]+1)
        
        return dp[amount] if dp[amount] < amount+1 else -1

```

### 9.15 打家劫舍

[198. 打家劫舍(Medium)](https://leetcode.cn/problems/house-robber/)

思路：

1. 确定$dp$公式代表的含义。在下标为`i`以内也就是`0-i`所能偷盗的最大价值为$dp[i]$

2. 确定推导公式：$dp[i]$所能获取的最大价值和前一个与前两个有关，如果前一个被偷，那么就不能偷当前的。如果前一个没被偷，就可以选择偷当前的。因此：
   $$
   dp[i]=max(dp[i-1],dp[i-2]+nums[i])
   $$

3. 初始化$dp$数组，$dp[0]$为第一个数值， $dp[1]$为前两个数值中最大的。




```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[0],nums[1])
        for i in range(2,len(nums)):
            dp[i] = max(dp[i-1],dp[i-2] + nums[i])
        return dp[-1]
```

### 9.16 打家劫舍Ⅱ

[213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)

思路：两种情况，抢第一个不抢最后一个或者抢最后一个不抢第一个。

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        dp = [0] * len(nums)
        # 不取第一个
        dp[0] = 0
        dp[1] = nums[1]
        
        for i in range(2,len(nums)):
            dp[i] = max(dp[i-1],dp[i-2]+nums[i])
        # 不取最后一个
        dp1 = [0] * (len(nums))
        # 取第一个
        dp1[0] = nums[0]
        dp1[1] = max(nums[0],nums[1])
        for i in range(2,len(nums)-1):
            dp1[i] = max(dp1[i-1],dp1[i-2]+nums[i])
        return max(dp[-1],dp1[-2])
```

### 9.17 买股票的最佳时机

[121. 买卖股票的最佳时机(Medium)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

思路：

​    1. 确定$dp$数组含义。$dp[i][0]$代表这天持有股票的最大利润，$dp[i][1]$代表不持有股票的最大利润

​    2.推导$dp$公式, 如果当天持有，那么可能前一天也持有，或者前一天没持有今天才买

​    $dp[i][0] = max(dp[i-1][0],dp[i-1][1] - price[i])$

​    如果当天不持有，那么前一天可能不持有或者今天卖了

​    $dp[i][1] = max(dp[i-1][1],dp[i-1][0]+price[i])$

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # 贪心解法
        res = 0
        left = float('inf')
        for i in range(len(prices)):
            left = min(left,prices[i])
            res = max(res,prices[i]-left)
        return res
        # 动态规划
        # 1. 确定dp数组含义。dp[i][0]代表这天持有股票的最大利润
        # dp[i][1]代表不持有股票的最大利润
        # 2.推到dp公式
        # 如果当天持有，那么可能前一天也持有，或者前一天没持有今天才买
        # dp[i][0] = max(dp[i-1][0],dp[i-1][1] - price[i])
        # 如果当天不持有，那么前一天可能不持有或者今天卖了
        # dp[i][1] = max(dp[i-1][1],dp[i-1][0]+price[i])
        dp = [[0]*2 for _ in range(len(prices))]
        dp[0][0] = -prices[0]
        dp[0][1] = 0
        for i in range(1,len(prices)):
            dp[i][0] = max(dp[i-1][0],-price[i])
            dp[i][1] = max(dp[i-1][1],dp[i-1][0]+price[i])
        return dp[-1][1]
```

### 9.18 买股票的最佳时机Ⅱ

[122. 买卖股票的最佳时机 II(Medium)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

思路：同上，推导公式略有不同

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # 贪心
        # res = 0
        # for i in range(1,len(prices)):
        #     res += max(prices[i] - prices[i-1],0)
        # return res
        # 动态规划
        dp = [[0] * 2 for _ in range(len(prices))]
        # dp[0][0] 代表持有，dp[0][1]代表不持有
        dp[0][0] = -prices[0]
        dp[0][1] = 0
        for i in range(1,len(prices)):
            dp[i][0] = max(dp[i-1][0],dp[i-1][1]-prices[i])
            dp[i][1] = max(dp[i-1][1],dp[i-1][0]+prices[i])
        return dp[-1][1]
```

### 9.19 买股票的最佳时机Ⅲ

[123. 买卖股票的最佳时机 III(hard)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)

思路：同上，就是需要多设定状态。

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = [[0] * 5 for _ in range(len(prices))]
        # 0 表示不做操作，1表示第一次持有，2表示第一次卖出，3表示第二次持有，4表示第二次卖出
        # temp 为第一次交易获得的利润
        dp[0][0] = 0
        dp[0][1] = -prices[0]
        dp[0][2] = 0
        dp[0][3] = -prices[0]
        dp[0][4] = 0

        for i in range(1,len(prices)):
            dp[i][0] = dp[i-1][0]
            dp[i][1] = max(dp[i-1][1],dp[i-1][0]-prices[i])
            dp[i][2] = max(dp[i-1][2],dp[i-1][1]+prices[i])
            dp[i][3] = max(dp[i-1][3],dp[i-1][2]-prices[i])
            dp[i][4] = max(dp[i-1][4],dp[i-1][3]+prices[i])

        return dp[-1][4]
```



### 9.20 买股票的最佳时机Ⅳ

[188. 买卖股票的最佳时机 IV(Hard)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

思路：用$2k+1$个状态来表示买入和卖出，注意初始化，在最后前买入

```python
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        # 定义大小为2K+1表示状态
        dp = [[0] * (2 * k+1) for _ in range(len(prices))]
        
        for i in range(1,2*k,2):
            dp[0][i] = -prices[0]
        for i in range(1,len(prices)):
            for j in range(0, 2 * k,2):
                dp[i][j+1] = max(dp[i-1][j+1],dp[i-1][j]-prices[i])
                dp[i][j+2] = max(dp[i-1][j+2],dp[i-1][j+1]+prices[i])
        return dp[-1][-1]
```

### 9.21 买股票包含冷冻期

[309. 最佳买卖股票时机含冷冻期(Medium)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

思路：定义状态很困难，不容易想出来。

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = [[0]*4 for _ in range(len(prices))]
        # 0 持有状态，1 保持卖出，2当天卖出，3冷冻期
        dp[0][0] = -prices[0]
        dp[0][1] = 0
        dp[0][2] = 0
        dp[0][3] = 0
        for i in range(1,len(prices)):
            dp[i][0] = max(dp[i-1][0], max(dp[i-1][1]-prices[i],dp[i-1][3]-prices[i]))
            dp[i][1] = max(dp[i-1][1],dp[i-1][3])
            dp[i][2] = dp[i-1][0]+prices[i]
            dp[i][3] = dp[i-1][2]
        return max(dp[-1][1],dp[-1][2],dp[-1][3])
```

### 9.22 买股票包含手续费

[714. 买卖股票的最佳时机含手续费(Medium)](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

思路：考虑卖出的时候需要额外减掉一个手续费

```python
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        # 定义状态
        # 0 表示持有，1表示不持有
        dp = [[0] * 2 for _ in range(len(prices))]
        dp[0][0] = -prices[0]
        for i in range(1,len(prices)):
            dp[i][0] = max(dp[i-1][0], dp[i-1][1]-prices[i])
            dp[i][1] = max(dp[i-1][1],dp[i-1][0] + prices[i] - fee)

        return dp[-1][-1]
```

### 9.23 最长递增子序列

[300. 最长递增子序列(Medium)](https://leetcode.cn/problems/longest-increasing-subsequence/)

思路：

1. $dp[i]$的含义。
2. 用$dp[i]$与$i$之前的进行比较，用$j$代表。

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # dp数组含义，dp[i]表示以nums[i]结尾的最长递增子序列.
        dp = [1] * (len(nums))
        for i in range(1, len(nums)):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)
```

### 9.24 最长连续递增序列

[674. 最长连续递增序列](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/)

思路：

如果`nums[i]>nums[i-1]`那么 `dp[i]=dp[i-1]+1`。

```python
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        # left = right = 0
        # res = 1
        # for i in range(1, len(nums)):
        #     if nums[i] > nums[i-1]:
        #         right += 1
        #     else:
        #         res = max(res,right-left+1)
        #         left = right
        # res = max(res,right-left+1)
        # return res
        # 动态规划
        # 
        dp = [1] * len(nums)
        for i in range(1,len(nums)):
            if nums[i] > nums[i-1]:
                dp[i] = dp[i-1] + 1
        return max(dp)
```



### 9.25 最长重复子数组

[718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

```python
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:

        dp = [[0] * (len(nums2)+1) for _ in range(len(nums1) + 1)]
        res = 0
        for i in range(1,len(nums1)+1):
            for j in range(1,len(nums2)+1):
                if nums1[i-1] == nums2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                res = max(res, dp[i][j])
        # print(dp)
        return res
```

### 9.26 不相交的线

[1035. 不相交的线(Medium)](https://leetcode.cn/problems/uncrossed-lines/)

```python
class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
        # 与最长重复子序列一样
        # 
        dp = [[0] * (len(nums2)+1) for _ in range(len(nums1) + 1)]
        for i in range(1, len(nums1)+1):
            for j in range(1, len(nums2)+1):
                if nums1[i-1] == nums2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[-1][-1]

```

### 9.27 最长公共子序列

[1143. 最长公共子序列(Medium)](https://leetcode.cn/problems/longest-common-subsequence/)

```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # 和不相交的线一样
        # dp[i][j] 表示 text1[i-1] 和 text2[j-1] 的最长公共子序列
        dp = [[0] * (len(text2) + 1) for _ in range(len(text1) + 1)]

        for i in range(1,len(text1) + 1):
            for j in range(1, len(text2) + 1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        print(dp)
        return dp[-1][-1]
```

### 9.28 最大子数组和

[53. 最大子数组和(Medium)](https://leetcode.cn/problems/maximum-subarray/)

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # 贪心
        # _max = float("-inf")
        # Sum = 0
        # for i in range(len(nums)):
        #     Sum += nums[i]
        #     if Sum > _max:
        #         _max = Sum
        #     if Sum < 0:
        #         Sum = 0
        # return _max
        # 动态规划
        # dp[i] 的含义为以nums[i]结尾的最大的子数组和
        dp = [0] * len(nums)
        dp[0] = nums[0]
        for i in range(1,len(nums)):
            dp[i] = max(dp[i-1] + nums[i], nums[i])
        return max(dp)
```

### 9.29 回文子串

[647. 回文子串(Medium)](https://leetcode.cn/problems/palindromic-substrings/)

```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        dp = [[False] * len(s) for _ in range(len(s))]
        res = 0
        for i in range(len(s)-1, -1, -1):
            for j in range(i, len(s)):
                if s[i] == s[j]:
                    if j - i <= 1: # 相同或者相邻
                        res += 1
                        dp[i][j] = True
                    elif dp[i+1][j-1]:
                        res += 1
                        dp[i][j] = True
        return res
```


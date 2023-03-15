"""
Leetcode 704:https://leetcode.cn/problems/binary-search/
题目描述：
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  
，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
class Solution:
    def search(self, nums: List[int], target: int) -> int:
    2022-12-31 9:14
"""


from sqlalchemy import false


def search(nums,target):
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


"""
Leetcode34
"""
def searchInsert( nums, target) -> int:
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

def searchRange(nums, target):
        left = 0
        right = len(nums) - 1
        while left <= right:
            middle = left + (right - left) // 2
            print(left,middle,right)
            if nums[middle] < target:
                left = middle + 1
            elif nums[middle] > target:
                right = middle - 1
            else:
                print(left,middle)
                return [left,middle]
        return [-1, -1]
# searchRange([0,1,1,1,1,2],1)
# np = [1, 2, 3, 4]
# print(sum(np[0:3]))
def minSubArrayLen(target: int, nums):
        slow = 0
        fast = len(nums) - 1
        while slow <= fast:
            if sum(nums[:]) < target:
                return 0 
            if sum(nums[slow:fast+1]) > target:
                if nums[slow] <= nums[fast]:
                    slow += 1
                else:
                    fast -= 1
            elif sum(nums[slow:fast+1]) == target:
                print(fast-slow+1)
                return fast-slow+1
            else:
                print(fast - slow + 2)
                return fast - slow + 2
            return 1
minSubArrayLen(6,[10,2,3])
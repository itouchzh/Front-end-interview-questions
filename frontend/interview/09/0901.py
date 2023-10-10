# a = int(input())
# # b = list(map(int, input().split()))
# b = []
# for _ in range(a):
#     b.append(int(input()))

# print(a)
# print(b)

# n = int(input())

# list_n = [[0] * n for _ in range(n)]

# for i in range(n):
#     list_n[i] = list(map(int, input().split(" ")))

# print(list_n)

# def beautiful_string_count(s):
#     n = len(s)
#     dp = [0] * (n+1)
#     dp[0] = 0  # 空串也算是一种方案

#     for i in range(1, n+1):
#         if s[i-1] != 'e
        
#         ':
#             dp[i] = dp[i-1]
#         else:
#             dp[i] = dp[i-1] + (dp[i-2] if i >= 2 else 0)
#         print(dp[i])
#     return dp[n]

# 示例用法
# s = "meei"
# result = beautiful_string_count(s)
# print(result)  # 输出 5




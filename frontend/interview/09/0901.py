# a = int(input())
# # b = list(map(int, input().split()))
# b = []
# for _ in range(a):
#     b.append(int(input()))

# print(a)
# print(b)


n = int(input())

list_n = [[0] * n for _ in range(n)]

for i in range(n):
    list_n[i] = list(map(int, input().split(" ")))

print(list_n)



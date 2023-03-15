def reinitializePermutation(n: int) -> int:
    perm = [i for i in range(n)]
    origin = perm[:]
    arr = [0 for _ in range(n)]
    i = 0
    count = 0
    while perm != origin or count == 0:
        if i % 2 == 0:
            arr[i] = perm[i//2]
        if i % 2 == 1:
            arr[i] = perm[n//2 + (i-1)//2]
        if i == n-1:
            print(arr)
            i = 0
            perm = arr[:]
            count += 1
            arr = [0 for _ in range(n)]
        i += 1
    print(count)
reinitializePermutation(4)
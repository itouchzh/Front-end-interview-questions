
def repeatedSubstringPattern(s: str) -> bool:
    if len(s) % 2 != 0:
        return False
    middle = len(s) // 2
    count = 2
    while middle >= 1:
        if s.count(s[:middle]) // 2 == count:
            print(True)
            return True
        middle = middle // 2
        count += 2
    print(False)
    return False
repeatedSubstringPattern('abac')
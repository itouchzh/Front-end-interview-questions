def can_form_palindrome(s):
    def is_palindrome(s):
        return s == s[::-1]

    # 递归函数，尝试所有可能的操作组合
    def check_palindrome(index, current_str):
        # 如果已经遍历完整个字符串，检查是否是回文串
        if index == len(s):
            return is_palindrome(current_str)

        # 尝试两种情况，一种是不替换当前字符，一种是替换当前字符
        without_replacement = check_palindrome(index + 1,
                                               current_str + s[index])
        with_replacement = check_palindrome(
            index + 1, current_str + get_replacement(s[index]))

        # 只要有一种情况可以形成回文串，就返回True
        return without_replacement or with_replacement

    def get_replacement(char):
        replacements = {
            'w': 'vv',
            'm': 'nn',
            'b': 'd',
            'd': 'p',
            'p': 'd',
            'd': 'b',
            'p': 'q',
            'q': 'p',
            'u': 'n',
            'n': 'u'
        }
        return replacements[char] if char in replacements else char

    return "YES" if check_palindrome(0, "") else "NO"


# 输入询问次数
T = int(input())
arr = []
for _ in range(T):
    arr.append(input())
res = []
for item in arr:
    res.append(can_form_palindrome(arr))

for i in res:
    print(i)
def sum67(nums):
    total = 0
    skip = False

    for num in nums:
        if num == 6:
            skip = True
        if not skip:
            total += num
        if num == 7:
            skip = False

    return total
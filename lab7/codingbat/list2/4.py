def sum13(nums):
    if not nums:
        return 0
    
    total = 0
    skip_next = False
    
    for i in range(len(nums)):
        if nums[i] == 13:
            skip_next = True
            continue
        
        if skip_next:
            skip_next = False
            continue
        
        total += nums[i]
    
    return total
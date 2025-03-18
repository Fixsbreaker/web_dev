def array_front9(nums):
  end = min(4, len(nums))
  for i in range(end):
    if nums[i] == 9:
      return True
  return False

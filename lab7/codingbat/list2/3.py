def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  sum_nums = sum(nums)
  centered_avg = sum_nums // len(nums)
  return centered_avg

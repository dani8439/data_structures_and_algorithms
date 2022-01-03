# Advent of Code - Walk through - showing how to parse big file as argument.

def number_of_increases(input)
    input.each_cons(2).inject(0) do |count, (x, y)| 
        count += 1 if x < y
        count 
    end
end 

# then input the command of !rubt day1/num_increases.rb day1/input (file names) to then turn this big file into an array. file name is passed as the ARGV . Puts everything as a string with a \n. So call .map(&:to_i) to make it integers. Shortcut
if __FILE__ = $0
input = File.readlines(ARGV.first).map(&:to_i)
# shortcut could also do as:
# input = File.readlines(ARGV.first).map {|m| m.to_i}
# p input 
p number_of_increases(input)
end 
# Build a submarine that dives a certain depth.
RSpec.describe AimingSubmarine do 
    describe 'down' do 
        it 'increases aim' do 
            submarine = AimingSubmarine.new
            expect(submarine.aim).to eq(0)
            submarine.down(2)
            expect(submarine.aim).to eq(2)
    end 

      describe 'up' do 
        it 'decreases aim' do 
            submarine = AimingSubmarine.new
            expect(submarine.aim).to eq(0)
            submarine.down(2)
            expect(submarine.aim).to eq(-2)
    end 

      describe 'forward' do 
        it 'increases position by aim * n' do 
            submarine = AimingSubmarine.new
            expect(submarine.position).to eq(0)
            submarine.down(2)
            submarine.forward(3)
            expect(submarine.position).to eq(3)
            expect(submarine.depth).to eq(2 * 3)
    end 
end 


RSpec.describe Submarine do 
    it 'works with dsl' do 
        submarine = Submarine.new do 
            forward 5 
            down 5 
            forward 8
            up 3 
            down 8
            forward 2
        end 
    end 
     it 'works for the example use case' do 
        submarine = Submarine.new
        submarine.forward(5) 
        submarine.down 5 
        submarine.forward 8 
        submarine.up 3 
        submarine.down 8 
        submarine.forward 2 
        expect(submarine.location).to eq(150)
    end 

     describe 'forward' do 
        it 'increases position' do 
            submarine = Submarine.new 
            expect(submarine.position).to eq(0)
            submarine.forward(2)
            expect(submarine.forward).to eq(2)
        end 
    end 


     describe 'up' do 
        it 'decreases depth' do 
            submarine = Submarine.new 
            expect(submarine.depth).to eq(0)
            submarine.down(2)
            expect(submarine.depth).to eq(-2)
        end 
    end 



    describe 'down' do 
        it 'increases depth' do 
            submarine = Submarine.new 
            expect(submarine.depth).to eq(0)
            submarine.down(2)
            expect(submarine.depth).to eq(2)
        end 
    end 
end 

class Submarine 
    attr_reader :depth, :position

    def initialize(&blk)
        @depth = 0
        @position = 0

        # calling things inside of a block 
        if block_given?
            # given that a block of code, evaluate the methods in this instance of the submarine.
            instance_eval(&blk)
        end 
    end 

    def down(n)
        @depth += n
    end 

    def up(n)
        @depth -= n
    end 

    def forward(n)
        @position += n
    end 

    def location 
        depth * position 
    end 
end 

# Part 2 

class AimingSubmarine 
    attr_reader :depth, :position, :aim

    def initialize(&blk)
        @depth = 0
        @position = 0
        @aim = 0

        # calling things inside of a block 
        if block_given?
            # given that a block of code, evaluate the methods in this instance of the submarine.
            instance_eval(&blk)
        end 
    end 

    def down(n)
        @aim += n
    end 

    def up(n)
        @aim -= n
    end 

    def forward(n)
        @position += n 
        @depth += n * aim
    end 

    def location 
        depth * position 
    end 
end 

# work around to read all the data inputs from one file.
# if __FILE__ = $0 
#     instructions = File.read(ARGV.first)
#     submarine = Submarine.new do 
#         eval(instructions) 
#     end 
#     puts submarine.location
# end 
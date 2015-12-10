I created the solution javascript code by solving the puzzle, listing the moves,
and performing the follwoing sed command:

   sed -e 's/^/solution.addMove("/' -e 's/ .*-> (/",/' moves.txt


